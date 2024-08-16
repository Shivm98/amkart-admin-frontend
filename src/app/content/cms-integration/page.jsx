"use client";
import { useState } from "react";
import CMSIntegrationHeader from "@/components/content/cms-integration/CMSIntegrationHeader";
import CMSIntegrationFilters from "@/components/content/cms-integration/CMSIntegrationFilters";
import CMSIntegrationTable from "@/components/content/cms-integration/CMSIntegrationTable";

export default function CMSIntegrationPage() {
  const [selectedRows, setSelectedRows] = useState([]);

  const pages = [
    {
      id: 1,
      name: "About Us",
      status: "Published",
      lastUpdated: "2024-08-01",
    },
    // Add more pages here...
  ];

  const headers = [
    { label: "Page Name", key: "name", sortable: true },
    { label: "Status", key: "status", sortable: true },
    { label: "Last Updated", key: "lastUpdated", sortable: true },
    { label: "Actions", key: "actions", sortable: false },
  ];

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAllRows = () => {
    if (selectedRows.length === pages.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(pages.map((page) => page.id));
    }
  };

  const handleSort = (key, direction) => {
    console.log(`Sorting by ${key} in ${direction} order`);
  };

  return (
    <div className="flex flex-col space-y-6">
      <CMSIntegrationHeader
        selectedRows={selectedRows}
        handleBulkAction={() => {
          /* handle bulk action */
        }}
      />
      <CMSIntegrationFilters />
      <CMSIntegrationTable
        headers={headers}
        pages={pages}
        selectedRows={selectedRows}
        handleSelectRow={handleSelectRow}
        handleSelectAllRows={handleSelectAllRows}
        onSort={handleSort}
      />
    </div>
  );
}
