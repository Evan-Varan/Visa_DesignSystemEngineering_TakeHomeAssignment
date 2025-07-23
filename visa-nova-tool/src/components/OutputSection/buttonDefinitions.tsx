import React from "react";

export const PrimaryButton = () => (
  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-sm">
    Primary action
  </button>
);

export const DestructiveButton = () => (
  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow-sm flex items-center gap-2">
    {/* Trash Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 7h12M9 7V4h6v3m-9 0v13a2 2 0 002 2h6a2 2 0 002-2V7H6z"
      />
    </svg>
    Destructive action
  </button>
);

export const IconButton = () => (
  <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-sm flex items-center justify-center">
    {/* Plus Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  </button>
);
