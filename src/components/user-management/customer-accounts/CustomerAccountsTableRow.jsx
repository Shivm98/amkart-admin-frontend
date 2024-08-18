"use client";
import { FiEdit, FiTrash, FiEye } from "react-icons/fi";
import Link from "next/link";

export default function CustomerAccountsTableRow({
  customer,
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
          onChange={() => handleSelectRow(customer.id)}
          className="text-gray-600 rounded"
        />
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {customer.name}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {customer.email}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {customer.status}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {customer.createdDate}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        <div className="flex space-x-2">
          <Link
            className="p-2 hover:bg-gray-200 rounded-full"
            title="View Details"
            href={`/user-management/customer-details/${customer.id}`}
          >
            <FiEye />
          </Link>
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
