import React from "react";
import { FaBrain, FaBalanceScale } from "react-icons/fa";
import { MdOutlinePsychology, MdOutlineScience } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";

import MainNav from "./navComponents/MainNav";

export default function HeroSection() {
  return (
   <div className=" h-150 w-full bg-cover bg-center bg-[url('https://shooliniuniversity.com/assets/slider/bg-hero.jpg')]">
    <MainNav/>

      {/* Dark Overlay */}
      <div className="absolute bg-opacity-0"></div>

      {/* Content */}
      <div className="  text-white px-4">
        <h1 className=" text-3xl text-center md:text-5xl font-bold">
          DRIVEN BY INNOVATION & CREATIVITY
        </h1>
        <p className="mt-4 text-lg text-center md:text-2xl">
          Fast-track your academic journey with our leading courses!
        </p>

        {/* Course Icons */}
        <div className=" flex justify-center mt-55 gap-10  ">
          {/* CSE */}
          <div className="flex flex-col items-center  relative">
              <FaBrain className="text-white text-5xl absolute z-10 top-[50px] left-1/2 -translate-1/2"/>
            <div className="bg-red-600 p-5 rounded-full border-4 border-dashed w-[100px] h-[100px] border-spin">
            </div>
            <p className="mt-2 font-semibold">CSE</p>
          </div>

          {/* MBA */}
           <div className="flex flex-col items-center  relative">
              <FaBalanceScale className="text-white text-5xl absolute z-10 top-[50px] left-1/2 -translate-1/2"/>
            <div className="bg-red-600 p-5 rounded-full border-4 border-dashed w-[100px] h-[100px] border-spin">
            </div>
            <p className="mt-2 font-semibold">MBA</p>
          </div>

          {/* Biotech */}
          <div className="flex flex-col items-center  relative">
              <MdOutlinePsychology className="text-white text-5xl absolute z-10 top-[50px] left-1/2 -translate-1/2"/>
            <div className="bg-red-600 p-5 rounded-full border-4 border-dashed w-[100px] h-[100px] border-spin">
            </div>
            <p className="mt-2 font-semibold">Biotech</p>
          </div>

          {/* Psychology */}
           <div className="flex flex-col items-center  relative">
              <MdOutlineScience className="text-white text-5xl absolute z-10 top-[50px] left-1/2 -translate-1/2"/>
            <div className="bg-red-600 p-5 rounded-full border-4 border-dashed w-[100px] h-[100px] border-spin">
            </div>
            <p className="mt-2 font-semibold">Psychology</p>
          </div>

          {/* PhD */}
           <div className="flex flex-col items-center  relative">
              <GiGraduateCap className="text-white text-5xl absolute z-10 top-[50px] left-1/2 -translate-1/2"/>
            <div className="bg-red-600 p-5 rounded-full border-4 border-dashed w-[100px] h-[100px] border-spin">
            </div>
            <p className="mt-2 font-semibold">PhD</p>
          </div>

          {/* LLB */}
          <div className="flex flex-col items-center  relative">
              <BsPeopleFill className="text-white text-5xl absolute z-10 top-[50px] left-1/2 -translate-1/2"/>
            <div className="bg-red-600 p-5 rounded-full border-4 border-dashed w-[100px] h-[100px] border-spin">
            </div>
            <p className="mt-2 font-semibold">LLB</p>
          </div>
        </div>
      </div>
    </div>
  );
}
