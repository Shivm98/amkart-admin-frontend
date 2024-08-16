// components/dashboard/RecentOrdersTable.jsx
import React from "react";

export default function RecentOrdersTable() {
  const orders = [
    {
      id: 1,
      orderNumber: "192541",
      customerName: "Esther Howard",
      total: "$3,127.00",
      date: "2024-11-23",
      status: "Paid",
    },
    // Add more orders...
  ];

  return (
    <div className="bg-white p-4 rounded-md shadow-sm overflow-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Order Number
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Customer Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Total
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Date
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr
              key={order.id}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100`}
            >
              <td className="px-4 py-2 text-sm text-gray-800">
                {order.orderNumber}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800">
                {order.customerName}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800">{order.total}</td>
              <td className="px-4 py-2 text-sm text-gray-800">{order.date}</td>
              <td className="px-4 py-2 text-sm text-gray-800">
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
