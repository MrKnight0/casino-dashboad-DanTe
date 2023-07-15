import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';
import axios from 'axios';

export default function LoginForm({onRegisterClick}) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        };

        setIsLoading(true);
        setErrorMessage(''); // Limpiar el mensaje de error

        axios.post('http://localhost:3002/login', data)
            .then((response) => {
                
                if (response.status === 200) {

                    const token = response.data.token

                    localStorage.setItem('token', token)
                    setTimeout(() => {
                        setIsLoading(true)
                        navigate('/dashboard');
                    }, 1000)
                 
                }
            })
            .catch((error) => {
                console.log(error);
                // Establecer mensaje de error
            })
            .finally(() => {
                setTimeout(() => {
                    setIsLoading(false);
                    setErrorMessage('Error al iniciar sesión. Por favor, verifica tus credenciales.');
                }, 1000);
            });
    };

    const inputClasses =
        'block w-full p-1.5 border text-gray-900 shadow-sm ring-white px-4 placeholder:text-gray-500 focus:ring-gray-600 sm:text-sm sm:leading-6 rounded-md';

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    /> */}
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Ingresa a Cytus
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    autoComplete="email"
                                    onChange={handleEmailChange}
                                    required
                                    className={inputClasses}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Contraseña
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    required
                                    className={inputClasses}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`flex w-full justify-center rounded-md bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                {isLoading ? <Spinner /> : 'Iniciar sesión'}
                            </button>
                        </div>

                        {errorMessage && (
                            <p className="text-red-500 text-sm mt-2 ml-4">{errorMessage}</p>
                        )}
                    </form>

                    <p className="mt-5 text-center text-sm text-gray-600">
                        No tienes cuenta?{' '}
                        <a onClick={onRegisterClick} href="#" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
                            Crea una cuenta ahora
                        </a>
                    </p>

                </div>
            </div>
        </>
    );
}