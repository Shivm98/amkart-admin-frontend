"use client";

import useModalStore from "@/store/useModalStore";

function Modal() {
  const { components, closeModal } = useModalStore();
  console.log("components", components);
  return components.length > 0 ? (
    <div className="fixed left-0 right-0 top-0 z-50 flex h-[calc(100%)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 md:inset-0">
      {components.map((Component, i) => (
        <div
          key={i}
          tabIndex="-1"
          aria-hidden="true"
          className="relative max-h-full w-full max-w-[48.25rem] p-4"
        >
          <div className="bg-white rounded-lg shadow-lg">
            <div className="px-5 py-6">
              <div className="flex items-center justify-center">
                {Component}
              </div>
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                &#x2715;
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : null;
}

export default Modal;
