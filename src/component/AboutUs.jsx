import React from 'react';

const AboutUs = () => {
  return (
    <>
      <div className='flex flex-col   md:flex-row justify-evenly mt-8 items-center gap-8 px-4 lg:px-32 text-white'>
        {/* Image Section */}
        <div className="relative group w-60 h-80">
          <img
            src="/founder.jpg"
            alt="Founder"
            className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300"
          />
          {/* Hover Effect - Name at Bottom */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-4">
            <p className="text-white text-xl font-semibold">Founder</p>
          </div>
        </div>

        {/* Text Section */}
        <div className="italic text-lg md:text-xl text-center md:text-left leading-relaxed">
          <p>
            Welcome to <span className="font-bold">Sparkify</span>, your one-stop destination for <br /> unique and customized gifts, apparel, and more — right from <span className="font-bold">Hamirpur, Himachal Pradesh</span>.
          </p>
          <p className="mt-4">
            We're a fresh startup driven by creativity and personalization. Whether you're looking for <br /> customized t-shirts, mugs, keychains, or something entirely unique — <span className="font-bold">just ask us</span>, and we’ll make it happen!
          </p>
          <p className="mt-4">
            At Sparkify, our goal is simple: to bring your ideas to life through thoughtful, tailor-made <br /> products that add a personal touch to every occasion.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
