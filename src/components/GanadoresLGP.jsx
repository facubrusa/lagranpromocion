import AOS from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
export const GanadoresLGP = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="">
        <div data-aos="fade-right" className="bg-banner bg-cover bg-center mt-24 py-16">
          <h1 style={{ textShadow: '2px 2px 3px rgba(0, 0, 0, 0.8)' }} className="text-center text-5xl text-white font-extrabold ">Ganadores LGP</h1>
        </div>
        <div data-aos="fade-up" className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-screen-lg mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-10">
              {[
                { month: 'ABRIL', description: 'Conoce los ganadores del sorteo del 24/04.' },
                { month: 'MAYO', description: 'Conoce los ganadores del sorteo del 31/05.' },
                { month: 'JUNIO', description: 'Conoce los ganadores del sorteo del 24/06.' },
                { month: 'JULIO', description: 'Conoce los ganadores del sorteo del 25/07.' },
                { month: 'AGOSTO', description: 'Conoce los ganadores del sorteo del 22/08.' },
                { month: 'OCTUBRE', description: 'Conoce los ganadores del sorteo del 30/09.' },
                { month: 'NOVIEMBRE', description: 'Conoce los ganadores del sorteo del 24/10.' },
                { month: 'DICIEMBRE', description: 'Conoce los ganadores del sorteo del 22/11.' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex border border-gray-200 rounded-2xl shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
                >
                  <div className="w-1/2 bg-yellow-500 text-center pb-8 pt-12">
                    <h3 className="text-2xl font-bold text-white">
                      GANADORES {item.month} 2024
                    </h3>
                  </div>

                  <div className="w-1/2 bg-white p-8 flex flex-col justify-center">
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Descubrí los ganadores
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 text-sm font-bold text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 mt-4"
                    >
                      VER TODOS
                      <svg
                        className="w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
