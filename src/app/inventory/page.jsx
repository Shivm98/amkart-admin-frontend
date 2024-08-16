"use client";
import { useState } from "react";
import InventoryHeader from "../../components/inventory/InventoryHeader";
import InventoryFilters from "../../components/inventory/InventoryFilters";
import InventoryTable from "../../components/inventory/InventoryTable";

export default function InventoryPage() {
  const [selectedRows, setSelectedRows] = useState([]);

  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];
  const categoryOptions = [
    { value: "grinding-equipment", label: "Grinding Equipment" },
    { value: "cutting-tools", label: "Cutting Tools" },
  ];
  const subcategoryOptions = [
    { value: "diamond-discs", label: "Diamond Discs" },
    { value: "saw-blades", label: "Saw Blades" },
  ];

  const inventoryItems = [
    {
      id: 1,
      name: "Stihl TS 800 cut-off machine incl. 5x diamond cutting discs",
      category: "Grinding Equipment",
      subcategory: "Cutting Tools",
      quantity: 25,
      price: "$1,590.00",
      status: "Active",
    },
    // Add more items here...
  ];

  const headers = [
    { label: "Name", key: "name", sortable: true },
    { label: "Category", key: "category", sortable: true },
    { label: "Subcategory", key: "subcategory", sortable: true },
    { label: "Quantity", key: "quantity", sortable: true },
    { label: "Price", key: "price", sortable: true },
    { label: "Status", key: "status", sortable: true },
    { label: "Actions", key: "actions", sortable: false },
  ];

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAllRows = () => {
    if (selectedRows.length === inventoryItems.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(inventoryItems.map((item) => item.id));
    }
  };

  const handleSort = (key, direction) => {
    // This function will handle the sort request to the backend
    console.log(`Sorting by ${key} in ${direction} order`);
    // Fetch sorted data from the backend using `key` and `direction`
  };

  return (
    <div className="flex flex-col space-y-6">
      <InventoryHeader
        selectedRows={selectedRows}
        handleBulkAction={() => {
          /* handle bulk action */
        }}
      />
      <InventoryFilters
        statusOptions={statusOptions}
        categoryOptions={categoryOptions}
        subcategoryOptions={subcategoryOptions}
      />
      <InventoryTable
        headers={headers}
        inventoryItems={inventoryItems}
        selectedRows={selectedRows}
        handleSelectRow={handleSelectRow}
        handleSelectAllRows={handleSelectAllRows}
        onSort={handleSort} // Pass the sort handler
      />
    </div>
  );
}
