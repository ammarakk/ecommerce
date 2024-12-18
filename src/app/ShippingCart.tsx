/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ShoppingCart: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Graystone vase",
      description: "A timeless ceramic vase with a chic color grey glaze.",
      price: 85,
      image: "Product Image.png", // Placeholder Image
    },
    {
      id: 2,
      name: "Basic white vase",
      description: "Beautiful and simple, this is one for the classics.",
      price: 125,
      image: "Product Image (1).png", // Placeholder Image
    },
  ]);

  const getSubtotal = (): number => {
    return products.reduce((sum, product) => sum + product.price, 0);
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold text-center mb-6">Your Shopping Cart</h1>

      {/* Cart Items */}
      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row items-center border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover rounded-lg"
            />

            {/* Product Details */}
            <div className="flex-1 text-center md:text-left md:ml-6 mt-4 md:mt-0">
              <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.description}</p>
            </div>

            {/* Product Price */}
            <div className="text-xl font-bold text-gray-800 mt-4 md:mt-0">
              £{product.price}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t pt-6 mt-6">
        <div className="text-xl font-semibold mb-4 md:mb-0">
          Subtotal: <span className="font-bold text-gray-800">£{getSubtotal()}</span>
        </div>
        <button
          onClick={handleCheckout}
          className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300"
        >
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
