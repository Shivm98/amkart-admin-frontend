"use client";

import AuditLogsHeader from "@/components/security/audit-logs/AuditLogsHeader";
import AuditLogsTable from "@/components/security/audit-logs/AuditLogsTable";

export default function AuditLogsPage() {
  return (
    <div className="flex flex-col space-y-6">
      <AuditLogsHeader />
      <AuditLogsTable />
    </div>
  );
}
