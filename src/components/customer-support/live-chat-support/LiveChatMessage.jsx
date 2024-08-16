"use client";

export default function LiveChatMessage({ message }) {
  return (
    <div className={`mb-2 ${message.isAdmin ? "text-right" : ""}`}>
      <div
        className={`inline-block p-2 rounded-md ${
          message.isAdmin
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}
