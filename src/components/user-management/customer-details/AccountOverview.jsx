"use client";

import {
  FiMail,
  FiPhone,
  FiCalendar,
  FiMapPin,
  FiGlobe,
  FiLock,
} from "react-icons/fi";

export default function AccountOverview({ customer }) {
  return (
    <div className="bg-white p-8  mb-8 transition-transform duration-300 ">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">
        Account Overview
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center">
          <FiMail className="text-gray-600 text-lg mr-4" />
          <div>
            <span className="text-gray-600">Email</span>
            <p className="text-gray-900 font-medium">{customer.email}</p>
          </div>
        </div>
        <div className="flex items-center">
          <FiPhone className="text-gray-600 text-lg mr-4" />
          <div>
            <span className="text-gray-600">Phone</span>
            <p className="text-gray-900 font-medium">{customer.phone}</p>
          </div>
        </div>
        <div className="flex items-center">
          <FiCalendar className="text-gray-600 text-lg mr-4" />
          <div>
            <span className="text-gray-600">Registration Date</span>
            <p className="text-gray-900 font-medium">
              {customer.registrationDate}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <FiMapPin className="text-gray-600 text-lg mr-4" />
          <div>
            <span className="text-gray-600">Registration IP</span>
            <p className="text-gray-900 font-medium">
              {customer.registrationIP}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <FiGlobe className="text-gray-600 text-lg mr-4" />
          <div>
            <span className="text-gray-600">Last Login</span>
            <p className="text-gray-900 font-medium">
              {customer.lastLoginDate} - {customer.lastLoginTime}
            </p>
            <p className="text-gray-600">
              {customer.os} - {customer.browser}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <FiLock className="text-gray-600 text-lg mr-4" />
          <div>
            <span className="text-gray-600">Email Verification</span>
            <p className="text-gray-900 font-medium">
              {customer.emailVerified ? "Verified" : "Not Verified"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
