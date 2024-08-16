import React from "react";
import Select from "react-select";
import { FiSearch } from "react-icons/fi";

// Custom styles for react-select
const customSelectStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "white",
    borderRadius: "9999px",
    borderColor: "#D1D5DB",
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingBottom: "6px",
    boxShadow: "none",
    fontSize: "0.875rem",
    height: "38px",
    "&:hover": {
      borderColor: "#6B7280",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#4B5563",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "8px",
    overflow: "hidden",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#4B5563"
      : state.isFocused
      ? "#E5E7EB"
      : "white",
    color: state.isSelected ? "white" : "#4B5563",
    "&:hover": {
      backgroundColor: "#E5E7EB",
      color: "#4B5563",
    },
  }),
};

export default function PaymentsFilters({
  statusOptions,
  paymentMethods,
  searchPlaceholder,
}) {
  return (
    <div className="flex flex-wrap justify-between items-center space-y-4 md:space-y-0 mb-6">
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
            options={paymentMethods}
            placeholder="Payment Method"
            styles={customSelectStyles}
          />
        </div>
      </div>
      <div className="flex items-center bg-white border border-gray-300 rounded-full px-3 py-2 text-gray-700 focus-within:ring-1 focus-within:ring-gray-600 w-full md:w-auto">
        <FiSearch className="mr-2 text-gray-500" />
        <input
          type="text"
          placeholder={searchPlaceholder}
          className="bg-transparent focus:outline-none flex-grow text-sm"
        />
      </div>
    </div>
  );
}
