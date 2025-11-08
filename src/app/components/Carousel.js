"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

export default function Carousel({ activeSection, setActiveSection }) {
  const slides = [
    { id: 1, title: "18 Roses", image: "/pictures/Roses.png" },
    { id: 2, title: "18 Letters", image: "/pictures/Letters.png" },
    { id: 3, title: "18 Treasures", image: "/pictures/Treasures.png" },
    { id: 4, title: "18 Shots", image: "/pictures/Shots.png" },
  ];

  return (
    <div className="w-full relative py-10 bg-[#f7f4ef]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={"auto"}
        centeredSlides={true}
        loop={true}
        onSlideChange={(swiper) => setActiveSection(slides[swiper.realIndex].title)}
        className="w-[calc(100%-20px)] mx-auto"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className={`!w-[70%] sm:!w-[60%] md:!w-[50%] transition-all duration-500 ease-in-out ${
              activeSection === slide.title ? "scale-110 z-20" : "scale-90 opacity-70 z-10"
            }`}
            onClick={() => setActiveSection(slide.title)}
          >
            <div className="bg-white rounded-2xl overflow-hidden flex justify-center items-center h-[220px] sm:h-[300px] md:h-[400px] shadow-lg cursor-pointer">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom dots controlled by state */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((slide) => (
          <button
            key={slide.id}
            onClick={() => setActiveSection(slide.title)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === slide.title ? "bg-[#7f8275] scale-125" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
