// DACIT Program - Anchor Smart Contract
// Token + Staking + Reward Logic for Solana
//
// This contract provides:
// - SPL Token minting with Anchor (Rust)
// - Staking mechanism (users stake DACIT tokens)
// - Reward distribution logic based on contributions

use anchor_lang::prelude::*;
use anchor_spl::token::{self, Mint, MintTo, Token, TokenAccount, Transfer};

declare_id!("DACITProg11111111111111111111111111111111111");

#[program]
pub mod dacit_program {
    use super::*;

    /// Initialize mint and state
    pub fn initialize_mint(ctx: Context<InitializeMint>) -> Result<()> {
        msg!("Mint initialized. Owner: {}", ctx.accounts.mint.key());
        Ok(())
    }

    /// Stake DACIT tokens into program
    pub fn stake_tokens(ctx: Context<StakeTokens>, amount: u64) -> Result<()> {
        // Transfer user's staking token into stake vault
        token::transfer(ctx.accounts.into_transfer_context(), amount)?;

        // Record stake
        let state = &mut ctx.accounts.stake_state;
        state.amount += amount;
        state.last_stake_time = Clock::get()?.unix_timestamp;

        msg!("Staked {} tokens", amount);
        Ok(())
    }

    /// Claim rewards (emission schedule integrated)
    pub fn claim_rewards(ctx: Context<ClaimRewards>) -> Result<()> {
        let now = Clock::get()?.unix_timestamp;

        // Compute updated emission rate
        let rate = current_emission_rate(&mut ctx.accounts.emission_schedule, now);

        let stake_amount = ctx.accounts.stake_state.amount;
        let reward = rate.checked_mul(stake_amount).unwrap_or(0);

        // Mint reward tokens
        token::mint_to(ctx.accounts.into_mint_to_context(), reward)?;

        ctx.accounts.stake_state.last_stake_time = now;

        msg!("Claimed {} reward tokens", reward);
        Ok(())
    }

    /// Unstake tokens and give rewards
    pub fn unstake_tokens(ctx: Context<UnstakeTokens>) -> Result<()> {
        let now = Clock::get()?.unix_timestamp;
        let rate = current_emission_rate(&mut ctx.accounts.emission_schedule, now);

        let stake_amount = ctx.accounts.stake_state.amount;
        let reward = rate.checked_mul(stake_amount).unwrap_or(0);

        // Mint reward tokens
        token::mint_to(ctx.accounts.into_mint_to_context(), reward)?;

        // Transfer original stake back
        token::transfer(ctx.accounts.into_transfer_back_context(), stake_amount)?;

        // Reset stake state
        ctx.accounts.stake_state.amount = 0;
        ctx.accounts.stake_state.last_stake_time = 0;

        msg!("Unstaked {} tokens with {} reward", stake_amount, reward);
        Ok(())
    }
}

// ============================================================================
// Emission Schedule
// ============================================================================

/// Reward emission schedule state
#[account]
pub struct EmissionSchedule {
    /// Base tokens per epoch/unit time
    pub initial_rate: u64,
    /// How much the rate decreases per step
    pub decay_rate: u64,
    /// Floor rate (won't go below this)
    pub min_rate: u64,
    /// Last timestamp/epoch update
    pub last_update: i64,
    /// How long each step is
    pub epoch_length: i64,
}

/// Compute current emission rate based on elapsed time
fn current_emission_rate(schedule: &mut EmissionSchedule, now: i64) -> u64 {
    let elapsed = now - schedule.last_update;
    let steps = (elapsed / schedule.epoch_length) as u64;

    // Calculate the tapered rate
    let base_rate = schedule
        .initial_rate
        .saturating_sub(schedule.decay_rate.saturating_mul(steps));
    let rate = std::cmp::max(base_rate, schedule.min_rate);

    // Update last_update if needed
    if steps > 0 {
        schedule.last_update = now;
    }

    rate
}

// ============================================================================
// Staking State
// ============================================================================

/// Per-user staking state
#[account]
pub struct StakeState {
    /// Amount of tokens staked
    pub amount: u64,
    /// Timestamp of last stake action
    pub last_stake_time: i64,
}

// ============================================================================
// Account Contexts
// ============================================================================

#[derive(Accounts)]
pub struct InitializeMint<'info> {
    #[account(
        init,
        payer = user,
        mint::decimals = 9,
        mint::authority = user
    )]
    pub mint: Account<'info, Mint>,

    #[account(mut)]
    pub user: Signer<'info>,

    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
    pub rent: Sysvar<'info, Rent>,
}

#[derive(Accounts)]
pub struct StakeTokens<'info> {
    #[account(mut)]
    pub stake_state: Account<'info, StakeState>,

    #[account(mut)]
    pub user: Signer<'info>,

    /// User's token account
    #[account(mut)]
    pub user_token_account: Account<'info, TokenAccount>,

    /// Program vault for staked tokens
    #[account(mut)]
    pub vault_token_account: Account<'info, TokenAccount>,

    pub token_program: Program<'info, Token>,
}

impl<'info> StakeTokens<'info> {
    fn into_transfer_context(&self) -> CpiContext<'_, '_, '_, 'info, Transfer<'info>> {
        let cpi_accounts = Transfer {
            from: self.user_token_account.to_account_info(),
            to: self.vault_token_account.to_account_info(),
            authority: self.user.to_account_info(),
        };
        CpiContext::new(self.token_program.to_account_info(), cpi_accounts)
    }
}

#[derive(Accounts)]
pub struct ClaimRewards<'info> {
    #[account(mut)]
    pub emission_schedule: Account<'info, EmissionSchedule>,

    #[account(mut)]
    pub stake_state: Account<'info, StakeState>,

    #[account(mut)]
    pub mint: Account<'info, Mint>,

    #[account(mut)]
    pub user_token_account: Account<'info, TokenAccount>,

    pub token_program: Program<'info, Token>,
}

impl<'info> ClaimRewards<'info> {
    fn into_mint_to_context(&self) -> CpiContext<'_, '_, '_, 'info, MintTo<'info>> {
        let cpi_accounts = MintTo {
            mint: self.mint.to_account_info(),
            to: self.user_token_account.to_account_info(),
            authority: self.emission_schedule.to_account_info(),
        };
        CpiContext::new(self.token_program.to_account_info(), cpi_accounts)
    }
}

#[derive(Accounts)]
pub struct UnstakeTokens<'info> {
    #[account(mut)]
    pub emission_schedule: Account<'info, EmissionSchedule>,

    #[account(mut)]
    pub stake_state: Account<'info, StakeState>,

    #[account(mut)]
    pub user: Signer<'info>,

    #[account(mut)]
    pub mint: Account<'info, Mint>,

    #[account(mut)]
    pub user_token_account: Account<'info, TokenAccount>,

    #[account(mut)]
    pub vault_token_account: Account<'info, TokenAccount>,

    pub token_program: Program<'info, Token>,
}

impl<'info> UnstakeTokens<'info> {
    fn into_mint_to_context(&self) -> CpiContext<'_, '_, '_, 'info, MintTo<'info>> {
        let cpi_accounts = MintTo {
            mint: self.mint.to_account_info(),
            to: self.user_token_account.to_account_info(),
            authority: self.emission_schedule.to_account_info(),
        };
        CpiContext::new(self.token_program.to_account_info(), cpi_accounts)
    }

    fn into_transfer_back_context(&self) -> CpiContext<'_, '_, '_, 'info, Transfer<'info>> {
        let cpi_accounts = Transfer {
            from: self.vault_token_account.to_account_info(),
            to: self.user_token_account.to_account_info(),
            authority: self.user.to_account_info(),
        };
        CpiContext::new(self.token_program.to_account_info(), cpi_accounts)
    }
}
