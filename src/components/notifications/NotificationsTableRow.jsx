"use client";
import React from "react";
import { FiEye, FiTrash, FiCheckCircle } from "react-icons/fi";

export default function NotificationsTableRow({
  notification,
  index,
  isSelected,
  handleSelectRow,
}) {
  return (
    <tr
      className={`${
        index % 2 === 0 ? "bg-gray-50" : "bg-white"
      } hover:bg-gray-100`}
    >
      <td className="px-4 py-2 w-12">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => handleSelectRow(notification.id)}
          className="text-gray-600 rounded"
        />
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {notification.message}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {notification.type}
      </td>
      <td
        className={`px-4 py-2 text-sm text-gray-800 border-b font-bold ${
          notification.status === "Unread" ? "text-red-500" : "text-green-500"
        }`}
      >
        {notification.status}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {notification.date}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        <div className="flex space-x-2">
          <button
            className="p-2 hover:bg-gray-200 rounded-full"
            title="Mark as Read"
          >
            <FiCheckCircle />
          </button>
          <button
            className="p-2 hover:bg-gray-200 rounded-full"
            title="View Details"
          >
            <FiEye />
          </button>
          <button className="p-2 hover:bg-gray-200 rounded-full" title="Delete">
            <FiTrash />
          </button>
        </div>
      </td>
    </tr>
  );
}
