// components/dashboard/OverviewStatsCards.jsx
import React from "react";

export default function OverviewStatsCards() {
  const stats = [
    { label: "Total Sales", value: "$1,230,000" },
    { label: "Active Users", value: "1,254" },
    { label: "Pending Orders", value: "34" },
    { label: "Products Sold", value: "8,120" },
    // Add more stats as needed...
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-4 rounded-md shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800">{stat.label}</h3>
          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
