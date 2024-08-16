"use client";

import { useState } from "react";
import TicketingSystemHeader from "@/components/customer-support/ticketing-system/TicketingSystemHeader";
import TicketingSystemFilters from "@/components/customer-support/ticketing-system/TicketingSystemFilters";
import TicketingSystemTable from "@/components/customer-support/ticketing-system/TicketingSystemTable";

export default function TicketingSystemPage() {
  const [selectedRows, setSelectedRows] = useState([]);

  const statusOptions = [
    { value: "open", label: "Open" },
    { value: "closed", label: "Closed" },
    { value: "pending", label: "Pending" },
  ];

  const tickets = [
    {
      id: 1,
      subject: "Order not received",
      customer: "John Doe",
      status: "Open",
      createdAt: "2024-08-15",
    },
    // Add more ticket data here...
  ];

  const headers = [
    { label: "Subject", key: "subject", sortable: true },
    { label: "Customer", key: "customer", sortable: true },
    { label: "Status", key: "status", sortable: true },
    { label: "Created At", key: "createdAt", sortable: true },
    { label: "Actions", key: "actions", sortable: false },
  ];

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAllRows = () => {
    if (selectedRows.length === tickets.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(tickets.map((ticket) => ticket.id));
    }
  };

  const handleSort = (key, direction) => {
    console.log(`Sorting by ${key} in ${direction} order`);
  };

  return (
    <div className="flex flex-col space-y-6">
      <TicketingSystemHeader
        selectedRows={selectedRows}
        handleBulkAction={() => {
          /* handle bulk action */
        }}
      />
      <TicketingSystemFilters statusOptions={statusOptions} />
      <TicketingSystemTable
        headers={headers}
        tickets={tickets}
        selectedRows={selectedRows}
        handleSelectRow={handleSelectRow}
        handleSelectAllRows={handleSelectAllRows}
        onSort={handleSort}
      />
    </div>
  );
}
