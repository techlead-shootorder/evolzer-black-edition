"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation"; // Get current path
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { dataMapping } from "@/utils/process";

// Dynamically import Slider (react-slick)
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Process = () => {
  const pathname = usePathname(); // Get current page URL path

  // Get process data based on pathname, fallback to "default" if not found
  const processData = dataMapping[pathname] ?? dataMapping["/default"];
  const { slides, heading } = processData;

  // Slider settings configuration
  const settings = useMemo(
    () => ({
      dots: true,
      infinite: false, // Enable infinite scrolling
      autoplay: true, // Enable automatic scrolling
      autoplaySpeed: 4000, // Delay before auto-scrolling
      speed: 500, // Transition speed
      slidesToShow: 3,
      slidesToScroll: 1, // Always scroll one slide at a time
      arrows: true,
      prevArrow: (
        <button className="slick-prev text-gray-700 hover:text-black">
          <FaArrowLeft className="w-8 h-8" />
        </button>
      ),
      nextArrow: (
        <button className="slick-next text-gray-700 hover:text-black">
          <FaArrowRight className="w-8 h-8" />
        </button>
      ),
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 600, settings: { slidesToShow: 1 } },
      ],
    }),
    []
  );

  return (
    <div className="tech-stack-slider bg-black">
      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">{heading}</h2>
        </div>
        {/* Slider component dynamically imported */}
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="tech-slide px-3">
              <div className="tech-slide-content p-6 bg-black rounded-lg shadow-lg text-center">
                <h3 className="slide-number text-2xl font-semibold text-orange-500">
                  {slide.number}
                </h3>
                <h4 className="slide-title mt-4 text-xl font-bold text-white">
                  {slide.title}
                </h4>
                <p className="slide-description mt-2 text-gray-300">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Process;
