// app/page.jsx (or app/dashboard/page.jsx if using a dashboard subfolder)
"use client";
import OverviewStats from "@/components/dashboard/OverviewStats";
import RecentOrders from "@/components/dashboard/RecentOrders";
import Notifications from "@/components/dashboard/Notifications";

export default function DashboardPage() {
  return (
    <div className="flex flex-col space-y-8">
      <OverviewStats />
      <RecentOrders />
      <Notifications />
    </div>
  );
}
