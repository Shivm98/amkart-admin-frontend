"use client";
import { FiEye, FiEdit, FiTrash } from "react-icons/fi";

export default function OrdersTableRow({
  order,
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
      <td className="px-4 py-2 w-12">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => handleSelectRow(order.id)}
          className="text-gray-600 rounded"
        />
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b flex items-center space-x-2 w-2/6">
        <img
          src={order.productImage}
          alt={order.productName}
          className="w-10 h-10 rounded-md"
          style={{ minWidth: "40px", maxWidth: "40px" }} // Fixed width for the image
        />
        <span className="truncate">{order.productName}</span>
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b w-1/6">
        #{order.orderNumber}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b w-1/6">
        {order.customerName}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b w-1/6">
        {order.shippingMethod}
      </td>
      <td
        className={`px-4 py-2 text-sm text-gray-800 border-b font-bold w-1/12 ${
          order.status === "Paid" ? "text-green-500" : "text-red-500"
        }`}
      >
        {order.status}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b font-bold w-1/12">
        {order.total}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b w-1/12">
        {order.date}
      </td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b w-1/12">
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
