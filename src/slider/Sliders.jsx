import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import { Autoplay, Grid } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Sliders() {
  const swiperRef = useRef(null);

  const slides = [
    "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fmedia%2F1610879492-airtel.png&w=256&q=75",
    "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fmedia%2F1610879491-Star%20health.png&w=384&q=75",
    "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fmedia%2F1610879490-Shubham.png&w=256&q=75",
    "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fmedia%2F1610879491-Star%20health.png&w=384&q=75",
    "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fmedia%2F1610879492-airtel.png&w=256&q=75",
    "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fmedia%2F1610879491-Star%20health.png&w=384&q=75",
    "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fmedia%2F1610879492-airtel.png&w=256&q=75",
    "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fmedia%2F1610879491-Star%20health.png&w=384&q=75",
    "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fmedia%2F1610879490-Shubham.png&w=256&q=75",
    "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fmedia%2F1610879491-Star%20health.png&w=384&q=75",
    "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fmedia%2F1610879492-airtel.png&w=256&q=75",
    "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fmedia%2F1610879491-Star%20health.png&w=384&q=75",
    "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fmedia%2F1610879492-airtel.png&w=256&q=75",
    "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fmedia%2F1610879491-Star%20health.png&w=384&q=75",
    "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fmedia%2F1610879490-Shubham.png&w=256&q=75",
    "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fmedia%2F1610879491-Star%20health.png&w=384&q=75",
    "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fmedia%2F1610879492-airtel.png&w=256&q=75",
    "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fmedia%2F1610879491-Star%20health.png&w=384&q=75",
  ];

  return (
    <div className="relative flex items-center justify-center my-10">
      {/* Left Button */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-[-50px] z-50 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer hover:bg-zinc-100 hover:text-black transition"
      >
        <IoIosArrowBack />
      </button>

      {/* Swiper */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Swiper instance set
        modules={[Autoplay, Grid]}
        spaceBetween={20}
        slidesPerView={6}
        // grid={{ rows: 2, fill: "row" }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
        speed={600}  // ← transition duration added (600ms)

      >


        {slides.map((src, index) => (
          <SwiperSlide key={index}>
           <div className=" flex h-70 flex-col gap-4 bg-zinc-100 ">
             <img src={src} alt={`Slide ${index + 1}`} className="w-40 h-40   object-cover" />
               <img src={src} alt={`Slide ${index + 1}`} className="w-40 h-40   object-cover" />
           </div>
           
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right Button */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-[-50px] z-50 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer hover:bg-zinc-100 hover:text-black transition"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}
