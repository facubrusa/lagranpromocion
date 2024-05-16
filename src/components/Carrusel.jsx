import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import AOS from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

export const Carrusel = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  const [middleIndex, setMiddleIndex] = useState(0);

  const nextSlide = () => {
    setMiddleIndex((middleIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setMiddleIndex((middleIndex - 1 + data.length) % data.length);
  };
  return (
    <div data-aos="fade-right" className="flex justify-center items-center gap-3 w-full h-full mt-20">
      <BsArrowLeftCircleFill className="relative z-50 w-8 h-8 left-80 text-white hover:cursor-pointer" onClick={prevSlide} />
      <div className="w-6/12 relative">
        <img
          src={data[(middleIndex + 1) % data.length].src}
          alt={data[(middleIndex + 1) % data.length].alt}
          className="w-full h-full"
          style={{ objectFit: "cover", objectPosition: '0% 0%', width: '50%', marginLeft: "50%" }}
        />
      </div>
      <div className="w-4/12">
        <img
          src={data[middleIndex].src}
          alt={data[middleIndex].alt}
          className="w-full h-full"
        />
      </div>
      <div className="w-6/12">
        <img
          src={data[(middleIndex + 2) % data.length].src}
          alt={data[(middleIndex + 2) % data.length].alt}
          className="w-full h-full"
          style={{ objectFit: "cover", objectPosition: '0% 0%', width: '50%', marginRight: "-50%" }}
        />

      </div>
      <BsArrowRightCircleFill className="relative w-8 h-8 right-80 text-white hover:cursor-pointer" onClick={nextSlide} />
    </div>
  )
}
