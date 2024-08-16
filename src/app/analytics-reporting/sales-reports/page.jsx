"use client";
import { useState } from "react";
import SalesReportsHeader from "@/components/analytics-reporting/sales-reports/SalesReportsHeader";
import SalesReportsFilters from "@/components/analytics-reporting/sales-reports/SalesReportsFilters";
import SalesReportsTable from "@/components/analytics-reporting/sales-reports/SalesReportsTable";

export default function SalesReportsPage() {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAllRows = () => {
    if (selectedRows.length === salesReports.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(salesReports.map((report) => report.id));
    }
  };

  const handleSort = (key, direction) => {
    console.log(`Sorting by ${key} in ${direction} order`);
  };

  const salesReports = [
    {
      id: 1,
      date: "2024-08-01",
      totalSales: "$15,000",
      numberOfOrders: 120,
      averageOrderValue: "$125",
    },
    // Add more reports here...
  ];

  const headers = [
    { label: "Date", key: "date", sortable: true },
    { label: "Total Sales", key: "totalSales", sortable: true },
    { label: "Number of Orders", key: "numberOfOrders", sortable: true },
    { label: "Average Order Value", key: "averageOrderValue", sortable: true },
    { label: "Actions", key: "actions", sortable: false },
  ];

  return (
    <div className="flex flex-col space-y-6">
      <SalesReportsHeader selectedRows={selectedRows} />
      <SalesReportsFilters />
      <SalesReportsTable
        headers={headers}
        reports={salesReports}
        selectedRows={selectedRows}
        handleSelectRow={handleSelectRow}
        handleSelectAllRows={handleSelectAllRows}
        onSort={handleSort}
      />
    </div>
  );
}
