"use client";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";

export default function OrderReportsTableRow({
  report,
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
      <td className="px-4 py-2">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => handleSelectRow(report.id)}
          className="text-gray-600 rounded"
        />
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {report.orderNumber}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {report.customerName}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {report.totalAmount}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {report.status}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {report.orderDate}
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
