"use client";
import { useState } from "react";
import SubcategoriesHeader from "../../../components/inventory/subcategories/SubcategoriesHeader";
import SubcategoriesFilters from "../../../components/inventory/subcategories/SubcategoriesFilters";
import SubcategoriesTable from "../../../components/inventory/subcategories/SubcategoriesTable";

export default function SubcategoriesPage() {
  const [selectedRows, setSelectedRows] = useState([]);

  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  const subcategoryItems = [
    {
      id: 1,
      name: "Diamond Discs",
      category: "Grinding Equipment",
      status: "Active",
    },
    // Add more subcategories here...
  ];

  const headers = [
    { label: "Name", key: "name", sortable: true },
    { label: "Category", key: "category", sortable: true },
    { label: "Status", key: "status", sortable: true },
    { label: "Actions", key: "actions", sortable: false },
  ];

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAllRows = () => {
    if (selectedRows.length === subcategoryItems.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(subcategoryItems.map((item) => item.id));
    }
  };

  const handleSort = (key, direction) => {
    console.log(`Sorting by ${key} in ${direction} order`);
  };

  return (
    <div className="flex flex-col space-y-6">
      <SubcategoriesHeader
        selectedRows={selectedRows}
        handleBulkAction={() => {
          /* handle bulk action */
        }}
      />
      <SubcategoriesFilters statusOptions={statusOptions} />
      <SubcategoriesTable
        headers={headers}
        subcategoryItems={subcategoryItems}
        selectedRows={selectedRows}
        handleSelectRow={handleSelectRow}
        handleSelectAllRows={handleSelectAllRows}
        onSort={handleSort}
      />
    </div>
  );
}
