import React from 'react';

function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.411 0 8-3.589 8-8h-2c0 3.308-2.692 6-6 6s-6-2.692-6-6H6c0 3.691 2.841 6.729 6.438 6.949L12 17.29z"
        />
      </svg>
    </div>
  );
}

export default Spinner;
