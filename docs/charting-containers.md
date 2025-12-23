# Charting Containers with ApexCharts

1) Using React-ApexCharts for Line/Area Charts

ApexCharts is a popular charting library with a React wrapper — perfect for complex trend charts like conversion over time. 
ApexCharts.js

➤ Install Dependencies
npm install apexcharts react-apexcharts

➤ ConversionLineChart.tsx
"use client";

import React from "react";
import Chart from "react-apexcharts";

interface ConversionLineChartProps {
  data: number[];        // e.g., conversion rate points
  categories: string[];  // e.g., dates
}

export const ConversionLineChart: React.FC<ConversionLineChartProps> = ({
  data,
  categories,
}) => {
  const series = [
    {
      name: "Conversion %",
      data,
    },
  ];

  const options = {
    chart: {
      id: "conversion-trend",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    xaxis: {
      categories,
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#6366F1"],
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      theme: "dark",
    },
  };

  return (
    <Chart
      options={options}
      series={series}
      type="area"
      height={300}
      className="w-full"
    />
  );
};


💡 This component takes arrays of data and labels and shows an interactive area chart. 
ApexCharts.js

Usage Example

<ConversionLineChart
  data={[8.1, 8.5, 8.9, 9.1, 8.7, 9.0]}
  categories={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
/>

📈 2) Using Tremor Charts (React + Tailwind Combo)

If you want Tailwind-native, production-ready dashboard charts with minimal setup, Tremor is a great library. It’s specifically built for dashboards with Tailwind CSS and includes multiple chart types. 
tremor.so
+1

➤ Install Tremor
npm install @tremor/react

➤ Example with AreaChart in Tremor
"use client";

import React from "react";
import { Card, Title, AreaChart } from "@tremor/react";

interface TremorAreaProps {
  data: { date: string; conversions: number }[];
}

export const TremorConversionArea: React.FC<TremorAreaProps> = ({ data }) => (
  <Card className="mt-4 max-w-full">
    <Title>Conversion Trends</Title>
    <AreaChart
      className="mt-2 h-80"
      data={data}
      index="date"
      categories={["conversions"]}
      colors={["indigo"]}
      valueFormatter={(value) => `${value}%`}
    />
  </Card>
);


Usage Example

const conversionData = [
  { date: "2025-12-15", conversions: 8.1 },
  { date: "2025-12-16", conversions: 8.5 },
  { date: "2025-12-17", conversions: 8.9 },
  { date: "2025-12-18", conversions: 9.1 },
  { date: "2025-12-19", conversions: 8.7 },
];

<TremorConversionArea data={conversionData} />;


👉 Tremor provides LineChart, BarChart, DonutChart, etc., all styled with Tailwind out of the box and perfect for dashboards. 
npm

🧠 When to Choose Which Library
Option	Strengths	Best For
React-ApexCharts	Highly customizable, many chart types, flexible configuration	Complex/interactive analytics where graph behavior matters 
ApexCharts.js

Tremor (@tremor/react)	Tailwind-native styling, easy to compose with dashboard UI, accessible components	Rapid dashboards with charts integrated into Tailwind design 
tremor.so
📦 Integration Tips
✔ Tailwind + Chart Containers

Wrap the chart component with a container for consistent spacing & styling:

<div className="bg-white rounded-lg shadow-md p-6">
  <ConversionLineChart
    data={…}
    categories={…}
  />
</div>

✔ Responsive Layouts

Use Tailwind grid utilities to place multiple charts side by side:

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  <ConversionLineChart … />
  <TremorConversionArea … />
</div>

✔ Handling Dynamic Data

Fetch analytics data from your API or blockchain backend, then pass it as props:

const [chartData, setChartData] = useState([]);
useEffect(() => {
  fetch("/api/conversionMetrics")
    .then(res => res.json())
    .then(setChartData);
}, []);
