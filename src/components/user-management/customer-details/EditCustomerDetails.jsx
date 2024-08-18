"use client";

import { useState } from "react";
import { FiSave } from "react-icons/fi";

export default function EditCustomerDetails({ customer, onSave }) {
  const [firstName, setFirstName] = useState(customer.firstName);
  const [middleName, setMiddleName] = useState(customer.middleName || "");
  const [lastName, setLastName] = useState(customer.lastName);
  const [dob, setDob] = useState(customer.dob || "");
  const [gender, setGender] = useState(customer.gender || "");
  const [addressLine1, setAddressLine1] = useState(customer.addressLine1 || "");
  const [addressLine2, setAddressLine2] = useState(customer.addressLine2 || "");
  const [zipCode, setZipCode] = useState(customer.zipCode || "");
  const [country, setCountry] = useState(customer.country || "");
  const [state, setState] = useState(customer.state || "");
  const [city, setCity] = useState(customer.city || "");
  const [email, setEmail] = useState(customer.email);
  const [username, setUsername] = useState(customer.username);
  const [phone, setPhone] = useState(customer.phone || "");

  const handleSave = () => {
    onSave({
      firstName,
      middleName,
      lastName,
      dob,
      gender,
      addressLine1,
      addressLine2,
      zipCode,
      country,
      state,
      city,
      email,
      username,
      phone,
    });
  };

  return (
    <div className="bg-white p-8  mb-8 transition-transform duration-300 ">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">
        Edit Customer Details
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:border-black focus:ring-black"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Middle Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:border-black focus:ring-black"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:border-black focus:ring-black"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date Of Birth
          </label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:border-black focus:ring-black"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <select
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:border-black focus:ring-black"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address Line 1
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:border-black focus:ring-black"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address Line 2
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:border-black focus:ring-black"
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Zip Code
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:border-black focus:ring-black"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:border-black focus:ring-black"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            State
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:border-black focus:ring-black"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:border-black focus:ring-black"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:border-black focus:ring-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:border-black focus:ring-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:border-black focus:ring-black"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-6 text-right">
        <button
          onClick={handleSave}
          className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-all flex items-center space-x-2"
        >
          <FiSave />
          <span>Save Details</span>
        </button>
      </div>
    </div>
  );
}
