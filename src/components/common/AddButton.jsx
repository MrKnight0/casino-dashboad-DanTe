import React from 'react';

export default function AddButton({ onClick }) {
  return (
    <button className="flex items-center bg-blue-700 text-white px-4 py-2 rounded shadow-sm hover:bg-blue-800" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-9h3a1 1 0 010 2h-3v3a1 1 0 01-2 0v-3H6a1 1 0 010-2h3V6a1 1 0 012 0v3z"
          clipRule="evenodd"
        />
      </svg>
      Nueva publicación
    </button>
  );
}
