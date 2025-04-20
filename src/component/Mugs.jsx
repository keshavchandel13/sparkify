import React from 'react';

const mugsData = [
  {
    title: 'Love Mugs (For Bae 💖)',
    img: '/mralwaysright.webp',
  },
  {
    title: 'Photo Print Mugs',
    img: '/shrija.jpg',
  },
  {
    title: 'Motivational Quote Mugs',
    img: '/beleiveInyourself.webp',
  },
  {
    title: 'Funny / Meme Mugs',
    img: '/mohmayahai.webp',
  },
  {
    title: 'Gift Mugs',
    img: '/giftMug.jpg',
  },
  {
    title: 'Techie / Coder Mugs',
    img: '/codercup.webp',
  },
];

const Mugs = () => {
  return (
    <div id="mug-section" className="bg-black text-white py-12">
      <div className="text-center mb-10 px-4">
        <h1 className="text-4xl font-bold">Creative Coffee Mugs</h1>
        <p className="text-xl mt-2 lora-unique text-gray-300">
          Sip with style - Designs for every mood
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {mugsData.map((mug, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-xl shadow-lg overflow-hidden hover:shadow-yellow-500/50 transition-all duration-500 transform hover:scale-105"
          >
            <div className="overflow-hidden group">
              <img
                src={mug.img}
                alt={mug.title}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-white lora-unique">{mug.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mugs;
