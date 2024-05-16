import React, { useState, useEffect } from 'react';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';
import about3 from '../assets/about3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  const [activeSection, setActiveSection] = useState('HISTORIA');

  const imageMapping = {
    HISTORIA: about1,
    VALORES: about2,
    MISION: about3,
  };

  const sections = {
    HISTORIA: {
      title: 'La Gran Promoción comienza en 1995 con el nombre de Tómbola Combinada CRECER.',
      description: `Su primera edición entregaba como premio seis automóviles entre sus asociados. 
      Su crecimiento fue constante logrando en el año 2003 llegar a su histórica convocatoria al reunir a 40.000 personas 
      en su fiesta anual y constituirse regionalmente en una de las más reconocidas hasta la actualidad.`,
    },
    VALORES: {
      title: 'Formamos parte del Grupo Cooperativo Mutual Devoto.',
      description: `A través de nuestro trabajo fomentamos los emprendimientos y servicios en los que se prioricen valores de cooperación, solidaridad, respeto, responsabilidad, ética y honestidad.`,
    },
    MISION: {
      title: 'La Gran Promoción es una promoción organizada por la Sociedad Cosmopolita de Socorros Mutuos',
      description: `Su principal objetivo es llevar a sus asociados a través de un plan societario importantes premios a los que acceden desde LGP y quienes accedan también podrán disponer de los siguientes servicios:
      Turismo,
      Viviendas,
      Seguro de sepelios,
      Deporte y recreación,
      Academia de idiomas,
      Seguros sociales,
      Actividades sociales,
      Proveduría y Farmacia`,
    },
  };

  return (
    <div className="h-lvh">
      <div data-aos="fade-right" className="bg-banner bg-cover bg-center mt-24 py-16">
        <h1 style={{ textShadow: '2px 2px 3px rgba(0, 0, 0, 0.8)' }} className="text-center text-5xl text-white font-extrabold ">Nosotros</h1>
      </div>
      <div className="relative flex min-h-screen justify-center overflow-hidden pb-6 sm:pb-12">
        <div className="max-w-screen-lg mx-auto py-4">

          <div data-aos="fade-right"
            className="rounded-lg flex overflow-hidden mt-10 relative before:absolute before:z-20 bg-yellow-500"
          >
            <div className="relative z-20 p-16 w-1/2">
              <h2 className="text-white text-3xl font-semibold">{sections[activeSection].title}</h2>
              <p className="text-sm text-slate-200 mt-4">{sections[activeSection].description}</p>
            </div>

            <div className='py-16 px-16'>
              <img src={imageMapping[activeSection]}
                className="rounded-xl w-full h-auto"
                alt={`Imagen asociada con la sección ${activeSection}`}></img>
            </div>
          </div>

          <div className="flex gap-6 mt-6">
            {Object.keys(sections).map((key) => (
              <div data-aos="fade-up"
                key={key}
                className="bg-yellow-500 anton-regular font-white w-1/3 text-center shadow rounded-lg overflow-hidden flex flex-col cursor-pointer"
                onClick={() => setActiveSection(key)}
              >
                <div className="p-6 flex flex-col flex-1">
                  <span
                    style={{
                      textShadow: '2px 2px 3px rgba(0, 0, 0, 0.4)',
                    }}
                    className="block text-white font-extrabold text-3xl"
                  >
                    {key}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
