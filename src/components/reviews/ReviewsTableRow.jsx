"use client";
import { FiEdit, FiTrash, FiEye } from "react-icons/fi";

export default function ReviewsTableRow({
  review,
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
          onChange={() => handleSelectRow(review.id)}
          className="text-gray-600 rounded"
        />
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {review.product}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {review.customer}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {review.rating}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {review.review}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {review.status}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {review.date}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        <div className="flex space-x-2">
          <button className="p-2 hover:bg-gray-200 rounded-full" title="View">
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
