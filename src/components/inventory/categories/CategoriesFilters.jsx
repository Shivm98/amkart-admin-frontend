"use client";
import Select from "react-select";
import { FiSearch } from "react-icons/fi";

// Custom styles for react-select
const customSelectStyles = {
  // Same as InventoryFilters.jsx
};

export default function CategoriesFilters({ statusOptions }) {
  return (
    <div className="flex flex-wrap justify-between items-center space-y-4 md:space-y-0">
      <div className="flex flex-wrap space-y-4 md:space-y-0 space-x-0 md:space-x-4 items-center w-full md:w-auto">
        <div className="w-full md:w-auto">
          <Select
            options={statusOptions}
            placeholder="Status"
            styles={customSelectStyles}
          />
        </div>
      </div>
      <div className="flex items-center bg-white border border-gray-300 rounded-full px-3 py-2 text-gray-700 focus-within:ring-1 focus-within:ring-gray-600 w-full md:w-auto">
        <FiSearch className="mr-2 text-gray-500" />
        <input
          type="text"
          placeholder="Search Categories..."
          className="bg-transparent focus:outline-none flex-grow text-sm"
        />
      </div>
    </div>
  );
}
