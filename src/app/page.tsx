/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
"use client";
import React, { useState } from "react"
import ProductDetail from "../Components/ProductDetail";


import { MdMenuOpen } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";
import Home from "../Home";
import Cart from "../Cart";
import About from "../About";
import ProductListing from "../ProductListing";
import ShoppingCart from "../ShoppingCart";



const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "aboutPage":
        return <About />;
        case "productListingPage":
          return <ProductListing/>;
      case "productDetail":
        return <ProductDetail />;
      case "cartDetail":
        return <Cart />;
      case "shoppingCartPage":
        return <ShoppingCart />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen lg:hidden bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white p-4 shadow-md">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img src="Avion.png" alt="Logo"/>

          {/* Hamburger Icon */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          ><p>Menu</p>
            <IoIosArrowDropdown />


          </div>
          <div>
          <CiUser />


            </div>

          {/* Links */}
          <ul
            className={`${
              menuOpen ? "block" : "hidden"
            } md:flex space-x-4 absolute md:static bg-white w-full md:w-auto md:bg-transparent top-16 md:top-0 left-0 p-4 md:p-0 shadow-md md:shadow-none`}
          >
            <li>
              <button
                className="text-gray-700 hover:text-blue-900"
                onClick={() => {
                  setCurrentPage("home");
                  setMenuOpen(false);
                }}
              >
                Home
              </button>
            </li>
          
            <li>
              <button
                className="text-gray-700 hover:text-blue-900"
                onClick={() => {
                  setCurrentPage("aboutPage");
                  setMenuOpen(false);
                }}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="text-gray-700 hover:text-blue-900"
                onClick={() => {
                  setCurrentPage("productListingPage");
                  setMenuOpen(false);
                }}
              >
                Our Products
              </button>
            </li>

            <li>
              <button
                className="text-gray-700 hover:text-blue-900"
                onClick={() => {
                  setCurrentPage("cartDetail");
                  setMenuOpen(false);
                }}
              >
                Product Detail
              </button>
            </li>
           
            <li>
              <button
                className="text-gray-700 hover:text-blue-900"
                onClick={() => {
                  setCurrentPage("shoppingCartPage");
                  setMenuOpen(false);
                }}
              >
               Cart
              </button>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 p-2 rounded"
            />
            <button>
              <img
                src="Search.png"
                alt="Search"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>

        {/* Search Bar for Mobile */}
        <div className={`mt-4 ${menuOpen ? "block" : "hidden"} md:hidden`}>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 p-2 w-full rounded"
            />
            <button>
              <img
                src="Search.png"
                alt="Search"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="p-4">{renderPage()}</main>
    </div>
  );
};

export default App;
