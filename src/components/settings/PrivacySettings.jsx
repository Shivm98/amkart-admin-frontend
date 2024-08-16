import React, { useState } from "react";
import { FiShield } from "react-icons/fi";
import SettingsSection from "./SettingsSection";

export default function PrivacySettings() {
  const [dataSharing, setDataSharing] = useState(true);
  const [activityVisibility, setActivityVisibility] = useState("Friends");

  const handleSave = () => {
    console.log("Privacy settings saved", { dataSharing, activityVisibility });
  };

  return (
    <SettingsSection
      title="Privacy Settings"
      description="Manage your privacy preferences."
      icon={<FiShield />}
    >
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Data Sharing</label>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={dataSharing}
            onChange={() => setDataSharing(!dataSharing)}
            className="mr-2"
          />
          <span>{dataSharing ? "Enabled" : "Disabled"}</span>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Activity Visibility</label>
        <select
          value={activityVisibility}
          onChange={(e) => setActivityVisibility(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Public">Public</option>
          <option value="Friends">Friends</option>
          <option value="Only Me">Only Me</option>
        </select>
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
