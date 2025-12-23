//! DACIT Token Program
//!
//! This Anchor program implements the core functionality for the
//! Decentralized Autonomous Compute & Intelligence Token (DACIT):
//!
//! - SPL Token minting
//! - Staking mechanism
//! - Reward distribution with emission schedule
//! - Conversion metrics recording

use anchor_lang::prelude::*;
use anchor_spl::token::{self, Mint, MintTo, Token, TokenAccount, Transfer};

declare_id!("DACITProg11111111111111111111111111111111111");

#[program]
pub mod dacit_program {
    use super::*;

    /// Initialize the DACIT token mint
    pub fn initialize_mint(_ctx: Context<InitializeMint>) -> Result<()> {
        // Mint is created via Anchor account constraints
        msg!("DACIT token mint initialized");
        Ok(())
    }

    /// Initialize the emission schedule for rewards
    pub fn init_emission_schedule(
        ctx: Context<InitEmission>,
        initial_rate: u64,
        decay_rate: u64,
        min_rate: u64,
        epoch_length: i64,
    ) -> Result<()> {
        let schedule = &mut ctx.accounts.schedule;
        schedule.initial_rate = initial_rate;
        schedule.decay_rate = decay_rate;
        schedule.min_rate = min_rate;
        schedule.last_update = Clock::get()?.unix_timestamp;
        schedule.epoch_length = epoch_length;
        msg!("Emission schedule initialized");
        Ok(())
    }

    /// Stake DACIT tokens into the program
    pub fn stake_tokens(ctx: Context<StakeTokens>, amount: u64) -> Result<()> {
        // Transfer tokens from user to vault
        let cpi_accounts = Transfer {
            from: ctx.accounts.user_token_account.to_account_info(),
            to: ctx.accounts.vault_token_account.to_account_info(),
            authority: ctx.accounts.user.to_account_info(),
        };
        let cpi_program = ctx.accounts.token_program.to_account_info();
        token::transfer(CpiContext::new(cpi_program, cpi_accounts), amount)?;

        // Update stake state
        let state = &mut ctx.accounts.stake_state;
        state.amount = state.amount.checked_add(amount).unwrap();
        state.last_stake_time = Clock::get()?.unix_timestamp;

        msg!("Staked {} tokens", amount);
        Ok(())
    }

    /// Claim rewards based on emission schedule
    pub fn claim_rewards(ctx: Context<ClaimRewards>) -> Result<()> {
        let now = Clock::get()?.unix_timestamp;

        // Compute updated emission rate
        let schedule = &mut ctx.accounts.emission_schedule;
        let rate = current_emission_rate(schedule, now);

        // Calculate reward
        let stake_amount = ctx.accounts.stake_state.amount;
        let reward = rate.checked_mul(stake_amount).unwrap_or(0);

        // Mint reward tokens
        let cpi_accounts = MintTo {
            mint: ctx.accounts.mint.to_account_info(),
            to: ctx.accounts.user_token_account.to_account_info(),
            authority: ctx.accounts.mint_authority.to_account_info(),
        };
        let cpi_program = ctx.accounts.token_program.to_account_info();
        token::mint_to(CpiContext::new(cpi_program, cpi_accounts), reward)?;

        // Update stake state timestamp
        ctx.accounts.stake_state.last_stake_time = now;

        msg!("Claimed {} reward tokens", reward);
        Ok(())
    }

    /// Unstake tokens and claim pending rewards
    pub fn unstake_tokens(ctx: Context<UnstakeTokens>) -> Result<()> {
        let now = Clock::get()?.unix_timestamp;

        // Calculate and mint rewards first
        let schedule = &mut ctx.accounts.emission_schedule;
        let rate = current_emission_rate(schedule, now);
        let stake_amount = ctx.accounts.stake_state.amount;
        let reward = rate.checked_mul(stake_amount).unwrap_or(0);

        // Mint rewards
        let mint_cpi = MintTo {
            mint: ctx.accounts.mint.to_account_info(),
            to: ctx.accounts.user_token_account.to_account_info(),
            authority: ctx.accounts.mint_authority.to_account_info(),
        };
        token::mint_to(
            CpiContext::new(ctx.accounts.token_program.to_account_info(), mint_cpi),
            reward,
        )?;

        // Transfer stake back to user
        let transfer_cpi = Transfer {
            from: ctx.accounts.vault_token_account.to_account_info(),
            to: ctx.accounts.user_token_account.to_account_info(),
            authority: ctx.accounts.vault_authority.to_account_info(),
        };
        token::transfer(
            CpiContext::new(ctx.accounts.token_program.to_account_info(), transfer_cpi),
            stake_amount,
        )?;

        // Reset stake state
        ctx.accounts.stake_state.amount = 0;
        ctx.accounts.stake_state.last_stake_time = 0;

        msg!("Unstaked {} tokens and claimed {} rewards", stake_amount, reward);
        Ok(())
    }

    /// Record a conversion metric (for AI optimization tracking)
    pub fn record_conversion(ctx: Context<RecordConversion>, score: u16) -> Result<()> {
        let record = &mut ctx.accounts.conversion_record;
        record.user = *ctx.accounts.user.key;
        record.timestamp = Clock::get()?.unix_timestamp;
        record.conversion_score = score;

        msg!("Recorded conversion score: {}", score);
        Ok(())
    }
}

// ============================================================================
// Helper Functions
// ============================================================================

/// Compute current emission rate based on elapsed time with decay
fn current_emission_rate(schedule: &mut EmissionSchedule, now_ts: i64) -> u64 {
    let elapsed = now_ts - schedule.last_update;
    let steps = (elapsed / schedule.epoch_length) as u64;

    // Calculate the tapered rate
    let base = schedule
        .initial_rate
        .saturating_sub(schedule.decay_rate.saturating_mul(steps));
    let new_rate = std::cmp::max(base, schedule.min_rate);

    // Update last_update if epochs have passed
    if steps > 0 {
        schedule.last_update = now_ts;
    }

    new_rate
}

// ============================================================================
// Account Structures
// ============================================================================

/// Emission schedule configuration for reward distribution
#[account]
pub struct EmissionSchedule {
    /// Starting emission rate (tokens per epoch)
    pub initial_rate: u64,
    /// Amount subtracted from rate each epoch
    pub decay_rate: u64,
    /// Minimum reward rate floor
    pub min_rate: u64,
    /// Last timestamp when rewards were calculated
    pub last_update: i64,
    /// Duration of each epoch in seconds
    pub epoch_length: i64,
}

/// User staking state
#[account]
pub struct StakeState {
    /// Amount of tokens staked
    pub amount: u64,
    /// Timestamp of last stake/claim action
    pub last_stake_time: i64,
}

/// Conversion metrics record for AI optimization
#[account]
pub struct ConversionRecord {
    /// User who triggered the conversion
    pub user: Pubkey,
    /// Timestamp of the conversion
    pub timestamp: i64,
    /// Conversion quality score (0-10000 basis points)
    pub conversion_score: u16,
}

// ============================================================================
// Instruction Contexts
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
pub struct InitEmission<'info> {
    #[account(
        init,
        payer = authority,
        space = 8 + std::mem::size_of::<EmissionSchedule>()
    )]
    pub schedule: Account<'info, EmissionSchedule>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct StakeTokens<'info> {
    #[account(mut)]
    pub stake_state: Account<'info, StakeState>,
    #[account(mut)]
    pub user: Signer<'info>,
    #[account(mut)]
    pub user_token_account: Account<'info, TokenAccount>,
    #[account(mut)]
    pub vault_token_account: Account<'info, TokenAccount>,
    pub token_program: Program<'info, Token>,
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
    /// CHECK: Mint authority for reward tokens
    pub mint_authority: AccountInfo<'info>,
    pub token_program: Program<'info, Token>,
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
    /// CHECK: Mint authority for reward tokens
    pub mint_authority: AccountInfo<'info>,
    /// CHECK: Vault authority for token transfers
    pub vault_authority: AccountInfo<'info>,
    pub token_program: Program<'info, Token>,
}

#[derive(Accounts)]
pub struct RecordConversion<'info> {
    #[account(
        init,
        payer = user,
        space = 8 + std::mem::size_of::<ConversionRecord>()
    )]
    pub conversion_record: Account<'info, ConversionRecord>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}
