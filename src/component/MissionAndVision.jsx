import React from 'react';

const MissionAndVision = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Mission Section */}
        <div className="mb-16">
          <h2 className="font-bold text-yellow-300 mb-4 font-serif text-3xl">Our Mission</h2>
          <p className="text-lg text-white italic">
            At Sparkify, our mission is to bring smiles and emotions to life through personalized gift items like T-shirts, mugs, keychains, and frames. We aim to make every occasion special by offering high-quality, affordable, and unique customized gifts that reflect love, creativity, and thoughtfulness.
          </p>
        </div>

        {/* Vision Section */}
        <div>
          <h2 className="font-bold text-yellow-300 mb-4 font-serif text-3xl">Our Vision</h2>
          <p className="text-lg text-white italic">
            Our vision is to become the go-to brand for customized gifting in India, known for innovation, quality, and customer delight. We strive to keep adding value to life's moments by helping people express their feelings through personalized products that speak from the heart.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;
