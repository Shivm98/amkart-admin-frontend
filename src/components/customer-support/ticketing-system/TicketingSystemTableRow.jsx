"use client";
import { FiEdit, FiTrash } from "react-icons/fi";

export default function TicketingSystemTableRow({ ticket }) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-2 border-b">{ticket.id}</td>
      <td className="px-4 py-2 border-b">{ticket.subject}</td>
      <td className="px-4 py-2 border-b">{ticket.status}</td>
      <td className="px-4 py-2 border-b">{ticket.priority}</td>
      <td className="px-4 py-2 border-b">
        <div className="flex space-x-2">
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <FiEdit />
          </button>
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <FiTrash />
          </button>
        </div>
      </td>
    </tr>
  );
}
