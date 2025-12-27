# Anchor Project Structure

🧱 Project Structure (Anchor)
anchor-dacit/
├── Anchor.toml
├── programs/
│   └── dacit_program/
│       ├── Cargo.toml
│       └── src/lib.rs
├── tests/
│   └── dacit_test.ts

📌 Anchor.toml
[workspace]
members = [
  "programs/dacit_program"
]

[programs.localnet]
dacit_program = "INSERT_YOUR_PROGRAM_ID_HERE"

[registry]
url = "https://api.devnet.solana.com"

[scripts]
test = "anchor test"


Replace INSERT_YOUR_PROGRAM_ID_HERE with the address printed by Anchor after the first anchor deploy.

📌 programs/dacit_program/Cargo.toml
[package]
name = "dacit_program"
version = "0.1.0"
edition = "2021"

[dependencies]
anchor-lang = { version = "0.30.2", features = ["init-if-needed"] }
anchor-spl = "0.30.2"

📌 programs/dacit_program/src/lib.rs

This is your main on-chain program with support for:

✔ mint initialization
✔ staking + stake state
✔ reward distribution with an emission schedule
✔ reward claims

use anchor_lang::prelude::*;
use anchor_spl::token::{self, Mint, Token, TokenAccount, Transfer, MintTo};

declare_id!("INSERT_YOUR_PROGRAM_ID_HERE");

#[program]
pub mod dacit_program {
    use super::*;

    // Create the DACIT token mint
    pub fn initialize_mint(ctx: Context<InitializeMint>) -> Result<()> {
        // Mint must be created in accounts; Anchor does `initialize_mint` automatically
        Ok(())
    }

    // Stake DACIT tokens
    pub fn stake_tokens(ctx: Context<StakeTokens>, amount: u64) -> Result<()> {
        let state = &mut ctx.accounts.stake_state;
        token::transfer(ctx.accounts.into_transfer_context(), amount)?;
        state.amount += amount;
        state.last_stake_time = Clock::get()?.unix_timestamp;
        Ok(())
    }

    // Claim rewards (emission schedule integrated)
    pub fn claim_rewards(ctx: Context<ClaimRewards>) -> Result<()> {
        let now = Clock::get()?.unix_timestamp;
        // compute updated emission rate
        let rate = current_emission_rate(&mut ctx.accounts.emission_schedule, now);

        let stake_amount = ctx.accounts.stake_state.amount;
        let reward = rate.checked_mul(stake_amount).unwrap_or(0);

        token::mint_to(ctx.accounts.into_mint_to_context(), reward)?;

        ctx.accounts.stake_state.last_stake_time = now;
        Ok(())
    }

    // Unstake tokens (claim + return stake)
    pub fn unstake_tokens(ctx: Context<UnstakeTokens>) -> Result<()> {
        let now = Clock::get()?.unix_timestamp;
        let rate = current_emission_rate(&mut ctx.accounts.emission_schedule, now);

        let stake_amount = ctx.accounts.stake_state.amount;
        let reward = rate.checked_mul(stake_amount).unwrap_or(0);

        // mint reward
        token::mint_to(ctx.accounts.into_mint_to_context(), reward)?;
        // transfer stake back
        token::transfer(ctx.accounts.into_transfer_back_context(), stake_amount)?;

        ctx.accounts.stake_state.amount = 0;
        Ok(())
    }
}

// Reward emission schedule state
#[account]
pub struct EmissionSchedule {
    pub initial_rate: u64,
    pub decay_rate: u64,
    pub min_rate: u64,
    pub last_update: i64,
    pub epoch_length: i64,
}

fn current_emission_rate(schedule: &mut EmissionSchedule, now: i64) -> u64 {
    let elapsed = now - schedule.last_update;
    let steps = (elapsed / schedule.epoch_length) as u64;
    let base_rate = schedule.initial_rate.saturating_sub(schedule.decay_rate.saturating_mul(steps));
    let rate = std::cmp::max(base_rate, schedule.min_rate);
    if steps > 0 {
        schedule.last_update = now;
    }
    rate
}

// Staking state
#[account]
pub struct StakeState {
    pub amount: u64,
    pub last_stake_time: i64,
}

#[derive(Accounts)]
pub struct InitializeMint<'info> {
    #[account(init, payer=user, mint::decimals = 9, mint::authority = user)]
    pub mint: Account<'info, Mint>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
    pub rent: Sysvar<'info, Rent>,
}

// Common staking context
#[derive(Accounts)]
pub struct StakeTokens<'info> {
    #[account(mut)]
    pub stake_state: Account<'info, StakeState>,
    #[account(mut)]
    pub user: Signer<'info>,
    #[account(mut)]
    pub user_token_account: Account<'info, TokenAccount>,           // user’s token account
    #[account(mut)]
    pub vault_token_account: Account<'info, TokenAccount>,          // program vault
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
            authority: self.emission_schedule.to_account_info(), // if schedule PDA is mint authority
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

📌 tests/dacit_test.ts (Example Anchor Test)

Here’s an example test that:

✔ initializes the mint
✔ stakes tokens
✔ claims rewards
✔ unstakes and checks balances

import * as anchor from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import * as splToken from "@solana/spl-token";

describe("DACIT Program", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const program = anchor.workspace.DacitProgram;

  let mint: PublicKey, userTokenAccount: PublicKey;

  it("Initializes mint and accounts", async () => {
    mint = anchor.web3.Keypair.generate().publicKey;
    await program.rpc.initializeMint({
      accounts: {
        mint,
        user: provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
        tokenProgram: splToken.TOKEN_PROGRAM_ID,
        rent: anchor.web3.SYSVAR_RENT_PUBKEY,
      },
    });
    // Create user ATA
    const ata = await splToken.getOrCreateAssociatedTokenAccount(
      provider.connection,
      provider.wallet.payer,
      mint,
      provider.wallet.publicKey
    );
    userTokenAccount = ata.address;
  });

  it("Stakes tokens", async () => {
    await program.rpc.stakeTokens(new anchor.BN(1000), {
      accounts: {
        stakeState: /* derived PDA or account */,
        user: provider.wallet.publicKey,
        userTokenAccount,
        vaultTokenAccount: /* program vault ATA */,
        tokenProgram: splToken.TOKEN_PROGRAM_ID,
      },
    });
  });

  it("Claims rewards", async () => {
    await program.rpc.claimRewards({
      accounts: {
        emissionSchedule: /* schedule PDA */,
        stakeState: /* stake account */,
        mint,
        userTokenAccount,
        tokenProgram: splToken.TOKEN_PROGRAM_ID,
      },
    });
  });
});

📌 Notes & Next Steps
🧠 Token Mechanics

Anchor simplifies SPL token management with constraints like #[account(init, mint::…)] and #[account(mut)].
Anchor Lang

You can further customize mint authority and reward PDA logic for more security and flexibility.

🧪 Local Development

Use anchor init to scaffold a new project and anchor test to run the automated suite locally before deploying.
Anchor Lang

📌 Deployment

After anchor build, update your program ID in Anchor.toml and lib.rs, then anchor deploy to Devnet or Mainnet.
