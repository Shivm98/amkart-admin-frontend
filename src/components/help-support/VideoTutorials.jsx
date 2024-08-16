import React from "react";

export default function VideoTutorials({ tutorials }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Video Tutorials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md overflow-hidden"
          >
            <div className="relative">
              <iframe
                src={tutorial.url}
                title={tutorial.title}
                className="w-full h-48"
                allowFullScreen
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800">
                {tutorial.title}
              </h3>
              <p className="text-gray-600 mt-2">{tutorial.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
