"use client";

import AuditLogsTableRow from "./AuditLogsTableRow";

const auditLogs = [
  {
    id: 1,
    admin: "John Doe",
    action: "Deleted user account",
    timestamp: "2024-08-14 15:45:00",
  },
  {
    id: 2,
    admin: "Jane Smith",
    action: "Updated site settings",
    timestamp: "2024-08-14 14:30:00",
  },
  // Add more logs here...
];

export default function AuditLogsTable() {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm overflow-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-400 border-b">
              Admin
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-400 border-b">
              Action
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-400 border-b">
              Timestamp
            </th>
          </tr>
        </thead>
        <tbody>
          {auditLogs.map((log) => (
            <AuditLogsTableRow key={log.id} log={log} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
