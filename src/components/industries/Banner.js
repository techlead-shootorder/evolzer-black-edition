"use client";
import React from "react";
import Image from "next/image";

const Banner = ({ pageTitle, banner }) => {
  return (
    <>
    
      <div className="page-title-area relative">
        <Image
          src={banner}
          alt="Banner background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="overlay absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto relative z-10 h-full flex flex-col justify-center">
          <div className="grid  items-center !justify-between md:gap-24 !mx-2 md:mx-0">
            <div className="col-span-12 lg:col-span-7 text-center h-full flex flex-col justify-end lg:text-left">
              <h1 className="text-white text-center !text-[30px] md:!text-[44px]">{pageTitle}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
