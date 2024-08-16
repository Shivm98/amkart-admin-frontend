"use client";
import AuditLogsHeader from "@/components/security/AuditLogsHeader";
import AuditLogsTable from "@/components/security/AuditLogsTable";

export default function AuditLogsPage() {
  return (
    <div className="flex flex-col space-y-6">
      <AuditLogsHeader />
      <AuditLogsTable />
    </div>
  );
}
