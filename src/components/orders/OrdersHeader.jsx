"use client";
import { FiDownload } from "react-icons/fi";

export default function OrdersHeader() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl text-black font-semibold">Orders</h1>
      <div className="flex space-x-2">
        <button className="flex items-center bg-black text-white px-3 md:px-4 py-2 rounded-md hover:bg-gray-800 text-sm">
          <FiDownload className="mr-2" />
          Export
        </button>
      </div>
    </div>
  );
}
