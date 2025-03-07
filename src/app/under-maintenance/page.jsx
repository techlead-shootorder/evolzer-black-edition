"use client";
import React from "react";
import Link from "next/link";
import { FaRegClock } from "react-icons/fa"; // Clock icon for "Coming Soon"

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-teal-600 px-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-10 text-center shadow-2xl">
        <FaRegClock className="w-20 h-20 text-white mx-auto mb-4 animate-pulse" />
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Coming Soon!
        </h1>
        <p className="text-lg sm:text-xl text-white mb-6">
          We are working on something amazing. Stay tuned for updates!
        </p>
        <Link href="/">
          <p className="inline-block px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition">
            Return Home
          </p>
        </Link>
      </div>
      <style jsx>{`
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;
