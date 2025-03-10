"use client";
import { Disclosure } from "@headlessui/react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Faqs = ({ faq, bg, textLeft }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const faqIdFromUrl = searchParams.get("faq"); // Get FAQ id from URL

  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (faqIdFromUrl) {
      const faqIndex = faq.findIndex((item) => item.id === faqIdFromUrl);
      if (faqIndex !== -1) {
        setOpenIndex(faqIndex);
        // Scroll to the section when FAQ is selected
        document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [faqIdFromUrl, faq]);

  const handleToggle = (index, id) => {
    if (openIndex === index) {
      setOpenIndex(null);
      router.push("#faq"); // Keep the #faq in URL but remove specific FAQ
    } else {
      setOpenIndex(index);
      router.push(`#faq`, { scroll: false }); // Update URL with FAQ id
    }
  };

  // Split the FAQs into two columns
  const half = Math.ceil(faq.length / 2);
  const leftFaqs = faq.slice(0, half);
  const rightFaqs = faq.slice(half);

  return (
    <div id="faq" className="bg-black py-10">
      <div className="max-w-6xl mx-auto">
        {faq.length > 0 && (
          <h3 className={`${textLeft ? textLeft : "text-center"} text-3xl font-bold mb-6`}>
            Frequently Asked Questions
          </h3>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            {leftFaqs.map((item, index) => (
              <Disclosure key={item.id} as="div" className="mb-4 rounded shadow">
                {() => (
                  <>
                    <Disclosure.Button
                      id={item.id} // Unique ID for each FAQ
                      onClick={() => handleToggle(index, item.id)}
                      className="flex justify-between items-center w-full px-6 py-3 text-left font-medium text-white bg-[#BDBABA24] hover:bg-opacity-80 transition-colors rounded !leading-[25px]"
                    >
                      <span className="normal-case font-[600]">{item.question}</span>
                      {openIndex === index ? <MdExpandLess className="w-5 h-5 text-white" /> : <MdExpandMore className="w-5 h-5 text-white" />}
                    </Disclosure.Button>
                    <Disclosure.Panel className={`px-4 pb-4 pt-2 text-white ${openIndex === index ? "" : "hidden"}`}>
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
              const globalIndex = index + half;
              return (
                <Disclosure key={item.id} as="div" className="mb-4 rounded shadow">
                  {() => (
                    <>
                      <Disclosure.Button
                        id={item.id}
                        onClick={() => handleToggle(globalIndex, item.id)}
                        className="flex justify-between items-center w-full px-6 py-3 text-left font-medium text-white bg-[#BDBABA24] hover:bg-opacity-80 transition-colors rounded !leading-[25px]"
                      >
                        <span className="normal-case font-[600]">{item.question}</span>
                        {openIndex === globalIndex ? <MdExpandLess className="w-5 h-5 text-white" /> : <MdExpandMore className="w-5 h-5 text-white" />}
                      </Disclosure.Button>
                      <Disclosure.Panel className={`px-4 pb-4 pt-2 text-white ${openIndex === globalIndex ? "" : "hidden"}`}>
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
