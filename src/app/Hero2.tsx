/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Hero2: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16 py-10 bg-gray-50">
      {/* Text Content */}
      <div className="md:w-1/2 text-left space-y-5">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          From a studio in London to a global brand with over 400 outlets
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market. <br />
          Hand-made, and lovingly crafted furniture and homeware is what we live, breathe, and design. Our Chelsea boutique has become the hotbed for the London interior design community.
        </p>
        
        <button className="px-5 py-3  gap-8 rounded-md bg-gray-900 text-white font-semibold transition duration-300 hover:bg-gray-700 hover:shadow-lg">
          Get in touch
        </button>
      </div>

      {/* Image and Visual Content */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-end relative">
        <div className="relative w-full max-w-lg">
          
          {/* Image of Sofa */}
          <img
            src="Image (1).png"
            alt="Furniture Setup"
            className="w-full h-auto rounded-lg shadow-lg transition transform hover:scale-105 duration-300"
          />

          {/* Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-10 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
