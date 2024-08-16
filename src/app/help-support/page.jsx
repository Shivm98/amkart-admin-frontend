"use client";
import React from "react";
import HelpSupportHeader from "../../components/help-support/HelpSupportHeader";
import FAQList from "../../components/help-support/FAQList";
import VideoTutorials from "../../components/help-support/VideoTutorials";
import DocumentationLinks from "../../components/help-support/DocumentationLinks";
import SupportForm from "../../components/help-support/SupportForm";
import ContactSupport from "../../components/help-support/ContactSupport";

export default function HelpSupportPage() {
  // Dummy data for FAQs, tutorials, and documentation links
  const faqCategories = [
    {
      name: "Account",
      faqs: [
        {
          question: "How can I reset my password?",
          answer:
            "To reset your password, click on 'Forgot Password' on the login page and follow the instructions.",
        },
        {
          question: "How do I update my profile information?",
          answer:
            "You can update your profile information by navigating to the 'Profile' section in your account settings.",
        },
      ],
    },
    {
      name: "Orders",
      faqs: [
        {
          question: "Where can I find my order history?",
          answer:
            "Your order history is available in the 'Orders' section of your account dashboard.",
        },
        {
          question: "How do I track my order?",
          answer:
            "To track your order, go to the 'Orders' section, select the order, and click on 'Track'.",
        },
      ],
    },
  ];

  const tutorials = [
    {
      title: "Getting Started with Your Account",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Learn how to set up your account and get started quickly.",
    },
    {
      title: "How to Place an Order",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Step-by-step guide on how to place an order.",
    },
    {
      title: "Managing Your Orders",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Tips and tricks for managing your orders efficiently.",
    },
  ];

  const documentationLinks = [
    { title: "User Guide", url: "https://example.com/user-guide" },
    { title: "API Documentation", url: "https://example.com/api-docs" },
    {
      title: "Troubleshooting Guide",
      url: "https://example.com/troubleshooting",
    },
  ];

  return (
    <div className="flex flex-col space-y-12 p-8 bg-gray-50">
      <HelpSupportHeader />
      <FAQList categories={faqCategories} />
      <VideoTutorials tutorials={tutorials} />
      <DocumentationLinks links={documentationLinks} />
      <SupportForm />
      <ContactSupport />
    </div>
  );
}
