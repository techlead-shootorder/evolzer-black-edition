"use client";

import React from "react";
import Link from "next/link"; // Use Next.js Link component
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { PiXLogoBold } from "react-icons/pi"; // X (Twitter) Logo

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area bg-black text-white py-12">
      <div className="container mx-auto px-6">
        {/* Responsive Grid Layout: Single column on mobile, two on medium and four on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {/* Logo & About Section */}
          <div>
            <div className="mb-4 flex justify-start">
              <img src="/images/logos/logo-w.png" alt="logo" className="w-32 sm:w-40" loading="lazy" />
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Evolzer modernizes IT, optimizes data, and ensures cloud security. Trusted by leading firms, we help businesses excel in the digital age.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-600">Company</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/about-us" className="hover:text-orange-600 text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/mobile-application" className="hover:text-orange-600 text-white">
                  Mobile Application
                </Link>
              </li>
              <li>
                <Link href="/web-development" className="hover:text-orange-600 text-white">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/software-development" className="hover:text-orange-600 text-white">
                  Software Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-600">Support</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/privacy-policy" className="hover:text-orange-600 text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/term-condition" className="hover:text-orange-600 text-white">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-600 text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-600">Address</h3>
            <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
              <li>
                <FaMapMarkerAlt className="inline-block mr-2 text-orange-600" />
                1st Floor, SY, Sattiah Residency, Krishe Sapphire MSR Block, Hitech City Rd, Madhapur, Hyderabad, Telangana 500081
              </li>
              <li>
                <FaEnvelope className="inline-block mr-2 text-orange-600" />
                <a href="mailto:info@evolzer.com" className="hover:text-orange-600 text-white">
                  info@evolzer.com
                </a>
              </li>
              <li>
                <FaPhone className="inline-block mr-2 text-orange-600 transform rotate-90" />
                <a href="tel:+91-630-392-1512" className="hover:text-orange-600 text-white">
                  +91-630-392-1512
                </a>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="flex justify-start space-x-4 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61561672886657"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-blue-600 rounded-full hover:bg-[#4267b2] transition"
              >
                <FaFacebookF className="text-white w-5 h-5" />
              </a>
              <a
                href="https://x.com/EvolzerTech"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-600 transition"
              >
                <PiXLogoBold className="text-white w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/evolzertechnology"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-pink-500 rounded-full hover:bg-[#E1306C] transition"
              >
                <FaInstagram className="text-white w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/evolzer-technology/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-blue-700 rounded-full hover:bg-[#0077b5] transition"
              >
                <FaLinkedinIn className="text-white w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-white text-sm sm:text-base">
            Copyright &copy; {currentYear} Evolzer. All rights reserved by{" "}
            <a
              href="https://shootorder.com"
              target="_blank"
              rel="noreferrer"
              className="text-orange-600 hover:underline"
            >
              Shootorder
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
