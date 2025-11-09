"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import { useRef, useEffect, useState } from "react";

export default function Carousel({ activeSection, setActiveSection }) {
  const slides = [
    { id: 1, title: "18 Roses", image: "/pictures/Roses.png" },
    { id: 2, title: "18 Letters", image: "/pictures/Letters.png" },
    { id: 3, title: "18 Treasures", image: "/pictures/Treasures.png" },
    { id: 4, title: "18 Shots", image: "/pictures/Shots.png" },
  ];

  const swiperRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen width for switching layout
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full relative py-7 bg-[#f7f4ef] overflow-visible">
      {/* 🌸 MOBILE VIEW (scrollable swiper) */}
      {!isDesktop && (
        <>
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={"auto"}
            centeredSlides={true}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => {
              if (swiper?.realIndex != null && slides[swiper.realIndex]) {
                setActiveSection(slides[swiper.realIndex].title);
              }
            }}
            className="w-[calc(100%-20px)] mx-auto overflow-visible pb-8"
          >
            {slides.map((slide) => (
              <SwiperSlide
                key={slide.id}
                className={`!w-[70%] sm:!w-[60%] transition-all duration-500 ease-in-out ${
                  activeSection === slide.title
                    ? "scale-110 z-20"
                    : "scale-90 opacity-70 z-10"
                }`}
                onClick={() => {
                  setActiveSection(slide.title);
                  swiperRef.current?.slideToLoop(slide.id - 1);
                }}
              >
                <div className="bg-white rounded-2xl overflow-hidden flex justify-center items-center aspect-square shadow-lg cursor-pointer">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => {
                  setActiveSection(slide.title);
                  swiperRef.current?.slideToLoop(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === slide.title
                    ? "bg-[#b08968] scale-125"
                    : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </>
      )}

      {/* 💻 DESKTOP VIEW (4 static cards) */}
      {isDesktop && (
        <div className="grid grid-cols-4 gap-6 w-[90%] mx-auto">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`bg-white rounded-2xl overflow-hidden flex justify-center items-center aspect-square shadow-lg cursor-pointer transition-all duration-300 ${
                activeSection === slide.title
                  ? "scale-105 ring-2 ring-[#b08968]"
                  : "hover:scale-105"
              }`}
              onClick={() => setActiveSection(slide.title)}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
