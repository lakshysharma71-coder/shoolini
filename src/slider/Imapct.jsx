import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Impact() {
  const swiperRef = useRef(null);

  const slides = [
    "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fmedia%2F1758863603-World-Pharmacists-Day-at-Shoolini.jpeg&w=828&q=75",
    "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fmedia%2F1758776196-Marathon-for-Climate-Change-Awareness-in-Solan%20.jpg&w=828&q=75",
    "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fmedia%2F1758863603-World-Pharmacists-Day-at-Shoolini.jpeg&w=828&q=75",
    "https://shooliniuniversity.com/_next/image?url=https%3A%2F%2Fshooliniuniversity.com%2Fmedia%2F1758776196-Marathon-for-Climate-Change-Awareness-in-Solan%20.jpg&w=828&q=75",
  ];

  return (
    <div className="relative flex items-center justify-center my-10">
      {/* Left Button */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-[-45px] z-50 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer hover:bg-red-600 hover:text-white transition"
      >
        <IoIosArrowBack />
      </button>

      {/* Swiper */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain rounded-md shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right Button */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-[-45px] z-50 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer hover:bg-red-600 hover:text-white transition"
      >
      <IoIosArrowForward/>
      </button>
    </div>
  );
}
