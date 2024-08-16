"use client";
import FaqManagementTableRow from "./FaqManagementTableRow";

export default function FaqManagementTable({ faqs }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm overflow-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2">FAQ ID</th>
            <th className="px-4 py-2">Question</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {faqs.map((faq) => (
            <FaqManagementTableRow key={faq.id} faq={faq} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
