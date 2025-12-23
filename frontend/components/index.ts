/**
 * Frontend Components Index
 *
 * Central export for all DACIT frontend components.
 */

// Layout Components
export { default as DashboardLayout } from "./DashboardLayout";
export { default as SolanaWalletProvider } from "./WalletProvider";

// Dashboard Components
export { default as KpiCard } from "./KpiCard";
export { default as ConversionChart } from "./ConversionChart";
export { default as PerformanceTable } from "./PerformanceTable";
export type { PerformanceRow } from "./PerformanceTable";

// Engagement Components
export { EngagementCard, EngagementRow } from "./EngagementCards";

// Staking Components
export { default as StakePanel } from "./StakePanel";
