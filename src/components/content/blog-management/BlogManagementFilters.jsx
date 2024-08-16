"use client";
import { FiSearch } from "react-icons/fi";

export default function BlogManagementFilters() {
  return (
    <div className="flex justify-between items-center space-y-4 md:space-y-0">
      <div className="flex space-x-4">
        <div className="w-full md:w-auto">
          <select className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700">
            <option value="">Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>
      <div className="flex items-center bg-white border border-gray-300 rounded-full px-3 py-2 text-gray-700 focus-within:ring-1 focus-within:ring-gray-600 w-full md:w-auto">
        <FiSearch className="mr-2 text-gray-500" />
        <input
          type="text"
          placeholder="Search Blogs..."
          className="bg-transparent focus:outline-none flex-grow text-sm"
        />
      </div>
    </div>
  );
}
