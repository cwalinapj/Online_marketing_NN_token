# Edge Box Display & Ad Manager

The DACIT edge box features a built-in display screen with a front-end AdWords manager, enabling on-device ad campaign management and AI-powered spend optimization.

## Table of Contents

1. [Edge Box Hardware Overview](#edge-box-hardware-overview)
2. [On-Screen Ad Manager Interface](#on-screen-ad-manager-interface)
3. [AI-Powered Ad Optimization](#ai-powered-ad-optimization)
4. [Supported Ad Platforms](#supported-ad-platforms)
5. [Autonomous Spend Management](#autonomous-spend-management)
6. [Dashboard Views](#dashboard-views)
7. [Configuration & Controls](#configuration--controls)

---

## Edge Box Hardware Overview

The DACIT edge box is a physical device with integrated display for local management:

```
┌─────────────────────────────────────────────────────────────────┐
│                      DACIT EDGE BOX                              │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │                    7" TOUCHSCREEN DISPLAY                 │  │
│  │                                                           │  │
│  │   ┌─────────────────────────────────────────────────┐    │  │
│  │   │  📊 Ad Manager Dashboard                        │    │  │
│  │   │                                                 │    │  │
│  │   │  Google Ads    ████████░░  $1,247/day  ↑ 12%   │    │  │
│  │   │  Meta Ads      ██████░░░░  $892/day    ↑ 8%    │    │  │
│  │   │  LinkedIn      ███░░░░░░░  $445/day    ↑ 23%   │    │  │
│  │   │                                                 │    │  │
│  │   │  [Auto-Optimize: ON]  [Daily Budget: $2,584]   │    │  │
│  │   └─────────────────────────────────────────────────┘    │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │ ARM CPU  │  │ AI Chip  │  │ 1TB NVMe │  │ Ethernet │        │
│  │ 8-Core   │  │ NPU      │  │ Storage  │  │ + WiFi   │        │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘        │
└─────────────────────────────────────────────────────────────────┘
```

### Hardware Specifications

| Component | Specification | Purpose |
|-----------|---------------|---------|
| **Display** | 7" IPS Touchscreen (1024x600) | Local dashboard and ad management |
| **Processor** | ARM Cortex-A76 8-Core | Edge computing and AI inference |
| **AI Accelerator** | Neural Processing Unit (NPU) | Real-time ad optimization |
| **Memory** | 8GB LPDDR5 | Multi-platform ad management |
| **Storage** | 1TB NVMe SSD | Campaign data and analytics cache |
| **Connectivity** | Gigabit Ethernet + WiFi 6 | Low-latency API connections |

---

## On-Screen Ad Manager Interface

The built-in display provides a comprehensive ad management interface:

### Main Dashboard View

```
┌─────────────────────────────────────────────────────────────────┐
│  DACIT Ad Manager                              [⚙️] [🔔] [👤]   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  TODAY'S PERFORMANCE                          Dec 23, 2025       │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌────────────┐ │
│  │ Total Spend │ │ Conversions │ │    ROAS     │ │    CPA     │ │
│  │   $2,584    │ │     147     │ │    4.2x     │ │   $17.58   │ │
│  │   ↑ 5.2%    │ │    ↑ 12%    │ │   ↑ 0.3x    │ │   ↓ $2.10  │ │
│  └─────────────┘ └─────────────┘ └─────────────┘ └────────────┘ │
│                                                                  │
│  PLATFORM BREAKDOWN                                              │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ Platform      Budget    Spend     Conv    ROAS   Status   │  │
│  │ ─────────────────────────────────────────────────────────│  │
│  │ Google Ads    $1,500    $1,247    82      4.8x   ✅ Auto  │  │
│  │ Meta Ads      $1,000    $892      41      3.6x   ✅ Auto  │  │
│  │ LinkedIn      $500      $445      24      4.1x   ✅ Auto  │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
│  AI OPTIMIZATION STATUS                                          │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ 🤖 Auto-Optimize: ENABLED                                 │  │
│  │ Last adjustment: 2 hours ago                              │  │
│  │ Action: Shifted $150 from Meta to Google (higher ROAS)    │  │
│  │ Result: +8 conversions, -$1.20 CPA                        │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
│  [📊 Details]  [⚡ Quick Adjust]  [🎯 Campaigns]  [📈 Reports]  │
└─────────────────────────────────────────────────────────────────┘
```

### Quick Actions (Touch Interface)

| Action | Gesture | Description |
|--------|---------|-------------|
| **Pause Campaign** | Long press on platform | Immediately pause all ads on platform |
| **Adjust Budget** | Swipe left/right on budget | Increase/decrease daily budget |
| **View Details** | Tap platform row | Drill into campaign-level data |
| **Toggle Auto-Optimize** | Tap status toggle | Enable/disable AI management |
| **Emergency Stop** | Double-tap STOP button | Halt all ad spend immediately |

---

## AI-Powered Ad Optimization

The DACIT box uses on-device AI to continuously optimize ad spend across all connected platforms:

### Optimization Capabilities

```
┌─────────────────────────────────────────────────────────────────┐
│                   AI Ad Optimization Engine                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  INPUT SIGNALS                                                   │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ • Real-time conversion data from all platforms            │  │
│  │ • Cost-per-click and cost-per-acquisition trends          │  │
│  │ • Time-of-day and day-of-week performance patterns        │  │
│  │ • Audience segment performance                            │  │
│  │ • Competitor activity (from Firecrawl monitoring)         │  │
│  │ • Landing page conversion rates (from DACIT analytics)    │  │
│  │ • Seasonal and market trend indicators                    │  │
│  └───────────────────────────────────────────────────────────┘  │
│                              │                                   │
│                              ▼                                   │
│  AI DECISION ENGINE                                              │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ • Multi-armed bandit for budget allocation                │  │
│  │ • Predictive models for conversion probability            │  │
│  │ • Anomaly detection for spend irregularities              │  │
│  │ • Fatigue detection for creative refresh                  │  │
│  │ • Cross-platform attribution modeling                     │  │
│  └───────────────────────────────────────────────────────────┘  │
│                              │                                   │
│                              ▼                                   │
│  AUTOMATED ACTIONS                                               │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ • Reallocate budget between platforms (hourly)            │  │
│  │ • Adjust bids on keywords/audiences (real-time)           │  │
│  │ • Pause underperforming campaigns (automatic)             │  │
│  │ • Scale winning campaigns (with limits)                   │  │
│  │ • Shift budget to high-converting time slots              │  │
│  │ • Alert on anomalies requiring human review               │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Optimization Modes

| Mode | Description | Control Level |
|------|-------------|---------------|
| **Full Auto** | AI controls all budget allocation and bid adjustments | Minimal human input |
| **Supervised** | AI makes recommendations, human approves changes | Approval required |
| **Guardrails** | AI optimizes within set limits (max spend, min ROAS) | Bounded automation |
| **Manual** | Human controls all decisions, AI provides insights | Advisory only |

### AI Decision Examples

```
SCENARIO 1: Cross-Platform Reallocation
─────────────────────────────────────────
Observation: Google Ads ROAS dropped from 4.8x to 3.2x (last 4 hours)
             Meta Ads ROAS increased from 3.6x to 4.5x
             
AI Action:   Shift 20% of Google budget to Meta
             Amount: $300 reallocated
             
Result:      Overall ROAS maintained at 4.1x
             Avoided $180 in wasted spend

SCENARIO 2: Time-Based Optimization  
─────────────────────────────────────────
Observation: Conversions peak 10am-2pm and 7pm-10pm
             Low performance 2am-6am (CPA 3x higher)
             
AI Action:   Reduce overnight bids by 60%
             Increase peak hour bids by 25%
             
Result:      Same daily spend, +18% conversions
             CPA reduced by $4.20

SCENARIO 3: Campaign Fatigue Detection
─────────────────────────────────────────
Observation: Ad creative CTR declined 40% over 2 weeks
             Frequency reached 4.2 (audience seeing ad 4+ times)
             
AI Action:   Pause fatigued creative
             Activate backup creative set
             Alert user to create new creatives
             
Result:      CTR restored to baseline
             Notification sent to user's phone
```

---

## Supported Ad Platforms

The Ad Manager integrates with all major advertising platforms:

| Platform | Features | API Capabilities |
|----------|----------|------------------|
| **Google Ads** | Search, Display, YouTube, Shopping, Performance Max | Full campaign management, bid adjustments, budget control |
| **Meta Ads** | Facebook, Instagram, Messenger, Audience Network | Campaign CRUD, audience management, creative rotation |
| **LinkedIn Ads** | Sponsored Content, Message Ads, Dynamic Ads | B2B targeting, lead gen forms, budget optimization |
| **Microsoft Ads** | Bing Search, Microsoft Audience Network | Search campaigns, import from Google, bid management |
| **TikTok Ads** | In-Feed, TopView, Branded Effects | Video campaign management, audience targeting |
| **Twitter/X Ads** | Promoted Tweets, Followers, Trends | Engagement campaigns, real-time optimization |
| **Pinterest Ads** | Promoted Pins, Shopping, Collections | Visual discovery ads, catalog management |
| **Snapchat Ads** | Snap Ads, Story Ads, Collection Ads | Mobile-first campaigns, AR experiences |

### Platform Connection Status (On-Screen Display)

```
┌─────────────────────────────────────────────────────────────────┐
│  Connected Platforms                                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ✅ Google Ads        Connected    Last sync: 2 min ago         │
│  ✅ Meta Ads          Connected    Last sync: 2 min ago         │
│  ✅ LinkedIn Ads      Connected    Last sync: 5 min ago         │
│  ✅ Microsoft Ads     Connected    Last sync: 5 min ago         │
│  ⚠️ TikTok Ads        Re-auth needed                            │
│  ❌ Twitter Ads       Not connected [+ Connect]                  │
│                                                                  │
│  [🔄 Sync All]  [+ Add Platform]  [⚙️ API Settings]             │
└─────────────────────────────────────────────────────────────────┘
```

---

## Autonomous Spend Management

### Budget Controls

Configure how the AI manages your ad spend:

```
┌─────────────────────────────────────────────────────────────────┐
│  Budget & Spend Controls                                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  DAILY LIMITS                                                    │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ Total Daily Budget:              $3,000                   │  │
│  │ Maximum Single Platform:         $1,500 (50%)             │  │
│  │ Minimum Per Platform:            $100                     │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
│  PERFORMANCE GUARDRAILS                                          │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ Minimum ROAS:                    2.5x (pause if below)    │  │
│  │ Maximum CPA:                     $35 (reduce spend)       │  │
│  │ Maximum Daily Increase:          20% (prevent runaway)    │  │
│  │ Minimum Daily Decrease:          10% (gradual reduction)  │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
│  AUTOMATION PERMISSIONS                                          │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ ✅ Reallocate between platforms                           │  │
│  │ ✅ Adjust keyword/audience bids                           │  │
│  │ ✅ Pause underperforming campaigns                        │  │
│  │ ⬜ Create new campaigns (requires approval)               │  │
│  │ ⬜ Increase total daily budget (requires approval)        │  │
│  │ ✅ Activate backup creatives                              │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
│  [Save Settings]  [Reset to Defaults]                            │
└─────────────────────────────────────────────────────────────────┘
```

### Spend Optimization Rules

| Rule | Trigger | Action | Limit |
|------|---------|--------|-------|
| **ROAS Reallocation** | Platform ROAS differs by >20% | Shift budget to higher ROAS | Max 30% shift/day |
| **CPA Protection** | CPA exceeds target by 50% | Reduce platform spend by 25% | Min $100 spend |
| **Time Optimization** | Hour performance varies >40% | Adjust hourly bid modifiers | -70% to +50% |
| **Fatigue Response** | CTR drops >30% in 7 days | Pause creative, activate backup | Requires backup set |
| **Anomaly Alert** | Spend >150% of normal rate | Pause and alert user | Immediate pause |

---

## Dashboard Views

### View 1: Overview (Default)
Real-time summary of all ad performance across platforms.

### View 2: Platform Deep-Dive
Detailed metrics for a single platform with campaign breakdown.

### View 3: AI Activity Log
History of all AI-made optimizations with before/after metrics.

```
┌─────────────────────────────────────────────────────────────────┐
│  AI Activity Log                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Today                                                           │
│  ├─ 2:34 PM  Budget Shift: Google → Meta ($150)                 │
│  │           Reason: Meta ROAS 15% higher (4.2x vs 3.6x)        │
│  │           Result: +6 conversions in 2 hours                  │
│  │                                                               │
│  ├─ 11:15 AM Bid Adjustment: Google Search keywords             │
│  │           Reason: "software pricing" CPA $12 below target    │
│  │           Action: Increased bid 15% ($2.40 → $2.76)          │
│  │                                                               │
│  ├─ 8:02 AM  Time Modifier: All platforms                       │
│  │           Reason: Entering peak conversion hours             │
│  │           Action: Bids +20% until 2 PM                       │
│  │                                                               │
│  Yesterday                                                       │
│  ├─ 9:45 PM  Campaign Paused: Meta - Retargeting Set B          │
│  │           Reason: ROAS below 2.5x threshold for 24h          │
│  │           Spend saved: $124                                  │
│  │                                                               │
│  └─ [View Full History]                                         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### View 4: Alerts & Notifications

```
┌─────────────────────────────────────────────────────────────────┐
│  🔔 Alerts                                          [Clear All] │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  🔴 URGENT: TikTok API authentication expired                   │
│     Action needed: Re-connect account                           │
│     [Reconnect Now]                                     2h ago  │
│                                                                  │
│  🟡 WARNING: Google Ads daily budget 80% spent                  │
│     Projected to exhaust by 4 PM                                │
│     [Increase Budget] [Reduce Bids]                    30m ago  │
│                                                                  │
│  🟢 SUCCESS: AI optimization saved $340 today                   │
│     Reallocated spend improved overall ROAS by 0.4x             │
│     [View Details]                                      5m ago  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Configuration & Controls

### Initial Setup (On-Screen Wizard)

1. **Connect Platforms** — OAuth login to each ad platform
2. **Set Budgets** — Define daily/monthly spend limits
3. **Configure Goals** — Target CPA, ROAS, or conversion volume
4. **Set Guardrails** — Define automation boundaries
5. **Enable AI** — Choose automation level (Full Auto / Supervised / Guardrails)

### Remote Access

The on-screen interface is also accessible remotely:

| Access Method | Description |
|---------------|-------------|
| **Mobile App** | iOS/Android app mirrors the display interface |
| **Web Dashboard** | Full browser-based access at `app.dacit.io` |
| **API** | Programmatic access for custom integrations |
| **Notifications** | Push alerts to phone for urgent items |

### Physical Controls

| Button | Function |
|--------|----------|
| **Power** | Sleep/wake display (box continues running) |
| **Emergency Stop** | Physical button to halt all ad spend immediately |
| **Reset** | Factory reset (requires confirmation) |

---

## Summary

The DACIT edge box with built-in display provides:

- ✅ **Local Ad Management** — Manage all ad platforms from one screen
- ✅ **AI-Powered Optimization** — Autonomous budget allocation and bid management
- ✅ **Real-Time Control** — Touch interface for immediate adjustments
- ✅ **Configurable Automation** — From full auto to human-supervised modes
- ✅ **Cross-Platform Intelligence** — Unified view of all advertising performance
- ✅ **Safety Guardrails** — Spend limits and performance thresholds protect budgets

The combination of on-device AI, real-time data processing, and intuitive touch interface makes the DACIT box a powerful tool for hands-free ad optimization with full transparency and control.
