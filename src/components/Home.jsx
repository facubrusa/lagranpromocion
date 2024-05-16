import slide from '../assets/2024-slide-05.png'
import escenario from '../assets/escenario.png'
import women from '../assets/women.png'
import banner2 from '../assets/banner2.jpg'
import beneficios from '../assets/beneficios.png';
import goldenicon from '../assets/goldenicon.png';
import goldenicon1 from '../assets/goldenicon1.png';
import winner from '../assets/winner.png';
import shows from '../assets/SHOWS.png';
import evento from '../assets/evento.png';
import goldenescrito from '../assets/goldenescrito.png';
import lagranpromocionwrite from '../assets/lagranpromocionwrite.png';
import bannerGolden from '../assets/bannerGolden.png';
import abel from '../assets/banner3.jpg';
import luz from '../assets/luz.png';
import grid1 from '../assets/grid1.jpg';
import grid2 from '../assets/grid2.jpg';
import grid3 from '../assets/grid3.jpg';
import grid4 from '../assets/grid4.jpg';
import grid5 from '../assets/grid5.jpg';
import AOS from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
export const Home = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <>
      <div className='p-2 my-20 sm:p-10 sm:mb-2 mt-20'>
        <img data-aos="fade-right" src={slide} className='mx-auto' alt="" />
        <img src={luz} alt="destello" className="pointer-events-none absolute top-3/4 left-1/2 opacity-60 transform -translate-x-1/2 -translate-y-1/2 z-[-1] hidden lg:flex md:flex xl:top-2/4" />
      </div>
      
      <div className="hidden lg:flex bg-banner bg-cover bg-center justify-between">
        <img data-aos="fade-right" className='hidden xl:flex' src={escenario} alt="escenario" />
        <img
          src={beneficios}
          className='hidden lg:flex'
          alt="beneficios"
          style={{ width: '400px', height: 'auto', objectFit: 'contain' }}
        />
        <img data-aos="fade-left" src={women} className='hidden lg:flex' alt="women" />
      </div>
      
      <div className="slider">
        <div className="slide-track-1">
          {data.map((item, index) => (
            <div key={index} className="slide">
              <img src={item.src} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>

      <div data-aos="fade-up" className="relative py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="/goldenclover"
            className="relative block group"
          >
            <img
              className="bg-cover bg-center transition-all duration-300 group-hover:brightness-50"
              src={grid1}
            ></img>
            <img
              src={goldenescrito}
              alt="Logo 1"
              className="absolute inset-0 m-auto w-2/3"
            />
          </a>
          <a target='_blank'
            href="https://www.youtube.com/@lagranpromocion/featured"
            className="relative block group"
          >
            <img
              className="bg-cover bg-center transition-all duration-300 group-hover:brightness-50"
              src={grid2}
            ></img>
            <img
              src={lagranpromocionwrite}
              alt="Logo 2"
              className="absolute inset-0 m-auto w-5/6"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <a
            target='_blank'
            href="https://www.youtube.com/watch?v=YTMWO2xlzzY"
            className="relative block group"
          >
            <img
              className="bg-cover bg-center transition-all duration-300 group-hover:brightness-50"
              src={grid3}
            ></img>
            <img
              src={shows}
              alt="Logo 3"
              className="absolute inset-0 m-auto w-3/5"
            />
          </a>
          <a
            href="/ganadoreslgp"
            className="relative block group"
          >
            <img
              className="bg-cover bg-center transition-all duration-300 group-hover:brightness-50"
              src={grid4}
            ></img>
            <img
              src={winner}
              alt="Logo 4"
              className="absolute inset-0 m-auto w-5/6"
            />
          </a>
          <a
            target='_blank'
            href="https://www.youtube.com/watch?v=dpr6lE3UK7Y"
            className="relative block group"
          >
            <img
              className="bg-cover bg-center transition-all duration-300 group-hover:brightness-50"
              src={grid5}
            ></img>
            <img
              src={evento}
              alt="Logo 5"
              className="absolute inset-0 m-auto w-3/4"
            />
          </a>
        </div>
      </div>


      <div data-aos="fade-right" className="pb-16 relative pb-18 sm:pb-24 flex flex-col sm:flex-row items-center sm:justify-start mx-auto max-w-screen-lg">
        <div className="hidden sm:block max-w-screen-2xl">
          <img src={abel} alt="abel" className="w-full h-auto object-cover" />
        </div>

        <div className="w-full sm:w-2/3 px-6 text-white text-center sm:text-left">
          <h2 className="text-xl text-yellow-400 uppercase">
            Los mejores artistas del país en vivo
          </h2>
          <h1 className="text-4xl font-extrabold mt-2">
            Shows y espectáculos de los artistas más grandes del país
          </h1>
          <p className="mt-4">
            Al final del sorteo de La Gran Promoción, te espera un show especial con dos artistas reconocidos del país. No te pierdas este cierre espectacular para celebrar a lo grande.
          </p>
          <a
            target='_blank'
            href="https://www.instagram.com/p/C6PaNnqLKRD/"
            className="mt-6 inline-block border border-yellow-400 font-base text-yellow-400 px-4 py-2"
          >
            Ver más
          </a>
        </div>
      </div>

      <div className='bg-banner mb-16 bg-cover bg-center flex justify-between'>
        <div data-aos="fade-up" className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 py-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-lg font-semibold leading-7 text-blue-950">
                ¿Qué esperas para sumarte?
              </dt>

              <dd className="order-first text-3xl font-extrabold tracking-tight text-white sm:text-5xl drop-shadow-text-shadow" >
                44.000 jugadores
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-lg font-semibold leading-7 text-blue-950">
                ¡Más probabilidades!
              </dt>
              <dd className="order-first text-3xl font-extrabold tracking-tight text-white sm:text-5xl drop-shadow-text-shadow" >
                2.500 ganadores
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-lg font-semibold leading-7 text-blue-950">
                ¡Más de $2.000.000 en premios!
              </dt>
              <dd className="order-first text-3xl font-extrabold tracking-tight text-white sm:text-5xl drop-shadow-text-shadow" >
                +$2M en premios
              </dd>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-right" className="relative p-18 sm:pb-24 flex flex-col sm:flex-row items-center sm:justify-start mx-auto max-w-screen-lg">
        <div className="w-full sm:w-2/3 px-6 text-white text-center sm:text-left">
          <h2 className="text-xl text-yellow-400 uppercase">
            Los mejores artistas del país en vivo
          </h2>
          <h1 className="text-4xl font-extrabold mt-2">
            Shows y espectáculos de los artistas más grandes del país
          </h1>
          <p className="mt-4">
            Al final del sorteo de La Gran Promoción, te espera un show especial con dos artistas reconocidos del país. No te pierdas este cierre espectacular para celebrar a lo grande.
          </p>
          <a
            href="#"
            className="mt-6 inline-block border border-yellow-400 font-base text-yellow-400 px-4 py-2"
          >
            Ver más
          </a>
        </div>
        <div className="hidden sm:block max-w-screen-2xl">
          <img src={banner2} alt="abel" className="w-full h-auto object-cover" />
        </div>
      </div>


      <div data-aos="fade-up" className="hidden sm:flex justify-center pt-16">
        <a
          className="animate-levitate"
          href="/goldenclover"
        >
          <img
            src={bannerGolden}
            className="mx-auto"
            alt="Banner Golden Clover"
          />
        </a>
      </div>


      <div data-aos="fade-up" className="sm:hidden flex justify-center pt-16">
        <a
          className="animate-levitate"
          href="/goldenclover"
        >
          <img
            src={goldenicon}
            className="mx-auto w-2/3"
            alt="Banner Golden Clover"
          />
        </a>
      </div>

      <section data-aos="fade-up" className='py-16'>
        <div className="flex justify-center mx-auto w-full min-h-10 lg:w-4/5 xl:min-h-96 lg:min-h-72 sm:min-h-14 md:min-h-72">
          <iframe
            src="//lightwidget.com/widgets/1cd81cdd11985407a3a6003ceae9118c.html"
            scrolling="no"
            allowtransparency="true"
            className="lightwidget-widget w-full overflow-hidden"
          ></iframe>
        </div>
      </section>

      <a
        href="/goldenclover"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden fixed right-6 bottom-6 z-50 sm:flex animate-levitate"
      >
        <img
          src={goldenicon1}
          alt="WhatsApp"
          className="p-2 cursor-pointer relative transition duration-300 transform hover:scale-105 "
        />
      </a>


      <a
        href="https://api.whatsapp.com/send?phone=1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="sm:hidden fixed right-6 bottom-6 z-50 flex"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png"
          alt="WhatsApp"
          className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 p-2 cursor-pointer relative"
        />
        <span className="absolute top-0 right-0 w-6 h-6 bg-red-500 text-white text-center font-bold rounded-full flex items-center justify-center">1</span>
      </a>
    </>
  )
}
