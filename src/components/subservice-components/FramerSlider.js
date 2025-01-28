"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const images = [
  "/images/framer/1.webp",
  "/images/framer/2.webp",
  "/images/framer/3.webp",
  "/images/framer/4.webp",
  "/images/framer/5.webp",
  "/images/framer/6.webp",
  "/images/framer/7.webp",
];

const settings = {
  dots: false,
  infinite: true,
  speed: 5000, // Speed for continuous scroll (adjust as needed)
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true, // Enable autoplay for continuous scrolling
  autoplaySpeed: 0, // No delay between scrolls
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const FramerSlide = () => {
  return (
    <div className="relative pt-2 overflow-hidden z-20 bg-white">
      {/* Left Overlay */}
      <div className="absolute top-0 left-0 h-full w-[100px] md:w-[250px] bg-gradient-to-r from-white to-transparent opacity-100 z-10" />
      {/* Right Overlay */}
      <div className="absolute top-0 right-0 h-full w-[100px] md:w-[250px] bg-gradient-to-l from-white to-transparent opacity-100 z-10" />

      <Slider {...settings}>
        {images.map((src, index) => (
          <div
            key={index}
            className="flex justify-center w-full items-center h-[600px] mx-2"
          >
            <Image
              src={src}
              alt={`Slider Image ${index + 1}`}
              width={600}
              height={600}
              className="!w-[300px] object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FramerSlide;
