import React from "react";

export default function NotificationsHeader() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-semibold text-gray-800">Notifications</h1>
      <button className="flex items-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
        Clear All
      </button>
    </div>
  );
}
