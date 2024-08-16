"use client";
import { useState } from "react";
import CustomerReportsHeader from "@/components/analytics-reporting/customer-reports/CustomerReportsHeader";
import CustomerReportsFilters from "@/components/analytics-reporting/customer-reports/CustomerReportsFilters";
import CustomerReportsTable from "@/components/analytics-reporting/customer-reports/CustomerReportsTable";

export default function CustomerReportsPage() {
  const [selectedRows, setSelectedRows] = useState([]);

  const customerReports = [
    {
      id: 1,
      customerName: "John Doe",
      totalSpent: "$2,500",
      totalOrders: 15,
      lastOrderDate: "2024-08-01",
    },
    // Add more customer reports here...
  ];

  const headers = [
    { label: "Customer Name", key: "customerName", sortable: true },
    { label: "Total Spent", key: "totalSpent", sortable: true },
    { label: "Total Orders", key: "totalOrders", sortable: true },
    { label: "Last Order Date", key: "lastOrderDate", sortable: true },
    { label: "Actions", key: "actions", sortable: false },
  ];

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAllRows = () => {
    if (selectedRows.length === customerReports.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(customerReports.map((report) => report.id));
    }
  };

  const handleSort = (key, direction) => {
    console.log(`Sorting by ${key} in ${direction} order`);
  };

  return (
    <div className="flex flex-col space-y-6">
      <CustomerReportsHeader
        selectedRows={selectedRows}
        handleBulkAction={() => {
          /* handle bulk action */
        }}
      />
      <CustomerReportsFilters />
      <CustomerReportsTable
        headers={headers}
        reports={customerReports}
        selectedRows={selectedRows}
        handleSelectRow={handleSelectRow}
        handleSelectAllRows={handleSelectAllRows}
        onSort={handleSort}
      />
    </div>
  );
}
