import React, { useState } from "react";
import { FiZap } from "react-icons/fi";
import SettingsSection from "./SettingsSection";

export default function IntegrationsSettings() {
  const [googleConnected, setGoogleConnected] = useState(false);
  const [slackConnected, setSlackConnected] = useState(true);

  const handleSave = () => {
    console.log("Integrations settings saved", {
      googleConnected,
      slackConnected,
    });
  };

  return (
    <SettingsSection
      title="Integrations"
      description="Manage your integrations with third-party services."
      icon={<FiZap />}
    >
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Google Integration</label>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={googleConnected}
            onChange={() => setGoogleConnected(!googleConnected)}
            className="mr-2"
          />
          <span>{googleConnected ? "Connected" : "Not Connected"}</span>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Slack Integration</label>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={slackConnected}
            onChange={() => setSlackConnected(!slackConnected)}
            className="mr-2"
          />
          <span>{slackConnected ? "Connected" : "Not Connected"}</span>
        </div>
      </div>
      <button
        onClick={handleSave}
        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Save Changes
      </button>
    </SettingsSection>
  );
}
