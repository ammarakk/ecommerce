/* eslint-disable @next/next/no-img-element */
import React from 'react';

const AllProducts: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div>
        <img src="Frame 143.png" alt="product background"></img>
      </div>
      <nav className="md:ml-auto md:mr-auto   mx-6 mb-11 flex flex-wrap items-center text-base justify-left">
      
          <a href="/ceramics" className="mr-5 hover:text-gray-900">
          Category
          </a>
          <a href="/tables" className="mr-5 hover:text-gray-900">
            Product Type
          </a>
          <a href="/chairs" className="mr-5 hover:text-gray-900">
            Price
          </a>
          <a href="/chairs" className="mr-5 hover:text-gray-900">
            Brand
          </a>
          </nav>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {[
            { src: "p1.png", name: "The Dandy chair", price: "£250" },
            { src: "p2.png", name: "Rustic Vase Set", price: "£155" },
            { src: "p3.png", name: "The Silky Vase", price: "£125" },
            { src: "p4.png", name: "The Lucy Lamp", price: "£399" },
            { src: "pp4.png", name: "The Dandy chair", price: "£250" },
            { src: "pp6.png", name: "The Silky Vase", price: "£125" },
            { src: "pp7.png", name: "The Lucy Lamp", price: "£399" },
            { src: "p1.png", name: "The Dandy chair", price: "£250" },
            { src: "p2.png", name: "Rustic Vase Set", price: "£155" },
            { src: "p3.png", name: "The Silky Vase", price: "£125" },
            { src: "pp7.png", name: "The Lucy Lamp", price: "£399" },
            { src: "pp4.png", name: "The Dandy chair", price: "£250" },


          ].map((product, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-64 rounded overflow-hidden"> {/* Increased height here */}
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block transition-transform duration-300 ease-in-out transform hover:scale-105"
                  src={product.src}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                <p className="mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
