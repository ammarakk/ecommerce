import React from 'react';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FiInstagram, FiShoppingCart } from "react-icons/fi";
import { PiLinkedinLogo } from 'react-icons/pi';
import { SiSnapdragon } from 'react-icons/si';

const About: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-4 py-2 mx-auto items-justify-between flex flex-row">
        <div className="md:w-3/5 md:pl-6 flex flex-row">
          <h1 className="leading-relaxed text-base">
            A brand built on the love of craftmanship, quality and outstanding customer service
          </h1>
          <div className="flex md:mt-4 mt-2 flex-col">
            <button className="text-black bg-grey-300 border-0 pb-2 py-2 px-2 focus:outline-none hover:bg-blue-300 rounded-l text-lg">
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
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
