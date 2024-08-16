"use client";
import { useState } from "react";
import BlogManagementHeader from "@/components/content/blog-management/BlogManagementHeader";
import BlogManagementFilters from "@/components/content/blog-management/BlogManagementFilters";
import BlogManagementTable from "@/components/content/blog-management/BlogManagementTable";

export default function BlogManagementPage() {
  const [selectedRows, setSelectedRows] = useState([]);

  const blogs = [
    {
      id: 1,
      title: "10 Tips for Online Marketing",
      author: "John Doe",
      status: "Published",
      date: "2024-07-10",
    },
    // Add more blog posts here...
  ];

  const headers = [
    { label: "Title", key: "title", sortable: true },
    { label: "Author", key: "author", sortable: true },
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
    if (selectedRows.length === blogs.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(blogs.map((blog) => blog.id));
    }
  };

  const handleSort = (key, direction) => {
    console.log(`Sorting by ${key} in ${direction} order`);
  };

  return (
    <div className="flex flex-col space-y-6">
      <BlogManagementHeader
        selectedRows={selectedRows}
        handleBulkAction={() => {
          /* handle bulk action */
        }}
      />
      <BlogManagementFilters />
      <BlogManagementTable
        headers={headers}
        blogs={blogs}
        selectedRows={selectedRows}
        handleSelectRow={handleSelectRow}
        handleSelectAllRows={handleSelectAllRows}
        onSort={handleSort}
      />
    </div>
  );
}
