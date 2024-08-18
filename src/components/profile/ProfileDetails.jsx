"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ProfileDetails() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [username, setUsername] = useState("@johndoe");
  const [role] = useState("Admin");

  const handleEditClick = () => {
    if (isEditing) {
      // Save details logic here (e.g., API call)
    }
    setIsEditing(!isEditing);
  };

  return (
    <motion.div
      className="bg-white shadow-md rounded-lg p-8 transition-transform duration-300 hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Profile Details</h3>
        <motion.button
          onClick={handleEditClick}
          className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isEditing ? "Save Details" : "Edit"}
        </motion.button>
      </div>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:border-black focus:ring-black"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            disabled={!isEditing}
            required
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
            disabled={!isEditing}
            required
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
            disabled={!isEditing}
            required
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
            disabled={!isEditing}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 bg-gray-100 cursor-not-allowed"
            value={role}
            disabled
          />
        </div>
      </form>
    </motion.div>
  );
}
