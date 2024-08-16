"use client";
import { FiEdit, FiEye, FiTrash, FiToggleLeft } from "react-icons/fi";

export default function InventoryTableRow({
  item,
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
          onChange={() => handleSelectRow(item.id)}
          className="text-gray-600 rounded"
        />
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">{item.name}</td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {item.category}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {item.subcategory}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {item.quantity}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">{item.price}</td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {item.status}
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
          <button
            className="p-2 hover:bg-gray-200 rounded-full"
            title="Toggle Status"
          >
            <FiToggleLeft />
          </button>
          <button className="p-2 hover:bg-gray-200 rounded-full" title="Delete">
            <FiTrash />
          </button>
        </div>
      </td>
    </tr>
  );
}
