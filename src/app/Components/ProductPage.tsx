/* eslint-disable @next/next/no-img-element */
"use client"; // For Next.js app router

import { useRouter } from "next/navigation";
import { useState } from "react";

const ProductPage = () => {
  const router = useRouter();
  const [amount, setAmount] = useState<number>(1);

  const handleAddToCart = () => {
    // Simulate sending data and navigating to a cart page
    router.push("/cart");
  };

  return (
    <div className="container mx-auto px-4 py-10 lg:flex lg:items-center lg:justify-between">
      {/* Product Image */}
      <div className="w-full lg:w-1/2">
        <img
          src="Image Left.png"
          alt="The Dandy Chair"
          className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-10">
        <h1 className="text-3xl font-bold mb-4">The Dandy Chair</h1>
        <p className="text-2xl font-semibold text-gray-700 mb-4">£250</p>

        <div>
          <h3 className="text-lg font-medium mb-2">Description</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            A timeless design, with premium materials, featuring as one of our
            most popular and iconic pieces. The Dandy Chair is perfect for any
            stylish living space with beech legs and lambskin leather upholstery.
          </p>

          <ul className="list-disc ml-5 mb-4 text-gray-600">
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>

          <h3 className="text-lg font-medium mb-2">Dimensions</h3>
          <div className="text-gray-600 grid grid-cols-3 gap-4 mb-6">
            <div>
              <span className="font-semibold">Height:</span> 110cm
            </div>
            <div>
              <span className="font-semibold">Width:</span> 75cm
            </div>
            <div>
              <span className="font-semibold">Depth:</span> 50cm
            </div>
          </div>
        </div>

        {/* Amount Selector */}
        <div className="flex items-center space-x-4 mb-6">
          <label className="text-gray-700 font-medium">Amount:</label>
          <button
            className="px-2 py-1 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded"
            onClick={() => setAmount((prev) => Math.max(prev - 1, 1))}
          >
            -
          </button>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value) || 1)}
            className="w-12 text-center border rounded"
            min="1"
          />
          <button
            className="px-2 py-1 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded"
            onClick={() => setAmount((prev) => prev + 1)}
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-all duration-300"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
