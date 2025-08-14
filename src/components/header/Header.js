// components/MegaMenu.js
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import Modal from "../modals/Modal";

const MegaMenu = () => {
  const [menu, setMenu] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const elementId = document.getElementById("header");
    const handleScroll = () => {
      if (window.scrollY > 50) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = () => {
    // Close the menu on item click if the menu is open
    if (!menu) toggleNavbar();
  };

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <header
      id="header"
      className="headroom navbar-color-white navbar-style-four"
    >
      <div className="startp-nav">
        <div className="container">
          <div className="ruby-menu-demo-header">
            <div className="ruby-wrapper">
              <button
                className="c-hamburger c-hamburger--htx visible-xs"
                onClick={toggleNavbar}
              >
                <span>toggle menu</span>
              </button>
              <ul className="ruby-menu">
                <Link href="/" passHref onClick={handleMenuItemClick}>
                  <li className="ruby-active-menu-item">
                    <img
                      src={"/images/logos/logo-w.png"}
                      alt="logo"
                      className="logo-item"
                    />
                  </li>
                </Link>
                <li
                  className="ruby-menu-right btns btn-primarys"
                  style={{ marginLeft: "20px" }}
                >
                  <button onClick={handleShow}>Schedule a Call</button>
                </li>
               
                <li className="ruby-menu-mega-shop ruby-menu-right">
                  <Link href="/contact" passHref onClick={handleMenuItemClick}>
                    Contact
                  </Link>
                </li>
                 <li className="ruby-menu-mega-shop ruby-menu-right">
                  <Link href="/offshore" passHref onClick={handleMenuItemClick}>
                    Offshore
                  </Link>
                </li>
                <li className="ruby-menu-mega ruby-menu-right">
                  <a href="# " className="" onClick={toggleNavbar}>
                    Services <FiChevronDown className="inline-block" />
                  </a>
                  <div className="ruby-grid ruby-grid-lined">
                    <div className="ruby-row container">
                      <div className="ruby-col-4 apply-padding">
                        <div className="flex justify-between items-center">
                          <div className="icons">
                            <img
                              src={"/images/banner-image/innovative.svg"}
                              alt="innovative"
                            />
                          </div>
                          <div>
                            <p className="ruby-list-headings left-headings font-bold">
                              <span className="text-black">Leading Technologies:</span>
                            </p>
                            <p>
                              Tech that simplifies your operations and gives you
                              an edge.
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="icons">
                            <img
                              src={"/images/banner-image/tech.svg"}
                              alt="tech"
                            />
                          </div>
                          <div>
                            <p className="ruby-list-headings left-headings font-bold">
                              <span className="text-black">Trusted Tech Experts:</span>
                            </p>
                            <p>
                              Reliable and innovative solutions crafted by
                              experts.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="ruby-col-8 apply-padding">
                        <p className="ruby-list-heading text-black font-bold text-[20px] leading-[24px]">Our Services</p>
                        <div className="ruby-row">
                          <div className="ruby-col-3 ruby-col-6-md">
                            <p className="ruby-list-headings text-black">
                              App Development
                            </p>
                            <ul>
                              <li>
                                <Link href="/mobile-application" passHref onClick={handleMenuItemClick}>
                                  Mobile Application
                                </Link>
                              </li>
                              <li>
                                <Link href="/web-development" passHref onClick={handleMenuItemClick}>
                                  Web Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/software-development" passHref onClick={handleMenuItemClick}>
                                  Software Development
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="ruby-col-3 ruby-col-6-md"
                            style={{ paddingLeft: 10 }}
                          >
                            <p className="ruby-list-headings text-black">
                              Implementation
                            </p>
                            <ul>
                              <li>
                                <Link href="/sap-application" passHref onClick={handleMenuItemClick}>
                                  SAP application
                                </Link>
                              </li>
                              <li>
                                <Link href="/sale-force" passHref onClick={handleMenuItemClick}>
                                  Salesforce
                                </Link>
                              </li>
                              <li>
                                <Link href="/hubspot" passHref onClick={handleMenuItemClick}>
                                  HubSpot
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="ruby-col-3 hidden-md"
                            style={{ paddingLeft: 15 }}
                          >
                            <p className="ruby-list-headings text-black">
                              Intelligent Data
                            </p>
                            <ul>
                              <li>
                                <Link href="/data-annotation" passHref onClick={handleMenuItemClick}>
                                  Data Annotation
                                </Link>
                              </li>
                              <li>
                                <Link href="/data-engineering" passHref onClick={handleMenuItemClick}>
                                  Data Engineering
                                </Link>
                              </li>
                              <li>
                                <Link href="/data-management" passHref onClick={handleMenuItemClick}>
                                  Data Management
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="ruby-col-3 hidden-md"
                            style={{ paddingLeft: 15 }}
                          >
                            <p className="ruby-list-headings text-black">AI/ML</p>
                            <ul>
                              <li>
                                <Link href="/generative-ai-services" passHref onClick={handleMenuItemClick}>
                                  Generative AI
                                </Link>
                              </li>
                              <li>
                                <Link href="/enterprise-ai-services" passHref onClick={handleMenuItemClick}>
                                  Enterprise AI
                                </Link>
                              </li>
                              <li>
                                <Link href="/data-modernization-services" passHref onClick={handleMenuItemClick}>
                                  Data Modernization
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="ruby-dropdown-toggle" />
                </li>
                
                <li className="ruby-menu-mega-shop ruby-menu-right">
                  <Link href="/about-us" passHref onClick={handleMenuItemClick}>
                    About
                  </Link>
                </li>
                <li className="ruby-menu-mega-blog ruby-menu-right">
                  <Link href="/" passHref onClick={handleMenuItemClick}>
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Modal handleClose={handleClose} handleShow={handleShow} show={show} />
    </header>
  );
};

export default MegaMenu;
