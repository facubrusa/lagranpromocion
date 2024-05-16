import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUserAdd, AiFillPlayCircle } from 'react-icons/ai';
import { FaCartShopping } from "react-icons/fa6";

import logolgp from '../assets/logolgp.png';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeMenu);

    return () => {
      document.removeEventListener('mousedown', closeMenu);
    };
  }, []);
  return (
    <nav className="backdrop-blur-sm bg-black bg-opacity-20 fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logolgp} alt="" className="h-12" />
        </Link>

        <div className="flex sm:order-2 space-x-3 sm:space-x-0 rtl:space-x-reverse">
          <Link target='_blank' to="https://api.whatsapp.com/message/UDAGZVNL5JVAO1?autoload=1&app_absent=0"
            type="button"
            className="items-center justify-center text-black bg-yellow-500 hover:bg-yellow-600 font-bold rounded-3xl text-sm pr-4 py-2 text-center mr-4 lg:inline-flex hidden"
          >
            <FaCartShopping className="h-5 w-5 ml-3 mr-1 text-black" />
            ¡ASOCIATE AQUÍ!
          </Link>

          <Link to="/contact"
            type="button"
            className="items-center justify-center text-black bg-yellow-500 hover:bg-yellow-600 font-bold rounded-3xl text-sm pr-4 py-2 text-center lg:inline-flex hidden"
          >
            <AiOutlineUserAdd className="h-6 w-6 ml-3 mr-1 text-black" />
            ¡SER PROMOTOR!
          </Link>

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={toggleMenu}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div ref={menuRef} className={`w-full lg:flex lg:w-auto lg:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0">
            <li>
              <Link to="/sorteos" className="block py-2 px-2 text-white uppercase font-bold text-sm">
                Sorteos
              </Link>
            </li>
            <li>
              <Link to="/ganadoresLGP" className="block py-2 px-2 text-white uppercase font-bold text-sm">
                Ganadores
              </Link>
            </li>
            <li>
              <Link to="/jugaonline" className="block py-2 px-2 text-white uppercase font-bold text-sm">
                DESCARGAR CARTON
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-2 text-white uppercase font-bold text-sm">
                Nosotros
              </Link>
            </li>
          </ul>

          <div className="flex justify-center items-center sm:order-2 space-x-3 sm:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-black bg-yellow-500 hover:bg-yellow-600 font-bold rounded-3xl text-sm p-2 text-center mr-4 lg:hidden"
            >
              ¡ASOCIATE AQUÍ!
            </button>

            <button
              type="button"
              className="text-black bg-yellow-500 hover:bg-yellow-600 font-bold rounded-3xl text-sm p-2 text-center lg:hidden"
            >
              RADIO
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};



