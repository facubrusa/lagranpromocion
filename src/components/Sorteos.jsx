import AOS from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
export const Sorteos = ({ data }) => {
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
          <h1 className="text-center text-5xl text-white font-extrabold drop-shadow-text-shadow">Premios LGP</h1>
        </div>

        <div data-aos="fade-up" className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-screen-lg mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-10">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex border border-gray-200 rounded-2xl shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
                >
                  <div className="w-full">
                    <img
                      src={item.src}
                      className="h-full bg-cover bg-center relative"
                    >
                    </img>
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
