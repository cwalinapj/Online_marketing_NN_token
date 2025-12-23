# DACIT Services Marketplace

The DACIT Services Marketplace is a decentralized 3rd party platform where users can trade their mined DACIT tokens for SEO and online marketing services. This creates a utility-driven ecosystem where token value is directly tied to real-world marketing solutions.

## Overview

The marketplace enables:
- **Token Holders**: Spend mined DACIT tokens on professional marketing services
- **Service Providers**: Offer SEO/marketing services in exchange for DACIT tokens
- **Node Operators**: Earn tokens through mining and spend them on growth services

## Available Services

### 🔍 SERP Tracking Services
Monitor search engine rankings across multiple keywords and competitors.

| Service Tier | Token Cost | Features |
|--------------|------------|----------|
| Basic | 100 DACIT/mo | 50 keywords, daily updates |
| Pro | 300 DACIT/mo | 250 keywords, hourly updates, competitor tracking |
| Enterprise | 750 DACIT/mo | Unlimited keywords, real-time updates, API access |

### 📈 SEO Audit & Analysis
Comprehensive website SEO analysis and recommendations.

| Service | Token Cost | Deliverable |
|---------|------------|-------------|
| Technical Audit | 200 DACIT | Full site crawl, issue report |
| Content Analysis | 150 DACIT | Content gap analysis, keyword mapping |
| Backlink Audit | 175 DACIT | Link profile analysis, toxic link detection |
| Complete Audit | 450 DACIT | All audits combined with action plan |

### 📊 Keyword Research
In-depth keyword analysis for content strategy.

| Service | Token Cost | Output |
|---------|------------|--------|
| Niche Research | 100 DACIT | 100 keyword opportunities |
| Competitor Gap | 150 DACIT | Competitor keyword analysis |
| Full Strategy | 300 DACIT | Complete keyword roadmap |

### 🔗 Link Building Services
Quality backlink acquisition campaigns.

| Service | Token Cost | Deliverable |
|---------|------------|-------------|
| Guest Posting | 75 DACIT/link | DA 30+ sites |
| Premium Links | 150 DACIT/link | DA 50+ authority sites |
| Link Strategy | 200 DACIT | Custom outreach campaign plan |

### 📝 Content Marketing
SEO-optimized content creation services.

| Service | Token Cost | Output |
|---------|------------|--------|
| Blog Article | 50 DACIT | 1,000-word SEO article |
| Pillar Content | 150 DACIT | 3,000-word comprehensive guide |
| Content Calendar | 100 DACIT | 30-day content strategy |

### 📱 Social Media Services
Social presence and engagement services.

| Service | Token Cost | Coverage |
|---------|------------|----------|
| Profile Optimization | 75 DACIT | Single platform setup |
| Monthly Management | 200 DACIT/mo | Daily posting, engagement |
| Advertising Setup | 150 DACIT | Campaign configuration |

### 🎯 PPC Management
Pay-per-click campaign management.

| Service | Token Cost | Scope |
|---------|------------|-------|
| Campaign Setup | 200 DACIT | Account structure, ad creation |
| Monthly Management | 250 DACIT/mo | Optimization, reporting |
| Audit & Strategy | 175 DACIT | Performance analysis |

## Marketplace Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         DACIT Services Marketplace                       │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐   │
│  │  Token Holders  │     │   Marketplace    │     │    Service      │   │
│  │   (Buyers)      │◄───►│     Smart        │◄───►│   Providers     │   │
│  │                 │     │    Contract      │     │   (Sellers)     │   │
│  └─────────────────┘     └──────────────────┘     └─────────────────┘   │
│           │                      │                        │              │
│           ▼                      ▼                        ▼              │
│  ┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐   │
│  │  DACIT Wallet   │     │  Escrow System   │     │ Provider Portal │   │
│  │  Integration    │     │  & Settlement    │     │ & Dashboard     │   │
│  └─────────────────┘     └──────────────────┘     └─────────────────┘   │
│                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │                    Service Fulfillment Layer                       │  │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  │  │
│  │  │  SERP   │  │   SEO   │  │ Content │  │  Link   │  │   PPC   │  │  │
│  │  │ Tracker │  │ Auditor │  │ Creator │  │ Builder │  │ Manager │  │  │
│  │  └─────────┘  └─────────┘  └─────────┘  └─────────┘  └─────────┘  │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

## Token Flow

```
┌─────────────────┐                              ┌─────────────────┐
│                 │   1. Browse Services         │                 │
│  Token Holder   │─────────────────────────────►│   Marketplace   │
│  (Buyer)        │                              │   Platform      │
│                 │   2. Select Service          │                 │
└────────┬────────┘◄─────────────────────────────└────────┬────────┘
         │                                                │
         │ 3. Pay DACIT Tokens                            │
         │    (Locked in Escrow)                          │
         ▼                                                ▼
┌─────────────────┐                              ┌─────────────────┐
│                 │   4. Order Notification      │                 │
│  Escrow Smart   │─────────────────────────────►│    Service      │
│  Contract       │                              │    Provider     │
│                 │   5. Deliver Service         │                 │
└────────┬────────┘◄─────────────────────────────└─────────────────┘
         │
         │ 6. Buyer Confirms / Auto-Release
         │
         ▼
┌───────────────────────────────┐
│                               │
│  Settlement (see Fee         │
│  Structure table):           │
│  - Provider receives net %   │
│  - Platform fee to Treasury  │
│  - 2% token burn             │
│                               │
└───────────────────────────────┘
```

## Provider Onboarding

### Requirements
1. **Verification**: Complete identity verification process
2. **Portfolio**: Submit work samples demonstrating expertise
3. **Staking**: Stake minimum 500 DACIT as service guarantee
4. **Agreement**: Accept marketplace terms and SLAs

### Provider Tiers

Higher-tier providers receive reduced platform fees as a reward for their stake commitment:

| Tier | Stake Required | Platform Fee | Provider Net | Benefits |
|------|----------------|--------------|--------------|----------|
| Bronze | 500 DACIT | 5% | 93%* | Basic listing |
| Silver | 2,000 DACIT | 4% | 94%* | Featured placement, badges |
| Gold | 5,000 DACIT | 3% | 95%* | Priority support, analytics |
| Platinum | 10,000 DACIT | 2% | 96%* | All benefits, early access |

*Provider net = 100% - Platform Fee - 2% token burn

### Service Quality Assurance
- **Rating System**: 5-star ratings from verified buyers
- **Dispute Resolution**: Smart contract-based arbitration
- **Refund Policy**: Escrow protection for unfulfilled orders
- **Performance Tracking**: Response time, completion rate metrics

## Buyer Protection

### Escrow System
All payments are held in escrow until service delivery is confirmed:
- **Order Placed**: Tokens locked in escrow smart contract
- **Service Delivered**: Provider submits proof of completion
- **Buyer Review**: 72-hour review period for acceptance
- **Auto-Release**: Automatic settlement after review period

### Dispute Resolution
1. **Buyer Initiates**: Opens dispute with evidence
2. **Provider Response**: 48 hours to respond with proof
3. **Mediation**: Community arbitrators review case
4. **Resolution**: Funds released based on decision

## Technical Integration

### Smart Contract Interface
```rust
//! Anchor program for DACIT marketplace transactions.
//! Handles service listings, order management, and escrow settlement.
use anchor_lang::prelude::*;

/// ServiceListing represents a service offered by a verified provider.
/// Each listing contains pricing, metadata, and performance statistics.
#[account]
pub struct ServiceListing {
    /// Wallet address of the service provider
    pub provider: Pubkey,
    /// Category identifier (0=SERP, 1=SEO Audit, 2=Keywords, etc.)
    pub service_type: u8,
    /// Price in DACIT tokens (lamports equivalent)
    pub price: u64,
    /// IPFS content hash for detailed service description
    pub description_hash: [u8; 32],
    /// Whether the listing is currently accepting orders
    pub active: bool,
    /// Cumulative rating points from completed orders
    pub rating_sum: u64,
    /// Total number of ratings received
    pub rating_count: u32,
    /// Number of successfully completed orders
    pub completed_orders: u32,
}

/// Order represents a transaction between buyer and provider.
/// Tokens are held in escrow until service completion or dispute resolution.
#[account]
pub struct Order {
    /// Wallet address of the buyer
    pub buyer: Pubkey,
    /// Wallet address of the service provider
    pub provider: Pubkey,
    /// Reference to the ServiceListing being purchased
    pub listing: Pubkey,
    /// Amount of DACIT tokens held in escrow
    pub amount: u64,
    /// Current status of the order
    pub status: OrderStatus,
    /// Unix timestamp when order was created
    pub created_at: i64,
    /// Unix timestamp when order was completed (if applicable)
    pub completed_at: Option<i64>,
}

/// OrderStatus tracks the lifecycle of a marketplace order.
#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq)]
pub enum OrderStatus {
    /// Order created, awaiting provider acceptance
    Pending,
    /// Provider accepted, service being delivered
    InProgress,
    /// Provider marked service as complete, awaiting buyer confirmation
    Delivered,
    /// Buyer confirmed delivery, funds released to provider
    Completed,
    /// Order under arbitration due to dispute
    Disputed,
    /// Order cancelled, funds returned to buyer
    Refunded,
}
```

### API Endpoints

```typescript
// Marketplace API interface
interface MarketplaceAPI {
  // Service Listings
  getServices(category?: string): Promise<ServiceListing[]>;
  getServiceDetails(listingId: string): Promise<ServiceListing>;
  createListing(data: CreateListingParams): Promise<ServiceListing>;
  updateListing(listingId: string, data: UpdateListingParams): Promise<ServiceListing>;
  
  // Orders
  createOrder(listingId: string, params: OrderParams): Promise<Order>;
  getOrderStatus(orderId: string): Promise<Order>;
  confirmDelivery(orderId: string): Promise<void>;
  requestRefund(orderId: string, reason: string): Promise<void>;
  
  // Provider Management
  getProviderProfile(providerId: string): Promise<ProviderProfile>;
  getProviderReviews(providerId: string): Promise<Review[]>;
  submitReview(orderId: string, rating: number, comment: string): Promise<Review>;
  
  // Analytics
  getMarketplaceStats(): Promise<MarketplaceStats>;
  getServiceAnalytics(listingId: string): Promise<ServiceAnalytics>;
}
```

## UI Dashboard Components

### Buyer Dashboard
```
┌───────────────────────────────────────────────────────────────────────┐
│ DACIT Marketplace                                    🔗 Wallet: 3.2 SOL │
│                                                      💎 12,450 DACIT    │
├───────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌─ Service Categories ─────────────────────────────────────────────┐  │
│  │                                                                   │  │
│  │  🔍 SERP    📈 SEO     📊 Keywords  🔗 Links   📝 Content  🎯 PPC │  │
│  │  Tracking   Audits    Research     Building   Marketing  Mgmt   │  │
│  │                                                                   │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌─ Featured Services ──────────────────────────────────────────────┐  │
│  │ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐            │  │
│  │ │ SERP Pro      │ │ Full SEO      │ │ Link Building │            │  │
│  │ │ ⭐ 4.9 (127)  │ │ ⭐ 4.8 (89)   │ │ ⭐ 4.7 (156)  │            │  │
│  │ │ 300 DACIT/mo  │ │ 450 DACIT     │ │ 75 DACIT/link │            │  │
│  │ │ [View] [Buy]  │ │ [View] [Buy]  │ │ [View] [Buy]  │            │  │
│  │ └───────────────┘ └───────────────┘ └───────────────┘            │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌─ My Active Orders ───────────────────────────────────────────────┐  │
│  │ Order #1234  | SERP Tracking Pro | In Progress | 300 DACIT       │  │
│  │ Order #1189  | SEO Audit         | Delivered   | [Confirm] [Dispute] │
│  │ Order #1156  | Content Pack      | Completed   | ⭐⭐⭐⭐⭐         │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                                                        │
└───────────────────────────────────────────────────────────────────────┘
```

### Provider Dashboard
```
┌───────────────────────────────────────────────────────────────────────┐
│ Provider Portal                                      🏆 Gold Provider  │
│                                                      💰 45,200 DACIT   │
├───────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌─ Performance Metrics ────────────────────────────────────────────┐  │
│  │ ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐               │  │
│  │ │ Orders  │  │ Revenue │  │ Rating  │  │Response │               │  │
│  │ │   156   │  │ 23,450  │  │  4.8⭐  │  │  2.1hr  │               │  │
│  │ │ This Mo │  │ DACIT   │  │ Average │  │ Avg Time│               │  │
│  │ └─────────┘  └─────────┘  └─────────┘  └─────────┘               │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌─ Pending Orders ─────────────────────────────────────────────────┐  │
│  │ #1245 | John D. | SERP Pro Setup    | 300 DACIT | [Accept][Decline] │
│  │ #1246 | Maria S.| SEO Audit         | 450 DACIT | [Accept][Decline] │
│  │ #1247 | Alex T. | Keyword Research  | 150 DACIT | [Accept][Decline] │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌─ Revenue Analytics ──────────────────────────────────────────────┐  │
│  │                                                                   │  │
│  │   📈 ▁▂▃▄▅▆▇█▇▆▅▆▇█▇▆▅▄▅▆▇█▇▆▅▄▃▄▅                               │  │
│  │      Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec              │  │
│  │                                                                   │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                                                        │
└───────────────────────────────────────────────────────────────────────┘
```

## Governance & Fees

### Fee Structure
Base fees apply to Bronze tier providers. Higher tiers receive reduced platform fees.

| Fee Type | Bronze | Silver | Gold | Platinum | Recipient |
|----------|--------|--------|------|----------|-----------|
| Platform Fee | 5% | 4% | 3% | 2% | Treasury |
| Token Burn | 2% | 2% | 2% | 2% | Burn Address |
| Provider Net | 93% | 94% | 95% | 96% | Service Provider |

### Governance Parameters
Token holders can vote on:
- **Fee Adjustments**: Modify platform and burn percentages
- **Provider Requirements**: Stake amounts, verification standards
- **Service Categories**: Add/remove service types
- **Dispute Rules**: Arbitration policies and timeframes

## Roadmap Integration

| Phase | Timeline | Marketplace Milestone |
|-------|----------|----------------------|
| Alpha | Q2 2026 | Basic marketplace with SERP services |
| Beta | Q3 2026 | Full service catalog, escrow system |
| Launch | Q4 2026 | Public marketplace with all features |
| Scale | 2027 | API marketplace, automated services |

## Security Considerations

### Smart Contract Security
- Multi-signature treasury management
- Time-locked fund releases
- Audit by reputable security firms

### Provider Verification
- KYC/KYB for commercial providers
- Work sample validation
- Stake slashing for fraudulent behavior

### Data Protection
- Encrypted communication channels
- IPFS storage for service deliverables
- Privacy-preserving order data

## Summary

The DACIT Services Marketplace creates a closed-loop economy where:
1. **Miners earn** DACIT tokens through compute contributions
2. **Token holders spend** on professional marketing services
3. **Service providers earn** by delivering quality SEO/marketing work
4. **The ecosystem grows** through token utility and circulation

This utility-driven marketplace ensures DACIT token value is backed by real services, creating sustainable demand and rewarding genuine participation in the network.
