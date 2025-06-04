import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Printed T-Shirts",
    image: "/bawaOnTop.png",
    link: "/shop",
  },
  {
    title: "Printed Mugs",
    image: "/shrija.jpg",
    link: "/shop#mug-section",
    customStyle: "bg-contain",
  },
  {
    title: "Printed Cushions",
    image: "/cushionMockup.jpg",
    link: "/shop#other-products-section",
  },
  {
    title: "Kid's Zone",
    image: "https://m.media-amazon.com/images/I/41C+wMk-mbS._AC_UY1100_.jpg",
    link: "/shop#other-products-section",
  },
  {
    title: "Customized Lamps",
    image: "/lamp.jpg",
    link: "/shop#other-products-section",
  },
  {
    title: "Clocks & Mirror's",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/8/446310563/EB/IH/SJ/186062306/customized-personalized-wall-clock.png",
    link: "/shop#other-products-section",
  },
];

const Services = () => {
  return (
    <div className="py-6 text-cyan-50">
      {/* header */}
      <div className="text-center">
        <h1 className="text-7xl font-serif sm:text-2xl md:text-6xl">
          Our Products
        </h1>
        <h3 className="text-sm satisfy-regular font-thin">
          "Every moment we capture is a story waiting to be told"
        </h3>
      </div>

      {/* services section */}
      <div className="p-20 py-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 text-center text-base sm:text-lg md:text-xl dancing-script-unique">
        {services.map((service, index) => (
          <Link key={index} to={service.link} className="w-full">
            <div className="hover-overlay">
              <div
                className={`w-full h-56 sm:h-64 md:h-72 bg-cover mb-2 bg-center ${
                  service.customStyle || ""
                }`}
                style={{ backgroundImage: `url('${service.image}')` }}
              ></div>
              <p className="sm:text-base md:text-lg lg:text-xl">
                {service.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
