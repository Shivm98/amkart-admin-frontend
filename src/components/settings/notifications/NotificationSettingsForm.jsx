"use client";

export default function NotificationSettingsForm() {
  return (
    <form className="bg-white p-6 rounded-md shadow-sm">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-gray-700">Email Notifications</label>
          <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
            <option>Enabled</option>
            <option>Disabled</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">SMS Notifications</label>
          <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
            <option>Enabled</option>
            <option>Disabled</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Push Notifications</label>
          <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
            <option>Enabled</option>
            <option>Disabled</option>
          </select>
        </div>
      </div>
      <div className="mt-6">
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
          Save Changes
        </button>
      </div>
    </form>
  );
}
