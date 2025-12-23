use anchor_lang::prelude::*;
use anchor_spl::token::{
    self, Mint, TokenAccount, Token, Transfer, MintTo,
};
use anchor_spl::associated_token::AssociatedToken;

declare_id!("DACITProg11111111111111111111111111111111111");

/// Global seeds/constants
pub const CONFIG_SEED: &[u8] = b"config";
pub const MINT_SEED: &[u8] = b"mint";
pub const VAULT_SEED: &[u8] = b"vault";

#[program]
pub mod dacit_program {
    use super::*;

    /// Initialize global config, mint, and stake vault.
    ///
    /// - Creates a PDA config account.
    /// - Creates a PDA mint with config as mint authority.
    /// - Creates a PDA stake vault (ATA) owned by the config PDA.
    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        let config = &mut ctx.accounts.config;
        config.authority = ctx.accounts.authority.key();
        config.bump_config = *ctx.bumps.get("config").unwrap();
        config.bump_mint = *ctx.bumps.get("mint").unwrap();
        config.bump_vault = *ctx.bumps.get("stake_vault").unwrap();

        msg!("Initialized config with authority: {}", config.authority);
        msg!("Mint PDA: {}", ctx.accounts.mint.key());
        msg!("Stake vault PDA ATA: {}", ctx.accounts.stake_vault.key());

        Ok(())
    }

    /// Admin-only faucet: mint DACIT to a user's ATA.
    ///
    /// - Only `config.authority` can invoke this.
    /// - Mint authority is the `config` PDA.
    pub fn mint_to_user(ctx: Context<MintToUser>, amount: u64) -> Result<()> {
        let config = &ctx.accounts.config;

        // Only the configured authority can authorize faucet mints
        require_keys_eq!(
            config.authority,
            ctx.accounts.authority.key(),
            DacitError::Unauthorized
        );

        let seeds: &[&[u8]] = &[
            CONFIG_SEED,
            &[config.bump_config],
        ];
        let signer_seeds = &[seeds];

        let cpi_accounts = MintTo {
            mint: ctx.accounts.mint.to_account_info(),
            to: ctx.accounts.user_ata.to_account_info(),
            authority: ctx.accounts.config.to_account_info(),
        };
        let cpi_program = ctx.accounts.token_program.to_account_info();

        token::mint_to(
            CpiContext::new_with_signer(cpi_program, cpi_accounts, signer_seeds),
            amount,
        )?;

        Ok(())
    }

    /// Stake DACIT tokens into program-controlled vault
    pub fn stake_tokens(
        ctx: Context<StakeTokens>,
        amount: u64,
    ) -> Result<()> {
        // Transfer user's staking tokens into stake vault
        let cpi_accounts = Transfer {
            from: ctx.accounts.user_ata.to_account_info(),
            to: ctx.accounts.stake_vault.to_account_info(),
            authority: ctx.accounts.user.to_account_info(),
        };
        let cpi_program = ctx.accounts.token_program.to_account_info();
        token::transfer(
            CpiContext::new(cpi_program, cpi_accounts),
            amount,
        )?;

        // Record stake
        let stake_state = &mut ctx.accounts.stake_state;
        stake_state.user = ctx.accounts.user.key();
        stake_state.amount += amount;
        stake_state.last_stake_time = Clock::get()?.unix_timestamp;

        Ok(())
    }

    /// Unstake tokens and mint rewards from PDA mint authority
    pub fn unstake_tokens(ctx: Context<UnstakeTokens>) -> Result<()> {
        let config = &ctx.accounts.config;
        let stake_state = &mut ctx.accounts.stake_state;
        let now_ts = Clock::get()?.unix_timestamp;

        require!(
            stake_state.user == ctx.accounts.user.key(),
            DacitError::InvalidUser
        );

        // Simple reward calculation
        let duration = now_ts - stake_state.last_stake_time;
        let reward_amount = if duration <= 0 || stake_state.amount == 0 {
            0
        } else {
            (duration as u64)
                .saturating_mul(stake_state.amount)
                / 1_000_000
        };

        // === 1. Transfer original stake back from PDA vault to user ===
        let seeds: &[&[u8]] = &[
            CONFIG_SEED,
            &[config.bump_config],
        ];
        let signer_seeds = &[seeds];

        let cpi_accounts_back = Transfer {
            from: ctx.accounts.stake_vault.to_account_info(),
            to: ctx.accounts.user_ata.to_account_info(),
            authority: ctx.accounts.config.to_account_info(),
        };
        let cpi_program = ctx.accounts.token_program.to_account_info();
        token::transfer(
            CpiContext::new_with_signer(cpi_program, cpi_accounts_back, signer_seeds),
            stake_state.amount,
        )?;

        // === 2. Mint reward tokens from PDA mint authority to user ===
        if reward_amount > 0 {
            let cpi_mint_accounts = MintTo {
                mint: ctx.accounts.mint.to_account_info(),
                to: ctx.accounts.user_ata.to_account_info(),
                authority: ctx.accounts.config.to_account_info(),
            };
            let cpi_mint_program = ctx.accounts.token_program.to_account_info();
            token::mint_to(
                CpiContext::new_with_signer(
                    cpi_mint_program,
                    cpi_mint_accounts,
                    signer_seeds,
                ),
                reward_amount,
            )?;
        }

        stake_state.amount = 0;
        stake_state.last_stake_time = 0;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    /// Global config PDA
    #[account(
        init,
        payer = authority,
        seeds = [CONFIG_SEED],
        bump,
        space = 8 + Config::SIZE
    )]
    pub config: Account<'info, Config>,

    /// PDA mint – authority is the config PDA
    #[account(
        init,
        payer = authority,
        seeds = [MINT_SEED],
        bump,
        mint::decimals = 9,
        mint::authority = config,
    )]
    pub mint: Account<'info, Mint>,

    /// PDA stake vault (ATA) for the config PDA
    #[account(
        init,
        payer = authority,
        associated_token::mint = mint,
        associated_token::authority = config
    )]
    pub stake_vault: Account<'info, TokenAccount>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub rent: Sysvar<'info, Rent>,
}

#[derive(Accounts)]
pub struct MintToUser<'info> {
    /// Global config PDA
    #[account(
        seeds = [CONFIG_SEED],
        bump = config.bump_config,
    )]
    pub config: Account<'info, Config>,

    /// PDA mint with config as authority
    #[account(
        mut,
        seeds = [MINT_SEED],
        bump = config.bump_mint,
    )]
    pub mint: Account<'info, Mint>,

    /// The ATA that will receive the minted DACIT
    #[account(
        mut,
        associated_token::mint = mint,
        associated_token::authority = user
    )]
    pub user_ata: Account<'info, TokenAccount>,

    /// The user who will receive the tokens (can be any wallet)
    /// Not required to be a signer; it's just the ATA owner.
    pub user: SystemAccount<'info>,

    /// Authority that controls the config (admin)
    #[account(mut)]
    pub authority: Signer<'info>,

    pub token_program: Program<'info, Token>,
    pub system_program: Program<'info, System>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub rent: Sysvar<'info, Rent>,
}

#[derive(Accounts)]
pub struct StakeTokens<'info> {
    #[account(
        seeds = [CONFIG_SEED],
        bump = config.bump_config,
    )]
    pub config: Account<'info, Config>,

    /// Stake state per user (PDA)
    #[account(
        init_if_needed,
        payer = user,
        seeds = [b"stake-state", user.key().as_ref()],
        bump,
        space = 8 + StakeState::SIZE
    )]
    pub stake_state: Account<'info, StakeState>,

    #[account(mut)]
    pub user: Signer<'info>,

    /// User ATA for DACIT mint
    #[account(
        mut,
        associated_token::mint = mint,
        associated_token::authority = user
    )]
    pub user_ata: Account<'info, TokenAccount>,

    /// Program stake vault (PDA ATA)
    #[account(
        mut,
        seeds = [VAULT_SEED],
        bump = config.bump_vault,
    )]
    pub stake_vault: Account<'info, TokenAccount>,

    pub mint: Account<'info, Mint>,

    pub token_program: Program<'info, Token>,
    pub system_program: Program<'info, System>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub rent: Sysvar<'info, Rent>,
}

#[derive(Accounts)]
pub struct UnstakeTokens<'info> {
    #[account(
        seeds = [CONFIG_SEED],
        bump = config.bump_config,
    )]
    pub config: Account<'info, Config>,

    #[account(
        mut,
        seeds = [b"stake-state", user.key().as_ref()],
        bump,
    )]
    pub stake_state: Account<'info, StakeState>,

    #[account(mut)]
    pub user: Signer<'info>,

    /// Program stake vault (PDA ATA)
    #[account(
        mut,
        seeds = [VAULT_SEED],
        bump = config.bump_vault,
    )]
    pub stake_vault: Account<'info, TokenAccount>,

    /// User ATA for DACIT mint
    #[account(
        mut,
        associated_token::mint = mint,
        associated_token::authority = user
    )]
    pub user_ata: Account<'info, TokenAccount>,

    #[account(
        mut,
        seeds = [MINT_SEED],
        bump = config.bump_mint,
    )]
    pub mint: Account<'info, Mint>,

    pub token_program: Program<'info, Token>,
    pub system_program: Program<'info, System>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub rent: Sysvar<'info, Rent>,
}

/// Global config controlled by a PDA
#[account]
pub struct Config {
    pub authority: Pubkey,
    pub bump_config: u8,
    pub bump_mint: u8,
    pub bump_vault: u8,
}

impl Config {
    pub const SIZE: usize = 32 + 1 + 1 + 1;
}

/// Per-user stake state
#[account]
pub struct StakeState {
    pub user: Pubkey,
    pub amount: u64,
    pub last_stake_time: i64,
}

impl StakeState {
    pub const SIZE: usize = 32 + 8 + 8;
}

#[error_code]
pub enum DacitError {
    #[msg("Invalid user for this stake state.")]
    InvalidUser,
    #[msg("Caller is not authorized to perform this action.")]
    Unauthorized,
}
