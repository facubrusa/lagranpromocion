import logogolden from '../assets/logogolden.png';
import {Carrusel} from '../components/Carrusel'
import { FaWhatsapp, FaInstagram, FaYoutube, FaTrophy } from 'react-icons/fa';
import AOS from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

export const GanadoresClover = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <>
      <section >
        <a href="/goldenclover"><img data-aos="fade-right" className="pt-20 mx-auto" src={logogolden} alt="La gran promocion golden" /></a>
        <div data-aos="fade-up">
          <h1 className='text-5xl font-extrabold text-white text-center'>GANADORES</h1>
          <h3 className='mt-7 text-2xl text-white text-center'>¿Que estas esperando para participar?<br></br>
            Dos sorteos más por mes con premios increíbles.
          </h3>
        </div>
        <h1 data-aos="fade-up" className='mt-10 text-3xl font-extrabold text-white text-center'>ACCEDE A NUESTRAS REDES</h1>
        <div data-aos="fade-up" className="text-center mt-12 font-bold text-2xl uppercase flex flex-col md:flex-row justify-center items-center p-4 gap-6 sm:px-4">
          <a
            target="_blank"
            href="https://wa.me/message/UDAGZVNL5JVAO1"
            className="bg-gradient-to-r from-green-900 via-green-700 to-green-500 px-12 py-6 rounded-full text-xl hover:from-green-700 hover:via-green-500 hover:to-green-300 transition-all duration-500 flex items-center gap-2"
          >
            <FaWhatsapp className="h-6 w-6" /> Whatsapp
          </a>

          <a
            target="_blank"
            href="https://www.instagram.com/goldencloverlgp/"
            className="bg-gradient-to-r from-pink-700 via-red-600 to-yellow-400 px-12 py-6 rounded-full text-xl hover:from-pink-600 hover:via-red-500 hover:to-yellow-300 transition-all duration-500 flex items-center gap-2"
          >
            <FaInstagram className="h-6 w-6" /> Instagram
          </a>

          <a
            target="_blank"
            href="https://www.youtube.com/@lagranpromocion"
            className="bg-gradient-to-r from-red-900 via-red-700 to-red-500 px-12 py-6 rounded-full text-xl hover:from-red-700 hover:via-red-500 hover:to-red-300 transition-all duration-500 flex items-center gap-2"
          >
            <FaYoutube className="h-6 w-6" /> YouTube
          </a>

          <a
            href="/goldenclover"
            className="bg-gradient-to-r from-yellow-800 via-yellow-600 to-yellow-500 px-12 py-6 rounded-full text-xl hover:from-yellow-600 hover:via-yellow-400 hover:to-yellow-200 transition-all duration-500 flex items-center gap-2"
          >
            <FaTrophy className="h-6 w-6" /> Premios
          </a>
        </div>


        <Carrusel data={data} />
        

      </section >
    </>
  )
}
