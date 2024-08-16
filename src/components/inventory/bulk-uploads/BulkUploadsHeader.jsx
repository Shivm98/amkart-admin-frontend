// components/inventory/bulk-uploads/BulkUploadsHeader.jsx

import { FiUpload, FiTrash } from "react-icons/fi";

export default function BulkUploadsHeader({
  handleUploadClick,
  handleBulkDelete,
}) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-semibold text-gray-800">Bulk Uploads</h1>
      <div className="flex space-x-4">
        <button
          onClick={handleUploadClick}
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          <FiUpload className="mr-2" />
          Upload CSV/Excel
        </button>
        <button
          onClick={handleBulkDelete}
          className="flex items-center bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          <FiTrash className="mr-2" />
          Delete All
        </button>
      </div>
    </div>
  );
}
