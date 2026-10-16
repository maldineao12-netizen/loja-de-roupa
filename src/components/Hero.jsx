import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/products';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section id="home" className="relative w-full h-screen min-h-[650px] max-h-[1080px] bg-sky-900 overflow-hidden select-none">
      {/* Background Image with smooth transition */}
      {HERO_SLIDES.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          } transform duration-700`}
        >
          {/* Main Hero Background Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-top filter brightness-[0.92] contrast-[1.05]"
          />
          {/* Subtle gradient overlay to ensure menu and text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        </div>
      ))}

      {/* Main Container Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 lg:px-12 flex items-center">
        <div className="max-w-xl text-white pt-12">
          {/* Small Tag */}
          <div className="inline-block mb-3">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white/90 drop-shadow-sm">
              {slide.tagline}
            </span>
          </div>

          {/* Hero Main Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-8 font-heading drop-shadow-md">
            {slide.title}
          </h1>

          {/* Subtitle / Description */}
          <p className="text-sm sm:text-base text-white/85 max-w-md font-medium leading-relaxed mb-8 hidden sm:block">
            {slide.subtitle}
          </p>

          {/* CTA Button */}
          <div>
            <a
              href="#shop"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white hover:bg-white/90 text-gray-900 text-sm font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              {slide.cta}
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Buttons - Left & Right (exact white circles as in reference image) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-md flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 -ml-0.5 stroke-[2.2]" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-md flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 -mr-0.5 stroke-[2.2]" />
      </button>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
