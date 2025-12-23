# Dashboard UI Design Guide

This document provides dashboard design ideas and UI components for the DACIT Solana/Anchor project, including wallet & token balances, staking-rewards panels, node performance metrics, and conversion/AI optimization dashboards.

---

## 1. Dashboard UI Inspiration

Key elements to include:

- Token Balance & Wallet Overview
- Staking & Reward Stats
- Node/Uptime Contribution Panel
- AI Optimization Metrics (conversion lift, personalized performance)
- History & Activity Logs
- Leaderboard / Network Participation Stats

---

## 2. Recommended UI Structure

### 2.1 Header

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

### 2.2 Top Metrics Cards

Show key numbers at a glance:

```
  ┌────────┐ ┌────────┐ ┌────────────┐ ┌──────────┐
  | 12,345 | | 5,000  | |    1200    | |   98%    |
  | DACIT  | | DACIT  | | DACIT      | | Uptime   |
  | Balance| | Staked | | Rewards    | | Score    |
  └────────┘ └────────┘ └────────────┘ └──────────┘
```

### 2.3 Charts & Graphs Section

#### Token Rewards Over Time

```
┌────────────────────────────┐
|                             |
|   📈 Stake Rewards          |
|                             |
└────────────────────────────┘
```

#### Conversion Optimization Performance (AI)

```
┌────────────────────────────┐
|                             |
|   📊 Conversion Lift %      |
|                             |
└────────────────────────────┘
```

### 2.4 Activity Log / History Table

```
┌───────────────────────────────────────────────┐
| Date        | Event        | Amount | Status   |
|-------------|--------------|--------|----------|
| 2025-12-21  | Node Uptime  | +2 DAC | Passed   |
| 2025-12-20  | Reward       | +32 DAC| Minted   |
| 2025-12-19  | Stake        | 500 DAC| Staked   |
└───────────────────────────────────────────────┘
```

### 2.5 Node Details / Leaderboard

```
┌───────────────────────────────────────────────┐
| Rank | Node ID | Contributions | Rewards        |
|------+---------+---------------+----------------|
| 1    | Pi-1001 | 98.4%         | 1,234 DACIT    |
| 2    | Pi-1007 | 95.2%         | 1,102 DACIT    |
| 3    | Pi-1011 | 92.1%         | 980 DACIT      |
└───────────────────────────────────────────────┘
```

---

## 3. UI Component Guidelines (Tailwind-Ready)

### 3.1 Dashboard Card Component

```html
<div class="bg-white shadow-md rounded-lg p-4">
  <p class="text-sm font-medium text-gray-500">Total Staked</p>
  <h2 class="text-2xl font-bold">5,000 DACIT</h2>
</div>
```

### 3.2 Charts & Visual Data

Use libraries like Chart.js, Recharts, ApexCharts, or D3.js for dynamic graphs:

```jsx
<LineChart data={data} />
```

### 3.3 Tables & Lists

```html
<table class="min-w-full text-sm">
  <thead class="bg-gray-100">
    <tr>
      <th class="py-2 px-4">Date</th>
      <th class="py-2 px-4">Event</th>
      <th class="py-2 px-4">Amount</th>
      <th class="py-2 px-4">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="py-2 px-4">2025-12-21</td>
      <td class="py-2 px-4">Node Uptime</td>
      <td class="py-2 px-4">+2 DAC</td>
      <td class="py-2 px-4">Passed</td>
    </tr>
  </tbody>
</table>
```

---

## 4. Ready-Made Dashboard Templates

### TailAdmin (React + Next.js + Tailwind)

Hundreds of dashboard pages/components you can adapt for DACIT dashboards — analytics, metrics, tables, etc.

### Flowbite Tailwind Dashboard

Provides data visuals, layout blocks, and component patterns you can plug into your Next.js UI.

### Tailwind React Admin Dashboard Templates

Curated templates that include charts, lists, analytics panels — usable as a base.

---

## 5. Design Tips

### Show Value at a Glance

Top metrics should immediately convey:

- Current wallet balances
- Staked totals
- Accumulated rewards
- AI optimization lift scores

### Use Data Visualization

Charts and graphs make patterns easier to understand than tables alone — especially for rewards performance and conversion trends.

### Responsive & Light/Dark Modes

Tailwind makes it simple to switch themes and make dashboards accessible on mobile devices.
