"use client";

export default function ShippingOptionsForm() {
  return (
    <form className="bg-white p-6 rounded-md shadow-sm">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-gray-700">Shipping Method</label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Enter shipping method"
          />
        </div>
        <div>
          <label className="block text-gray-700">Rate</label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Enter rate"
          />
        </div>
        <div>
          <label className="block text-gray-700">Delivery Time</label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Enter delivery time"
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
