"use client";
import { FiEye } from "react-icons/fi";

export default function ActivityLogsTableRow({
  log,
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
          onChange={() => handleSelectRow(log.id)}
          className="text-gray-600 rounded"
        />
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">{log.admin}</td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">{log.action}</td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">{log.date}</td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        <button
          className="p-2 hover:bg-gray-200 rounded-full"
          title="View Details"
        >
          <FiEye />
        </button>
      </td>
    </tr>
  );
}
