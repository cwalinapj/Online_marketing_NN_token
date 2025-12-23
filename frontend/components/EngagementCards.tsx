import React from "react";

interface EngagementCardProps {
  title: string;
  value: string | number;
}

/**
 * Engagement Card Component
 *
 * Displays a single engagement metric.
 */
export const EngagementCard: React.FC<EngagementCardProps> = ({
  title,
  value,
}) => (
  <div className="bg-white p-4 rounded-lg shadow-md border">
    <p className="text-sm font-medium text-gray-600">{title}</p>
    <h3 className="text-xl font-bold text-gray-800">{value}</h3>
  </div>
);

interface EngagementMetrics {
  avgTimeOnPage: string;
  pagesPerSession: string | number;
  ctaClicks: string | number;
}

interface EngagementRowProps {
  metrics?: EngagementMetrics;
}

/**
 * Engagement Row Component
 *
 * Displays a row of engagement metric cards.
 * Default values are provided if no metrics are passed.
 */
export const EngagementRow: React.FC<EngagementRowProps> = ({ metrics }) => {
  const defaultMetrics: EngagementMetrics = {
    avgTimeOnPage: "1m 45s",
    pagesPerSession: "3.2",
    ctaClicks: "8,191",
  };

  const data = metrics || defaultMetrics;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <EngagementCard title="Avg Time on Page" value={data.avgTimeOnPage} />
      <EngagementCard title="Pages / Session" value={data.pagesPerSession} />
      <EngagementCard title="CTA Clicks" value={data.ctaClicks} />
    </div>
  );
};

export default EngagementRow;
