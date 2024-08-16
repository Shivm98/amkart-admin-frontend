import React from "react";
import { FiTrash2 } from "react-icons/fi";
import SettingsSection from "./SettingsSection";

export default function DeleteAccountSettings() {
  const handleDeleteAccount = () => {
    // Implement account deletion logic
    console.log("Account deleted");
  };

  return (
    <SettingsSection
      title="Delete Account"
      description="Permanently delete your account. This action cannot be undone."
      icon={<FiTrash2 />}
    >
      <p className="text-red-500 mb-4">
        Warning: Deleting your account will remove all your data permanently.
      </p>
      <button
        onClick={handleDeleteAccount}
        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
      >
        Delete Account
      </button>
    </SettingsSection>
  );
}
