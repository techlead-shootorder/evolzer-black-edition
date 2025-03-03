"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false); // State for the mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="mobile-header header">
      <div className="container flex justify-between items-center p-4">
        {/* Logo on the left */}
        <Link href="/" passHref>
          <img
            src={"/images/logos/logo-w.png"}
            alt="logo"
            className="logo-item h-10"
          />
        </Link>

        {/* Hamburger Menu Icon */}
        <button
          onClick={toggleMenu}
          className="text-xl px-4 py-2 relative z-[10001] bg-black "
        >
          {isOpen ? (
            <AiOutlineClose className="text-white text-3xl fixed top-5 right-5 z-[10002]" />
          ) : (
            <AiOutlineMenu className="text-white text-3xl " />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`mobile-menu fixed inset-0 bg-black bg-opacity-90 transform ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } transition-all duration-300 ease-in-out z-[9999]`}
      >
        <ul className="flex flex-col items-start p-4">
          <li className="py-2">
            <Link href="/" passHref>
              <span className="text-white" onClick={closeMenu}>
                Home
              </span>
            </Link>
          </li>
          <li className="py-2">
            <Link href="/about-us" passHref>
              <span className="text-white" onClick={closeMenu}>
                About
              </span>
            </Link>
          </li>
          <li className="py-2">
            <Link href="/contact" passHref>
              <span className="text-white" onClick={closeMenu}>
                Contact
              </span>
            </Link>
          </li>
          <li className="py-2">
            <span className="text-white">Services</span>
            {/* Submenu for Services */}
            <ul className="ml-4 flex flex-col text-white">
              <li>
                <span className="font-bold my-2">App Development</span>
                <ul className="ml-4">
                  <li className="mt-1">
                    <Link href="/mobile-application" passHref>
                      <span onClick={closeMenu}>Mobile Application</span>
                    </Link>
                  </li>
                  <li className="mt-1">
                    <Link href="/web-application" passHref>
                      <span onClick={closeMenu}>Web Application</span>
                    </Link>
                  </li>
                  <li className="mt-1">
                    <Link href="/software-development" passHref>
                      <span onClick={closeMenu}>Software Development</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold my-2">Implementation</span>
                <ul className="ml-4">
                  <li className="mt-1">
                    <Link href="/sap-application" passHref>
                      <span onClick={closeMenu}>SAP Application</span>
                    </Link>
                  </li>
                  <li className="mt-1">
                    <Link href="/sale-force" passHref>
                      <span onClick={closeMenu}>Salesforce</span>
                    </Link>
                  </li>
                  <li className="mt-1">
                    <Link href="/hubspot" passHref>
                      <span onClick={closeMenu}>HubSpot</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold my-2">Intelligent Data</span>
                <ul className="ml-4">
                  <li className="mt-1">
                    <Link href="/data-annotation" passHref>
                      <span onClick={closeMenu}>Data Annotation</span>
                    </Link>
                  </li>
                  <li className="mt-1">
                    <Link href="/data-engineering" passHref>
                      <span onClick={closeMenu}>Data Engineering</span>
                    </Link>
                  </li>
                  <li className="mt-1">
                    <Link href="/data-management" passHref>
                      <span onClick={closeMenu}>Data Management</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-bold my-2">AI/ML</span>
                <ul className="ml-4">
                  <li className="mt-1">
                    <Link href="/generative-ai-services" passHref>
                      <span onClick={closeMenu}>Generative AI</span>
                    </Link>
                  </li>
                  <li className="mt-1">
                    <Link href="/enterprise-ai-services" passHref>
                      <span onClick={closeMenu}>Enterprise AI</span>
                    </Link>
                  </li>
                  <li className="mt-1">
                    <Link href="/data-modernization-services" passHref>
                      <span onClick={closeMenu}>Data Modernization</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="py-2 hidden">
            <button
              className="btn-schedule"
              onClick={() => alert("Schedule a call clicked!")}
            >
              Schedule a Call
            </button>
          </li>
        </ul>
      </nav>

      {/* Styles for the mobile menu */}
      <style jsx>{`
        .btn-schedule {
          background-color: #f15a29;
          color: white;
          padding: 10px 15px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .btn-schedule:hover {
          background-color: #e05e30;
        }

        @media (min-width: 1024px) {
          .mobile-header {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default MobileHeader;
