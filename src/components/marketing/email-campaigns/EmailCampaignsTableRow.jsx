"use client";
import { FiEdit, FiTrash, FiMail } from "react-icons/fi";

export default function EmailCampaignsTableRow({
  campaign,
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
          onChange={() => handleSelectRow(campaign.id)}
          className="text-gray-600 rounded"
        />
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {campaign.name}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {campaign.subject}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {campaign.status}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {campaign.sendDate}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        <div className="flex space-x-2">
          <button
            className="p-2 hover:bg-gray-200 rounded-full"
            title="Resend Campaign"
          >
            <FiMail />
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
