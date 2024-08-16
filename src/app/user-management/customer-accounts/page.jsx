"use client";
import { useState } from "react";
import CustomerAccountsHeader from "@/components/user-management/customer-accounts/CustomerAccountsHeader";
import CustomerAccountsFilters from "@/components/user-management/customer-accounts/CustomerAccountsFilters";
import CustomerAccountsTable from "@/components/user-management/customer-accounts/CustomerAccountsTable";

export default function CustomerAccountsPage() {
  const [selectedRows, setSelectedRows] = useState([]);

  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      status: "Active",
      createdDate: "2024-06-01",
    },
    // Add more customers here...
  ];

  const headers = [
    { label: "Name", key: "name", sortable: true },
    { label: "Email", key: "email", sortable: true },
    { label: "Status", key: "status", sortable: true },
    { label: "Created Date", key: "createdDate", sortable: true },
    { label: "Actions", key: "actions", sortable: false },
  ];

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAllRows = () => {
    if (selectedRows.length === customers.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(customers.map((customer) => customer.id));
    }
  };

  const handleSort = (key, direction) => {
    console.log(`Sorting by ${key} in ${direction} order`);
  };

  return (
    <div className="flex flex-col space-y-6">
      <CustomerAccountsHeader
        selectedRows={selectedRows}
        handleBulkAction={() => {
          /* handle bulk action */
        }}
      />
      <CustomerAccountsFilters statusOptions={statusOptions} />
      <CustomerAccountsTable
        headers={headers}
        customers={customers}
        selectedRows={selectedRows}
        handleSelectRow={handleSelectRow}
        handleSelectAllRows={handleSelectAllRows}
        onSort={handleSort}
      />
    </div>
  );
}
