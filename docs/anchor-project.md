# Anchor Full Project: Token, Staking & Rewards

🚀 Anchor Full Project — Token + Staking + Reward Logic

This project covers:

SPL Token minting with Anchor (Rust)

Staking mechanism in Anchor (users stake DACIT tokens)

Reward distribution logic based on contributions

We’ll walk through the key Rust code plus accompanying Anchor files and a simple test script.
We’ll not include UI/React here, but this covers on-chain program logic.

📁 Project Structure
anchor-dacit/
├── Anchor.toml
├── Cargo.toml
├── programs/
│   └── dacit_program/
│       ├── src/
│       │   └── lib.rs
│       └── Cargo.toml
├── tests/
│   └── dacit_tests.js

📌 Anchor.toml
[workspace]
members = [
  "programs/dacit_program"
]

[provider]
cluster = "devnet"
wallet = "~/.config/solana/id.json"

[scripts]
test = "anchor test"

📌 programs/dacit_program/Cargo.toml
[package]
name = "dacit_program"
version = "0.1.0"
edition = "2021"

[dependencies]
anchor-lang = "0.30.2"
anchor-spl = "0.30.2"

📌 programs/dacit_program/src/lib.rs

This file defines:

✔ DACIT token mint
✔ Stake pool PDA
✔ Stake/unstake logic
✔ Reward accrual logic

use anchor_lang::prelude::*;
use anchor_spl::token::{self, Mint, TokenAccount, Token, Transfer, MintTo};
use anchor_spl::associated_token::AssociatedToken;

declare_id!("DACITProg11111111111111111111111111111111111");

#[program]
pub mod dacit_program {
    use super::*;

    /// Initialize mint and state
    pub fn initialize(
        ctx: Context<Initialize>,
        _bump: u8,
    ) -> Result<()> {
        // Setup mint (SPL)
        msg!("Mint initialized. Owner: {}", ctx.accounts.mint.key());
        Ok(())
    }

    /// Stake DACIT tokens into program
    pub fn stake_tokens(
        ctx: Context<StakeTokens>,
        amount: u64,
    ) -> Result<()> {
        // Transfer user's staking token into stake vault
        let cpi_accounts = Transfer {
            from: ctx.accounts.user_ata.to_account_info(),
            to: ctx.accounts.stake_vault.to_account_info(),
            authority: ctx.accounts.user.to_account_info(),
        };
        token::transfer(ctx.accounts.into_transfer_ctx(), amount)?;
        // Record stake
        let state = &mut ctx.accounts.stake_state;
        state.amount += amount;
        state.last_stake_time = Clock::get()?.unix_timestamp;
        Ok(())
    }

    /// Unstake tokens and give rewards
    pub fn unstake_tokens(
        ctx: Context<UnstakeTokens>,
    ) -> Result<()> {
        let state = &mut ctx.accounts.stake_state;
        let now_ts = Clock::get()?.unix_timestamp;

        // Simple reward calculation
        let duration = now_ts - state.last_stake_time;
        let reward_amount = duration as u64 * state.amount / 1_000_000;

        // Transfer original stake back
        token::transfer(ctx.accounts.into_transfer_back(), state.amount)?;
        // Mint reward tokens
        token::mint_to(ctx.accounts.into_mint_reward(), reward_amount)?;

        state.amount = 0;
        state.last_stake_time = 0;
        Ok(())
    }
}

#[derive(Accounts)]
#[instruction(bump: u8)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 8 + 40)]
    pub stake_state: Account<'info, StakeState>,
    #[account(init, payer = user, mint::decimals = 9, mint::authority = user)]
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
    #[account(
        mut,
        associated_token::mint = mint,
        associated_token::authority = user
    )]
    pub user_ata: Account<'info, TokenAccount>,
    #[account(mut)]
    pub stake_vault: Account<'info, TokenAccount>,
    pub mint: Account<'info, Mint>,
    pub token_program: Program<'info, Token>,
}

#[derive(Accounts)]
pub struct UnstakeTokens<'info> {
    #[account(mut)]
    pub stake_state: Account<'info, StakeState>,
    #[account(mut)]
    pub user: Signer<'info>,
    #[account(mut)]
    pub stake_vault: Account<'info, TokenAccount>,
    #[account(mut)]
    pub user_ata: Account<'info, TokenAccount>,
    #[account(mut)]
    pub mint: Account<'info, Mint>,
    pub token_program: Program<'info, Token>,
}

#[account]
pub struct StakeState {
    pub amount: u64,
    pub last_stake_time: i64,
}

📌 What This Contract Does

✔ Initialize a staking state account and token mint – creates a new stake state and DACIT mint. 
Quicknode

✔ Stake tokens – user deposits tokens into a vault while the state tracks amount and timestamp.
✔ Unstake + Reward – calculates a simple linear reward based on duration and amount staked, mints new tokens as rewards.
✔ Rewards are minted via a CPI to the SPL Token program (Anchor handles this for you). 
anchor-lang.com

Important: Reward logic here is simple (duration × amount). You’ll likely customize it — e.g., using contribution metrics from logs, uptime, conversion performance signals, etc.

📌 Tests — Example Reward Logic

Here’s a simple test (JavaScript) to run via anchor test:

import * as anchor from "@project-serum/anchor";
import { TOKEN_PROGRAM_ID, getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
import assert from "assert";

describe("DACIT Rewards", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.DacitProgram;
  let user = provider.wallet;

  it("Initializes and stakes", async () => {
    // initialize account
    const stakeState = anchor.web3.Keypair.generate();
    await program.rpc.initialize(0, {
      accounts: {
        stakeState: stakeState.publicKey,
        mint: stakeState.publicKey,
        user: user.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      },
      signers: [stakeState],
    });

    // create ATA for user
    const ata = await getOrCreateAssociatedTokenAccount(provider.connection, user.payer, stakeState.publicKey, user.publicKey);

    // stake some tokens
    await program.rpc.stakeTokens(new anchor.BN(1000), {
      accounts: {
        stakeState: stakeState.publicKey,
        user: user.publicKey,
        userAta: ata.address,
        stakeVault: ata.address,
        mint: stakeState.publicKey,
        tokenProgram: TOKEN_PROGRAM_ID,
      },
    });

    // unstake and check rewards
    await program.rpc.unstakeTokens({
      accounts: {
        stakeState: stakeState.publicKey,
        user: user.publicKey,
        stakeVault: ata.address,
        userAta: ata.address,
        mint: stakeState.publicKey,
        tokenProgram: TOKEN_PROGRAM_ID,
      },
    });
  });
});

🧠 Reward Logic Notes
📊 Reward Calculation

The simple example above gives linear rewards over time:

reward = duration_in_seconds × amount_staked / constant


But real reward logic in your system could be based on:

✔ Node uptime & compute contributions
✔ Data logged and model contribution quality
✔ Conversion improvements from autonomous AI work
✔ Participation in federated learning updates

You can structure the rewards calculation inside the unstake_tokens instruction or as a separate instruction that updates reward state periodically.

🛠 Practical Enhancements
✅ Use PDA (Program Derived Authority)

For security you’ll want the token mint authority to be a PDA so only your program can mint rewards — not a wallet key. You can set a PDA as mint authority using Anchor constraints. 
anchor-lang.com

✅ Periodic Reward Update

You can add an instruction like claim_rewards that users call periodically without unstaking.

✅ Reward Weighting System

Weights could reflect node performance metrics or quality scores pulled from an off-chain oracle you maintain.

🧩 Next Steps

Once you have the core program working:

✔ Deploy to Devnet/Testnet
✔ Setup front-end interaction using @solana/web3.js / Anchor provider
✔ Add reward distribution automation via cron-like solana tasks (e.g., via Clockwork or a backend daemon) 
Solana Stack Exchange

✔ Integrate governance logic (DAOs) for stakers to vote on reward parameters

📌 Helpful Reference Repositories

Anchor stake example: 0xNineteen/anchor-stake — example of staking and reward logic. 
GitHub

Anchor examples with tokens: see official Anchor examples (spl-token-minter, token-fundraiser).
