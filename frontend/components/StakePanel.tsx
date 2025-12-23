"use client";

import React, { useState, useCallback } from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import * as anchor from "@coral-xyz/anchor";
import { getProgram } from "../utils/anchor";

interface StakePanelProps {
  className?: string;
}

/**
 * StakePanel component allows users to stake DACIT tokens.
 * Connects to the Anchor program and submits stake transactions.
 */
export default function StakePanel({ className = "" }: StakePanelProps) {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [amount, setAmount] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStake = useCallback(async () => {
    if (!wallet.publicKey) {
      setError("Please connect your wallet first");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const program = getProgram(wallet);

      // Note: Replace placeholder addresses with actual PDAs
      await program.methods
        .stakeTokens(new anchor.BN(amount))
        .accounts({
          stakeState: /* PDA stake state address */,
          user: wallet.publicKey,
          userTokenAccount: /* User's token ATA */,
          vaultTokenAccount: /* Program vault ATA */,
          tokenProgram: anchor.web3.TOKEN_PROGRAM_ID,
        })
        .rpc();

      alert(`Successfully staked ${amount} DACIT tokens!`);
      setAmount(0);
    } catch (err) {
      console.error("Stake failed:", err);
      setError("Stake transaction failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [wallet, amount]);

  return (
    <div className={`bg-white p-6 rounded-lg shadow-md max-w-md w-full ${className}`}>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Stake DACIT</h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor="stake-amount" className="block text-sm font-medium text-gray-700 mb-1">
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
            disabled={loading}
          />
        </div>

        <button
          onClick={handleStake}
          disabled={loading || !wallet.publicKey || amount <= 0}
          className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-colors ${
            loading || !wallet.publicKey || amount <= 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "Staking..." : "Stake Tokens"}
        </button>

        {!wallet.publicKey && (
          <p className="text-sm text-gray-500 text-center">
            Connect your wallet to stake tokens
          </p>
        )}
      </div>
    </div>
  );
}
