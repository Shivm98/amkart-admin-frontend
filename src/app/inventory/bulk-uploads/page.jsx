// app/inventory/bulk-uploads/page.jsx

"use client";

import { useState } from "react";
import BulkUploadsHeader from "@/components/inventory/bulk-uploads/BulkUploadsHeader";
import BulkUploadsForm from "@/components/inventory/bulk-uploads/BulkUploadsForm";
import BulkUploadsTable from "@/components/inventory/bulk-uploads/BulkUploadsTable";

export default function BulkUploadsPage() {
  const [uploadedData, setUploadedData] = useState([]);

  const handleFileUpload = (file) => {
    // Handle file parsing and uploading logic
    // For now, we'll just mock some data
    setUploadedData([
      {
        name: "Product 1",
        category: "Category 1",
        quantity: 10,
        price: "$100",
      },
      {
        name: "Product 2",
        category: "Category 2",
        quantity: 20,
        price: "$200",
      },
      // Add more mocked data...
    ]);
  };

  const handleEdit = (index) => {
    // Handle editing logic here
    console.log("Edit item at index:", index);
  };

  const handleDelete = (index) => {
    setUploadedData((prev) => prev.filter((_, i) => i !== index));
  };

  const handleBulkDelete = () => {
    setUploadedData([]);
  };

  return (
    <div className="flex flex-col space-y-6">
      <BulkUploadsHeader
        handleUploadClick={() => console.log("Upload Clicked")}
        handleBulkDelete={handleBulkDelete}
      />
      <BulkUploadsForm onFileUpload={handleFileUpload} />
      <BulkUploadsTable
        uploadedData={uploadedData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
