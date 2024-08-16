"use client";
import { useState } from "react";
import ProductPromotionsHeader from "@/components/marketing/product-promotions/ProductPromotionsHeader";
import ProductPromotionsFilters from "@/components/marketing/product-promotions/ProductPromotionsFilters";
import ProductPromotionsTable from "@/components/marketing/product-promotions/ProductPromotionsTable";

export default function ProductPromotionsPage() {
  const [selectedRows, setSelectedRows] = useState([]);

  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
    { value: "scheduled", label: "Scheduled" },
  ];

  const promotions = [
    {
      id: 1,
      name: "Winter Sale",
      discount: "30%",
      status: "Active",
      startDate: "2024-12-01",
      endDate: "2024-12-31",
    },
    // Add more promotions here...
  ];

  const headers = [
    { label: "Name", key: "name", sortable: true },
    { label: "Discount", key: "discount", sortable: true },
    { label: "Status", key: "status", sortable: true },
    { label: "Start Date", key: "startDate", sortable: true },
    { label: "End Date", key: "endDate", sortable: true },
    { label: "Actions", key: "actions", sortable: false },
  ];

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAllRows = () => {
    if (selectedRows.length === promotions.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(promotions.map((promotion) => promotion.id));
    }
  };

  const handleSort = (key, direction) => {
    console.log(`Sorting by ${key} in ${direction} order`);
  };

  return (
    <div className="flex flex-col space-y-6">
      <ProductPromotionsHeader
        selectedRows={selectedRows}
        handleBulkAction={() => {
          /* handle bulk action */
        }}
      />
      <ProductPromotionsFilters statusOptions={statusOptions} />
      <ProductPromotionsTable
        headers={headers}
        promotions={promotions}
        selectedRows={selectedRows}
        handleSelectRow={handleSelectRow}
        handleSelectAllRows={handleSelectAllRows}
        onSort={handleSort}
      />
    </div>
  );
}
