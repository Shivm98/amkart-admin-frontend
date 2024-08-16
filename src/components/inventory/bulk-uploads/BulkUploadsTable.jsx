// components/inventory/bulk-uploads/BulkUploadsTable.jsx

import { FiEdit, FiTrash } from "react-icons/fi";

export default function BulkUploadsTable({
  uploadedData,
  handleEdit,
  handleDelete,
}) {
  return (
    <div className="bg-white p-6 rounded-md shadow-sm">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-600 border-b">
              Product Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-600 border-b">
              Category
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-600 border-b">
              Quantity
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-600 border-b">
              Price
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-600 border-b">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {uploadedData.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100`}
            >
              <td className="px-4 py-2 text-sm text-gray-800 border-b">
                {item.name}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800 border-b">
                {item.category}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800 border-b">
                {item.quantity}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800 border-b">
                {item.price}
              </td>
              <td className="px-4 py-2 text-sm text-gray-800 border-b">
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="p-2 hover:bg-gray-200 rounded-full"
                    title="Edit"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="p-2 hover:bg-gray-200 rounded-full"
                    title="Delete"
                  >
                    <FiTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
