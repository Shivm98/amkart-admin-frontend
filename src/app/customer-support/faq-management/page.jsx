"use client";

import { useState } from "react";
import FaqManagementHeader from "@/components/customer-support/faq-management/FaqManagementHeader";
import FaqManagementTable from "@/components/customer-support/faq-management/FaqManagementTable";

export default function FaqManagementPage() {
  const [selectedRows, setSelectedRows] = useState([]);

  const faqs = [
    {
      id: 1,
      question: "How do I track my order?",
      answer: "You can track your order by logging into your account.",
      category: "Orders",
    },
    // Add more FAQ data here...
  ];

  const headers = [
    { label: "Question", key: "question", sortable: true },
    { label: "Answer", key: "answer", sortable: false },
    { label: "Category", key: "category", sortable: true },
    { label: "Actions", key: "actions", sortable: false },
  ];

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAllRows = () => {
    if (selectedRows.length === faqs.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(faqs.map((faq) => faq.id));
    }
  };

  const handleSort = (key, direction) => {
    console.log(`Sorting by ${key} in ${direction} order`);
  };

  return (
    <div className="flex flex-col space-y-6">
      <FaqManagementHeader
        selectedRows={selectedRows}
        handleBulkAction={() => {
          /* handle bulk action */
        }}
      />
      <FaqManagementTable
        headers={headers}
        faqs={faqs}
        selectedRows={selectedRows}
        handleSelectRow={handleSelectRow}
        handleSelectAllRows={handleSelectAllRows}
        onSort={handleSort}
      />
    </div>
  );
}
