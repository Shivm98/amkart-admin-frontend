"use client";
import React from "react";
import PaymentsTableRow from "./PaymentsTableRow";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function PaymentsTable({
  headers,
  payments,
  selectedRows,
  handleSelectRow,
  handleSelectAllRows,
  onSort,
}) {
  const [sortConfig, setSortConfig] = React.useState({
    key: null,
    direction: null,
  });

  const handleSortClick = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
    onSort(key, direction);
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
                checked={selectedRows.length === payments.length}
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
          {payments.map((payment, index) => (
            <PaymentsTableRow
              key={payment.id}
              payment={payment}
              index={index}
              isSelected={selectedRows.includes(payment.id)}
              handleSelectRow={handleSelectRow}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
