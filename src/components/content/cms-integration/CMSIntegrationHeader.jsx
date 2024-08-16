"use client";
import { FiPlus, FiDownload, FiTrash } from "react-icons/fi";

export default function CMSIntegrationHeader({
  selectedRows,
  handleBulkAction,
}) {
  return (
    <div className="flex flex-wrap justify-between items-center space-y-4 md:space-y-0">
      <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
        CMS Integration
      </h1>
      <div className="flex space-x-4">
        <button className="flex items-center bg-black text-white px-3 md:px-4 py-2 rounded-md hover:bg-gray-800 text-sm">
          <FiPlus className="mr-2" />
          Create New Page
        </button>
        <button className="flex items-center bg-black text-white px-3 md:px-4 py-2 rounded-md hover:bg-gray-800 text-sm">
          <FiDownload className="mr-2" />
          Export
        </button>
        {selectedRows.length > 0 && (
          <button
            onClick={handleBulkAction}
            className="flex items-center bg-red-600 text-white px-3 md:px-4 py-2 rounded-md hover:bg-red-700 text-sm"
          >
            <FiTrash className="mr-2" />
            Delete Selected ({selectedRows.length})
          </button>
        )}
      </div>
    </div>
  );
}
