import React, { ReactNode } from "react";

interface ConversionChartProps {
  /** Chart title */
  title?: string;
  /** Chart component to render inside the container */
  children: ReactNode;
}

/**
 * ConversionChart is a container component for displaying
 * conversion trend charts. Wrap your chart library component
 * (e.g., ApexCharts, Tremor, Recharts) inside this container.
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
