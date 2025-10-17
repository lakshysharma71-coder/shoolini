
import React, { useState, useEffect } from "react";
import NavDrop from "./NavDrop";
import { Link } from "react-router";

export default function FixNavbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShow(true); // scroll 30px se zyada → show navbar
      } else {
        setShow(false); // scroll top pe → hide navbar
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className=" w-full z-50 bg-white text-zinx-200 px-6 py-2 flex items-center ">
            {/* Logo */}
            <div className="flex items-center space-x-2">
      

<Link to="./">
  <img
    src="https://shooliniuniversity.com/_next/image?url=%2Fassets%2Fimages%2Fsu-naac.png&w=640&q=75"
    alt="Shoolini Logo"
    className="h-15 text-red-500 pl-4"
  />
</Link>

              
            </div>
      
            {/* Menu Items */}
            
              <ul className="space-x-4 pl-5 text-xs ">
<NavDrop />
              </ul>
            
      
            {/* Right Side */}
            <div className="flex items-center space-x-4 ml-auto">
              <button className="bg-red-600 text-white text-xs px-4 font-semibold py-3 rounded-md  shadow hover:bg-red-500 transition">
                APPLY NOW
              </button>
             
            </div>
          </nav>
    </div>
  );
}


