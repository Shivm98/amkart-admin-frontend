// components/dashboard/Notifications.jsx
import NotificationsList from "@/components/dashboard/NotificationsList";

export default function Notifications() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Notifications</h2>
      <NotificationsList />
    </div>
  );
}
