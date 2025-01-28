import React from "react";

const Statistics = () => {
  return (
    <div className="funfacts-area pt-20 pb-20 ">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800">
            <span>We understand your needs and deliver what works for you.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="funfact text-center">
            <h3 className="text-4xl font-bold text-blue-600">250+</h3>
            <p className="text-white">Projects Delivered</p>
          </div>

          <div className="funfact text-center">
            <h3 className="text-4xl font-bold">11+</h3>
            <p className="text-white">Years Of Expertise</p>
          </div>

          <div className="funfact text-center">
            <h3 className="text-4xl font-bold text-blue-600">50+</h3>
            <p className="text-white">Ongoing Projects</p>
          </div>

          <div className="funfact text-center">
            <h3 className="text-4xl font-bold text-blue-600">92%</h3>
            <p className="text-white">Client Retention Rate</p>
          </div>
        </div>

        {/* <div className="map-bg mt-8">
          <img
            src="/images/map.png"
            alt="map"
            loading="lazy"
            className="object-cover w-full h-auto"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Statistics;
