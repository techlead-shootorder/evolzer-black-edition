import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

const WhatWeDo = ({ heading, service }) => {
  // Memoize service mapping to prevent re-calculation on each render if services don't change
  const services = useMemo(() => {
    return service || [];
  }, [service]);

  return (
    <div className="services-area-two pt-20 pb-12 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">{heading}</h2>
        </div>

        {/* Service Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((serviceItem, index) => (
            <div
              className="bg-[#BDBABA24] rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
              key={index}
            >
              {/* Image or Icon */}
              {serviceItem.imageUrl ? (
                <div className="relative w-full h-64 flex items-center justify-center bg-gray-200">
                  <Image
                    src={serviceItem.imageUrl}
                    alt={serviceItem.card_title}
                    layout="fill"
                    className="rounded-t-lg object-cover"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="text-3xl text-orange-600 p-3 bg-gray-100 rounded-full inline-block m-3">
                  {serviceItem.icon || "Icon Missing"}
                </div>
              )}

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-[18px] font-semibold mb-2  hover:text-orange-600">
                  <Link href={serviceItem.url ? serviceItem.url : "#"} className="!text-orange-600">
                    {serviceItem.card_title}
                  </Link>
                </h3>
                <p className="text-white text-[14px]">{serviceItem.card_subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
