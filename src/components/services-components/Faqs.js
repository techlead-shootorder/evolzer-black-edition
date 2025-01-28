"use client";
import { Disclosure } from "@headlessui/react";
import { MdExpandMore, MdExpandLess } from "react-icons/md"; // Import the icons from React Icons
import { useState } from "react";

const Faqs = ({ faq, bg, textLeft }) => {
  const [openIndex, setOpenIndex] = useState(null); // State to track the currently open FAQ

  const handleToggle = (index) => {
    // Toggle the FAQ: if it's already open, close it; if it's closed, open it
    setOpenIndex(openIndex === index ? null : index);
  };
console.log(faq);
  return (
    <div className={`${bg}?${bg}:bg-gray-100 py-10`}>
      <div className="max-w-4xl mx-auto">
        {faq.length>0 ? (
          <h3
            className={`${
              textLeft ? textLeft : "text-center"
            } text-2xl font-bold mb-6`}
          >
            Frequently Asked Questions
          </h3>
        ) : (
          <></>
        )}
        {faq.map((item, index) => (
          <Disclosure key={item.id} as="div" className="mb-4 rounded shadow">
            {({ open }) => (
              <>
                <Disclosure.Button
                  onClick={() => handleToggle(index)} // Call the toggle function on button click
                  className="flex justify-between items-center w-full px-6 py-3 text-left font-medium text-gray-900 bg-white hover:bg-opacity-80 transition-colors rounded !leading-[25px]"
                >
                  <span className="normal-case font-[600]">
                    {item.question}
                  </span>
                  {openIndex === index ? (
                    <MdExpandLess className="w-5 h-5 text-black" />
                  ) : (
                    <MdExpandMore className="w-5 h-5 text-black" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel
                  className={`px-4 pb-4 pt-2 text-gray-700 ${
                    openIndex === index ? "" : "hidden"
                  }`}
                >
                  {item.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
