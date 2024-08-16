"use client";
import React from "react";
import { FiEye, FiEdit, FiTrash } from "react-icons/fi";

export default function PaymentsTableRow({
  payment,
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
          onChange={() => handleSelectRow(payment.id)}
          className="text-gray-600 rounded"
        />
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {payment.paymentId}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {payment.customerName}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {payment.paymentMethod}
      </td>
      <td
        className={`px-4 py-2 text-sm text-gray-800 border-b font-bold ${
          payment.status === "Completed" ? "text-green-500" : "text-red-500"
        }`}
      >
        {payment.status}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b font-bold">
        {payment.amount}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {payment.date}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        <div className="flex space-x-2">
          <button
            className="p-2 hover:bg-gray-200 rounded-full"
            title="View Details"
          >
            <FiEye />
          </button>
          <button className="p-2 hover:bg-gray-200 rounded-full" title="Edit">
            <FiEdit />
          </button>
          <button className="p-2 hover:bg-gray-200 rounded-full" title="Delete">
            <FiTrash />
          </button>
        </div>
      </td>
    </tr>
  );
}
