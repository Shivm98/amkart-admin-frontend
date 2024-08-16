// components/dashboard/NotificationsList.jsx
import React from "react";

export default function NotificationsList() {
  const notifications = [
    {
      id: 1,
      message: "Low stock alert: Product ABC has less than 10 items left.",
    },
    { id: 2, message: "New message from customer John Doe." },
    { id: 3, message: "Order #192541 has been shipped." },
    // Add more notifications as needed...
  ];

  return (
    <div className="bg-white p-4 rounded-md shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Notifications
      </h3>
      <ul className="space-y-2">
        {notifications.map((notification) => (
          <li key={notification.id} className="text-sm text-gray-700">
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
