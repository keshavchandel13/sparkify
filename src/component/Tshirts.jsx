import React from 'react';

const tshirtData = [
  {
    title: 'Anime T-Shirts',
    img: 'https://cdn.dribbble.com/userupload/14573010/file/original-672607da71a84eeb368a1d58fd9d76b4.jpg?resize=400x267&vertical=center',
  },
  {
    title: 'Typography T-Shirts',
    img: '/hp22.png',
  },
  {
    title: 'Logo / Branding T-Shirts',
    img: '/brandTshirt.png',
  },
  {
    title: 'Photo Print T-Shirts',
    img: '/photoTshirt.jpg',
  },
  {
    title: 'Cartoon T-Shirts',
    img: '/mouseMock.png',
  },
  {
    title: 'Creative / Custom T-Shirts',
    img: '/bawaOnTop.png',
  },
];

const Tshirts = () => {
  return (
    <div id="tshirt-section" className="bg-black text-white py-16">
      {/* Section Heading */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl font-bold text-white">Explore T-Shirt Styles</h1>
        <p className="text-lg mt-2 text-gray-300">
          Discover different types of T-shirt prints based on your style
        </p>
      </div>

      {/* T-Shirt Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {tshirtData.map((item, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-xl shadow-lg overflow-hidden hover:shadow-yellow-500/50 transform hover:scale-105 transition-all duration-500"
          >
            <div className="overflow-hidden group">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-white lora-unique">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tshirts;
