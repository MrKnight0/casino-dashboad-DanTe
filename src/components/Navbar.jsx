import React, { useEffect, useState } from 'react';

import CardList from './CardList';
import axios from 'axios';

const Navbar = () => {
    const [isValidToken, setIsValidToken] = useState(false)

    useEffect(() => {
        const checkTokenValidity = async () => {
            try {
                const token = localStorage.getItem('token')
                const res = await axios.get('http://localhost:3003/protected', {
                    headers: {
                        validar: token
                    }
                })

                console.log(res)

                if (res.status === 200) {
                    setIsValidToken(true)
                }
                else {
                    setIsValidToken(false)
                }
            } catch (error) {
                console.error('Error al verificar el token', error)
                setIsValidToken(false)
            }
        }

        checkTokenValidity()
    }, [])

    return (
        <>
            <nav className="bg-gray-900 py-4 px-8 flex items-center justify-between fixed top-0 left-0 right-0">
                <div className="flex items-center text-white">
                    <CytusIcon className='h-6 w-6 fill-current mr-2' />
                    <h1 className="text-white font-bold text-lg ml-1">{isValidToken ? (<p>Bienvenido Emanuel</p>) : (<p>El token no es valido</p>)}</h1>
                </div>
                <div className="flex items-center justify-center flex-grow">
                    <ul className="flex space-x-6">
                        <li>
                            <a href="/dashboard" className="text-white hover:text-gray-300">Inicio</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-300">Novedades</a>
                        </li>

                        <li>
                            <a href="#" className="text-white hover:text-gray-300">Nosotros</a>
                        </li>
                        {/* <li>
                        <a href="#" className="text-white hover:text-gray-300">Comprar</a>
                    </li> */}
                    </ul>
                </div>
                <div className='text-white m-1'>
                    <span>Aqui va un icono</span>
                </div>
                <div className='text-white m-2'>
                    <span>Aqui va un icono</span>
                </div>
                <div className="ml-4">
                    <span className="block h-6 w-0.5 bg-white mr-5"></span>
                </div>
                <div className='text-white'>
                    <span>Aqui va un icono</span>
                </div>
            </nav>

            <div className='mt-4'>
                <span>Aqui va un icono</span>
            </div>
        </>
    );
};

export default Navbar;