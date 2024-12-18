'use client';
/*
import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js for routing
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import ContactUs from "./ContactUs"
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo Section
        
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        
          <span className=" text-xl justify-centre">Avion</span>
        </Link>

        {/* Hamburger Icon for Mobile *
        <button
          onClick={toggleMenu}
          className="text-gray-900 md:hidden inline-flex items-center ml-auto hover:text-gray-700"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Navigation Links 
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:ml-auto flex-wrap items-center text-base justify-center`}
        >
          <Link href="/ContactUs.tsx" className="mr-5 hover:text-indigo-500 transition-colors">
            Contact Us
          </Link>
          <Link href="/about" className="mr-5 hover:text-indigo-500 transition-colors">
            About
          </Link>
          <Link href="/blog" className="mr-5 hover:text-indigo-500 transition-colors">
            Blog
          </Link>
        </nav>

        {/* Icons Section 
        <div className="flex items-center space-x-5 mt-4 md:mt-0">
          <FiSearch className="text-gray-900 w-5 h-5 hover:text-indigo-500 cursor-pointer" />
          <FiShoppingCart className="text-gray-900 w-5 h-5 hover:text-indigo-500 cursor-pointer" />
          <FiUser className="text-gray-900 w-5 h-5 hover:text-indigo-500 cursor-pointer" />
        </div>
      </div>
    
      <hr className="my-4 border-t-2 border-gray-300" />

      
    </header>
  );
};

export default NavBar;
*/
import React, { useState } from "react";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow-md">
      <nav className="flex justify-between items-center px-4 md:px-8 py-4 bg-white">
        {/* Left: Hamburger Icon */}
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

      

        {/* Right: Search Icon */}
        <div className="flex items-center">
          <button className="text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M9 17a8 8 0 100-16 8 8 0 000 16z"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Menu Items */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 bg-white px-4 py-4 md:py-0 shadow-md md:shadow-none`}
      >
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Plant pots
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Ceramics
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Tables
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Chairs
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Crockery
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Tableware
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Cutlery
        </a>
      </div>
    </header>
  );
};

export default NavBar;
