import Link from "next/link"; // Import Link from Next.js
import React from "react";
import { FaCogs, FaEnvelope, FaBell, FaUsers, FaStar } from "react-icons/fa"; // Import specific icons from React Icons

const AboutUsValues = () => {
  return (
    <div className="services-area-two pt-20 pb-12">
      <div className="container mx-auto">
        <div className="section-title text-center mb-10">
          <h2 className="text-3xl font-bold">Our Values</h2>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="single-services-box !bg-[#BDBABA24] shadow-lg rounded-lg p-6">
              <div className="icon bg-c679e3 text-[24px] mb-4 p-4 rounded-full">
                <FaCogs />
              </div>
              <h3 className="text-xl font-semibold">
                <Link href="#" className="text-orange-500">
                  Innovation
                </Link>
              </h3>
              <p className="text-white">
                We are on a constant lookout for new technologies to provide you
                with solutions that will keep you ahead of the curve.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="single-services-box !bg-[#BDBABA24] shadow-lg rounded-lg p-6">
              <div className="icon bg-c679e3 text-[24px] mb-4 p-4 rounded-full">
                <FaEnvelope />
              </div>
              <h3 className="text-xl font-semibold">
                <Link href="#" className="text-orange-500">
                  Integrity
                </Link>
              </h3>
              <p className="text-white">
                We hold up the highest standards of integrity ensuring
                transparency and trust in our relationships with you, our
                partners, and our employees.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="single-services-box !bg-[#BDBABA24] shadow-lg rounded-lg p-6">
              <div className="icon bg-c679e3 text-[24px] mb-4 p-4 rounded-full">
                <FaBell />
              </div>
              <h3 className="text-xl font-semibold">
                <Link href="#" className="text-orange-500">
                  Customer-Centricity
                </Link>
              </h3>
              <p className="text-white">
                Your success is our top priority. We create services that not
                only meet your business goals but also exceed your expectations.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="single-services-box !bg-[#BDBABA24] shadow-lg rounded-lg p-6">
              <div className="icon bg-c679e3 text-[24px] mb-4 p-4 rounded-full">
                <FaUsers />
              </div>
              <h3 className="text-xl font-semibold">
                <Link href="#" className="text-orange-500">
                  Collaboration
                </Link>
              </h3>
              <p className="text-white">
                We believe in the concept that collaboration both with our
                clients and within the company is important to achieve
                exceptional results.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="single-services-box !bg-[#BDBABA24] shadow-lg rounded-lg p-6">
              <div className="icon bg-c679e3 text-[24px] mb-4 p-4 rounded-full">
                <FaStar />
              </div>
              <h3 className="text-xl font-semibold">
                <Link href="#" className="text-orange-500">
                  Excellence
                </Link>
              </h3>
              <p className="text-white">
                We strive for excellence in all that we do ranging from the
                quality of our services to the expertise of our team members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsValues;
