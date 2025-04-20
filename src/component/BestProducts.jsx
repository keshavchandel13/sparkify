import React from "react";
import RollingGallery from "./animation/RollingGallery";

const BestProducts = () => {
  return (
    <div className=" py-12 " id="#projects">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white">
          Our Best Products
        </h1>
        <p className="text-xl text-white mt-2">
        "Discover our finest selection of products crafted with precision and innovation"
        </p>
      </div>
      <RollingGallery autoplay={true} pauseOnHover={false} />

    </div>
  );
};

export default BestProducts;
