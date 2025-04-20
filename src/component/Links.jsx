import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const Links = () => {
  return (
    <div className="flex flex-col text-white   sm:flex-row sm:justify-evenly items-center pt-6 pb-12 gap-6 sm:gap-4">
      {/* Address */}
      <div className="flex flex-col items-center text-center w-64">
        <div className="text-4xl sm:text-6xl mb-2 sm:mb-4">
          <FaLocationDot />
        </div>
        <div className="text-sm sm:text-base">
        Sparkify Production, Taal Hamirpur <br /> Himachal Pradesh 177401
        </div>
      </div>
      {/* Phone */}
      <div className="flex flex-col items-center text-center w-64">
        <div className="text-4xl sm:text-6xl mb-2 sm:mb-4">
          <IoCall />
        </div>
        <div className="text-sm sm:text-base">8894401337</div>
      </div>
      {/* Email */}
      <div className="flex flex-col items-center text-center w-64">
        <div className="text-4xl sm:text-6xl mb-2 sm:mb-4">
          <MdOutlineMail />
        </div>
        <div className="text-sm sm:text-base">sheljakumari82@gmail.com</div>
      </div>
    </div>
  );
};

export default Links;
