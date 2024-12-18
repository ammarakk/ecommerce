/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white body-font">
      <div className="container mx-auto flex flex-col-reverse md:flex-row px-6 py-20 items-center max-w-screen-xl bg-[#2A254B] rounded-lg">
        {/* Text Content */}
        <div className="flex-grow md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 text-white">
          <h1 className="text-xl sm:text-xl font-medium">
            The furniture brand for the 
            <br className="hidden lg:inline-block" />
            future, with timeless designs
          </h1>
          <button className="bg-gray-500 bg-opacity-70 text-white border-0 py-2 px-8 rounded-lg hover:bg-gray-400">
            View Collection
          </button>
          <p className="text-stone-300">
            A new era in eco-friendly furniture with Avelon, the French luxury retail brand
            with nice fonts, tasteful colors, and a beautiful way to display things digitally 
            using modern web technologies.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:block hidden">
          <img
            className="object-cover rounded-lg"
            alt="hero"
            src="hero.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
