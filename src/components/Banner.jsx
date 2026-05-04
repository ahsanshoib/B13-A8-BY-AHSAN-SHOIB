"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/hero-banner.png",
    heading: "Decorate Your Sweet Home...",
    buttonText: "Browse Now",
    bg: "#1a3557",
  },
  {
    image: "/banner-school.png",
    heading: "Pure Nostalgia! Back to School",
    buttonText: "Explore Now",
    bg: "#2c4a6e",
  },
  {
    image: "/banner-muesum.png",
    heading: "Explore the Ancient Legacy...",
    buttonText: "Shop Now",
    bg: "#0f2840",
  },
];

export default function Banner() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-[320px] md:h-[420px] flex items-center"
              style={{ backgroundColor: slide.bg }}
            >
              {/* Left Text */}
              <div className="z-10 px-8 md:px-16 flex flex-col gap-4 w-full md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                  {slide.heading}
                </h1>
                <Link href="/all-tiles">
                  <button className="btn btn-outline text-white border-white hover:bg-white hover:text-[#1a3557] w-fit font-semibold px-6">
                    {slide.buttonText}
                  </button>
                </Link>
              </div>

              {/* Right Image */}
              <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block">
                <Image
                  src={slide.image}
                  alt={slide.heading}
                  fill
                  className="object-cover opacity-80"
                  priority={index === 0}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}