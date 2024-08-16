"use client";
import { useState } from "react";
import LiveChatSupportHeader from "@/components/customer-support/live-chat-support/LiveChatSupportHeader";
import LiveChatSupportList from "@/components/customer-support/live-chat-support/LiveChatSupportList";
import LiveChatWindow from "@/components/customer-support/live-chat-support/LiveChatWindow";

export default function LiveChatSupportPage() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([
    {
      text: "Hello, how can I help you?",
      isAdmin: true,
      timestamp: "10:30 AM",
    },
    {
      text: "I have a problem with my order.",
      isAdmin: false,
      timestamp: "10:32 AM",
    },
    {
      text: "Could you please provide more details?",
      isAdmin: true,
      timestamp: "10:33 AM",
    },
    {
      text: "The product I received is damaged.",
      isAdmin: false,
      timestamp: "10:34 AM",
    },
    {
      text: "I'm really sorry to hear that. Let me look into it.",
      isAdmin: true,
      timestamp: "10:35 AM",
    },
  ]);

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
    // Example: Load chat messages based on selected chat
    setMessages([
      {
        text: `Hi ${chat.customer}, how can I help you?`,
        isAdmin: true,
        timestamp: "10:00 AM",
      },
      { text: chat.lastMessage, isAdmin: false, timestamp: chat.timestamp },
    ]);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const input = e.target[0];
    if (input.value.trim()) {
      const newMessage = {
        text: input.value,
        isAdmin: true,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, newMessage]);
      input.value = "";
    }
  };

  const chatList = [
    {
      id: 1,
      customer: "John Doe",
      lastMessage: "I have a problem with my order.",
      timestamp: "10:30 AM",
      status: "Unread",
    },
    {
      id: 2,
      customer: "Jane Smith",
      lastMessage: "Thanks for your help!",
      timestamp: "09:15 AM",
      status: "Read",
    },
    {
      id: 3,
      customer: "Michael Johnson",
      lastMessage: "Can I change my shipping address?",
      timestamp: "08:45 AM",
      status: "Unread",
    },
    {
      id: 4,
      customer: "Emily Davis",
      lastMessage: "What is the status of my order?",
      timestamp: "Yesterday",
      status: "Read",
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <LiveChatSupportHeader />
      <div className="flex flex-grow mt-4 space-x-4 px-4">
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md overflow-hidden">
          <LiveChatSupportList
            chatList={chatList}
            selectedChat={selectedChat}
            onSelectChat={handleSelectChat}
          />
        </div>
        <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          {selectedChat ? (
            <LiveChatWindow
              messages={messages}
              onSendMessage={handleSendMessage}
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Select a chat to start messaging
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
