"use client";
import React, { useState } from "react";
import PaymentsHeader from "../../components/payments/PaymentsHeader";
import PaymentsFilters from "../../components/payments/PaymentsFilters";
import PaymentsTable from "../../components/payments/PaymentsTable";

export default function PaymentsPage() {
  const [selectedRows, setSelectedRows] = useState([]);

  // Dummy data for payments
  const payments = [
    {
      id: 1,
      paymentId: "P12345",
      customerName: "John Doe",
      paymentMethod: "Credit Card",
      status: "Completed",
      amount: "$500.00",
      date: "Aug 01, 2024",
    },
    {
      id: 2,
      paymentId: "P12346",
      customerName: "Jane Smith",
      paymentMethod: "PayPal",
      status: "Pending",
      amount: "$300.00",
      date: "Aug 02, 2024",
    },
    // Add more dummy data...
  ];

  const headers = [
    { label: "Payment ID", key: "paymentId", sortable: true, width: "20%" },
    {
      label: "Customer Name",
      key: "customerName",
      sortable: true,
      width: "20%",
    },
    {
      label: "Payment Method",
      key: "paymentMethod",
      sortable: true,
      width: "20%",
    },
    { label: "Status", key: "status", sortable: true, width: "15%" },
    { label: "Amount", key: "amount", sortable: true, width: "15%" },
    { label: "Date", key: "date", sortable: true, width: "10%" },
    { label: "Actions", key: "actions", sortable: false, width: "10%" },
  ];

  const statusOptions = [
    { value: "completed", label: "Completed" },
    { value: "pending", label: "Pending" },
    { value: "failed", label: "Failed" },
  ];

  const paymentMethods = [
    { value: "credit-card", label: "Credit Card" },
    { value: "paypal", label: "PayPal" },
    { value: "bank-transfer", label: "Bank Transfer" },
  ];

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAllRows = () => {
    if (selectedRows.length === payments.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(payments.map((payment) => payment.id));
    }
  };

  const handleSort = (key, direction) => {
    console.log(`Sorting by ${key} in ${direction} order`);
    // Fetch sorted data from the backend using `key` and `direction`
  };

  return (
    <div className="flex flex-col space-y-8">
      <PaymentsHeader />
      <PaymentsFilters
        statusOptions={statusOptions}
        paymentMethods={paymentMethods}
        searchPlaceholder="Search Payments..."
      />
      <PaymentsTable
        headers={headers}
        payments={payments}
        selectedRows={selectedRows}
        handleSelectRow={handleSelectRow}
        handleSelectAllRows={handleSelectAllRows}
        onSort={handleSort} // Pass the sort handler
      />
    </div>
  );
}
