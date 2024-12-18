/* eslint-disable @next/next/no-img-element */
'use client';  // Add this at the top of your file to mark this component as a client component

import React, { useState } from "react";

const Products: React.FC = () => {
  // State for managing the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to store the details of the clicked product
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Products data
  const products = [
    {
      id: 1,
      image: "p1.png",
      name: "The Dandy chair",
      price: "$250",
    },
    {
      id: 2,
      image: "p2.png",
      name: "Rustic Vase Set",
      price: "$155",
    },
    {
      id: 3,
      image: "p3.png",
      name: "The Silky Vase",
      price: "$125",
    },
    {
      id: 4,
      image: "p4.png",
      name: "The Lucy Lamp",
      price: "$399",
    },
  ];

  // Open the modal with the product details
  const handleOpenModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="text-gray-600  font-bold  body-font">
      <div className="container px-5 py-24 pb-4 mx-auto">
        <h2>You might also like</h2>
        {/* Products Grid */}
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a
                className="block relative h-72 rounded overflow-hidden cursor-pointer"
                onClick={() => handleOpenModal(product)}
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={product.image}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.name}
                </h2>
                <p className="mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Product Details */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold">{selectedProduct?.name}</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-48 mt-4"
              src={selectedProduct?.image}
            />
            <p className="mt-4 text-lg font-semibold">{selectedProduct?.price}</p>
          </div>
          </div>
      
        
      )}
      
            {/* View Collection Button */}
            <div className="flex justify-center mt-10">
        <button className="px-5 py-3 rounded-md bg-gray-900 text-white font-semibold transition duration-300 hover:bg-gray-700 hover:shadow-lg">
        View collection
        </button>
    </div>
    </div>
    
    
  );
};

export default Products;
