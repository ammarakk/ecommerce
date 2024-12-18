import React from 'react';

const PopularProducts: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'The Poplar suede sofa',
      price: '£980',
      image: 'pp1.png', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'The Dandy chair',
      price: '£250',
      image: 'photo.png', // Replace with actual image URL
    },
    {
      id: 3,
      name: 'The Dandy chair*',
      price: '£250',
      image: 'pp3.png', // Replace with actual image URL
    },
  ];

  return (
    <section className="px-6 md:px-16 py-10 bg-white">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center md:text-left">
        Our popular products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            {/* Product Info */}
            <div className="p-4 bg-white text-center">
              <h3 className="text-lg font-medium text-gray-700">{product.name}</h3>
              <p className="text-gray-500 mt-1">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View Collection Button */}
      <div className="flex justify-center mt-10">
        <button className="px-5 py-3 rounded-md bg-gray-900 text-white font-semibold transition duration-300 hover:bg-gray-700 hover:shadow-lg">
          View collection
        </button>
      </div>
    </section>
  );
};

export default PopularProducts;
