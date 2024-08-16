"use client";
import Select from "react-select";
import { FiSearch } from "react-icons/fi";

// Custom styles for react-select (can be imported from a shared styles file)
const customSelectStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "white",
    borderRadius: "9999px", // Fully rounded
    borderColor: "#D1D5DB", // Tailwind's gray-300
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingBottom: "6px", // Reduced padding for better alignment
    boxShadow: "none",
    fontSize: "0.875rem", // Tailwind's text-sm
    height: "38px", // Fixed height for alignment
    "&:hover": {
      borderColor: "#6B7280", // Tailwind's gray-600
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#4B5563", // Tailwind's gray-700
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "8px",
    overflow: "hidden",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#4B5563" // Tailwind's gray-700
      : state.isFocused
      ? "#E5E7EB" // Tailwind's gray-200
      : "white",
    color: state.isSelected ? "white" : "#4B5563", // Adjust text color
    "&:hover": {
      backgroundColor: "#E5E7EB", // Tailwind's gray-200
      color: "#4B5563",
    },
  }),
};

export default function InventoryFilters({
  statusOptions,
  categoryOptions,
  subcategoryOptions,
}) {
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
        <div className="w-full md:w-auto">
          <Select
            options={categoryOptions}
            placeholder="Category"
            styles={customSelectStyles}
          />
        </div>
        <div className="w-full md:w-auto">
          <Select
            options={subcategoryOptions}
            placeholder="Subcategory"
            styles={customSelectStyles}
          />
        </div>
      </div>
      <div className="flex items-center bg-white border border-gray-300 rounded-full px-3 py-2 text-gray-700 focus-within:ring-1 focus-within:ring-gray-600 w-full md:w-auto">
        <FiSearch className="mr-2 text-gray-500" />
        <input
          type="text"
          placeholder="Search Inventory..."
          className="bg-transparent focus:outline-none flex-grow text-sm"
        />
      </div>
    </div>
  );
}
