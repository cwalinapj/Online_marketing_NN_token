import React from "react";

export interface PerformanceRow {
  /** Variant identifier (e.g., "A", "B", "C") */
  variant: string;
  /** Number of visitors */
  visitors: number;
  /** Number of conversions */
  conversions: number;
  /** Conversion rate as a string (e.g., "8.95%") */
  conversionRate: string;
  /** Cost per acquisition (e.g., "$9.10") */
  costPerAcquisition: string;
}

interface PerformanceTableProps {
  /** Array of performance data rows */
  data: PerformanceRow[];
}

/**
 * PerformanceTable displays A/B test variant performance metrics.
 * Shows visitors, conversions, conversion rate, and CPA for each variant.
 */
export const PerformanceTable: React.FC<PerformanceTableProps> = ({ data }) => (
  <div className="overflow-x-auto p-4">
    <table className="min-w-full bg-white rounded-lg shadow">
      <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
        <tr>
          <th className="py-3 px-6 text-left">Variant</th>
          <th className="py-3 px-6 text-right">Visitors</th>
          <th className="py-3 px-6 text-right">Conversions</th>
          <th className="py-3 px-6 text-right">Conv %</th>
          <th className="py-3 px-6 text-right">CPA</th>
        </tr>
      </thead>
      <tbody className="text-gray-700 text-sm">
        {data.map((row, index) => (
          <tr
            key={row.variant}
            className={index % 2 === 1 ? "bg-gray-50" : ""}
          >
            <td className="py-3 px-6">{row.variant}</td>
            <td className="py-3 px-6 text-right">{row.visitors.toLocaleString()}</td>
            <td className="py-3 px-6 text-right">{row.conversions.toLocaleString()}</td>
            <td className="py-3 px-6 text-right">{row.conversionRate}</td>
            <td className="py-3 px-6 text-right">{row.costPerAcquisition}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PerformanceTable;
