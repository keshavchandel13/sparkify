import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, interval = 1000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-switch images based on interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, [images.length, interval]);

  // Functions for manual navigation
  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative  mx-auto overflow-hidden mt-8 w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      {/* Image Display */}
      <div
        className="w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] bg-contain bg-no-repeat bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevSlide}
        aria-label="Previous Slide"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 hover:bg-opacity-75 transition"
      >
        &#10094;
      </button>
      <button
        onClick={goToNextSlide}
        aria-label="Next Slide"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 hover:bg-opacity-75 transition"
      >
        &#10095;
      </button>

      {/* Dots for current image indicator */}
      <div className=" absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
