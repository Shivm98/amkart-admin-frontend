"use client";
import React, { useState } from "react";
import NotificationsHeader from "../../components/notifications/NotificationsHeader";
import NotificationsFilters from "../../components/notifications/NotificationsFilters";
import NotificationsTable from "../../components/notifications/NotificationsTable";

export default function NotificationsPage() {
  const [selectedRows, setSelectedRows] = useState([]);

  // Dummy data for notifications
  const notifications = [
    {
      id: 1,
      message: "Order #192541 has been shipped.",
      type: "Order Update",
      status: "Unread",
      date: "Aug 15, 2024",
    },
    {
      id: 2,
      message: "New message from John Doe.",
      type: "Message",
      status: "Read",
      date: "Aug 14, 2024",
    },
    // Add more dummy data...
  ];

  const headers = [
    { label: "Message", key: "message", sortable: true, width: "40%" },
    { label: "Type", key: "type", sortable: true, width: "20%" },
    { label: "Status", key: "status", sortable: true, width: "15%" },
    { label: "Date", key: "date", sortable: true, width: "15%" },
    { label: "Actions", key: "actions", sortable: false, width: "10%" },
  ];

  const statusOptions = [
    { value: "read", label: "Read" },
    { value: "unread", label: "Unread" },
  ];

  const notificationTypes = [
    { value: "order-update", label: "Order Update" },
    { value: "message", label: "Message" },
    { value: "promotion", label: "Promotion" },
  ];

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAllRows = () => {
    if (selectedRows.length === notifications.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(notifications.map((notification) => notification.id));
    }
  };

  const handleSort = (key, direction) => {
    console.log(`Sorting by ${key} in ${direction} order`);
    // Fetch sorted data from the backend using `key` and `direction`
  };

  return (
    <div className="flex flex-col space-y-8">
      <NotificationsHeader />
      <NotificationsFilters
        statusOptions={statusOptions}
        notificationTypes={notificationTypes}
        searchPlaceholder="Search Notifications..."
      />
      <NotificationsTable
        headers={headers}
        notifications={notifications}
        selectedRows={selectedRows}
        handleSelectRow={handleSelectRow}
        handleSelectAllRows={handleSelectAllRows}
        onSort={handleSort} // Pass the sort handler
      />
    </div>
  );
}
