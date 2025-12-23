import React from "react";

interface KpiCardProps {
  /** Label for the metric */
  label: string;
  /** Value to display */
  value: string | number;
  /** Optional trend text (e.g., "+0.8% vs last week") */
  trendText?: string;
  /** Color class for trend text */
  trendColor?: string;
}

/**
 * KPI Card Component
 *
 * Displays a key performance indicator with label, value, and optional trend.
 */
export const KpiCard: React.FC<KpiCardProps> = ({
  label,
  value,
  trendText,
  trendColor = "text-green-500",
}) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border">
    <p className="text-sm font-semibold text-gray-500">{label}</p>
    <h3 className="mt-2 text-2xl font-bold text-gray-800">{value}</h3>
    {trendText && <p className={`text-xs ${trendColor} mt-1`}>{trendText}</p>}
  </div>
);

export default KpiCard;
