"use client";
import { FiPlus } from "react-icons/fi";

export default function TicketingSystemHeader({ onCreateTicket }) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-800">Ticketing System</h1>
      <button
        onClick={onCreateTicket}
        className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        <FiPlus className="mr-2" />
        Create New Ticket
      </button>
    </div>
  );
}
