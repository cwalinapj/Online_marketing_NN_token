# Tailwind Utility Components

1. Conversion KPI Cards

These cards are great for showing conversion rate, CTR, CPA, and Bounce Rate at a glance.

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
  {/* Conversion Rate */}
  <div className="bg-white p-4 rounded-lg shadow">
    <p className="text-sm font-semibold text-gray-500">Conversion Rate</p>
    <h3 className="mt-2 text-2xl font-bold text-gray-800">8.7%</h3>
    <p className="text-xs text-green-500">+0.8% vs last period</p>
  </div>

  {/* Click-Thru Rate (CTR) */}
  <div className="bg-white p-4 rounded-lg shadow">
    <p className="text-sm font-semibold text-gray-500">Click-Thru Rate</p>
    <h3 className="mt-2 text-2xl font-bold text-gray-800">12.3%</h3>
  </div>

  {/* Cost Per Acquisition */}
  <div className="bg-white p-4 rounded-lg shadow">
    <p className="text-sm font-semibold text-gray-500">Cost Per Acquisition</p>
    <h3 className="mt-2 text-2xl font-bold text-gray-800">$9.45</h3>
  </div>

  {/* Bounce Rate */}
  <div className="bg-white p-4 rounded-lg shadow">
    <p className="text-sm font-semibold text-gray-500">Bounce Rate</p>
    <h3 className="mt-2 text-2xl font-bold text-gray-800">43%</h3>
  </div>
</div>


✔ Uses Tailwind utility classes for spacing, backgrounds, and typography.
✔ Good starting point for your “top metrics” section. 
Tailwind CSS

📊 2. Chart Placeholder Container

If you integrate a chart library (Chart.js, ApexCharts, Tremor, etc.), wrap your chart in a styled Tailwind container:

<div className="bg-white rounded-lg shadow-md p-6 m-4">
  <h2 className="text-xl font-semibold text-gray-700 mb-4">
    Conversion Trend (Last 30 Days)
  </h2>
  <div className="w-full h-64">
    {/* Insert your chart component here */}
    {/* e.g., <LineChart data={chartData} /> */}
  </div>
</div>


🧠 You can embed any chart library inside this container — the utility classes make it responsive and visually clean. 
Flowbite

📋 3. Segment Performance Table

Use Tailwind table utilities to show variant performance or traffic segments:

<div className="overflow-x-auto p-4">
  <table className="min-w-full bg-white rounded-lg">
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
      <tr>
        <td className="py-3 px-6">A</td>
        <td className="py-3 px-6 text-right">8,420</td>
        <td className="py-3 px-6 text-right">754</td>
        <td className="py-3 px-6 text-right">8.95%</td>
        <td className="py-3 px-6 text-right">$9.10</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="py-3 px-6">B</td>
        <td className="py-3 px-6 text-right">5,310</td>
        <td class="py-3 px-6 text-right">398</td>
        <td className="py-3 px-6 text-right">7.49%</td>
        <td className="py-3 px-6 text-right">$10.50</td>
      </tr>
      <tr>
        <td className="py-3 px-6">C</td>
        <td className="py-3 px-6 text-right">3,290</td>
        <td className="py-3 px-6 text-right">287</td>
        <td className="py-3 px-6 text-right">8.73%</td>
        <td className="py-3 px-6 text-right">$8.45</td>
      </tr>
    </tbody>
  </table>
</div>


✔ Clean table layout with responsive scrolling on overflow.
✔ Great for presenting data sets in dashboards. 
Tailwind CSS

📈 4. Engagement Metrics Row

For a compact section showing Avg Time on Page, Pages per Session, CTA Clicks, etc.:

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
  <div className="bg-white p-4 rounded-lg shadow-md">
    <p className="text-sm font-medium text-gray-600">Avg Time on Page</p>
    <h3 className="text-xl font-bold text-gray-800">1m 45s</h3>
  </div>
  <div className="bg-white p-4 rounded-lg shadow-md">
    <p className="text-sm font-medium text-gray-600">Pages / Session</p>
    <h3 className="text-xl font-bold text-gray-800">3.2</h3>
  </div>
  <div className="bg-white p-4 rounded-lg shadow-md">
    <p className="text-sm font-medium text-gray-600">CTA Clicks</p>
    <h3 className="text-xl font-bold text-gray-800">8,191</h3>
  </div>
</div>


📌 These cards help stakeholders see deeper engagement signals that support conversion insights. 
Tailwind CSS

🧠 5. Sidebar & Layout Skeleton (Optional)

For a full dashboard layout with a sidebar:

<div className="flex h-screen bg-gray-100">
  {/* Sidebar */}
  <aside className="w-64 bg-white shadow-lg border-r">
    <nav className="p-6 space-y-4">
      <a href="#" className="block text-gray-700 font-semibold">Dashboard</a>
      <a href="#" className="block text-gray-700 font-semibold">Conversion Metrics</a>
      <a href="#" className="block text-gray-700 font-semibold">Node Stats</a>
    </nav>
  </aside>

  {/* Main Content */}
  <main className="flex-grow p-6 overflow-y-auto">
    {/* Place the KPI cards, chart containers, and tables here */}
  </main>
</div>


✔ Useful starting point for a full dashboard panel.
✔ Sidebar links correspond to major dashboard sections such as Conversion or Token Stats. 
FreeFrontend

🧩 Integration Tips
Charts

You can embed interactive charts (e.g., ApexCharts with Flowbite/Tailwind, Recharts, or Chart.js) inside the chart container above to visualize trends. Use Tailwind utility classes for padding and layout but let the chart library render the SVG/Canvas content. 
Flowbite

Responsiveness

Tailwind’s grid utilities like grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ensure your dashboard adapts to mobile, tablet, and desktop widths without extra CSS. 
Tailwind CSS

Design Consistency

Use Tailwind’s utility classes like shadow-md, rounded-lg, text-gray-800, and bg-white for a clean, modern admin UI. Tailwind’s official UI blocks include similar patterns you can extend.
