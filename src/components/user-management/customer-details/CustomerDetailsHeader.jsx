"use client";

import { FiUser, FiSettings } from "react-icons/fi";

export default function CustomerDetailsHeader({ customer, onEditProfile }) {
  return (
    <div className="bg-white p-8 mb-8">
      <div className="flex items-center justify-between space-x-6">
        <div className="flex items-center space-x-6">
          <div className="bg-gray-200 p-5 rounded-full">
            <FiUser className="text-gray-600 text-5xl" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">
              {customer.firstName} {customer.lastName}
            </h2>
            <p className="text-lg text-gray-600">{customer.email}</p>
          </div>
        </div>
        <button
          onClick={onEditProfile}
          className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900 transition-all flex items-center space-x-2"
        >
          <FiSettings className="text-xl" />
          <span>Edit Profile</span>
        </button>
      </div>
    </div>
  );
}
