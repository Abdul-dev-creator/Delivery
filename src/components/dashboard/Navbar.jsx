import React from "react";
import { IoNotifications } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import Miss from "../../assets/miss.png";
import { FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-4 py-5 font-inter font-medium">
      <div className="flex items-center space-x-4">
        <h1 className="font-bold text-indigo-700 text-[20px]">
          Dasboard For Courier
        </h1>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 mx-6 ">
          <div className="relative w-60 ">
            {/* Input field */}
            <input
              type="text"
              placeholder=""
              className="w-full py-2 pl-10 pr-5 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
            />

            {/* Search icon */}
            <span className="absolute inset-y-0 left-3 flex items-center">
              <FiSearch className="text-gray-400" size={20} />
            </span>
          </div>
        </div>

        <IoNotifications className="w-6 " size={40}/>
        <IoSettings className="w-6 " size={40} />
        <img src={Miss} alt="profile" className="w-9  rounded-full" />
      </div>
    </div>
  );
}

export default Navbar;
