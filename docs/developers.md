# Developer Overview

## What This Repo Contains
This repository is a collection of reference documents and implementation notes for the DACIT concept. It does **not** include executable code yet, but it provides architecture guidance and starter templates.

## Architecture Highlights
- **Edge nodes:** Host containerized web experiences and collect telemetry.
- **Optimization layer:** AI models adjust UI/UX in real time to improve conversion.
- **Solana integration:** SPL token contracts and Anchor programs handle rewards and governance.

## Suggested Next Steps
1. Stand up a minimal Anchor program and SPL token minting flow.
2. Build a Next.js/React UI that connects to Solana wallets.
3. Integrate analytics instrumentation for conversion events.
4. Implement reward verification logic for compute contributions.

## Key References
### Solana & Anchor
- [Anchor Project Overview](anchor-project.md)
- [Anchor Project Structure](anchor-project-structure.md)
- [SPL Token CPI Minting](spl-token-cpi-minting.md)
- [SPL Token Starter Template](solana-spl-token-starter-template.md)

### Marketplace
- [Services Marketplace](marketplace.md) — 3rd party marketplace for trading tokens for SEO/marketing services

### Frontend & UI
- [Next.js + Solana UI Template](nextjs-solana-ui.md)
- [React + TypeScript Frontend](react-typescript-frontend.md)
- [Web UI for Anchor Integration](web-ui-anchor-integration.md)
- [React Components: Conversion Metrics](react-components-dashboard.md)
- [Tailwind Utility Components](tailwind-utility-components.md)
- [UI Dashboard Ideas](ui-dashboard-ideas.md)
- [Conversion Optimization Metrics (Figma Layout)](conversion-optimization-metrics.md)
- [Figma Dashboard Layout](figma-dashboard-layout.md)
- [Charting Containers (ApexCharts)](charting-containers.md)

## Whitepaper
- [Full whitepaper](whitepaper.md)
