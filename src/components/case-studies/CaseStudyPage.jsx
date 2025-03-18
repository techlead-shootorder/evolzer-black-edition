"use client";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const caseStudies = [
  {
    title:
      "Chef Havn: Transforming the Food Delivery Experience with a Scalable Mobile App Solution",
    category: "Online Food Ordering",
    image: "/images/case-study/Chef-Havn.webp",
    link: "/case-studies/chef-havn",
    bgGradient: "from-[#E8E8FF] to-[#FFFFFF]",
  },
  {
    title:
      "Good Sleep Bedding: Elevating E-Commerce with a Seamless Shopify Web Development Solution",
    category: "E-Commerce",
    image: "/images/case-study/GSB.webp",
    link: "/case-studies/good-sleep-bedding",
    bgGradient: "from-[#E8FFFF] to-[#FFFFFF]",
  },
  {
    title: "elahe-study: Elevating the Luxury Fashion Shopping Experience",
    category: "E-Commerce",
    image: "/images/case-study/GSB.webp",
    link: "/case-studies/good-sleep-bedding",
    bgGradient: "from-[#E8FFFF] to-[#FFFFFF]",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: (
    <button
      className="slick-prev text-gray-600 hover:text-gray-800"
      aria-label="Previous"
    >
      <FaArrowLeft />
    </button>
  ),
  nextArrow: (
    <button
      className="slick-next text-gray-600 hover:text-gray-800"
      aria-label="Next"
    >
      <FaArrowRight />
    </button>
  ),
};

const CaseStudyCarousel = ({ bg }) => {
  return (
    <section className={`pt-20 pb-20 ${bg}`}>
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-4xl font-bold">
          Here&apos;s Our Case <span className="text-orange-600">Studies</span>
        </h2>
        <Slider {...settings}>
          {caseStudies.map((study, index) => (
            <div key={index} className="p-4">
              <Link href={study.link} className="no-underline">
                <div
                  className={`relative p-6 rounded-xl shadow-md flex justify-between items-center bg-gradient-to-r ${study.bgGradient} min-h-[300px]`}
                >
                  <div>
                    <h4 className="mb-3 text-xl font-semibold text-black">
                      {study.title}
                    </h4>
                    <div className="flex mb-3">
                      <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <Image
                    src={study.image}
                    alt={study.title}
                    className="max-w-[45%] rounded-lg"
                    width={300}
                    height={200}
                    loading="lazy"
                  />
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CaseStudyCarousel;
