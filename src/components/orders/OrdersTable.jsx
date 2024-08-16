"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import OrdersTableRow from "./OrdersTableRow";

export default function OrdersTable({
  headers,
  orders,
  selectedRows,
  handleSelectRow,
  handleSelectAllRows,
  onSort,
}) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const handleSortClick = (key) => {
    let direction = "asc"; // Default to ascending order
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc"; // Toggle to descending if already ascending
    }
    setSortConfig({ key, direction });
    onSort(key, direction); // Trigger the backend sort request
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-sm overflow-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 w-12">
              <input
                type="checkbox"
                onChange={handleSelectAllRows}
                checked={selectedRows.length === orders.length}
                className="text-gray-600 rounded"
              />
            </th>
            {headers.map((header) => (
              <th
                key={header.label}
                className={`px-4 py-2 text-left text-sm font-normal text-gray-400 border-b ${
                  header.sortable ? "cursor-pointer" : ""
                }`}
                onClick={
                  header.sortable
                    ? () => handleSortClick(header.key)
                    : undefined
                }
                style={{ width: header.width }}
              >
                <div className="flex items-center">
                  {header.label}
                  {sortConfig.key === header.key && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <OrdersTableRow
              key={order.id}
              order={order}
              index={index}
              isSelected={selectedRows.includes(order.id)}
              handleSelectRow={handleSelectRow}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
