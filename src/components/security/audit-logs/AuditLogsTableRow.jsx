"use client";

export default function AuditLogsTableRow({ log }) {
  return (
    <tr className="hover:bg-gray-100">
      <td className="px-4 py-2 text-sm text-gray-800 border-b">{log.admin}</td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">{log.action}</td>
      <td className="px-4 py-2 text-sm text-gray-800 border-b">
        {log.timestamp}
      </td>
    </tr>
  );
}
