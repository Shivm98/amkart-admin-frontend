"use client";

export default function GDPRComplianceForm() {
  return (
    <form className="bg-white p-6 rounded-md shadow-sm">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-gray-700">Data Retention Period</label>
          <input
            type="number"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Enter days"
          />
        </div>
        <div>
          <label className="block text-gray-700">Cookie Consent</label>
          <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
            <option>Required</option>
            <option>Optional</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Data Deletion Request</label>
          <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
            <option>Enable</option>
            <option>Disable</option>
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
