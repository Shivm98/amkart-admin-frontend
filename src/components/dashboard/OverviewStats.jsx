// components/dashboard/OverviewStats.jsx
import OverviewStatsCards from "@/components/dashboard/OverviewStatsCards";
import OverviewStatsGraphs from "@/components/dashboard/OverviewStatsGraphs";

export default function OverviewStats() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Overview Stats</h2>
      <OverviewStatsCards />
      <OverviewStatsGraphs />
    </div>
  );
}
