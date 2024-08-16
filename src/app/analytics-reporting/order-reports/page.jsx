"use client";
import { useState } from "react";
import OrderReportsHeader from "@/components/analytics-reporting/order-reports/OrderReportsHeader";
import OrderReportsFilters from "@/components/analytics-reporting/order-reports/OrderReportsFilters";
import OrderReportsTable from "@/components/analytics-reporting/order-reports/OrderReportsTable";

export default function OrderReportsPage() {
  const [selectedRows, setSelectedRows] = useState([]);

  const orderReports = [
    {
      id: 1,
      orderNumber: "192541",
      customerName: "Esther Howard",
      totalAmount: "$3,127.00",
      status: "Completed",
      orderDate: "2024-08-10",
    },
    // Add more order reports here...
  ];

  const headers = [
    { label: "Order Number", key: "orderNumber", sortable: true },
    { label: "Customer Name", key: "customerName", sortable: true },
    { label: "Total Amount", key: "totalAmount", sortable: true },
    { label: "Status", key: "status", sortable: true },
    { label: "Order Date", key: "orderDate", sortable: true },
    { label: "Actions", key: "actions", sortable: false },
  ];

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAllRows = () => {
    if (selectedRows.length === orderReports.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(orderReports.map((report) => report.id));
    }
  };

  const handleSort = (key, direction) => {
    console.log(`Sorting by ${key} in ${direction} order`);
  };

  return (
    <div className="flex flex-col space-y-6">
      <OrderReportsHeader
        selectedRows={selectedRows}
        handleBulkAction={() => {
          /* handle bulk action */
        }}
      />
      <OrderReportsFilters />
      <OrderReportsTable
        headers={headers}
        reports={orderReports}
        selectedRows={selectedRows}
        handleSelectRow={handleSelectRow}
        handleSelectAllRows={handleSelectAllRows}
        onSort={handleSort}
      />
    </div>
  );
}
