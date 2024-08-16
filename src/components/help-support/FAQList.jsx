import React from "react";
import FAQItem from "./FAQItem";

export default function FAQList({ categories }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Frequently Asked Questions
      </h2>
      {categories.map((category, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-medium text-gray-700 mb-3">
            {category.name}
          </h3>
          <div className="space-y-4">
            {category.faqs.map((faq, faqIndex) => (
              <FAQItem
                key={faqIndex}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
