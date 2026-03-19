// src/components/HeroCarousel.jsx
import { useState, useEffect } from 'react';

import banner1 from '../../Assest/Banner (2).png';
import banner2 from '../../Assest/Banner (3).png';
import banner3 from '../../Assest/Inner-Banner1.jpg';

const slides = [
  {
    id: 1,
    imageUrl: banner1,
    alt: 'Shipping containers at Indian port - Import Export',
    caption: 'Start Your Global Trade Journey Today',
  },
  {
    id: 2,
    imageUrl: banner2,
    alt: 'Cargo ship carrying goods - IEC Registration',
    caption: 'Mandatory IEC for Seamless Imports & Exports',
  },
  {
    id: 3,
    imageUrl: banner3,
    alt: 'Air freight airplane - Export from India',
    caption: 'Grow Your Business with IEC Today',
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.imageUrl}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-center justify-center">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center px-6 drop-shadow-2xl tracking-wide">
              {slide.caption}
            </h2>
          </div>
        </div>
      ))}

      {/* NEW: Bottom Marquee Overlay – always visible on top of images */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-red-700/80 via-orange-600/80 to-red-700/80 text-white py-2.5 overflow-hidden shadow-lg z-20">
        <div className="marquee-container relative w-full">
          <div className="marquee inline-flex whitespace-nowrap text-base sm:text-lg font-semibold tracking-wide">
            <span className="mx-16">
              ⚠️ It is mandatory to update your Importer Exporter Code (IEC) between 1st April to 30th June every year ⚠️ 
              Keep your IEC activated – Verify & update even if no changes – Notification No. 58/2015-2020 – Avoid deactivation on DGFT portal ⚠️
            </span>
            <span className="mx-16">
              ⚠️ It is mandatory to update your Importer Exporter Code (IEC) between 1st April to 30th June every year ⚠️ 
              Keep your IEC activated – Verify & update even if no changes – Notification No. 58/2015-2020 – Avoid deactivation on DGFT portal ⚠️
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Dots – moved up a bit so they don't overlap marquee */}
      <div className="absolute bottom-14 sm:bottom-16 left-0 right-0 flex justify-center space-x-4 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              idx === currentIndex 
                ? 'bg-white scale-125 shadow-lg ring-2 ring-white/80' 
                : 'bg-white/60 hover:bg-white/90'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}