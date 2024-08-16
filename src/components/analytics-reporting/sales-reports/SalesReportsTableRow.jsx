"use client";
import { FiEye, FiEdit, FiTrash } from "react-icons/fi";

export default function SalesReportsTableRow({
  report,
  index,
  isSelected,
  handleSelectRow,
}) {
  return (
    <tr
      className={`hover:bg-gray-100 ${
        index % 2 === 0 ? "bg-gray-50" : "bg-white"
      }`}
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
        {report.date}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {report.totalSales}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {report.numberOfOrders}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {report.averageOrderValue}
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
