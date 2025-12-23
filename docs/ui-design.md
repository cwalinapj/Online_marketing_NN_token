# UI Design Guide

This document covers dashboard design ideas and UI components for the DACIT platform.

## Table of Contents

1. [Dashboard UI Inspiration](#dashboard-ui-inspiration)
2. [Recommended UI Structure](#recommended-ui-structure)
3. [UI Component Guidelines](#ui-component-guidelines)
4. [Figma Resources](#figma-resources)

## Dashboard UI Inspiration

The DACIT dashboard should include:

- 🔹 Wallet & token balances
- 🔹 Staking-rewards panels
- 🔹 Node performance metrics
- 🔹 Conversion/AI optimization dashboards
- 🔹 Charts, history, leaderboard views

## Recommended UI Structure

### 1️⃣ Header

- Logo & token name
- Network switch (Devnet / Testnet / Mainnet)
- Connected wallet & balance
- Quick action buttons (Stake / Unstake / Claim)

```
┌─────────────────────────────────────────────────────┐
| DACIT Dashboard | Network: Devnet | Wallet: 3.45 SOL |
| Token: 12,345 DACIT             | [Stake] [Claim]   |
└─────────────────────────────────────────────────────┘
```

### 2️⃣ Top Metrics Cards

Show key numbers at a glance:

| Token Balance | Staked | Pending Rewards | Node Score |
|---------------|--------|-----------------|------------|
| 12,345 DACIT | 5,000 DACIT | 1,200 DACIT | 98% Uptime |

### 3️⃣ Charts & Graphs Section

**Token Rewards Over Time**

```
Stake Rewards
┌────────────────────────────────┐
|                                |
|   📈                           |
|                                |
└────────────────────────────────┘
```

**Conversion Optimization Performance (AI)**

```
Conversion Lift %
┌────────────────────────────────┐
|                                |
|   📊                           |
|                                |
└────────────────────────────────┘
```

### 4️⃣ Activity Log / History Table

| Date | Event | Amount | Status |
|------|-------|--------|--------|
| 2025-12-21 | Node Uptime | +2 DACIT | Passed |
| 2025-12-20 | Reward | +32 DACIT | Minted |
| 2025-12-19 | Stake | 500 DACIT | Staked |

### 5️⃣ Node Details / Leaderboard

| Rank | Node ID | Contributions | Rewards |
|------|---------|---------------|---------|
| 1 | Pi-1001 | 98.4% uptime | 1,234 DACIT |
| 2 | Pi-1007 | 95.2% uptime | 1,102 DACIT |
| 3 | Pi-1011 | 92.1% uptime | 980 DACIT |

## UI Component Guidelines

### Dashboard Card Components

Components that show labeled metrics, icon + value pairs — great for balances and stats.

```html
<div class="bg-white shadow-md rounded-lg p-4">
  <p class="text-sm font-medium text-gray-500">Total Staked</p>
  <h2 class="text-2xl font-bold">5,000 DACIT</h2>
</div>
```

### Charts & Visual Data

Use libraries like Chart.js, Recharts, ApexCharts, or Tremor for dynamic graphs.

```tsx
<LineChart data={data} />
```

### Tables & Lists

For history and leaderboard tables:

```html
<table class="min-w-full text-sm">
  <thead class="bg-gray-100">
    <tr>
      <th class="py-2 px-4">Date</th>
      <th class="py-2 px-4">Event</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="py-2 px-4">2025-12-21</td>
      <td class="py-2 px-4">Node Uptime</td>
    </tr>
  </tbody>
</table>
```

## Figma Resources

### Recommended Templates

1. **TailAdmin** (React + Next.js + Tailwind)
   - Dashboard pages/components for analytics, metrics, tables

2. **Flowbite Tailwind Dashboard**
   - Data visuals, layout blocks, and component patterns

3. **Crypto Dashboard Templates**
   - 30+ screens with charts, metrics, history
   - Dark and light themes

### Design Tips

- **Show Value at a Glance**: Top metrics should immediately convey wallet balances, staked totals, accumulated rewards, and AI optimization lift scores

- **Use Data Visualization**: Charts and graphs make patterns easier to understand than tables alone

- **Responsive & Light/Dark Modes**: Tailwind makes it simple to switch themes and make dashboards accessible on mobile devices
