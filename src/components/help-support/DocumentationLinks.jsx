import React from "react";
import { FiExternalLink } from "react-icons/fi";

export default function DocumentationLinks({ links }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Documentation & Guides
      </h2>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index} className="flex items-center text-gray-800">
            <FiExternalLink className="mr-2 text-blue-500" />
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
