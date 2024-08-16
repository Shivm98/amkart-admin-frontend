"use client";
import { useState } from "react";
import BannerManagementHeader from "@/components/content/banner-management/BannerManagementHeader";
import BannerManagementFilters from "@/components/content/banner-management/BannerManagementFilters";
import BannerManagementTable from "@/components/content/banner-management/BannerManagementTable";

export default function BannerManagementPage() {
  const [selectedRows, setSelectedRows] = useState([]);

  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  const banners = [
    {
      id: 1,
      name: "Summer Sale Banner",
      location: "Homepage",
      status: "Active",
      date: "2024-06-01",
    },
    {
      id: 2,
      name: "Winter Sale Banner",
      location: "Category Page",
      status: "Inactive",
      date: "2024-12-01",
    },
    // Add more banners here...
  ];

  const headers = [
    { label: "Name", key: "name", sortable: true },
    { label: "Location", key: "location", sortable: true },
    { label: "Status", key: "status", sortable: true },
    { label: "Date", key: "date", sortable: true },
    { label: "Actions", key: "actions", sortable: false },
  ];

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAllRows = () => {
    if (selectedRows.length === banners.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(banners.map((banner) => banner.id));
    }
  };

  const handleSort = (key, direction) => {
    console.log(`Sorting by ${key} in ${direction} order`);
  };

  return (
    <div className="flex flex-col space-y-6">
      <BannerManagementHeader
        selectedRows={selectedRows}
        handleBulkAction={() => {
          /* handle bulk action */
        }}
      />
      <BannerManagementFilters statusOptions={statusOptions} />
      <BannerManagementTable
        headers={headers}
        banners={banners}
        selectedRows={selectedRows}
        handleSelectRow={handleSelectRow}
        handleSelectAllRows={handleSelectAllRows}
        onSort={handleSort}
      />
    </div>
  );
}
