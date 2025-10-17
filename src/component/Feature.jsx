import React from 'react'
import { FaPen } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaRocketchat } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";

function Feature() {
  return (
  <>
  
      <div className=" relative">

        <div className="fixed right-0 top-100 -translate-y-1/2 z-50">

          <div className="group flex items-center bg-blue-600 text-white rounded shadow-lg cursor-pointer overflow-hidden 
      transition-all duration-300 w-[50px] hover:w-[180px] px-2 py-2">
            <FaPen size={30} className="min-w-[30px]" />
            <h3 className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Apply Now
            </h3>
          </div>
        </div>
        <div className="fixed right-0 top-111 -translate-y-1/2  z-50">
          <div className="group flex items-center bg-red-900 text-white rounded shadow-lg cursor-pointer overflow-hidden 
      transition-all duration-300 w-[50px] hover:w-[180px] px-2 py-2">
            <IoDocumentTextOutline size={30} className="min-w-[30px]" />
            <h3 className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Documents
            </h3>
          </div>
        </div>

        <div className="fixed right-0 top-122 -translate-y-1/2 z-50">
          <div className="group flex items-center bg-zinc-500 text-white rounded shadow-lg cursor-pointer overflow-hidden 
      transition-all duration-300 w-[50px] hover:w-[180px] px-2 py-2">
            <SlCalender size={30} className="min-w-[30px]" />
            <h3 className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Events
            </h3>
          </div>
        </div>

        <div className="fixed right-0 top-133 -translate-y-1/2 z-50">
          <div className="group flex items-center bg-blue-400 text-white rounded shadow-lg cursor-pointer overflow-hidden 
      transition-all duration-300 w-[50px] hover:w-[180px] px-2 py-2">
            <FaRocketchat size={30} className="min-w-[30px]" />
            <h3 className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Chat
            </h3>
          </div>
        </div>

        <div className="fixed right-10 bottom-[40px] -translate-y-1/2 z-50">
          <div className="group flex items-center bg-green-500 text-white rounded-full shadow-lg cursor-pointer 
  overflow-hidden transition-transform duration-300 w-[50px] h-[50px] justify-center hover:scale-110">
            <MdOutlineWhatsapp size={28} className="min-w-[28px]" />
          </div>
        </div>


      </div>


  
  </>
  )
}

export default Feature
