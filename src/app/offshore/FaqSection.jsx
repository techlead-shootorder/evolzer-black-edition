'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Where is ShootOrder Digital Marketing Agency located?',
    answer:
      'ShootOrder is headquartered in Hyderabad, India, and serves clients across India as well as globally.',
  },
  {
    question: 'What services does ShootOrder offer?',
    answer:
      'We provide a full range of digital marketing services including SEO, PPC (Google Ads), Social Media Marketing, Content Marketing, Email Marketing, Marketing Automation, and Web/App Development.',
  },
  {
    question: 'Does ShootOrder specialize in any particular industry?',
    answer:
      'ShootOrder works with clients from diverse industries such as education, healthcare, real estate, e-commerce, SaaS, and startups. Our strategies are customized to suit each industry’s needs.',
  },
  {
    question: 'How does ShootOrder measure the success of digital campaigns?',
    answer:
      'We measure success using KPIs like website traffic, leads, conversions, ROI, cost-per-acquisition, and engagement metrics. Clients receive transparent reports and live analytics dashboards.',
  },
  {
    question: 'Can ShootOrder manage international marketing campaigns?',
    answer:
      'Yes, we have expertise in running campaigns for both Indian and global clients, managing Google, Meta, LinkedIn, and other ad platforms for international markets.',
  },
  {
    question: 'What makes ShootOrder different from other digital marketing agencies?',
    answer:
      'Since 2013, ShootOrder has been delivering ROI-driven strategies, backed by a skilled in-house team, transparent communication, and a strong track record of measurable results.',
  },
  {
    question: 'What is the minimum engagement period with ShootOrder?',
    answer:
      'Typically, we recommend a minimum of 3 months for SEO and brand growth campaigns. However, shorter ad campaigns can also be executed based on client goals.',
  },
  {
    question: 'Does ShootOrder provide customized digital marketing packages?',
    answer:
      'Yes, we design custom packages based on your business size, goals, and budget — whether it is SEO, paid advertising, or a complete digital marketing strategy.',
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
                className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${isOpen ? 'border-gray-300 shadow-sm' : 'border-gray-300'
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
