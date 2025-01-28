import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa"; // Import icons from React Icons

const Contact = () => {
  return (
    <div className="contact-info-area pt-20 pb-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/3 p-4">
            <div className="contact-info-box bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <div className="icon text-3xl mb-4 p-[18px] rounded-full">
                <FaEnvelope className="text-[24px]"/>
              </div>
              <h3 className="text-xl font-semibold">Mail Here</h3>
              <p>
                <a href="mailto:info@evolzer.com" className="text-blue-600 hover:underline">
                  info@evolzer.com
                </a>
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/3 p-4">
            <div className="contact-info-box bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <div className="icon text-3xl mb-4  p-[18px] rounded-full">
                <FaMapMarkerAlt className="text-[24px]"/>
              </div>
              <h3 className="text-xl font-semibold">Visit Here</h3>
              <p className="text-center">
                1st Floor, SY, Sattiah Residency, <br />
                Krishe Sapphire MSR Block, <br />
                Hitech City Rd, Madhapur, <br />
                Hyderabad, Telangana 500081
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/3 p-4">
            <div className="contact-info-box bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <div className="icon text-3xl mb-4  p-[18px] rounded-full">
                <FaPhone className="transform rotate-90 text-[24px]"/>
              </div>
              <h3 className="text-xl font-semibold">Call Here</h3>
              <p>
                <a href="tel:+91-6303921512" className="text-blue-600 hover:underline">
                  +91-630-392-1512
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
