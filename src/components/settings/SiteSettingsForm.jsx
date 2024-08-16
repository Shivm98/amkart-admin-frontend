"use client";

export default function SiteSettingsForm() {
  return (
    <form className="bg-white p-6 rounded-md shadow-sm">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-gray-700">Site Name</label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Enter site name"
          />
        </div>
        <div>
          <label className="block text-gray-700">Logo URL</label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Enter logo URL"
          />
        </div>
        <div>
          <label className="block text-gray-700">Theme</label>
          <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Contact Email</label>
          <input
            type="email"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Enter contact email"
          />
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
