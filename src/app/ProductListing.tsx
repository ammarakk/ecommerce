/* eslint-disable @next/next/no-img-element */

import React from 'react';

const ProductListings: React.FC = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded transform transition duration-500 ease-in-out hover:scale-105"
            src="Image Left.png"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Dandy Chair
            </h1>
            <h2>£250</h2>
            <div className="flex mb-4">
              <span className="flex items-center">
            
                <span className="text-gray-600 ml-3">Description</span>
              </span>
            </div>
            <p className="leading-relaxed mb-6">
            A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
</p>
<p>. Premium material</p>
<p>. Handmade upholstery</p>
<p>. Quality timeless classic</p>
<div className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">

        {/* Columns with links */}
        <div className="flex flex-wrap -m-4">
          {/* First Column */}
          <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
            <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
              Dimension
            </h2>
            <nav className="flex flex-row sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
              {[ 'Second Link', 'Third Link', 'Fourth Link', 'Fifth Link'].map((link, index) => (
                <a key={index}>
                  <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  {link}
                </a>
              ))}
            </nav>
          </div>

            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <h2>Amount</h2>
                </div>
              </div>
            </div>
            <div className="flex items-center">

              <button className="flex ml-auto text-black  input-number bg-grey-200 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded transform transition duration-300">
                1
              </button>
              <div className="flex items-center">

<button className="flex ml-auto text-black  input-number bg-grey-200 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded transform transition duration-300">
  Add to cart
</button>

              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default ProductListings;
