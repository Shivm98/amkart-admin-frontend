"use client";

import { FiUser, FiSettings } from "react-icons/fi";

export default function ProfileHeader() {
  return (
    <div className="bg-white text-gray-800 p-8 rounded-lg ">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="bg-gray-300 p-5 rounded-full">
            <FiUser className="text-gray-600 text-5xl" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold">John Doe</h2>
            <p className="text-lg text-gray-500">Admin</p>
          </div>
        </div>
        <button className="bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-700 transition-all flex items-center space-x-2">
          <FiSettings className="text-xl" />
          <span>Edit Profile</span>
        </button>
      </div>
    </div>
  );
}
