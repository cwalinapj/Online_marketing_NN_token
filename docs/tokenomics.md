# DACIT Tokenomics

This document provides a comprehensive overview of the DACIT token economics, including supply mechanics, distribution, utility, staking mechanisms, and value accrual strategies.

## Table of Contents

1. [Token Overview](#token-overview)
2. [Total Supply & Distribution](#total-supply--distribution)
3. [Token Utility](#token-utility)
4. [Staking Mechanisms](#staking-mechanisms)
5. [Reward Distribution](#reward-distribution)
6. [Fee Structure & Burns](#fee-structure--burns)
7. [Vesting Schedules](#vesting-schedules)
8. [Economic Flywheel](#economic-flywheel)
9. [Anti-Inflation Mechanisms](#anti-inflation-mechanisms)
10. [Governance Economics](#governance-economics)

---

## Token Overview

| Property | Value |
|----------|-------|
| **Token Name** | DACIT (Decentralized Autonomous Compute & Intelligence Token) |
| **Token Symbol** | DACIT |
| **Blockchain** | Solana |
| **Token Standard** | SPL Token |
| **Decimals** | 9 |
| **Total Supply** | 1,000,000,000 (1 Billion) |
| **Initial Circulating Supply** | 150,000,000 (15%) |

---

## Total Supply & Distribution

### Allocation Breakdown

| Category | Allocation | Amount | Purpose |
|----------|------------|--------|---------|
| **Node Contribution Rewards** | 40% | 400,000,000 | Rewards for compute, data, and optimization contributions |
| **Staking & Governance Rewards** | 15% | 150,000,000 | Incentives for staking and governance participation |
| **Ecosystem & Partnerships** | 20% | 200,000,000 | Strategic partnerships, integrations, and ecosystem growth |
| **Early Contributors & Community** | 10% | 100,000,000 | Early supporters, airdrops, and community initiatives |
| **Team & Development** | 15% | 150,000,000 | Core team compensation (vested) |

### Distribution Timeline

```
Year 1: 25% of total supply released
Year 2: 45% of total supply released (cumulative)
Year 3: 65% of total supply released (cumulative)
Year 4: 85% of total supply released (cumulative)
Year 5+: Remaining 15% released based on network milestones
```

---

## Token Utility

DACIT tokens serve multiple functions within the ecosystem:

### 1. Payment for Services

| Service | Cost (DACIT) | Description |
|---------|--------------|-------------|
| Container Deployment | 100-1,000 | Deploy optimized landing page containers |
| Premium Analytics | 50-500/month | Advanced conversion tracking and insights |
| Priority Compute | 10-100/request | Fast-lane processing for time-sensitive operations |
| AI Model Access | 200-2,000 | Access to trained optimization models |

### 2. Staking Requirements

| Tier | Stake Amount | Benefits |
|------|--------------|----------|
| **Bronze** | 1,000 DACIT | Basic node operation, standard rewards |
| **Silver** | 10,000 DACIT | Enhanced rewards (1.2x multiplier), priority support |
| **Gold** | 50,000 DACIT | Premium rewards (1.5x multiplier), early feature access |
| **Platinum** | 100,000 DACIT | Maximum rewards (2x multiplier), governance voting power boost |

### 3. Governance Participation

- Proposal submission requires: **10,000 DACIT** staked
- Voting weight: **1 DACIT = 1 vote** (with staking multipliers)
- Emergency proposals: **50,000 DACIT** required

### 4. Data Marketplace Access

| Action | Cost |
|--------|------|
| List optimization model | 500 DACIT |
| Purchase model license | Varies (set by seller) |
| Access anonymized traffic data | 100-1,000 DACIT |

---

## Staking Mechanisms

### Node Operator Staking

Node operators must stake DACIT to participate in the network:

```
Minimum Stake: 1,000 DACIT
Lock Period: 7 days (minimum)
Reward Rate: 8-15% APY (variable based on network activity)
Slashing Risk: 5% for malicious behavior, 1% for extended downtime
```

### Delegated Staking

Token holders can delegate to node operators:

| Feature | Value |
|---------|-------|
| Minimum Delegation | 100 DACIT |
| Delegation Fee | 5-20% (set by operator) |
| Unbonding Period | 14 days |
| Reward Distribution | Daily |

### Staking Rewards Formula

```
Daily Reward = (Staked Amount × Base Rate × Performance Multiplier × Tier Bonus) / 365

Where:
- Base Rate: 12% APY (adjustable via governance)
- Performance Multiplier: 0.5x - 2.0x based on node uptime and contribution quality
- Tier Bonus: 1.0x - 2.0x based on staking tier
```

---

## Reward Distribution

### Contribution-Based Rewards

| Contribution Type | Reward Weight | Description |
|-------------------|---------------|-------------|
| **Compute Uptime** | 30% | Maintaining active, available nodes |
| **Data Processing** | 25% | Processing user interactions and analytics |
| **Model Training** | 25% | Contributing to federated learning updates |
| **Conversion Lift** | 20% | Measurable improvement in conversion metrics |

### Reward Calculation Example

```
Node A Performance:
- Uptime: 99.5% → 0.30 × 0.995 = 0.2985
- Data Processed: 10M events → 0.25 × (10M/50M) = 0.05
- Model Updates: 100 → 0.25 × (100/500) = 0.05
- Conversion Lift: +15% → 0.20 × (15/20) = 0.15

Total Score: 0.5485 (54.85% of max possible)
Daily Pool: 100,000 DACIT
Node A Share: 54,850 DACIT (assuming equal competition)
```

### Emission Schedule

| Year | Daily Emission | Annual Emission | Cumulative |
|------|----------------|-----------------|------------|
| 1 | 274,000 | 100,000,000 | 100,000,000 |
| 2 | 205,500 | 75,000,000 | 175,000,000 |
| 3 | 137,000 | 50,000,000 | 225,000,000 |
| 4 | 68,500 | 25,000,000 | 250,000,000 |
| 5+ | 27,400 | 10,000,000 | Variable |

---

## Fee Structure & Burns

### Transaction Fees

| Transaction Type | Fee | Burn % | Treasury % |
|------------------|-----|--------|------------|
| Token Transfer | 0.1 DACIT | 50% | 50% |
| Stake/Unstake | 1 DACIT | 25% | 75% |
| Container Deployment | 5% of cost | 30% | 70% |
| Marketplace Trade | 2.5% | 40% | 60% |
| Governance Vote | Free | - | - |

### Burn Mechanisms

1. **Transaction Burns**: 25-50% of all fees are permanently burned
2. **Buyback & Burn**: 20% of treasury revenue used for market buybacks (burned quarterly)
3. **Slashing Burns**: 100% of slashed tokens are burned
4. **Unused Allocation Burns**: Unallocated ecosystem tokens burned after 5 years
5. **AI Creative Service Burns**: Purchased tokens used for video/image generation are 100% burned

### AI Creative Studio Burns

When users generate videos or images for social media campaigns, tokens are consumed:

| Creative Type | Token Cost | If Mined | If Purchased |
|---------------|------------|----------|--------------|
| Video (short-form) | 50 DACIT | Recirculated | **Burned** |
| Image | 10 DACIT | Recirculated | **Burned** |
| Variations | 5 DACIT each | Recirculated | **Burned** |

**Key Distinction:**
- **Mined tokens** (earned through node contribution) → Returned to reward pool
- **Purchased tokens** → **Permanently burned**, reducing total supply

See [AI Creative Studio](./ai-creative-studio.md) for full details.

### Projected Burn Rate

```
Year 1: ~11,000,000 DACIT burned (5M fees + 6M creative burns)
Year 2: ~60,000,000 DACIT burned (12M fees + 48M creative burns)
Year 3: ~205,000,000 DACIT burned (25M fees + 180M creative burns)
Year 5: ~350,000,000 DACIT burned (cumulative)
```

---

## Vesting Schedules

### Team & Advisors (15% - 150M DACIT)

| Milestone | Release | Amount |
|-----------|---------|--------|
| TGE (Token Generation Event) | 0% | 0 |
| 6 months (cliff) | 10% | 15,000,000 |
| Month 7-24 | 5%/month | 7,500,000/month |
| Full Unlock | 24 months | 150,000,000 |

### Early Contributors (10% - 100M DACIT)

| Milestone | Release | Amount |
|-----------|---------|--------|
| TGE | 15% | 15,000,000 |
| Month 1-12 | 7.08%/month | 7,083,333/month |
| Full Unlock | 12 months | 100,000,000 |

### Ecosystem Fund (20% - 200M DACIT)

- Released as needed for partnerships and integrations
- Maximum 10% per quarter
- Requires governance approval for releases > 5%

---

## Economic Flywheel

The DACIT economic model creates a self-reinforcing cycle:

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐   │
│  │ More Nodes   │ ──► │ Better AI    │ ──► │ Higher       │   │
│  │ Join Network │     │ Optimization │     │ Conversions  │   │
│  └──────────────┘     └──────────────┘     └──────────────┘   │
│         ▲                                         │            │
│         │                                         ▼            │
│  ┌──────────────┐                         ┌──────────────┐    │
│  │ Token Value  │ ◄─────────────────────  │ More Revenue │    │
│  │ Increases    │                         │ for Clients  │    │
│  └──────────────┘                         └──────────────┘    │
│         │                                         ▲            │
│         ▼                                         │            │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐   │
│  │ More Staking │ ──► │ Higher       │ ──► │ More Token   │   │
│  │ Demand       │     │ Rewards      │     │ Utility      │   │
│  └──────────────┘     └──────────────┘     └──────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Value Accrual Mechanisms

1. **Utility Growth**: As the network processes more conversions, demand for DACIT increases
2. **Staking Lock-up**: Higher staking requirements reduce circulating supply
3. **Burn Pressure**: Transaction burns create deflationary pressure
4. **Revenue Sharing**: Successful nodes distribute earnings to delegators

---

## Anti-Inflation Mechanisms

### Supply Controls

| Mechanism | Impact | Activation |
|-----------|--------|------------|
| Annual Emission Reduction | Reduces new supply by 25% each year | Automatic |
| Transaction Burns | Removes 0.5-2% of daily volume | Per transaction |
| Slashing Burns | Removes misbehaving stake | On violation |
| Treasury Burns | Removes unused allocations | After 5 years |

### Demand Drivers

| Driver | Effect |
|--------|--------|
| Node Staking Requirements | Locks 30-50% of supply |
| Service Payments | Creates buy pressure |
| Governance Participation | Requires holding DACIT |
| Marketplace Activity | Payment in DACIT only |

### Inflation/Deflation Projections

| Year | Emission | Burns | Net Change | Circulating Supply |
|------|----------|-------|------------|-------------------|
| 1 | +100M | -5M | +95M | 245M |
| 2 | +75M | -12M | +63M | 308M |
| 3 | +50M | -20M | +30M | 338M |
| 4 | +25M | -25M | 0 | 338M |
| 5 | +10M | -30M | -20M | 318M |

*Note: Year 5+ projects net deflation as burns exceed emissions*

---

## Governance Economics

### Proposal Types & Costs

| Proposal Type | Stake Required | Voting Period | Quorum |
|---------------|----------------|---------------|--------|
| Parameter Change | 10,000 DACIT | 7 days | 10% |
| Treasury Spend | 25,000 DACIT | 14 days | 20% |
| Protocol Upgrade | 50,000 DACIT | 21 days | 30% |
| Emergency Action | 100,000 DACIT | 48 hours | 40% |

### Voting Power Calculation

```
Voting Power = Base Votes × Staking Multiplier × Time Bonus

Where:
- Base Votes: 1 vote per DACIT held
- Staking Multiplier: 1.0x (unstaked) to 2.0x (Platinum tier)
- Time Bonus: +10% per year staked (max +50%)
```

### Governance Incentives

- **Proposal Rewards**: Successful proposers receive 1,000 DACIT
- **Voter Rewards**: Active voters share 10,000 DACIT monthly pool
- **Delegation Rewards**: Delegators earn portion of delegate's voting rewards

---

## Summary

DACIT tokenomics are designed to:

1. ✅ **Reward Real Value**: Tokens earned through measurable contributions
2. ✅ **Align Incentives**: Node operators, stakers, and users benefit together
3. ✅ **Control Inflation**: Burns and halving create long-term sustainability
4. ✅ **Enable Governance**: Token holders control protocol direction
5. ✅ **Drive Adoption**: Multiple utility use cases create organic demand

The economic model ensures that as the network grows more valuable, token holders benefit proportionally through staking rewards, burn-driven scarcity, and governance participation.
