# Reward Emission Schedule

This document explains the token emission schedule for DACIT rewards.

## Overview

An emission schedule controls how many tokens are released as rewards over time, based on time or activity. It's used to:

- ✔ Reward early participation more heavily
- ✔ Gradually reduce emissions to avoid inflation
- ✔ Tie emissions to milestones or usage
- ✔ Include dynamic adjustments (e.g., activity-based boosts or governance-controlled parameters)

## Emission Logic Strategy

The DACIT reward schedule supports:

- **Epoch-Based Emission** — Rewards minted per epoch (Solana epoch or custom time interval)
- **Decay / Tapering** — Emissions decrease over milestones (e.g., halving every N epochs)
- **Activity Adjustment** — Increase or decrease emissions based on participation metrics
- **Governance Controls** — Parameters adjustable via token holder voting

## On-Chain Implementation

### EmissionSchedule Account Structure

```rust
#[account]
pub struct EmissionSchedule {
    pub initial_rate: u64,      // base tokens per epoch/unit time
    pub decay_rate: u64,        // how much the rate decreases per step
    pub min_rate: u64,          // floor rate (won't go below this)
    pub last_update: i64,       // last timestamp/epoch update
    pub epoch_length: i64,      // how long each step is
}
```

| Field | Description |
|-------|-------------|
| `initial_rate` | Starting emission rate (e.g., tokens per epoch) |
| `decay_rate` | Amount subtracted from the rate each interval |
| `min_rate` | Minimum reward rate floor |
| `last_update` | Last timestamp/epoch when rewards were calculated |
| `epoch_length` | Duration between emission updates |

### Reward Calculation Function

```rust
fn current_emission_rate(schedule: &mut EmissionSchedule, now_ts: i64) -> u64 {
    let elapsed = now_ts - schedule.last_update;
    let steps = (elapsed / schedule.epoch_length) as u64;

    // Calculate the tapered rate
    let base_rate = schedule.initial_rate
        .saturating_sub(schedule.decay_rate.saturating_mul(steps));
    let rate = std::cmp::max(base_rate, schedule.min_rate);

    // Update timestamp if epochs have passed
    if steps > 0 {
        schedule.last_update = now_ts;
    }
    
    rate
}
```

This function:

1. Measures how many epochs have passed since the last emission update
2. Decreases the rate by `decay_rate * steps`
3. Ensures it never goes below `min_rate`
4. Updates the schedule's timestamp

## Example Configuration

| Parameter | Value | Description |
|-----------|-------|-------------|
| `initial_rate` | 1,000,000 | 1M tokens per epoch initially |
| `decay_rate` | 10,000 | Decrease by 10K tokens per epoch |
| `min_rate` | 100,000 | Never drop below 100K per epoch |
| `epoch_length` | 86400 | 1 day (in seconds) |

With this configuration:
- Day 1: 1,000,000 tokens
- Day 10: 900,000 tokens
- Day 90: 100,000 tokens (minimum reached)

## Activity-Based Adjustments

You can extend the schedule to scale rewards with activity:

```rust
let multiplier = calculate_activity_multiplier(user_activity);
let adjusted_rate = rate.saturating_mul(multiplier);
```

This lets you reward nodes with high contribution more than passive stakers.

## Security Considerations

- **Use PDA as mint authority** so rewards cannot be minted by a keypair
- **Anchor constraints** reduce mistakes with `init_if_needed`
- **Automation** via on-chain schedulers like Clockwork can trigger distribution at intervals

## Why This Works

- ✔ **Dynamic Emissions**: Start high and taper over time, paralleling sustainable tokenomics
- ✔ **Inflation Control**: Capping at `min_rate` avoids runaway emissions that devalue the token
- ✔ **Governance Ready**: Expose schedule parameters to governance for holder-controlled incentives
- ✔ **Modular**: Works with staking, conversion contributions, or other reward models
