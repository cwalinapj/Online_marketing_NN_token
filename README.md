# DACIT - Decentralized Autonomous Compute & Intelligence Token

A decentralized infrastructure network combining autonomous AI-driven web presence optimization, edge compute nodes, and token-based economic incentives on the Solana blockchain.

## Overview

DACIT creates a self-reinforcing economic loop where network participants are rewarded for actual contributions to system performance:

- ✅ Edge compute and container hosting contributions
- ✅ Autonomous AI optimization of user conversion experiences
- ✅ Continuous data processing and neural network improvements
- ✅ Ecosystem participation and governance

## Repository Structure

```
├── docs/                          # Documentation
│   ├── whitepaper.md              # Full whitepaper
│   ├── conversion-metrics-dashboard.md
│   ├── real-time-optimization.md
│   └── dashboard-ui-design.md
│
├── contracts/                     # Solana Smart Contracts
│   ├── Anchor.toml                # Anchor configuration
│   └── anchor/
│       ├── Cargo.toml             # Rust dependencies
│       └── lib.rs                 # Main program logic
│
└── frontend/                      # React/Next.js Frontend
    ├── components/
    │   ├── index.ts               # Component exports
    │   ├── WalletProvider.tsx     # Solana wallet integration
    │   ├── StakePanel.tsx         # Token staking UI
    │   ├── KpiCard.tsx            # KPI display cards
    │   ├── PerformanceTable.tsx   # Variant performance table
    │   ├── EngagementCards.tsx    # Engagement metrics
    │   ├── ConversionChart.tsx    # Chart container
    │   └── DashboardLayout.tsx    # Layout wrapper
    └── utils/
        └── anchor.ts              # Anchor program utilities
```

## Quick Start

### Smart Contract Development

```bash
# Install Solana CLI tools
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"

# Install Anchor
cargo install --git https://github.com/coral-xyz/anchor anchor-cli

# Build the contract
cd contracts
anchor build

# Deploy to devnet
anchor deploy --provider.cluster devnet
```

### Frontend Development

```bash
# Install dependencies
cd frontend
npm install @solana/web3.js \
            @solana/wallet-adapter-base \
            @solana/wallet-adapter-react \
            @solana/wallet-adapter-react-ui \
            @solana/wallet-adapter-wallets \
            @coral-xyz/anchor

# Start development
npm run dev
```

## Key Features

### Token Economics

| Category                        | Allocation |
| ------------------------------- | ---------- |
| Node Contribution Rewards       | 40%        |
| Staking & Governance Rewards    | 15%        |
| Ecosystem & Partnerships        | 20%        |
| Early Contributors & Community  | 10%        |
| Team & Development (Vested)     | 15%        |

### Technical Stack

- **Blockchain**: Solana (SPL Token Standard)
- **Smart Contracts**: Anchor Framework (Rust)
- **Frontend**: React/Next.js with Tailwind CSS
- **Wallet Integration**: Solana Wallet Adapter

## Documentation

- [Whitepaper](docs/whitepaper.md) - Complete project vision and tokenomics
- [Dashboard Design](docs/dashboard-ui-design.md) - UI/UX guidelines
- [Conversion Metrics](docs/conversion-metrics-dashboard.md) - Analytics dashboard specs
- [Real-Time Optimization](docs/real-time-optimization.md) - AI optimization system

## Roadmap

| Quarter   | Milestone                                     |
| --------- | --------------------------------------------- |
| Q1 2026   | Protocol specification & token launch         |
| Q2 2026   | Testnet deployment & reward algorithm release |
| Q3 2026   | Public testnet with live optimization models  |
| Q4 2026   | Mainnet & governance launch                   |
| 2027      | Marketplace rollout & AI model exchange       |

## License

MIT
