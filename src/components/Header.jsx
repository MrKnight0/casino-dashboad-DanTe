import React from 'react';
import LoginButton from './common/LoginButton';
import RegisterButton from './common/RegisterButton';
import Logo from '../assets/logo.jpg'

const Header = () => {
  return (
    <header className="bg-white text-black py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <img className='w-auto h-12' src={Logo} alt="" />
        <div className="mt-4 sm:mt-0 flex justify-end">
          <RegisterButton text="Registrarse" />
          <span className="mx-2"></span>
          <LoginButton text="Iniciar sesión" />
        </div>
      </div>
    </header>
  );
};

export default Header;
