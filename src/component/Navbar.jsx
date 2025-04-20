import React from 'react';
import { Link } from 'react-router-dom';
// import { HiMenu } from 'react-icons/hi'; // Optional: if you want to add hamburger menu later
import logo from '/sparkify1.png'; // make sure your image path is correct

const Navbar = () => {
  return (
    <>
      {/* Navbar for large screens */}
      <nav className="hidden md:block border-b shadow-lg p-4 text-lg top-0 z-50" style={{ backgroundColor: "#121212" }}>
        <ul className="flex justify-center md:justify-around items-center gap-12 font-semibold text-white">
          <li className="hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer hover:text-yellow-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer hover:text-yellow-200">
            <Link to="/shop">Shop Now</Link>
          </li>
          <li className="hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer hover:text-yellow-200">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer hover:text-yellow-200">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Navbar for small screens */}
      <nav className="block md:hidden border-b shadow-lg p-4 text-white top-0 z-50" style={{ backgroundColor: "#121212" }}>
        {/* Brand Logo + Name */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Sparkify" className="w-10 h-10 rounded-full border-2 border-white" />
            <span className="text-xl font-bold">Sparkify</span>
          </div>
          {/* Optional Hamburger for future menu toggle */}
          {/* <HiMenu className="text-3xl cursor-pointer" /> */}
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col items-start gap-3 pl-2 font-medium text-base">
          <li className="hover:text-yellow-200 transition duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-yellow-200 transition duration-200">
            <Link to="/shop">Shop Now</Link>
          </li>
          <li className="hover:text-yellow-200 transition duration-200">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="hover:text-yellow-200 transition duration-200">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
