// components/inventory/bulk-uploads/BulkUploadsForm.jsx

import { useState } from "react";

export default function BulkUploadsForm({ onFileUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === "application/vnd.ms-excel" || file.type === "text/csv")
    ) {
      setSelectedFile(file);
      setError("");
    } else {
      setError("Please upload a valid CSV or Excel file.");
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      onFileUpload(selectedFile);
    } else {
      setError("Please select a file to upload.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-sm mb-6">
      <input
        type="file"
        accept=".csv, .xls, .xlsx"
        onChange={handleFileChange}
        className="mb-4"
      />
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Upload
      </button>
    </div>
  );
}
