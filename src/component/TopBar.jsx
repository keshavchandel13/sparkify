import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsappSquare } from "react-icons/fa";

const TopBar = () => {
  return (
    <div
      id="top-head"
      className="hidden md:flex flex-row justify-between items-center p-3 text-white gap-2"
    >
      {/* Address */}
      <div className="flex items-center">
        <FaLocationDot className="text-2xl text-red-500 mr-2" />
        <div className="text-left text-base">
          Sparkify Production, Taal Hamirpur <br /> Himachal Pradesh 177401
        </div>
      </div>

      {/* Logo */}
      <div className="w-auto h-auto mx-10 p-1 rounded-full shadow-2xl transform transition duration-500 hover:scale-110 hover:rotate-6">
        <img
          src="/sparkify1.png"
          alt="Logo"
          className="w-16 h-16 border-2 border-white rounded-full object-contain"
        />
      </div>

      {/* Contact number */}
      <div className="flex items-center">
        <IoCall className="text-xl text-blue-500 mr-2" />
        <div className="text-base">8894401337</div>
      </div>

      {/* Social media */}
      <div className="flex gap-3 items-center">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-600 hover:text-blue-900 transition duration-300">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/sparkify2025/" target="_blank" rel="noopener noreferrer" className="text-xl text-red-700 hover:text-red-500 transition duration-300">
          <FaInstagram />
        </a>
        <a href="https://www.instagram.com/sparkify2025/" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-400 hover:text-blue-600 transition duration-300">
          <FaTwitter />
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-xl text-green-600 hover:text-green-500 transition duration-300">
          <FaWhatsappSquare />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
