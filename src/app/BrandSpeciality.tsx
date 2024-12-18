import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiCircleCheck } from "react-icons/ci";
import { LiaBookSolid } from "react-icons/lia";
import { PiPlant } from "react-icons/pi";



const BrandSpeciality = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      {/* Title/Text above the cards */}
      <div className="flex flex-wrap w-full mb-12 flex-col items-center text-center">
        <h2 className="sm:text-2xl text-xl font-medium title-font mb-2 text-black">What makes our brand different</h2>
      
      
  </div>
      {/* Card Section */}
      <div className="flex flex-row justify-center -m-4">
        {/* Card 1 */}
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="p-6 rounded-lg hover:shadow-md transition-shadow duration-300 ease-in-out">
          <LiaShippingFastSolid />

            <h2 className="text-lg text-gray-900 font-medium title-font mb-2"> Next day as standard
            </h2>
            <p className="leading-relaxed text-base">
Order before 3pm and get your<span/> order
the next day as standard
            </p>
          </div>
        </div>
  
        {/* Card 2 */}
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="p-6 rounded-lg hover:shadow-md transition-shadow duration-300 ease-in-out">
          <CiCircleCheck />

            <h2 className="text-lg text-gray-900 font-medium title-font mb-2"> Made by true artisans
            </h2>
            <p className="leading-relaxed text-base">
Handmade crafted goods made with<span/>real passion and craftmanship
            </p>
          </div>
        </div>
  
        {/* Card 3 */}
        <div className="xl:w-1/4 md:w-1/2 sm:w-1/2 p-4">
          <div className="p-6 rounded-lg hover:shadow-md transition-shadow duration-300 ease-in-out">
          <LiaBookSolid />

            <h2 className="text-lg text-gray-900 font-medium title-font mb-2"> Unbeatable prices </h2>
            <p className="leading-relaxed text-base">
            For our materials and quality you <span/>wont find better prices anywhere
            </p>
          </div>
        </div>
  
        {/* Card 4 */}
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="p-6 rounded-lg hover:shadow-md transition-shadow duration-300 ease-in-out">
          <PiPlant />

            <h2 className="text-lg text-gray-900 font-medium title-font mb-2"> Recycled packaging
            </h2>
            <p className="leading-relaxed text-base">
            We use 100% recycled packaging to <span/>ensure our footprint is manageable
            </p>
          </div>
        </div>
      </div>
    </div>
    
  </section>
  
  )
}

export default BrandSpeciality