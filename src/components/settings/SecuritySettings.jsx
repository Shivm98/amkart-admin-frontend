import React, { useState } from "react";
import { FiLock } from "react-icons/fi";
import SettingsSection from "./SettingsSection";

export default function SecuritySettings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const handleSave = () => {
    console.log("Security settings saved", {
      currentPassword,
      newPassword,
      twoFactorAuth,
    });
  };

  return (
    <SettingsSection
      title="Security Settings"
      description="Manage your password and security options."
      icon={<FiLock />}
    >
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Current Password</label>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">
          Two-Factor Authentication
        </label>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={twoFactorAuth}
            onChange={() => setTwoFactorAuth(!twoFactorAuth)}
            className="mr-2"
          />
          <span>{twoFactorAuth ? "Enabled" : "Disabled"}</span>
        </div>
      </div>
      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Save Changes
      </button>
    </SettingsSection>
  );
}
