import React from "react";

export default function SettingsSection({ title, description, children }) {
  return (
    <div className="bg-white p-6 rounded-md shadow-sm mb-8">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div>{children}</div>
    </div>
  );
}
