import React from "react";

interface ConversionChartProps {
  title?: string;
  children: React.ReactNode;
}

/**
 * Conversion Chart Component
 *
 * Container for embedding chart components (ApexCharts, Tremor, etc.)
 */
export const ConversionChart: React.FC<ConversionChartProps> = ({
  title = "Conversion Trend (Last 30 Days)",
  children,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md w-full">
    <h2 className="text-xl font-semibold text-gray-700 mb-4">{title}</h2>
    <div className="h-64 w-full">{children}</div>
  </div>
);

export default ConversionChart;
