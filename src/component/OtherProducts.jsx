import React from 'react';

const products = [
  {
    title: 'Printed Cushions',
    img: '/printedcushions.webp',
  },
  {
    title: 'Custom Water Bottles',
    img: '/waterBottle.webp',
  },
  {
    title: 'Photo Key Chains',
    img: '/keychain.webp',
  },
  {
    title: 'Customized Mouse Pads',
    img: '/mousepad.jpg',
  },
  {
    title: 'Personalized Lamps',
    img: '/lamp.jpg',
  },
  {
    title: 'Pen Holder',
    img: '/penholder.jpg',
  },
];

const OtherProducts = () => {
  return (
    <div id="other-products-section" className="text-white py-12 bg-black">
      {/* Header */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-4xl font-bold mb-4">Other Products</h1>
        <p className="text-xl lora-unique text-gray-300">
          Personalized Gifts to Make Moments Memorable
        </p>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-xl shadow-lg overflow-hidden hover:shadow-yellow-500/50 transition-all duration-500 transform hover:scale-105"
          >
            <div className="overflow-hidden group">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-white lora-unique">{product.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherProducts;
