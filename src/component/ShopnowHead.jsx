import React from "react";

const ShopnowHead = () => {
  return (
    <div>
      <div
        className="parallax p-10 flex flex-col items-center justify-center text-center h-[400px] shadow-2xl text-purple-800 relative"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/blurred-illuminated-retail-stores_23-2147781488.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Heading of the shop now */}
        <div className="z-10 text-6xl font-bold mb-4 [text-shadow:_0_4px_8px_#ffffff]">
          SPARKIFY
        </div>
        <p className="z-10 text-2xl italic mb-6 [text-shadow:_0_4px_8px_#800080]">
          "From Ordinary to Iconic - That's Sparkify"
        </p>

        {/* Social media links */}
        <div className="z-10 mb-6">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-white hover:text-purple-600"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-white hover:text-purple-600"
          >
            Facebook
          </a>
        </div>

        {/* Call to action button */}
        <a
          href="#tshirt-section"
          className="z-10 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition-all"
        >
          Check Out!
        </a>
      </div>
    </div>
  );
};

export default ShopnowHead;
