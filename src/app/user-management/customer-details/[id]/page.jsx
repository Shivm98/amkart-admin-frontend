"use client";

import { useState } from "react";
import CustomerDetailsHeader from "@/components/user-management/customer-details/CustomerDetailsHeader";
import AccountOverview from "@/components/user-management/customer-details/AccountOverview";
import EditCustomerDetails from "@/components/user-management/customer-details/EditCustomerDetails";
import CustomerActions from "@/components/user-management/customer-details/CustomerActions";

export default function CustomerDetailsPage() {
  const [customer, setCustomer] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    registrationDate: "2024-06-01",
    address: "123 Main St, Anytown, USA",
    username: "johndoe",
    role: "Admin",
    registrationIP: "192.168.1.1",
    lastLogin: "2024-08-15 10:30 AM",
    os: "Windows 10",
    browser: "Chrome",
    emailVerified: true,
  });

  const handleSaveDetails = (updatedCustomer) => {
    setCustomer((prev) => ({
      ...prev,
      ...updatedCustomer,
    }));
  };

  const handleBlockAccount = () => {
    // Block account logic
    alert("Account has been blocked.");
  };

  const handleUnblockAccount = () => {
    // Unblock account logic
    alert("Account has been unblocked.");
  };

  const handleForceLogout = () => {
    // Force logout logic
    alert("User has been forced to log out.");
  };

  return (
    <div className="space-y-6">
      <CustomerDetailsHeader customer={customer} />
      <AccountOverview customer={customer} />
      <EditCustomerDetails customer={customer} onSave={handleSaveDetails} />
      <CustomerActions
        onBlock={handleBlockAccount}
        onUnblock={handleUnblockAccount}
        onForceLogout={handleForceLogout}
      />
    </div>
  );
}
