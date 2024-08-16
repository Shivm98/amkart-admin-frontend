"use client";

export default function PaymentGatewayForm() {
  return (
    <form className="bg-white p-6 rounded-md shadow-sm">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-gray-700">Gateway Name</label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Enter gateway name"
          />
        </div>
        <div>
          <label className="block text-gray-700">API Key</label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Enter API key"
          />
        </div>
        <div>
          <label className="block text-gray-700">Merchant ID</label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Enter merchant ID"
          />
        </div>
        <div>
          <label className="block text-gray-700">Mode</label>
          <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
            <option>Test</option>
            <option>Live</option>
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
