"use client";
import { useState } from "react";
import CategoriesHeader from "../../../components/inventory/categories/CategoriesHeader";
import CategoriesFilters from "../../../components/inventory/categories/CategoriesFilters";
import CategoriesTable from "../../../components/inventory/categories/CategoriesTable";

export default function CategoriesPage() {
  const [selectedRows, setSelectedRows] = useState([]);

  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  const categoryItems = [
    {
      id: 1,
      name: "Grinding Equipment",
      status: "Active",
    },
    // Add more categories here...
  ];

  const headers = [
    { label: "Name", key: "name", sortable: true },
    { label: "Status", key: "status", sortable: true },
    { label: "Actions", key: "actions", sortable: false },
  ];

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAllRows = () => {
    if (selectedRows.length === categoryItems.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(categoryItems.map((item) => item.id));
    }
  };

  const handleSort = (key, direction) => {
    console.log(`Sorting by ${key} in ${direction} order`);
  };

  return (
    <div className="flex flex-col space-y-6">
      <CategoriesHeader
        selectedRows={selectedRows}
        handleBulkAction={() => {
          /* handle bulk action */
        }}
      />
      <CategoriesFilters statusOptions={statusOptions} />
      <CategoriesTable
        headers={headers}
        categoryItems={categoryItems}
        selectedRows={selectedRows}
        handleSelectRow={handleSelectRow}
        handleSelectAllRows={handleSelectAllRows}
        onSort={handleSort}
      />
    </div>
  );
}
