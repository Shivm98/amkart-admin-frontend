import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import SettingsSection from "./SettingsSection";

export default function ThemeSettings() {
  const [theme, setTheme] = useState("light");

  const handleSave = () => {
    console.log("Theme settings saved", { theme });
  };

  return (
    <SettingsSection
      title="Theme Settings"
      description="Choose between light and dark modes."
      icon={theme === "light" ? <FiSun /> : <FiMoon />}
    >
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Theme</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
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
