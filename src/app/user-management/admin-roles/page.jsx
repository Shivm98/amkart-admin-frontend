"use client";
import { useState } from "react";
import AdminRolesHeader from "@/components/user-management/admin-roles/AdminRolesHeader";
import AdminRolesFilters from "@/components/user-management/admin-roles/AdminRolesFilters";
import AdminRolesTable from "@/components/user-management/admin-roles/AdminRolesTable";

export default function AdminRolesPage() {
  const [selectedRows, setSelectedRows] = useState([]);

  const roleOptions = [
    { value: "admin", label: "Admin" },
    { value: "editor", label: "Editor" },
    { value: "manager", label: "Manager" },
  ];

  const roles = [
    {
      id: 1,
      roleName: "Admin",
      permissions: "Full Access",
      usersAssigned: 3,
      status: "Active",
    },
    // Add more roles here...
  ];

  const headers = [
    { label: "Role Name", key: "roleName", sortable: true },
    { label: "Permissions", key: "permissions", sortable: true },
    { label: "Users Assigned", key: "usersAssigned", sortable: true },
    { label: "Status", key: "status", sortable: true },
    { label: "Actions", key: "actions", sortable: false },
  ];

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAllRows = () => {
    if (selectedRows.length === roles.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(roles.map((role) => role.id));
    }
  };

  const handleSort = (key, direction) => {
    console.log(`Sorting by ${key} in ${direction} order`);
  };

  return (
    <div className="flex flex-col space-y-6">
      <AdminRolesHeader
        selectedRows={selectedRows}
        handleBulkAction={() => {
          /* handle bulk action */
        }}
      />
      <AdminRolesFilters roleOptions={roleOptions} />
      <AdminRolesTable
        headers={headers}
        roles={roles}
        selectedRows={selectedRows}
        handleSelectRow={handleSelectRow}
        handleSelectAllRows={handleSelectAllRows}
        onSort={handleSort}
      />
    </div>
  );
}
