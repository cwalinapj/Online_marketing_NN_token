/**
 * Anchor Program Utility
 *
 * Provides helper functions to load and interact with the DACIT Anchor program.
 */

import * as anchor from "@coral-xyz/anchor";

// Import your Anchor IDL - this should be generated after building the program
// import idl from "./idl/dacit_program.json";

// Placeholder program ID - replace with your actual deployed program ID
const PROGRAM_ID = new anchor.web3.PublicKey(
  "DACITProg11111111111111111111111111111111111"
);

/**
 * Get Anchor Provider
 *
 * Creates an Anchor provider instance connected to the Solana network.
 *
 * @param wallet - The wallet adapter instance
 * @returns AnchorProvider instance
 */
export const getProvider = (wallet: any): anchor.AnchorProvider => {
  const connection = new anchor.web3.Connection(
    "https://api.devnet.solana.com",
    "confirmed"
  );

  const provider = new anchor.AnchorProvider(connection, wallet, {
    preflightCommitment: "confirmed",
  });

  anchor.setProvider(provider);
  return provider;
};

/**
 * Get Program Instance
 *
 * Creates an Anchor program instance for interacting with the DACIT contract.
 *
 * @param wallet - The wallet adapter instance
 * @returns Program instance
 */
export const getProgram = (wallet: any): anchor.Program => {
  const provider = getProvider(wallet);

  // Note: You need to replace this with your actual IDL after building the program
  // For now, using a placeholder structure
  const idl = {
    version: "0.1.0",
    name: "dacit_program",
    instructions: [],
    accounts: [],
    metadata: {
      address: PROGRAM_ID.toString(),
    },
  };

  return new anchor.Program(idl as any, PROGRAM_ID, provider);
};

/**
 * Derive Stake State PDA
 *
 * Derives the Program Derived Address for a user's stake state.
 *
 * @param userPubkey - The user's public key
 * @returns [PDA PublicKey, bump seed]
 */
export const deriveStakeStatePDA = async (
  userPubkey: anchor.web3.PublicKey
): Promise<[anchor.web3.PublicKey, number]> => {
  return await anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from("stake_state"), userPubkey.toBuffer()],
    PROGRAM_ID
  );
};

/**
 * Derive Vault PDA
 *
 * Derives the Program Derived Address for the token vault.
 *
 * @returns [PDA PublicKey, bump seed]
 */
export const deriveVaultPDA = async (): Promise<
  [anchor.web3.PublicKey, number]
> => {
  return await anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from("vault")],
    PROGRAM_ID
  );
};

export default {
  getProvider,
  getProgram,
  deriveStakeStatePDA,
  deriveVaultPDA,
};
