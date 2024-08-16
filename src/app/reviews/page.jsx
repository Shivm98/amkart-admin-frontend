"use client";
import { useState } from "react";
import ReviewsHeader from "@/components/reviews/ReviewsHeader";
import ReviewsFilters from "@/components/reviews/ReviewsFilters";
import ReviewsTable from "@/components/reviews/ReviewsTable";

export default function ReviewsPage() {
  const [selectedRows, setSelectedRows] = useState([]);

  const statusOptions = [
    { value: "approved", label: "Approved" },
    { value: "pending", label: "Pending" },
    { value: "rejected", label: "Rejected" },
  ];

  const reviews = [
    {
      id: 1,
      product: "Product A",
      customer: "John Doe",
      rating: 4,
      review: "Great product, very satisfied!",
      status: "Approved",
      date: "2024-08-01",
    },
    {
      id: 2,
      product: "Product B",
      customer: "Jane Smith",
      rating: 2,
      review: "Not what I expected.",
      status: "Pending",
      date: "2024-08-02",
    },
    // Add more reviews...
  ];

  const headers = [
    { label: "Product", key: "product", sortable: true },
    { label: "Customer", key: "customer", sortable: true },
    { label: "Rating", key: "rating", sortable: true },
    { label: "Review", key: "review", sortable: false },
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
    if (selectedRows.length === reviews.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(reviews.map((review) => review.id));
    }
  };

  const handleSort = (key, direction) => {
    console.log(`Sorting by ${key} in ${direction} order`);
  };

  return (
    <div className="flex flex-col space-y-6">
      <ReviewsHeader
        selectedRows={selectedRows}
        handleBulkAction={() => {
          /* handle bulk action */
        }}
      />
      <ReviewsFilters statusOptions={statusOptions} />
      <ReviewsTable
        headers={headers}
        reviews={reviews}
        selectedRows={selectedRows}
        handleSelectRow={handleSelectRow}
        handleSelectAllRows={handleSelectAllRows}
        onSort={handleSort}
      />
    </div>
  );
}
