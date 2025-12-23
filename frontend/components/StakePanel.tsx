"use client";

import React, { useState } from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import { getProgram } from "../utils/anchor";

interface StakePanelProps {
  /** Optional class name for styling */
  className?: string;
}

/**
 * Stake Panel Component
 *
 * Allows users to stake DACIT tokens into the program.
 * Requires wallet connection to function.
 */
export default function StakePanel({ className = "" }: StakePanelProps) {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [amount, setAmount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleStake = async () => {
    if (!wallet.publicKey) {
      alert("Please connect your wallet first!");
      return;
    }

    if (amount <= 0) {
      alert("Please enter a valid amount to stake.");
      return;
    }

    setIsLoading(true);

    try {
      const program = getProgram(wallet);

      await program.methods
        .stakeTokens(new anchor.BN(amount))
        .accounts({
          // Note: Replace these with actual PDA addresses
          stakeState: new PublicKey("YOUR_STAKE_STATE_PDA"),
          user: wallet.publicKey,
          userTokenAccount: new PublicKey("YOUR_USER_ATA"),
          vaultTokenAccount: new PublicKey("YOUR_VAULT_ATA"),
          tokenProgram: anchor.web3.TOKEN_PROGRAM_ID,
        })
        .rpc();

      alert(`Successfully staked ${amount} DACIT tokens!`);
      setAmount(0);
    } catch (err) {
      console.error("Stake failed:", err);
      alert("Staking failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-md max-w-md w-full ${className}`}
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Stake DACIT</h2>

      <div className="mb-4">
        <label
          htmlFor="stake-amount"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Amount to Stake
        </label>
        <input
          id="stake-amount"
          type="number"
          value={amount}
          min={0}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter amount"
          disabled={isLoading}
        />
      </div>

      <button
        onClick={handleStake}
        disabled={isLoading || !wallet.publicKey}
        className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
          isLoading || !wallet.publicKey
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        {isLoading ? "Staking..." : "Stake Tokens"}
      </button>

      {!wallet.publicKey && (
        <p className="mt-3 text-sm text-gray-500 text-center">
          Connect your wallet to stake tokens
        </p>
      )}
    </div>
  );
}
