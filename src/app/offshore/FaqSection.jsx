'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Are these fixed monthly fees?',
    answer:
      'Yes, these are fixed monthly fees. However, the above are simply an indication of what you should expect in terms of budget based on your preference. Most of our clients want to hire the top talents of India, and these indications are based on the recent hires made via Uplers.',
  },
  {
    question: 'What exactly is included in the monthly rate?',
    answer:
      'Your monthly rate covers the agreed talent’s services, project management support, and any included benefits or tools as specified in the contract.',
  },
  {
    question: 'Is this a one-time fee or recurring?',
    answer:
      'The monthly rate is recurring and will be billed every month during the contract period.',
  },
  {
    question: 'What\'s included in the contract management fee?',
    answer:
      'It includes admin, HR support, payment management, and compliance handling for the talent’s contract.',
  },
  {
    question: 'What’s the minimum commitment period?',
    answer:
      'Typically, the minimum engagement is 3 months, but this may vary depending on the project or role.',
  },
  {
    question: 'What happens if I\'m not satisfied with the talent?',
    answer:
      'We offer a replacement guarantee within the contract period if you’re not satisfied with the assigned talent.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10 text-white">
          Frequently Asked <span className="font-bold">Questions</span>
        </h2>
        <div className="space-y-4 border border-gray-100 bg-black p-10 rounded-[50px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${
                  isOpen ? 'border-gray-300 shadow-sm' : 'border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="normal-case w-full flex justify-between items-center text-left p-5 text-base md:text-lg font-bold text-black bg-white"
                >
                  {faq.question}
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-gray-600 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
