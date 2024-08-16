"use client";

export default function TwoFactorAuthForm() {
  return (
    <form className="bg-white p-6 rounded-md shadow-sm">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-gray-700">Authentication Method</label>
          <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
            <option>SMS</option>
            <option>Email</option>
            <option>Authenticator App</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Backup Codes</label>
          <textarea
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            placeholder="Generate or manage backup codes"
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
