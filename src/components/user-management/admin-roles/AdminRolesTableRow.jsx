"use client";
import { FiEdit, FiTrash, FiEye } from "react-icons/fi";

export default function AdminRolesTableRow({
  role,
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
          onChange={() => handleSelectRow(role.id)}
          className="text-gray-600 rounded"
        />
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {role.roleName}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {role.permissions}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {role.usersAssigned}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {role.status}
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
