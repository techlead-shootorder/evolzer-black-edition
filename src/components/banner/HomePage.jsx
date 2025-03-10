"use client";

import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover 0"
      >
        <source src="https://res.cloudinary.com/dvbhnjlvx/video/upload/v1738825632/rfotbgodmwcojvmu7ivc.mp4" type="video/mp4" />
      </video>

      <div className="relative bg-black/50 !pt-[150px] md:!pt-[280px]">
        <div className="container mx-auto">
          <div className="text-center lg:text-left mb-12 w-full lg:w-1/2">
            <h1 className="text-center text-[27px] leading-[35px] lg:text-left md:text-[50px] mb-[25px] md:leading-[70px] font-bold text-white">
              Developing Technology for A Smarter World
            </h1>
            <p className="text-center lg:text-left mt-4 text-[#e9e9e9] lg:max-w-[470px] text-[15px]">
              Driving digital transformation with cutting-edge technology
              solutions in application development, data analytics and
              engineering, software development, DevOps services, UI/UX design, AI
              and Machine learning.
            </p>

            <Link
              href="/contact"
              className="inline-block text-center lg:text-left mt-6 bg-[#f15a29] text-white py-4 px-8 rounded hover:bg-[#f15a29] transition"
            >
              Get Started
            </Link>
          </div>
          <div className="banner-boxes-area">
            <div className="container mx-auto">
              <div className="flex flex-wrap justify-center">
                <div className="w-full sm:w-1/2 md:w-1/3 p-2" data-aos="fade-up" data-aos-delay="100">
                  <div className="single-banner-boxes bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="icon">
                      <img
                        src="/images/banner-image/svg1.svg"
                        alt="service"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="font-semibold text-white">End-to-end solutions</h3>
                    <p className="text-gray-200">
                      Comprehensive solutions tailored for all your business
                      needs.
                    </p>
                  </div>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/3 p-2" data-aos="fade-up" data-aos-delay="300">
                  <div className="single-banner-boxes bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="icon">
                      <img
                        src="/images/banner-image/svg2.svg"
                        alt="service"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="font-semibold text-white">Strategic services</h3>
                    <p className="text-gray-200">
                      Customized solutions aligning your business goals for
                      long-term success.
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 p-2" data-aos="fade-up" data-aos-delay="500">
                  <div className="single-banner-boxes bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                    <div className="icon">
                      <img
                        src="/images/banner-image/svg3.svg"
                        alt="service"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="font-semibold text-white">Comprehensive support</h3>
                    <p className="text-gray-200">
                      Experts provide outstanding assistance from consultation to
                      maintenance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;