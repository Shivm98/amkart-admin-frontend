import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";

export default function ContactSupport() {
  return (
    <div className="bg-white p-6 rounded-md shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Contact Support
      </h2>
      <p className="text-gray-600 mb-4">
        If you need further assistance, feel free to contact us through the
        following methods:
      </p>
      <div className="flex items-center mb-3">
        <FiPhone className="text-gray-600 mr-3" />
        <span className="text-gray-800">+1 234-567-890</span>
      </div>
      <div className="flex items-center">
        <FiMail className="text-gray-600 mr-3" />
        <span className="text-gray-800">support@example.com</span>
      </div>
    </div>
  );
}
