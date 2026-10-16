import React from 'react';
import { PROMO_BLOCKS } from '../data/products';

export default function PromoGrid() {
  const [block1, block2, block3, block4] = PROMO_BLOCKS;

  return (
    <section className="py-12 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Asymmetrical Grid matching reference layout exactly */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left Column (Block 1: Ethereal Elegance - Tall Block with Male Model in Hoodie) */}
          <div className="lg:col-span-6 relative group overflow-hidden bg-stone-100 min-h-[520px] lg:min-h-[640px] flex flex-col justify-between p-8 sm:p-12 transition-all duration-300">
            {/* Background Image */}
            <img
              src={block1.image}
              alt={block1.title}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Soft overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            {/* Top Text Content */}
            <div className="relative z-10 max-w-sm">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-600 block mb-2">
                {block1.tag}
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-heading leading-tight mb-6">
                {block1.title}
              </h3>
              <a
                href="#shop"
                className="inline-flex items-center px-6 py-2.5 bg-white text-gray-900 text-xs font-bold uppercase tracking-wider rounded-md shadow-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                {block1.buttonText}
              </a>
            </div>
          </div>

          {/* Right Column (Blocks 2, 3, 4) */}
          <div className="lg:col-span-6 flex flex-col space-y-6">

            {/* Block 2: Radiant Reverie (Female Model in Navy Jacket) */}
            <div className="relative group overflow-hidden bg-slate-100 min-h-[300px] sm:min-h-[340px] flex flex-col justify-between p-8 sm:p-10 transition-all duration-300">
              <img
                src={block2.image}
                alt={block2.title}
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="relative z-10 max-w-xs">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-500 block mb-2">
                  {block2.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 font-heading leading-tight mb-6">
                  {block2.title}
                </h3>
                <a
                  href="#shop"
                  className="inline-flex items-center px-6 py-2.5 bg-white text-gray-900 text-xs font-bold uppercase tracking-wider rounded-md shadow-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  {block2.buttonText}
                </a>
              </div>
            </div>

            {/* Bottom Row in Right Column (Blocks 3 & 4 side by side) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">

              {/* Block 3: Chic Footwear for City Living (Sneakers) */}
              <div className="relative group overflow-hidden bg-[#f4f5f7] min-h-[260px] flex flex-col justify-between p-6 sm:p-8 transition-all duration-300">
                <img
                  src={block3.image}
                  alt={block3.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="relative z-10">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 block mb-1">
                    {block3.tag}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 font-heading leading-tight mb-4">
                    {block3.title}
                  </h4>
                </div>
                <div className="relative z-10 mt-auto pt-8">
                  <a
                    href="#shop"
                    className="inline-flex items-center px-5 py-2 bg-white text-gray-900 text-xs font-bold uppercase tracking-wider rounded-md shadow-sm hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    {block3.buttonText}
                  </a>
                </div>
              </div>

              {/* Block 4: Trendsetting Bags for Her – 50% OFF Banner (Royal Blue) */}
              <div className="relative group overflow-hidden bg-[#3b5982] text-white min-h-[260px] flex flex-col justify-between p-6 sm:p-8 transition-all duration-300">
                <div className="relative z-10 text-center flex flex-col items-center justify-center h-full my-auto">
                  <p className="text-sm font-medium tracking-wide text-white/90 mb-1">
                    {block4.title}
                  </p>

                  {/* Big Bold 50% typography */}
                  <div className="text-6xl sm:text-7xl font-extrabold font-serif tracking-tight text-white my-2">
                    50<span className="text-4xl sm:text-5xl font-sans">%</span>
                  </div>

                  <a
                    href="#shop"
                    className="mt-3 inline-flex items-center px-6 py-2.5 bg-white text-gray-900 text-xs font-bold uppercase tracking-wider rounded-md shadow-md hover:bg-gray-100 transition-all duration-300"
                  >
                    {block4.buttonText}
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
