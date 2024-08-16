"use client";

export default function LiveChatSupportList({
  chatList,
  selectedChat,
  onSelectChat,
}) {
  return (
    <div className="h-full overflow-y-auto">
      {chatList.map((chat) => (
        <div
          key={chat.id}
          onClick={() => onSelectChat(chat)}
          className={`p-4 cursor-pointer flex items-center justify-between border-b last:border-none hover:bg-gray-200 ${
            selectedChat?.id === chat.id ? "bg-gray-300" : "bg-white"
          }`}
        >
          <div>
            <div className="font-semibold text-gray-800">{chat.customer}</div>
            <div className="text-gray-500 text-sm">{chat.lastMessage}</div>
          </div>
          <div className="text-gray-400 text-xs text-right">
            <div>{chat.timestamp}</div>
            <div
              className={`mt-1 text-xs font-semibold ${
                chat.status === "Unread" ? "text-red-500" : ""
              }`}
            >
              {chat.status}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
