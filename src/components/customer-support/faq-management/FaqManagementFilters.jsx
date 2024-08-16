"use client";
import Select from "react-select";
import { FiSearch } from "react-icons/fi";

const customSelectStyles = {
  // Add custom styles as needed
};

export default function FaqManagementFilters({ categoryOptions }) {
  return (
    <div className="flex justify-between items-center">
      <Select
        options={categoryOptions}
        placeholder="Filter by Category"
        styles={customSelectStyles}
        className="w-1/4"
      />
      <div className="flex items-center bg-white border rounded-full px-3 py-2 text-gray-700 w-1/4">
        <FiSearch className="mr-2" />
        <input
          type="text"
          placeholder="Search FAQs..."
          className="bg-transparent focus:outline-none flex-grow"
        />
      </div>
    </div>
  );
}
