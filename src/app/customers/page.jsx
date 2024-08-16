"use client";
import React, { useState } from "react";
import CustomersHeader from "../../components/customers/CustomersHeader";
import CustomersFilters from "../../components/customers/CustomersFilters";
import CustomersTable from "../../components/customers/CustomersTable";

export default function CustomersPage() {
  const [selectedRows, setSelectedRows] = useState([]);

  // Dummy data for customers
  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 123-456-7890",
      type: "Regular",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1 987-654-3210",
      type: "VIP",
      status: "Inactive",
    },
    // Add more dummy data...
  ];

  const headers = [
    { label: "Name", key: "name", sortable: true, width: "20%" },
    { label: "Email", key: "email", sortable: true, width: "20%" },
    { label: "Phone", key: "phone", sortable: true, width: "20%" },
    { label: "Customer Type", key: "type", sortable: true, width: "15%" },
    { label: "Status", key: "status", sortable: true, width: "15%" },
    { label: "Actions", key: "actions", sortable: false, width: "10%" },
  ];

  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  const customerTypes = [
    { value: "regular", label: "Regular" },
    { value: "vip", label: "VIP" },
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
    // Fetch sorted data from the backend using `key` and `direction`
  };

  return (
    <div className="flex flex-col space-y-8">
      <CustomersHeader />
      <CustomersFilters
        statusOptions={statusOptions}
        customerTypes={customerTypes}
        searchPlaceholder="Search Customers..."
      />
      <CustomersTable
        headers={headers}
        customers={customers}
        selectedRows={selectedRows}
        handleSelectRow={handleSelectRow}
        handleSelectAllRows={handleSelectAllRows}
        onSort={handleSort} // Pass the sort handler
      />
    </div>
  );
}
