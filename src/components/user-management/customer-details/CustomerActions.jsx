"use client";

import { FiLock, FiUnlock, FiLogOut } from "react-icons/fi";

export default function CustomerActions({ onBlock, onUnblock, onForceLogout }) {
  return (
    <div className="bg-white p-8   transition-transform duration-300 ">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Actions</h3>
      <div className="space-y-4">
        <button
          onClick={onBlock}
          className="w-full flex items-center justify-center bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-all"
        >
          <FiLock className="mr-2" />
          Block Account
        </button>
        <button
          onClick={onUnblock}
          className="w-full flex items-center justify-center bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-all"
        >
          <FiUnlock className="mr-2" />
          Unblock Account
        </button>
        <button
          onClick={onForceLogout}
          className="w-full flex items-center justify-center bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 transition-all"
        >
          <FiLogOut className="mr-2" />
          Force Logout
        </button>
      </div>
    </div>
  );
}
