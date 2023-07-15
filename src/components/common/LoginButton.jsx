import React, { useState } from 'react';
import RegisterForm from '../RegisterForm'; 
import LoginForm from '../LoginForm';

export default function LoginButton({ text }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
  };

  const handleLoginClick = () => {
    setShowRegisterForm(false);
  };

  return (
    <>
      <button onClick={openModal} className="bg-blue-700 text-white px-6 py-1 text-center rounded shadow-sm hover:shadow-lg hover:bg-blue-800">
        {text}
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow">
            <div className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer text-black hover:text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={closeModal}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            {showRegisterForm ? <RegisterForm onLoginClick={handleLoginClick} /> : <LoginForm onRegisterClick={handleRegisterClick} />}
          </div>
        </div>
      )}
    </>
  );
}
