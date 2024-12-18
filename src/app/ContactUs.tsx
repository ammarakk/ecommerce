'use client';

import React from 'react';

const SignUpSection: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-5 py-12">
        <div className="flex flex-col text-center w-full mb-8">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Join the club and get the benefits

          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Sign up for our newsletter and receive exclusive offers on </p>
          <p>           ranges, sales, pop up stores and more</p>

        </div>
        <div className="flex justify-center items-center">
          <input
            type="email"
            id="email"
            name="email"
            className="w-64 h-11 bg-gray-100 bg-opacity-50 rounded-l border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter your email"
          />
          <button className="text-white bg-black border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded-l text-lg">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;
