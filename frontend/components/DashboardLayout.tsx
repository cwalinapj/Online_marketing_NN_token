import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

/**
 * Dashboard Layout Component
 *
 * Provides a common layout wrapper with sidebar navigation.
 */
export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => (
  <div className="flex min-h-screen bg-gray-100">
    {/* Sidebar */}
    <aside className="w-64 bg-white shadow-lg border-r">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-800">DACIT</h1>
      </div>
      <nav className="p-6 space-y-4 text-gray-700">
        <a
          href="/metrics"
          className="block font-semibold hover:text-indigo-600 transition-colors"
        >
          Conversion Metrics
        </a>
        <a
          href="/tokens"
          className="block font-semibold hover:text-indigo-600 transition-colors"
        >
          Token Overview
        </a>
        <a
          href="/nodes"
          className="block font-semibold hover:text-indigo-600 transition-colors"
        >
          Nodes
        </a>
        <a
          href="/staking"
          className="block font-semibold hover:text-indigo-600 transition-colors"
        >
          Staking
        </a>
      </nav>
    </aside>

    {/* Main Content */}
    <main className="flex-grow p-6 overflow-y-auto">{children}</main>
  </div>
);

export default DashboardLayout;
