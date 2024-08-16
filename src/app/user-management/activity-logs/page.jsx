"use client";
import { useState } from "react";
import ActivityLogsHeader from "@/components/user-management/activity-logs/ActivityLogsHeader";
import ActivityLogsFilters from "@/components/user-management/activity-logs/ActivityLogsFilters";
import ActivityLogsTable from "@/components/user-management/activity-logs/ActivityLogsTable";

export default function ActivityLogsPage() {
  const [selectedRows, setSelectedRows] = useState([]);

  const adminOptions = [
    { value: "admin1", label: "Admin 1" },
    { value: "admin2", label: "Admin 2" },
  ];

  const logs = [
    {
      id: 1,
      admin: "Admin 1",
      action: "Created a new product",
      timestamp: "2024-07-01 14:30",
    },
    // Add more logs here...
  ];

  const headers = [
    { label: "Admin", key: "admin", sortable: true },
    { label: "Action", key: "action", sortable: true },
    { label: "Timestamp", key: "timestamp", sortable: true },
    { label: "Actions", key: "actions", sortable: false },
  ];

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAllRows = () => {
    if (selectedRows.length === logs.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(logs.map((log) => log.id));
    }
  };

  const handleSort = (key, direction) => {
    console.log(`Sorting by ${key} in ${direction} order`);
  };

  return (
    <div className="flex flex-col space-y-6">
      <ActivityLogsHeader
        selectedRows={selectedRows}
        handleBulkAction={() => {
          /* handle bulk action */
        }}
      />
      <ActivityLogsFilters adminOptions={adminOptions} />
      <ActivityLogsTable
        headers={headers}
        logs={logs}
        selectedRows={selectedRows}
        handleSelectRow={handleSelectRow}
        handleSelectAllRows={handleSelectAllRows}
        onSort={handleSort}
      />
    </div>
  );
}
