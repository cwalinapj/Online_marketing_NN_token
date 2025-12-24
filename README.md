# DACIT (Decentralized Autonomous Compute & Intelligence Token)

DACIT is a decentralized infrastructure concept that combines edge compute, AI-driven conversion optimization, and Solana-based token incentives. This repository organizes the core narrative, technical references, and UI guidance for investors and developers.

## Start Here

- **Investors:** Read the high-level overview and market context in [`docs/investors.md`](docs/investors.md).
- **Developers:** Review architecture and implementation guidance in [`docs/developers.md`](docs/developers.md).
- **Full whitepaper:** See [`docs/whitepaper.md`](docs/whitepaper.md).

## Quickstart (CLI)

List available documentation pages with the lightweight CLI:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -e .
dacit-docs
```

## Documentation Index

### Product & Strategy
- [Whitepaper](docs/whitepaper.md)
- [No More Split Testing (Real-Time Optimization)](docs/no-more-split-testing.md)
- [Real-Time Routing & Optimization](docs/real-time-routing-optimization.md)
- [Emission Schedule Primer](docs/emission-schedule.md)

### Solana & Anchor Development
- [Anchor Project Overview](docs/anchor-project.md)
- [Anchor Project Structure](docs/anchor-project-structure.md)
- [SPL Token CPI Minting](docs/spl-token-cpi-minting.md)
- [SPL Token Starter Template](docs/solana-spl-token-starter-template.md)

### Frontend & UI References
- [Next.js + Solana UI Template](docs/nextjs-solana-ui.md)
- [React + TypeScript Frontend](docs/react-typescript-frontend.md)
- [Web UI for Anchor Integration](docs/web-ui-anchor-integration.md)
- [React Components: Conversion Metrics](docs/react-components-dashboard.md)
- [Tailwind Utility Components](docs/tailwind-utility-components.md)
- [UI Dashboard Ideas](docs/ui-dashboard-ideas.md)
- [Conversion Optimization Metrics (Figma Layout)](docs/conversion-optimization-metrics.md)
- [Figma Dashboard Layout](docs/figma-dashboard-layout.md)
- [Charting Containers (ApexCharts)](docs/charting-containers.md)

## Testing

```bash
python -m pytest
```

## Repository Notes

This repo contains documentation and reference material alongside a small CLI helper. There is no production smart contract or UI application included yet. See the developer guide for recommended next steps.
