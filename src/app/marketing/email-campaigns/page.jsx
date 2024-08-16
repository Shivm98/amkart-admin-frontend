"use client";
import { useState } from "react";
import EmailCampaignsFilters from "@/components/marketing/email-campaigns/EmailCampaignsFilters";
import EmailCampaignsHeader from "@/components/marketing/email-campaigns/EmailCampaignsHeader";
import EmailCampaignsTable from "@/components/marketing/email-campaigns/EmailCampaignsTable";

export default function EmailCampaignsPage() {
  const [selectedRows, setSelectedRows] = useState([]);

  const statusOptions = [
    { value: "draft", label: "Draft" },
    { value: "sent", label: "Sent" },
    { value: "scheduled", label: "Scheduled" },
  ];

  const campaigns = [
    {
      id: 1,
      name: "Black Friday Sale",
      subject: "Get up to 50% off on all products!",
      status: "Sent",
      sendDate: "2024-11-23",
    },
    // Add more campaigns here...
  ];

  const headers = [
    { label: "Name", key: "name", sortable: true },
    { label: "Subject", key: "subject", sortable: true },
    { label: "Status", key: "status", sortable: true },
    { label: "Send Date", key: "sendDate", sortable: true },
    { label: "Actions", key: "actions", sortable: false },
  ];

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAllRows = () => {
    if (selectedRows.length === campaigns.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(campaigns.map((campaign) => campaign.id));
    }
  };

  const handleSort = (key, direction) => {
    console.log(`Sorting by ${key} in ${direction} order`);
  };

  return (
    <div className="flex flex-col space-y-6">
      <EmailCampaignsHeader
        selectedRows={selectedRows}
        handleBulkAction={() => {
          /* handle bulk action */
        }}
      />
      <EmailCampaignsFilters statusOptions={statusOptions} />
      <EmailCampaignsTable
        headers={headers}
        campaigns={campaigns}
        selectedRows={selectedRows}
        handleSelectRow={handleSelectRow}
        handleSelectAllRows={handleSelectAllRows}
        onSort={handleSort}
      />
    </div>
  );
}
