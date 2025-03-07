"use client";
import React from "react";
import Link from "next/link";
import { FaTools } from "react-icons/fa"; // Tools icon representing maintenance

const UnderMaintenance = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-indigo-600 px-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-10 text-center shadow-2xl">
        <FaTools className="w-20 h-20 text-white mx-auto mb-4 animate-spin-slow" />
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Under Maintenance
        </h1>
        <p className="text-lg sm:text-xl text-white mb-8">
          Our website is currently undergoing scheduled maintenance. Please
          check back soon.
        </p>
        <Link href="/">
          <p className="inline-block px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition">
            Return Home
          </p>
        </Link>
      </div>
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default UnderMaintenance;
