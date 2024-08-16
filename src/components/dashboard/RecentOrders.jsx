// components/dashboard/RecentOrders.jsx
import RecentOrdersTable from "@/components/dashboard/RecentOrdersTable";

export default function RecentOrders() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Recent Orders</h2>
      <RecentOrdersTable />
    </div>
  );
}
