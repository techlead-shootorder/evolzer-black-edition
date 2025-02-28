"use client";
import { Disclosure } from "@headlessui/react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { useState } from "react";

const Faqs = ({ faq, bg, textLeft }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split the FAQs array into two columns
  const half = Math.ceil(faq.length / 2);
  const leftFaqs = faq.slice(0, half);
  const rightFaqs = faq.slice(half);

  return (
    <div className={` bg-black py-10`}>
      <div className="max-w-6xl mx-auto">
        {faq.length > 0 && (
          <h3
            className={`${
              textLeft ? textLeft : "text-center"
            } text-3xl font-bold mb-6`}
          >
            Frequently Asked Questions
          </h3>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            {leftFaqs.map((item, index) => (
              <Disclosure
                key={item.id}
                as="div"
                className="mb-4 rounded shadow"
              >
                {() => (
                  <>
                    <Disclosure.Button
                      onClick={() => handleToggle(index)}
                      className="flex justify-between items-center w-full px-6 py-3 text-left font-medium text-white bg-[#BDBABA24] hover:bg-opacity-80 transition-colors rounded !leading-[25px]"
                    >
                      <span className="normal-case font-[600]">
                        {item.question}
                      </span>
                      {openIndex === index ? (
                        <MdExpandLess className="w-5 h-5 text-white" />
                      ) : (
                        <MdExpandMore className="w-5 h-5 text-white" />
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel
                      className={`px-4 pb-4 pt-2 text-white ${
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

          {/* Right Column */}
          <div>
            {rightFaqs.map((item, index) => {
              const globalIndex = index + half; // Adjust index for right column
              return (
                <Disclosure
                  key={item.id}
                  as="div"
                  className="mb-4 rounded shadow"
                >
                  {() => (
                    <>
                      <Disclosure.Button
                        onClick={() => handleToggle(globalIndex)}
                        className="flex justify-between items-center w-full px-6 py-3 text-left font-medium text-white bg-[#BDBABA24] hover:bg-opacity-80 transition-colors rounded !leading-[25px]"
                      >
                        <span className="normal-case font-[600]">
                          {item.question}
                        </span>
                        {openIndex === globalIndex ? (
                          <MdExpandLess className="w-5 h-5 text-white" />
                        ) : (
                          <MdExpandMore className="w-5 h-5 text-white" />
                        )}
                      </Disclosure.Button>
                      <Disclosure.Panel
                        className={`px-4 pb-4 pt-2 text-white ${
                          openIndex === globalIndex ? "" : "hidden"
                        }`}
                      >
                        {item.answer}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
