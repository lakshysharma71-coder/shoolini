import React from "react";
import { FaSearch } from "react-icons/fa";
import NavDrop from "./NavDrop";

export default function MainNav() {
  return (
    <nav className=" w-full z-50 bg-transparent text-white px-6 py-3 flex items-center ">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="https://shooliniuniversity.com/_next/image?url=%2Fassets%2Fimages%2Fsu-naac-white.png&w=384&q=75"
          alt="Shoolini Logo"
          className="h-19"
        />
      </div>

      {/* Menu Items */}
       <ul className="hidden md:flex space-x-4 ml-auto mr-5  uppercase text-xs tracking-wide">
        <NavDrop/>
       </ul>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        <button className="bg-white text-red-600 text-xs px-4 font-semibold py-3 rounded-md  shadow hover:bg-gray-100 transition">
          APPLY NOW
        </button>
        <FaSearch className="text-xl cursor-pointer" />
      </div>
    </nav>
  );
}
