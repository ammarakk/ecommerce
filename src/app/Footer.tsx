import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { SiSnapdragon } from "react-icons/si";
import { CiTwitter } from "react-icons/ci";
import { PiLinkedinLogo } from "react-icons/pi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2A254B]">
      {/* Main Footer Content */}
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          {/* Section 1: Menu */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-normal text-white tracking-widest text-sm mb-3">
              Menu
            </h2>
            <nav className="list-none mb-10">
              {[
                { label: "New arrivals", path: "/new-arrivals" },
                { label: "Best Sellers", path: "/best-sellers" },
                { label: "Recently viewed", path: "/recently-viewed" },
                { label: "Popular this week", path: "/popular-this-week" },
                { label: "All products", path: "./AllProducts" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-white hover:text-yellow-200 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </nav>
          </div>

          {/* Section 2: Categories */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Categories
            </h2>
            <nav className="list-none mb-10">
              {[
                { label: "Crockery", path: "/crockery" },
                { label: "Furniture", path: "/furniture" },
                { label: "Homeware", path: "/homeware" },
                { label: "Plant pots", path: "/plant-pots" },
                { label: "Chairs", path: "/chairs" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-white hover:text-yellow-200 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </nav>
          </div>

          {/* Section 3: Our Company */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Our Company
            </h2>
            <nav className="list-none mb-10">
              {[
                { label: "About us", path: "/about-us" },
                { label: "Vacancies", path: "/vacancies" },
                { label: "Contact us", path: "/contact-us" },
                { label: "Privacy", path: "/privacy" },
                { label: "Return policy", path: "/return-policy" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-white hover:text-yellow-200 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </nav>
          </div>

          {/* Section 4: Join Mailing List */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Join our mailing list
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600"></label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-[#F9F9F9] bg-opacity-50 border focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded transition-transform transform hover:scale-105">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>

    
    <div className="flex flex-col items-center space-y-6">
      {/* Horizontal Line */}
      <hr 
        className="border-t border-gray-300 my-4
                   w-full sm:w-1/4 md:w-1/2 lg:w-3/4" 
      />
    
    </div>

      {/* Footer Bottom */}
      <div className="bg-[#2A254B]">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-400 items-center md:justify-start justify-center text-white hover:text-yellow-200" href="#">
            <span className="text-xl">Copyright 2022 Avion LTD</span>
          </a>
          <div className="flex gap-5 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <PiLinkedinLogo size={24} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <AiOutlineFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400"
            >
              <FiInstagram size={24} />
            </a>
            <a
              href="https://www.snapchat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400"
            >
              <SiSnapdragon size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300"
            >
              <CiTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
