import React, { useEffect } from 'react';
import AntayLogo from '../common/antay-logo.png'

const Header = ({ title }) => {

    useEffect(() => {
        document.title = title;
    }, [title]);

    const styles = 'hover:text-orange-500 hover:underline'
    return (
        <header className='bg-white py-4 flex items-center justify-between'>
            <img src={AntayLogo} alt="Antay Logo" width={100} className='ml-8'/>
            <nav className='mr-8 space-x-6 font-roboto text-sm text-black'>
                <a href="#" className={styles}>Casita</a>
                <a href="#" className={styles}>Dashboard</a>
                <a href="#" className={styles}>Informes</a>
                <a href="#" className={styles}>Perfil</a>
                <a href="#" className={styles}>Salir</a>
            </nav>
        </header>
    );
};

export default Header;
