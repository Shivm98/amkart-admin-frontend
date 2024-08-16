"use client";

import { FiDownload, FiTrash } from "react-icons/fi";

export default function SalesReportsHeader({ selectedRows }) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-800">Sales Reports</h1>
      <div className="flex space-x-4">
        <button className="flex items-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
          <FiDownload className="mr-2" />
          Export
        </button>
        {selectedRows.length > 0 && (
          <button className="flex items-center bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
            <FiTrash className="mr-2" />
            Delete Selected ({selectedRows.length})
          </button>
        )}
      </div>
    </div>
  );
}
