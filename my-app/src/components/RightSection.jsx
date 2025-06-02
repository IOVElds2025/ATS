import React, { useState, useEffect } from 'react';
import slide1 from '../assets/charachters/slide1.png';
import slide2 from '../assets/charachters/slide2.png';
import slide3 from '../assets/charachters/slide3.png';
import honeycomb from '../assets/charachters/honeycomb.jpg';

const images = [slide1, slide2, slide3];

const RightSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-full flex justify-center items-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${honeycomb})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-[#1e3f84] opacity-40 z-10" />

      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100 z-20' : 'opacity-0 z-0'
          }`}
        />
      ))}

      <div className="absolute right-5 top-1/2 transform -translate-y-1/2 z-30 flex flex-col gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full transition cursor-pointer ${
              index === currentImage ? 'bg-red-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-lg xl:text-xl font-bold text-center z-30 max-w-[80%] leading-relaxed drop-shadow">
        Need a dream team? I recruit heroes.
        <br />
        Chasing a dream job? I'm the hero.
        <br />
        Either way — let's make magic happen! ✨🛠️
      </div>
    </div>
  );
};

export default RightSection;
