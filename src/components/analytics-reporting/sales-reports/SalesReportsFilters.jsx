"use client";
import Select from "react-select";
import { FiSearch } from "react-icons/fi";

export default function SalesReportsFilters() {
  const dateOptions = [
    { value: "last-7-days", label: "Last 7 Days" },
    { value: "last-30-days", label: "Last 30 Days" },
    { value: "last-3-months", label: "Last 3 Months" },
  ];

  return (
    <div className="flex flex-wrap justify-between items-center space-y-4 md:space-y-0">
      <div className="w-full md:w-auto">
        <Select options={dateOptions} placeholder="Select Date Range" />
      </div>
      <div className="flex items-center bg-white border border-gray-300 rounded-full px-3 py-2 text-gray-700 focus-within:ring-1 focus-within:ring-gray-600 w-full md:w-auto">
        <FiSearch className="mr-2 text-gray-500" />
        <input
          type="text"
          placeholder="Search Reports..."
          className="bg-transparent focus:outline-none flex-grow text-sm"
        />
      </div>
    </div>
  );
}
