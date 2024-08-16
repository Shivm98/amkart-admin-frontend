"use client";

export default function LiveChatWindow({ messages, onSendMessage }) {
  return (
    <div className="p-4 flex flex-col h-full">
      <div className="flex-grow overflow-y-auto mb-4 space-y-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.isAdmin ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg shadow ${
                message.isAdmin
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <div>{message.text}</div>
              <div className="text-xs text-gray-300 mt-1 text-right">
                {message.timestamp}
              </div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={onSendMessage} className="flex">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-grow border rounded-l-md p-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 rounded-r-md"
        >
          Send
        </button>
      </form>
    </div>
  );
}
