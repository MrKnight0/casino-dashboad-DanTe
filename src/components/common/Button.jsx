import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      className="px-8 py-3 bg-green-500 hover:bg-transparent text-white font-semibold rounded-none shadow-md hover:shadow-lg focus:outline-none transition duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
