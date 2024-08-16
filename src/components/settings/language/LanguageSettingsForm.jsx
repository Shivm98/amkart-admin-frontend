"use client";

export default function LanguageSettingsForm() {
  return (
    <form className="bg-white p-6 rounded-md shadow-sm">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-gray-700">Default Language</label>
          <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Default Currency</label>
          <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Time Zone</label>
          <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
            <option>GMT</option>
            <option>PST</option>
            <option>EST</option>
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
