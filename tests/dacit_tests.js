import * as anchor from "@project-serum/anchor";
import {
  TOKEN_PROGRAM_ID,
  getOrCreateAssociatedTokenAccount,
  getAccount,
} from "@solana/spl-token";
import assert from "assert";

const CONFIG_SEED = Buffer.from("config");
const MINT_SEED = Buffer.from("mint");
const VAULT_SEED = Buffer.from("vault");

describe("DACIT Rewards PDA version", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.DacitProgram as anchor.Program;

  const user = provider.wallet; // this wallet will be both authority AND staker in this test

  async function getTokenAccountBalance(pubkey: anchor.web3.PublicKey) {
    const acc = await getAccount(provider.connection, pubkey);
    return acc.amount;
  }

  it("mints to user, stakes, and pays PDA-based rewards end-to-end", async () => {
    // === 1. Derive PDA addresses using same seeds as program ===
    const [configPda] = anchor.web3.PublicKey.findProgramAddressSync(
      [CONFIG_SEED],
      program.programId
    );

    const [mintPda] = anchor.web3.PublicKey.findProgramAddressSync(
      [MINT_SEED],
      program.programId
    );

    const [vaultPda] = anchor.web3.PublicKey.findProgramAddressSync(
      [VAULT_SEED],
      program.programId
    );

    // === 2. Initialize config, mint & stake vault via program ===
    await program.methods
      .initialize()
      .accounts({
        config: configPda,
        mint: mintPda,
        stakeVault: vaultPda,
        authority: user.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
        tokenProgram: TOKEN_PROGRAM_ID,
        associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
        rent: anchor.web3.SYSVAR_RENT_PUBKEY,
      })
      .rpc();

    // === 3. Create user ATA for the PDA mint ===
    const userAta = await getOrCreateAssociatedTokenAccount(
      provider.connection,
      user.payer,
      mintPda,
      user.publicKey
    );

    // === 4. Fund user with DACIT via mint_to_user (authority = same wallet here) ===
    const faucetAmount = new anchor.BN(10_000_000_000n); // 10 tokens (9 decimals)
    await program.methods
      .mintToUser(faucetAmount)
      .accounts({
        config: configPda,
        mint: mintPda,
        userAta: userAta.address,
        user: user.publicKey,
        authority: user.publicKey, // must match config.authority
        tokenProgram: TOKEN_PROGRAM_ID,
        systemProgram: anchor.web3.SystemProgram.programId,
        associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
        rent: anchor.web3.SYSVAR_RENT_PUBKEY,
      })
      .rpc();

    const fundedBalance = await getTokenAccountBalance(userAta.address);
    assert.ok(
      fundedBalance >= BigInt(faucetAmount.toString()),
      "User should receive DACIT from mint_to_user faucet"
    );

    // === 5. Prepare stake amount and check balances ===
    const amountStaked = new anchor.BN(1_000_000_000); // 1 token (9 decimals)

    const beforeUser = await getTokenAccountBalance(userAta.address);
    const beforeVault = await getTokenAccountBalance(vaultPda);

    // === 6. Stake tokens ===
    // stake_state PDA: seeds = [b"stake-state", user.key().as_ref()]
    const [stakeStatePda] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("stake-state"), user.publicKey.toBuffer()],
      program.programId
    );

    await program.methods
      .stakeTokens(amountStaked)
      .accounts({
        config: configPda,
        stakeState: stakeStatePda,
        user: user.publicKey,
        userAta: userAta.address,
        stakeVault: vaultPda,
        mint: mintPda,
        tokenProgram: TOKEN_PROGRAM_ID,
        systemProgram: anchor.web3.SystemProgram.programId,
        associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
        rent: anchor.web3.SYSVAR_RENT_PUBKEY,
      })
      .rpc();

    const afterStakeUser = await getTokenAccountBalance(userAta.address);
    const afterStakeVault = await getTokenAccountBalance(vaultPda);

    // User should have less, vault should have more
    assert.ok(
      afterStakeUser === beforeUser - BigInt(amountStaked.toString()),
      "User ATA should decrease by staked amount"
    );
    assert.ok(
      afterStakeVault === beforeVault + BigInt(amountStaked.toString()),
      "Vault ATA should increase by staked amount"
    );

    // === 7. Wait for some time to accumulate rewards ===
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const beforeUnstakeUser = await getTokenAccountBalance(userAta.address);
    const beforeUnstakeVault = await getTokenAccountBalance(vaultPda);

    // === 8. Unstake + claim rewards ===
    await program.methods
      .unstakeTokens()
      .accounts({
        config: configPda,
        stakeState: stakeStatePda,
        user: user.publicKey,
        stakeVault: vaultPda,
        userAta: userAta.address,
        mint: mintPda,
        tokenProgram: TOKEN_PROGRAM_ID,
        systemProgram: anchor.web3.SystemProgram.programId,
        associatedTokenProgram: anchor.utils.token.ASSOCIATED_PROGRAM_ID,
        rent: anchor.web3.SYSVAR_RENT_PUBKEY,
      })
      .rpc();

    const afterUnstakeUser = await getTokenAccountBalance(userAta.address);
    const afterUnstakeVault = await getTokenAccountBalance(vaultPda);

    // Vault should be reduced by the staked amount
    assert.ok(
      afterUnstakeVault ===
        beforeUnstakeVault - BigInt(amountStaked.toString()),
      "Vault ATA should decrease by staked amount on unstake"
    );

    // User should have received principal plus rewards vs *beforeUnstake* snapshot
    const userDelta = afterUnstakeUser - beforeUnstakeUser;
    assert.ok(
      userDelta >= BigInt(amountStaked.toString()),
      "User should receive at least the staked principal back plus rewards"
    );

    // As a full end-to-end sanity check, net from faucet start should be >= faucetAmount
    const finalBalance = afterUnstakeUser;
    assert.ok(
      finalBalance >= BigInt(faucetAmount.toString()),
      "After stake/unstake, user balance should be at least faucet amount (principal + rewards)"
    );
  });
});
