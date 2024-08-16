"use client";
import { FiMessageSquare } from "react-icons/fi";

export default function LiveChatSupportHeader() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-800 flex items-center">
        <FiMessageSquare className="mr-2" />
        Live Chat Support
      </h1>
      <div>
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
          Start New Chat
        </button>
      </div>
    </div>
  );
}
