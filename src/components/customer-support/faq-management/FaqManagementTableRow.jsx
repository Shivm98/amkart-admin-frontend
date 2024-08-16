"use client";
import { FiEdit, FiTrash } from "react-icons/fi";

export default function FaqManagementTableRow({ faq }) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-2 border-b">{faq.id}</td>
      <td className="px-4 py-2 border-b">{faq.question}</td>
      <td className="px-4 py-2 border-b">{faq.category}</td>
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
