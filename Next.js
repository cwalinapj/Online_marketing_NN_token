Next.js + Tailwind + Solana UI (DACIT)

This template gives you:

✨ Wallet connect (Phantom, Solflare, etc.)
✨ Tailwind CSS styling
✨ Anchor program interaction (stake/un-stake/claim UI)
✨ Modern frontend with TypeScript and React
✨ Ready to expand with dashboards, analytics, and data-driven conversion insights

🧱 1. Create Your Next.js + Tailwind Project
npx create-next-app@latest dacit-ui --typescript
cd dacit-ui


Install Tailwind:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


Configure tailwind.config.js:

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
}


Add Tailwind to globals.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

🧱 2. Install Solana & Wallet Adapter Dependencies
npm install @solana/web3.js \
            @solana/wallet-adapter-base \
            @solana/wallet-adapter-react \
            @solana/wallet-adapter-react-ui \
            @solana/wallet-adapter-wallets


These packages let your Next.js app integrate with Solana wallets like Phantom, Backpack, and others. 
Old Courses

🧱 3. Setup Wallet Connection Provider

Create a file src/components/WalletProvider.tsx:

"use client";

import React, { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  BackpackWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { clusterApiUrl } from "@solana/web3.js";

export default function SolanaWalletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new BackpackWalletAdapter(),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}


This wraps your app and gives you wallet state and hooks like useWallet() and useConnection(). 
Old Courses

🧱 4. Wrap Your App

Update src/app/layout.tsx (or pages/_app.tsx depending on your Next.js version):

import "./globals.css";
import SolanaWalletProvider from "@/components/WalletProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <SolanaWalletProvider>{children}</SolanaWalletProvider>
      </body>
    </html>
  );
}

🧱 5. Add a Wallet Connect Button

On your home page (src/app/page.tsx):

"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6">DACIT Dashboard</h1>
      <WalletMultiButton className="btn btn-primary" />
      <p className="mt-4 text-lg">
        Connect your wallet to stake tokens and earn rewards!
      </p>
    </main>
  );
}


This gives users a familiar wallet connect UI and handles connect/disconnect. 
npm

🧱 6. Build a Stake/Reward Component

Create src/components/StakePanel.tsx:

"use client";

import { useState } from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { PublicKey, Transaction, SystemProgram } from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import idl from "@/utils/idl/dacit_program.json";

const programID = new PublicKey(idl.metadata.address);

export default function StakePanel() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [amount, setAmount] = useState<number>(0);

  const handleStake = async () => {
    if (!wallet.publicKey) return;
    const provider = new anchor.AnchorProvider(connection, wallet, {});
    anchor.setProvider(provider);

    const program = new anchor.Program(idl as any, programID, provider);
    try {
      await program.methods
        .stakeTokens(new anchor.BN(amount))
        .accounts({
          stakeState: /* your PDA here */,
          user: wallet.publicKey,
          userAta: /* ATA */,
          stakeVault: /* vault ATA */,
          mint: /* token mint */,
        })
        .rpc();
      alert("Staked!");
    } catch (err) {
      console.error(err);
      alert("Stake failed");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4">Stake DACIT</h2>
      <input
        type="number"
        value={amount}
        min={0}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="w-full p-2 border rounded mb-4"
        placeholder="Amount to stake"
      />
      <button
        onClick={handleStake}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Stake Tokens
      </button>
    </div>
  );
}


This component connects to your Anchor program and lets users stake tokens. You can add similar logic for unstake & rewards. 
Old Courses

🧱 7. Tailwind Styling Tips

Use Tailwind utility classes to make your UI responsive and modern:

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
  <StakePanel />
  {/* add RewardHistory, StatsPanel, ConversionInsights UI */}
</div>


Tailwind makes it fast to build dashboards without writing custom CSS.

🧱 8. Optional: Use a Solana Template

You can also base your design on pre-built templates like:

Metaplex Next.js + Tailwind Starter — includes wallet adapter & Zustand store ready out of the box 
GitHub

Solana dApp Scaffold on GitHub which has wallet + common dApp UI patterns pre-wired 
GitHub

These speed up development and give you a production-ready UI structure.

🧱 9. Next Steps / Extensions

Now that you have your UI core:

📊 Add Analytics Dashboards

Visualize conversion lift, stakeholder rewards, node performance, and token metrics — integrate with charts (e.g., Recharts, Chart.js).

📈 Token & Reward Pages

Show real-time stake balances, pending reward amounts, and claim buttons.

📡 Neural Insights UI

Show AI-driven conversion probability and optimization suggestions for logged traffic.

🧠 How This Fits Your Ecosystem

This Next.js + Tailwind UI:

✔ Provides a modern, responsive, blockchain-aware frontend
✔ Connects wallets securely and quickly
✔ Hooks directly into your Anchor smart contracts
✔ Is ready to expand into dashboards and analytics for DACIT

By using wallet-adapter and connecting your UI to on-chain logic (staking/rewards), you’re building real utility interactions — not just static pages. 
Old Courses
