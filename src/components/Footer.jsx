import React from 'react';
import logolgp from '../assets/logolgp.png';
import logoSC from '../assets/logoSC.png';
import PDF from '../assets/PDF.pdf';

export const Footer = () => {
    return (
        <footer className="bg-black mt-10">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex justify-center sm:justify-start">
                        <a href="https://lagranpromocion.com.ar/" className="flex items-center mb-4 sm:mb-0 sm:mr-4">
                            <img src={logolgp} className="h-16" alt="LGP Logo" />
                        </a>
                        <a href="https://sociedadcosmopolita.com/" className="flex items-center mb-4 sm:mb-0">
                            <img src={logoSC} className="h-24" alt="SC Logo" />
                        </a>
                    </div>

                    <ul className="flex flex-col sm:flex-row sm:flex-wrap items-center sm:space-x-4 md:space-x-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                        <li className="mb-4 sm:mb-0">
                            <a href="#" className="hover:underline">Sobre Nosotros</a>
                        </li>
                        <li className="mb-4 sm:mb-0">
                            <a target='_blank' href={PDF} className="hover:underline">Términos y Condiciones</a>
                        </li>
                        <li className="mb-4 sm:mb-0">
                            <a href="#" className="hover:underline">Preguntas Frecuentes</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contacto</a>
                        </li>
                    </ul>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024{' '}
                    <a href="https://lagranpromocion.com.ar/" className="hover:underline">
                        La Gran Promoción
                    </a>{' '}
                    es una marca de la Sociedad Cosmopolita de Socorros Mutuos - Cuit: 30-63939527-4
                </span>
                <p className="text-sm font-semibold text-center text-white mt-1">Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};
