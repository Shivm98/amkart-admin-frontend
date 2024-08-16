"use client";
import DiscountCodesFilters from "@/components/marketing/DiscountCodesFilters";
import DiscountCodesHeader from "@/components/marketing/DiscountCodesHeader";
import DiscountCodesTable from "@/components/marketing/DiscountCodesTable";
import { useState } from "react";

export default function DiscountCodesPage() {
  const [selectedRows, setSelectedRows] = useState([]);

  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  const discountCodes = [
    {
      id: 1,
      code: "SUMMER21",
      discount: "20%",
      status: "Active",
      expiryDate: "2024-12-31",
    },
    // Add more discount codes here...
  ];

  const headers = [
    { label: "Code", key: "code", sortable: true },
    { label: "Discount", key: "discount", sortable: true },
    { label: "Status", key: "status", sortable: true },
    { label: "Expiry Date", key: "expiryDate", sortable: true },
    { label: "Actions", key: "actions", sortable: false },
  ];

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAllRows = () => {
    if (selectedRows.length === discountCodes.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(discountCodes.map((item) => item.id));
    }
  };

  const handleSort = (key, direction) => {
    console.log(`Sorting by ${key} in ${direction} order`);
  };

  return (
    <div className="flex flex-col space-y-6">
      <DiscountCodesHeader
        selectedRows={selectedRows}
        handleBulkAction={() => {
          /* handle bulk action */
        }}
      />
      <DiscountCodesFilters statusOptions={statusOptions} />
      <DiscountCodesTable
        headers={headers}
        discountCodes={discountCodes}
        selectedRows={selectedRows}
        handleSelectRow={handleSelectRow}
        handleSelectAllRows={handleSelectAllRows}
        onSort={handleSort}
      />
    </div>
  );
}
