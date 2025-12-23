# AI Creative Studio

The DACIT platform includes an AI-powered creative studio for generating videos and images for social media campaigns. Creative generation is paid for using DACIT tokens — either earned through mining or purchased and burned.

## Table of Contents

1. [Overview](#overview)
2. [Creative Generation Capabilities](#creative-generation-capabilities)
3. [Token Payment Model](#token-payment-model)
4. [Supported Platforms & Formats](#supported-platforms--formats)
5. [AI Creative Features](#ai-creative-features)
6. [Token Economics for Creatives](#token-economics-for-creatives)
7. [Usage Interface](#usage-interface)

---

## Overview

The DACIT AI Creative Studio enables automated generation of:

- **Videos** — Short-form social videos, product demos, testimonial compilations
- **Images** — Ad creatives, social posts, banners, product imagery
- **Variations** — A/B test variants automatically generated from base creatives

```
┌─────────────────────────────────────────────────────────────────┐
│                    AI Creative Studio                            │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐  │  │
│  │   │   VIDEO     │    │   IMAGE     │    │  VARIANTS   │  │  │
│  │   │ Generation  │    │ Generation  │    │  Generator  │  │  │
│  │   │             │    │             │    │             │  │  │
│  │   │ 🎬 50 DACIT │    │ 🖼️ 10 DACIT │    │ ♻️ 5 DACIT  │  │  │
│  │   └─────────────┘    └─────────────┘    └─────────────┘  │  │
│  │                                                           │  │
│  │   Token Balance: 1,247 DACIT (Mined: 892 | Purchased: 355)│  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Creative Generation Capabilities

### Video Generation

| Feature | Description | Token Cost |
|---------|-------------|------------|
| **Short-Form Video** | 15-60 second social videos (TikTok, Reels, Shorts) | 50 DACIT |
| **Product Demo** | Automated product showcase with text overlays | 75 DACIT |
| **Testimonial Compilation** | AI-edited customer testimonial videos | 100 DACIT |
| **Explainer Video** | Animated explainer with voiceover | 150 DACIT |
| **Ad Creative Video** | Platform-optimized video ads | 60 DACIT |
| **Video Variations** | A/B test variants (hooks, CTAs, music) | 25 DACIT each |

### Image Generation

| Feature | Description | Token Cost |
|---------|-------------|------------|
| **Social Post Image** | Single image for feed posts | 10 DACIT |
| **Ad Creative Image** | Optimized for paid advertising | 15 DACIT |
| **Product Image** | AI-enhanced product photography | 20 DACIT |
| **Banner Set** | Multiple sizes for display ads | 25 DACIT |
| **Carousel Set** | 3-10 images for carousel posts | 30 DACIT |
| **Image Variations** | Color, copy, layout variants | 5 DACIT each |

### Bulk Generation

| Package | Contents | Token Cost | Savings |
|---------|----------|------------|---------|
| **Starter Pack** | 5 images + 1 video | 75 DACIT | 15% off |
| **Campaign Pack** | 20 images + 5 videos + 10 variants | 400 DACIT | 25% off |
| **Enterprise Pack** | 100 images + 25 videos + 50 variants | 1,500 DACIT | 35% off |

---

## Token Payment Model

### Payment Hierarchy

When generating creatives, the system uses tokens in the following order:

```
┌─────────────────────────────────────────────────────────────────┐
│                    Token Payment Flow                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  User Requests Creative Generation (e.g., 50 DACIT video)        │
│                              │                                   │
│                              ▼                                   │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  Step 1: Check Mined Token Balance                        │  │
│  │  ─────────────────────────────────────────────────────────│  │
│  │  Mined tokens are earned through:                         │  │
│  │  • Node operation & compute contribution                  │  │
│  │  • Data processing rewards                                │  │
│  │  • Conversion optimization performance                    │  │
│  │                                                           │  │
│  │  If Mined Balance ≥ Cost → USE MINED TOKENS               │  │
│  │  Tokens are deducted (not burned, recirculated to network)│  │
│  └───────────────────────────────────────────────────────────┘  │
│                              │                                   │
│              (If insufficient mined tokens)                      │
│                              ▼                                   │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  Step 2: Check Purchased Token Balance                    │  │
│  │  ─────────────────────────────────────────────────────────│  │
│  │  Purchased tokens were bought on exchanges or             │  │
│  │  directly from the DACIT platform                         │  │
│  │                                                           │  │
│  │  If Purchased Balance ≥ Remaining Cost → USE & BURN       │  │
│  │  🔥 TOKENS ARE PERMANENTLY BURNED (decreases supply)      │  │
│  └───────────────────────────────────────────────────────────┘  │
│                              │                                   │
│              (If insufficient purchased tokens)                  │
│                              ▼                                   │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  Step 3: Prompt to Purchase Tokens                        │  │
│  │  ─────────────────────────────────────────────────────────│  │
│  │  User is prompted to purchase additional DACIT            │  │
│  │  • Direct purchase via Solana wallet                      │  │
│  │  • Credit card purchase (converted to DACIT)              │  │
│  │  • DEX swap from other tokens                             │  │
│  │                                                           │  │
│  │  Purchased tokens used for creatives → 🔥 BURNED          │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Token Source Distinction

| Token Type | Source | When Used for Creatives | Effect on Supply |
|------------|--------|-------------------------|------------------|
| **Mined Tokens** | Earned through node contribution | Deducted from balance | Recirculated to reward pool |
| **Purchased Tokens** | Bought on exchange/platform | **Permanently burned** | **Decreases total supply** |

### Why This Model?

1. **Rewards Contributors** — Users who contribute to the network (mining) get creative services as a benefit
2. **Creates Deflation** — Purchased tokens used for creatives are burned, reducing supply
3. **Drives Utility** — Real demand for tokens to access AI creative services
4. **Fair Economics** — Those who add value to network pay less than pure consumers

---

## Supported Platforms & Formats

### Social Media Platforms

| Platform | Video Formats | Image Formats |
|----------|---------------|---------------|
| **TikTok** | 9:16 (1080x1920), 15-60s | 1:1 (1080x1080) |
| **Instagram Reels** | 9:16 (1080x1920), 15-90s | 1:1, 4:5 (1080x1350) |
| **Instagram Stories** | 9:16 (1080x1920), 15s | 9:16 (1080x1920) |
| **Instagram Feed** | 1:1, 4:5, 16:9 | 1:1 (1080x1080), 4:5 |
| **Facebook Feed** | 1:1, 4:5, 16:9 | 1.91:1 (1200x628) |
| **Facebook Stories** | 9:16 (1080x1920) | 9:16 (1080x1920) |
| **YouTube Shorts** | 9:16 (1080x1920), 60s max | 1280x720 thumbnail |
| **LinkedIn** | 1:1, 16:9 | 1.91:1 (1200x627) |
| **Twitter/X** | 16:9, 1:1 | 16:9 (1200x675) |
| **Pinterest** | 9:16, 2:3 | 2:3 (1000x1500) |

### Ad Platform Formats

| Platform | Video Specs | Image Specs |
|----------|-------------|-------------|
| **Google Display** | Various sizes, 15-30s | 300x250, 728x90, 160x600, etc. |
| **Meta Ads** | 1:1, 4:5, 9:16 | 1080x1080, 1080x1350 |
| **LinkedIn Ads** | 16:9, 1:1 | 1200x627, 1080x1080 |
| **TikTok Ads** | 9:16, 1:1 | 1080x1920 |

---

## AI Creative Features

### Video Generation Capabilities

```
┌─────────────────────────────────────────────────────────────────┐
│                   AI Video Generator                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  INPUT OPTIONS                                                   │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ • Text prompt describing desired video                    │  │
│  │ • Product URL (auto-extracts images and info)             │  │
│  │ • Existing images/clips to incorporate                    │  │
│  │ • Brand guidelines (colors, fonts, logo)                  │  │
│  │ • Competitor examples (from Firecrawl monitoring)         │  │
│  │ • Script or talking points                                │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
│  AI GENERATION FEATURES                                          │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ ✅ AI Voiceover (multiple voices and languages)           │  │
│  │ ✅ Auto-captioning with animated text                     │  │
│  │ ✅ Music selection (royalty-free library)                 │  │
│  │ ✅ Scene transitions and effects                          │  │
│  │ ✅ Product highlighting and zoom effects                  │  │
│  │ ✅ AI avatar/spokesperson (optional)                      │  │
│  │ ✅ Automatic hook generation (first 3 seconds)            │  │
│  │ ✅ CTA overlay placement                                  │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
│  OUTPUT                                                          │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ • Primary video in requested format                       │  │
│  │ • Auto-generated variations (optional, extra tokens)      │  │
│  │ • Platform-specific exports (1-click multi-platform)      │  │
│  │ • Thumbnail options                                       │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Image Generation Capabilities

```
┌─────────────────────────────────────────────────────────────────┐
│                   AI Image Generator                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  GENERATION MODES                                                │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │  🎨 Text-to-Image                                         │  │
│  │     "Professional woman using laptop, modern office,      │  │
│  │      warm lighting, SaaS dashboard on screen"             │  │
│  │                                                           │  │
│  │  📸 Product Enhancement                                   │  │
│  │     Upload product photo → AI enhances, removes           │  │
│  │     background, adds lifestyle context                    │  │
│  │                                                           │  │
│  │  🔄 Style Transfer                                        │  │
│  │     Apply brand style to stock images or photos           │  │
│  │                                                           │  │
│  │  ✏️ Text Overlay                                          │  │
│  │     AI-optimized headline placement and styling           │  │
│  │                                                           │  │
│  │  📐 Smart Resize                                          │  │
│  │     One image → all platform sizes with AI reframing      │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Automatic Variation Generation

The LAM uses conversion data to generate optimized variations:

| Variation Type | What Changes | Use Case |
|----------------|--------------|----------|
| **Hook Variations** | First 3 seconds of video | Test different attention grabbers |
| **CTA Variations** | Call-to-action text/button | Optimize conversion language |
| **Color Variations** | Background, accent colors | Brand testing, seasonal themes |
| **Copy Variations** | Headlines, body text | Message testing |
| **Layout Variations** | Element positioning | UX optimization |
| **Audience Variations** | Imagery matched to segments | Personalization by demographic |

---

## Token Economics for Creatives

### Burn Mechanics

When purchased tokens are used for creative generation:

```
┌─────────────────────────────────────────────────────────────────┐
│                    Token Burn Process                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  User: Generate video ad (50 DACIT)                              │
│  Wallet: 20 Mined + 100 Purchased DACIT                          │
│                                                                  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  Transaction Breakdown:                                   │  │
│  │                                                           │  │
│  │  1. Use 20 Mined DACIT                                    │  │
│  │     → Sent to Network Reward Pool (recirculated)          │  │
│  │                                                           │  │
│  │  2. Use 30 Purchased DACIT                                │  │
│  │     → 🔥 BURNED (sent to null address)                    │  │
│  │     → Permanently removed from circulation                │  │
│  │     → Total supply reduced by 30 DACIT                    │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
│  On-Chain Record:                                                │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  TX: 7xK9m...2nPq                                         │  │
│  │  Action: CREATIVE_GENERATION                              │  │
│  │  Mined Used: 20 DACIT → Pool: DACITRewardPool...          │  │
│  │  Burned: 30 DACIT → Null: 1111111111111111...             │  │
│  │  Creative ID: vid_8h2k4n9...                              │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Projected Burn from Creative Services

| Scenario | Monthly Creatives | Tokens Burned | Annual Burn |
|----------|-------------------|---------------|-------------|
| **Small Business** | 20 images, 5 videos | ~400 DACIT | ~4,800 DACIT |
| **Growth Company** | 100 images, 25 videos | ~2,000 DACIT | ~24,000 DACIT |
| **Enterprise** | 500 images, 100 videos | ~8,000 DACIT | ~96,000 DACIT |
| **Agency (10 clients)** | 1,000 images, 250 videos | ~20,000 DACIT | ~240,000 DACIT |

### Network-Wide Burn Projections

| Year | Active Users | Est. Monthly Burns | Annual Creative Burns |
|------|--------------|--------------------|-----------------------|
| 1 | 1,000 | 500,000 DACIT | 6,000,000 DACIT |
| 2 | 10,000 | 4,000,000 DACIT | 48,000,000 DACIT |
| 3 | 50,000 | 15,000,000 DACIT | 180,000,000 DACIT |

*These burns are IN ADDITION to transaction fee burns, creating significant deflationary pressure.*

### Mining vs. Purchasing Incentive

| User Type | Strategy | Token Source | Burn Impact |
|-----------|----------|--------------|-------------|
| **Node Operator** | Run DACIT node, mine tokens | 100% Mined | No burn (recirculated) |
| **Active Contributor** | Mix of mining + purchasing | 70% Mined, 30% Purchased | 30% burned |
| **Pure Consumer** | Purchase all tokens | 100% Purchased | 100% burned |
| **Hybrid User** | Mine some, buy for peaks | 50% Mined, 50% Purchased | 50% burned |

**Incentive**: Users are encouraged to contribute to the network (mining) to reduce their costs and avoid burns.

---

## Usage Interface

### Creative Studio (On Edge Box Display)

```
┌─────────────────────────────────────────────────────────────────┐
│  🎨 AI Creative Studio                         [Token: 1,247]   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  CREATE NEW                                                      │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐                │
│  │             │ │             │ │             │                │
│  │  🎬 VIDEO   │ │  🖼️ IMAGE   │ │  ♻️ VARIANT │                │
│  │             │ │             │ │             │                │
│  │  50+ DACIT  │ │  10+ DACIT  │ │   5 DACIT   │                │
│  │             │ │             │ │             │                │
│  └─────────────┘ └─────────────┘ └─────────────┘                │
│                                                                  │
│  RECENT CREATIVES                                                │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ 📹 Product Demo Video     Today 2:30 PM      50 DACIT     │  │
│  │ 🖼️ Instagram Carousel     Today 11:15 AM     30 DACIT     │  │
│  │ 📹 TikTok Ad (3 variants) Yesterday          85 DACIT     │  │
│  │ 🖼️ Facebook Ad Set        Yesterday          25 DACIT     │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
│  TOKEN BALANCE                                                   │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  Mined:     892 DACIT  ████████████████░░░░  (available)  │  │
│  │  Purchased: 355 DACIT  ██████░░░░░░░░░░░░░░  (will burn)  │  │
│  │                                                           │  │
│  │  [+ Mine More]  [+ Purchase Tokens]                       │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Video Generation Flow

```
┌─────────────────────────────────────────────────────────────────┐
│  🎬 Generate Video                              [Cost: 50 DACIT] │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  STEP 1: Choose Type                                             │
│  ○ Short-Form (15-60s)  ○ Product Demo  ○ Testimonial           │
│  ● Ad Creative          ○ Explainer                              │
│                                                                  │
│  STEP 2: Platform                                                │
│  ☑ TikTok  ☑ Instagram Reels  ☐ YouTube Shorts  ☐ Facebook     │
│                                                                  │
│  STEP 3: Input                                                   │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ Describe your video:                                      │  │
│  │ "Energetic product showcase for our new SaaS dashboard.   │  │
│  │  Highlight the analytics features, show mobile app,       │  │
│  │  end with free trial CTA. Upbeat music."                  │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
│  STEP 4: Assets                                                  │
│  [+ Upload Images]  [+ Add Logo]  [+ Product URL]               │
│                                                                  │
│  STEP 5: Options                                                 │
│  ☑ AI Voiceover (English)  ☑ Auto-captions  ☐ AI Avatar        │
│  ☑ Generate 2 variations (+25 DACIT each)                       │
│                                                                  │
│  ─────────────────────────────────────────────────────────────  │
│  TOTAL: 100 DACIT                                                │
│  Payment: 100 Mined (0 burned)                                   │
│                                                                  │
│  [Cancel]                              [Generate Video →]        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Purchase Prompt (When Insufficient Tokens)

```
┌─────────────────────────────────────────────────────────────────┐
│  ⚠️ Insufficient Tokens                                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  You need 100 DACIT but only have 65 DACIT available.           │
│                                                                  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  Current Balance:     65 DACIT (45 mined + 20 purchased)  │  │
│  │  Required:           100 DACIT                            │  │
│  │  Shortfall:           35 DACIT                            │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
│  OPTIONS:                                                        │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  💳 Purchase 50 DACIT                         $12.50     │    │
│  │     Note: Purchased tokens will be BURNED when used      │    │
│  │     [Buy with Card]  [Buy with SOL]  [Buy with USDC]     │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  ⛏️ Mine More Tokens                                     │    │
│  │     Increase node contribution to earn tokens faster     │    │
│  │     Current mining rate: ~12 DACIT/day                   │    │
│  │     [View Mining Settings]                               │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  [Cancel]                                                        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Summary

The AI Creative Studio provides:

- ✅ **AI-Powered Generation** — Videos and images created automatically for social campaigns
- ✅ **Token-Based Pricing** — Pay with DACIT tokens for all creative services
- ✅ **Mining Rewards** — Contributors use earned tokens without burning
- ✅ **Deflationary Burns** — Purchased tokens are permanently burned, reducing supply
- ✅ **Multi-Platform Export** — One creative, all platform formats
- ✅ **Automatic Variations** — A/B test variants generated by AI
- ✅ **Integrated Workflow** — Direct deployment to ad platforms from the edge box

This model incentivizes network participation while creating sustainable deflationary pressure on the token supply through creative service usage.
