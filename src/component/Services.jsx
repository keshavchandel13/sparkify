import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="py-4 text-cyan-50">
      {/* header */}
      <div className="text-center ">
        <h1 className="text-4xl font-serif  sm:text-2xl  md:text-6xl">
          Our Products
        </h1>
        <h3 className="text-sm satisfy-regular font-thin">
          "Every moment we capture is a story waiting to be told"
        </h3>
      </div>
      {/* services section */}
      <div className="flex justify-evenly mt-8 text-center text-base sm:text-lg md:text-xl dancing-script-unique sm:flex-col md:flex-row gap-4">
        <Link to={"/shop"} className="w-full sm:w-64 md:w-52 lg:w-64">
          <div className="hover-overlay">
            <div
              className="w-full h-56 sm:h-64 md:h-72 bg-cover mb-2"
              style={{ backgroundImage: "URL('/bawaOnTop.png')" }}
            ></div>
            <p className="sm:text-base md:text-lg lg:text-xl">Printed T-Shirts</p>
          </div>
        </Link>
        <Link to={"/shop#mug-section"} className="w-full sm:w-64 md:w-52 lg:w-64">
          <div className="hover-overlay">
            <div
              className="w-full h-56 sm:h-64 md:h-72 bg-cover mb-2"
              style={{ backgroundImage: "URL('/shrija.jpg')" }}
            ></div>
            <p className="sm:text-base md:text-lg lg:text-xl">Printed Mugs</p>
          </div>
        </Link>
        <Link to={"/shop#other-products-section"} className="w-full sm:w-64 md:w-52 lg:w-64">
          <div className="hover-overlay">
            <div
              className="w-full h-56 sm:h-64 md:h-72 bg-cover bg-center mb-2"
              style={{ backgroundImage: "URL('/cushionMockup.jpg')" }}
            ></div>
            <p className="sm:text-base md:text-lg lg:text-xl">
              Key Chains & Cushions
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
