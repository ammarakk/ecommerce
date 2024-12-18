
/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProductDetail: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="text-justify-centre flex  flex-row  place-items-baseline py-4 px-6 pl-16 gap-80 bg-white">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
          A brand built on the love of craftsmanship,<br/>
           quality and outstanding customer service
        </h1>
        <button className="mt-4 px-6 py-2   border border:black border-gray-800 rounded hover:bg-gray-800 hover:text-white transition">
          View our products
        </button>
      </header>

      {/* Content Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Left Card */}
        <div className="bg-[#1E1E50] text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            It started with a small idea
          </h2>
          <p className="mb-6">
            A global brand with local beginnings, our story began in a small
            studio in South London in early 2014.
          </p>
          <button className="px-4 py-2  bg-white  text-[#1E1E50] rounded hover:bg-gray-200 transition">
            View collection
          </button>
        </div>

        {/* Right Image */}
        <div className="relative group">
          <img
            src="Image Block (1).png"
            alt="Living Room"
            className="w-full h-full object-cover rounded-lg transition-transform transform group-hover:scale-105"
          />
        </div>
      </section>

      {/* Bottom Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 items-center">
        {/* Left Image */}
        <div className="relative group">
          <img
            src="image.png"
            alt="Modern Interior"
            className="w-full h-full object-cover rounded-lg transition-transform transform group-hover:scale-105"
          />
        </div>

        {/* Right Text */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our service isn&apos;t just personal, it&apos;s actually hyper personally
            exquisite
          </h2>
          <p className="text-gray-600 gap-4 mb-6 leading-relaxed">
            When we started, the idea was simple. Make high-quality furniture
            affordable and available for the mass market. Handcrafted, lovingly
            curated furniture and homeswares are what we live, breathe, and
            design.
          </p>
          <button className="px-4 py-2 border border-gray-800 rounded hover:bg-gray-800 hover:text-white transition">
            Get in touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
