import React, { useState } from "react";
import { FiBell } from "react-icons/fi";
import SettingsSection from "./SettingsSection";

export default function NotificationSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  const handleSave = () => {
    console.log("Notification settings saved", {
      emailNotifications,
      smsNotifications,
    });
  };

  return (
    <SettingsSection
      title="Notification Settings"
      description="Manage how you receive notifications."
      icon={<FiBell />}
    >
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email Notifications</label>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
            className="mr-2"
          />
          <span>{emailNotifications ? "Enabled" : "Disabled"}</span>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">SMS Notifications</label>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={smsNotifications}
            onChange={() => setSmsNotifications(!smsNotifications)}
            className="mr-2"
          />
          <span>{smsNotifications ? "Enabled" : "Disabled"}</span>
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
