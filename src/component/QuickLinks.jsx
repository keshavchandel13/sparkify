import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsappSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  return (
    <footer className=" text-white px-6 py-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* Logo Section */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="p-1 border-2 border-white rounded-lg">
            <img
              src="/sparkify1.png"
              alt="sparkify"
              className="h-16  rounded-md"
            />
          </div>
          <p className="text-center lg:text-left text-xl font-semibold tracking-wide">
            SPARKIFY <br />
            PRODUCTION
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-3xl font-bold mb-4 text-white relative after:absolute after:w-10 after:h-1 after:bg-pink-500 after:-bottom-1 after:left-0">
            Quick Links
          </h2>
          <div className="flex flex-wrap gap-10 text-gray-300">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition duration-300"
                >
                  Homepage
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-white transition duration-300"
                >
                  About Us
                </Link>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-white transition duration-300"
                >
                  Shop Now!
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex space-x-6 items-center justify-center text-3xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:scale-110 transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:scale-110 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/jbmphotos_studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:scale-110 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:scale-110 transition duration-300"
          >
            <FaWhatsappSquare />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default QuickLinks;
