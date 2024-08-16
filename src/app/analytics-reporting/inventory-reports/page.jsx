"use client";
import { useState } from "react";
import InventoryReportsHeader from "@/components/analytics-reporting/inventory-reports/InventoryReportsHeader";
import InventoryReportsFilters from "@/components/analytics-reporting/inventory-reports/InventoryReportsFilters";
import InventoryReportsTable from "@/components/analytics-reporting/inventory-reports/InventoryReportsTable";

export default function InventoryReportsPage() {
  const [selectedRows, setSelectedRows] = useState([]);

  const inventoryReports = [
    {
      id: 1,
      productName: "Stihl TS 800 cut-off machine",
      stockLevel: 10,
      totalSales: "$15,900",
      lastRestocked: "2024-08-01",
    },
    // Add more inventory reports here...
  ];

  const headers = [
    { label: "Product Name", key: "productName", sortable: true },
    { label: "Stock Level", key: "stockLevel", sortable: true },
    { label: "Total Sales", key: "totalSales", sortable: true },
    { label: "Last Restocked", key: "lastRestocked", sortable: true },
    { label: "Actions", key: "actions", sortable: false },
  ];

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAllRows = () => {
    if (selectedRows.length === inventoryReports.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(inventoryReports.map((report) => report.id));
    }
  };

  const handleSort = (key, direction) => {
    console.log(`Sorting by ${key} in ${direction} order`);
  };

  return (
    <div className="flex flex-col space-y-6">
      <InventoryReportsHeader
        selectedRows={selectedRows}
        handleBulkAction={() => {
          /* handle bulk action */
        }}
      />
      <InventoryReportsFilters />
      <InventoryReportsTable
        headers={headers}
        reports={inventoryReports}
        selectedRows={selectedRows}
        handleSelectRow={handleSelectRow}
        handleSelectAllRows={handleSelectAllRows}
        onSort={handleSort}
      />
    </div>
  );
}
