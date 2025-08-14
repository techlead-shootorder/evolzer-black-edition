'use client';

import { Users, Rocket, DollarSign, Zap, MapPin, Star, Briefcase, Coins, Cpu, MapPin as LocationIcon } from 'lucide-react';
import { useState } from 'react';

const engineersPlans = [
    {
        title: 'Engineers from Tech Giants',
        description:
            'For companies looking to hire engineers from IIT (MIT of India) or leading tech giants like Google, Amazon, and Airbnb.',
        price: '$6500/month',
        rate: '$40/hr',
        idealFor: 'Leaders who prioritize academic excellence and industry-leading expertise.',
        roles: 'Software Engineers, Principal Engineers, DevSecOps, Staff Engineers, SRE & more.',
        source: 'From top tech companies like Google, Amazon, Airbnb, TripAdvisor & more.',
        icon: Star,
    },
    {
        title: 'Top Startup Engineers',
        description:
            'For fast-moving startups needing engineers who can build from scratch and thrive in high-growth environments.',
        price: '$3500/month',
        rate: '$21/hr',
        idealFor: 'Seed-stage and Series A startups needing entrepreneurial engineers who think like founders.',
        roles: 'Full-Stack Developer, Backend Developer, DevOps, QA & more.',
        source: 'From early-stage pre-Series A/B startups.',
        icon: Rocket,
    },
    {
        title: 'Budget-Friendly Engineers',
        description:
            'For startups looking for skilled engineers at an affordable price, often available from Tier-2 or Tier-3 cities.',
        price: '$2500/month',
        rate: '$15/hr',
        idealFor: 'Leaders looking to maximize budget efficiency without compromising quality.',
        roles: 'Front-End Developer, Backend Developer, QA & more.',
        source: 'From tech or service companies.',
        icon: Coins,
    },
    {
        title: 'Early Tech Adopters',
        description:
            'Preference: Engineers with expertise in AI, NLP, automation, and data science, staying ahead of emerging technologies.',
        price: '$4500/month',
        rate: '$28/hr',
        idealFor: 'Tech companies looking to integrate AI-driven features and automation.',
        roles: 'AI Engineer, ML Engineer, NLP Engineer & more.',
        source: 'From new-age startups or top tech companies.',
        icon: Cpu,
    },
    {
        title: 'India Anchor / Leadership',
        description:
            'For companies expanding to India, looking to hire their first engineering leader (VP of Engineering, Director, or Head of Engineering) to set up and scale their offshore team.',
        price: '$7500/month',
        rate: '$46/hr',
        idealFor: 'C-suite executives needing leaders who understand scalability, growth, and business impact.',
        roles: 'Engineering Manager, VP Engineering, Engineering Director, Product Manager & more.',
        source: 'From R&D or Delivery Centers of other Global Companies.',
        icon: LocationIcon,
    },
];

const marketersPlans = [
    {
        title: 'Product Manager',
        description:
            'Our experienced product managers manage the entire product development lifecycle from concept to launch, ensuring every step aligns with your business goals and market expectations.',
        price: '$5000/month',
        rate: '$31/hr',
        idealFor: 'Companies looking for strategic minds to shape product vision, lead cross-functional teams, and launch customer-focused solutions. ',
        roles: 'Product Owner, Technical Product Manager, SaaS Product Manager, Product Operations Manager & more. ',
        source: 'SaaS companies, tech startups, and mid-sized product firms',
        icon: Users,
    },
    {
        title: 'Product Marketer',
        description:
            'Experts in building strong product stories, launching go-to-market plans, and boosting adoption through focused marketing strategies',
        price: '$4500/month',
        rate: '$28/hr',
        idealFor: 'Companies looking to position products effectively, grow brand visibility, and speed up customer acquisition. .',
        roles: 'GTM Specialist, Product Marketing Strategist, Product Communications Specialist, SaaS Product Marketer & more.',
        source: 'SaaS startups, B2B tech firms, and marketing agencies',
        icon: Rocket,
    },
    {
        title: 'Product Designer',
        description:
            'Creative designers who craft intuitive, user-friendly experiences by blending design aesthetics with functionality and strong UX principles.',
        price: '$2500/month',
        rate: '$16/hr',
        idealFor: 'Teams focused on building digital products that are not just usable, but delightful, through thoughtful design, strong UX principles, and consistent visual language. ',
        roles: 'UX/UI Designer, Interaction Designer, Visual Designer, SaaS Product Designer, UX Researcher & more. ',
        source: 'SaaS companies, digital agencies, e-commerce brands, and design-first tech startups',
        icon: DollarSign,
    },
    {
        title: 'Performance Marketer',
        description:
            'Data-driven marketers focused on measurable growth through targeted campaigns, ROI optimization, and continuous performance tracking across digital channels.',
        price: '$2500/month',
        rate: '$16/hr',
        idealFor: 'Companies looking to scale user acquisition, improve conversion rates, and maximize return on ad spend through performance-based marketing. ',
        roles: 'Growth Marketer, Paid Media Specialist, PPC Manager, Performance Marketing Manager & more.',
        source: 'DTC brands, performance marketing agencies, SaaS companies, and growth-stage startups ',
        icon: Zap,
    },
    {
        title: 'SEO Specialist',
        description:
            'Experts in optimizing digital content and websites to boost organic visibility, search rankings, and long-term traffic growth. ',
        price: '$2500/month',
        rate: '$16/hr',
        idealFor: 'Businesses aiming to increase search engine presence, attract high-intent traffic, and build a sustainable inbound marketing channel. ',
        roles: 'SEO Analyst, SEO Manager, Technical SEO Specialist, Content SEO Strategist, On-Page Optimization Expert & more. ',
        source: 'SEO agencies, content-driven startups, e-commerce platforms, and digital marketing firms',
        icon: MapPin,
    },
];

export default function Pricing() {
    const [activeTab, setActiveTab] = useState('engineers');
    const plans = activeTab === 'engineers' ? engineersPlans : marketersPlans;

    return (
        <section className="bg-black py-16">
            <div className="!max-w-7xl mx-auto px-4">
                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="border border-gray-100 text-black rounded-full p-1 flex    ">
                        <button
                            className={`px-6 !rounded-full font-medium transition ${
                                activeTab === 'engineers' ? 'bg-gray-100 text-black' : 'bg-transparent text-gray-300'
                            }`}
                            onClick={() => setActiveTab('engineers')}
                        >
                            Engineers
                        </button>
                        <button
                            className={`px-6 font-medium transition !rounded-full text-black ${
                                activeTab === 'marketers' ? 'bg-gray-100' : 'bg-transparent text-gray-300'
                            }`}
                            onClick={() => setActiveTab('marketers')}
                        >
                            Marketers
                        </button>
                    </div>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {plans.map((plan, idx) => {
                        const IconComponent = plan.icon;
                        return (
                            <div
                                key={idx}
                                className="border border-dashed border-white rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col h-full bg-black"
                            >
                                <div className="flex flex-col p-4">
                                    {/* Icon */}
                                    <div className="mt-4">
                                        <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <div className="mb-4">
                                        <h3 className="font-medium text-lg text-white leading-tight h-[2.5rem] flex items-center">
                                            {plan.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <div className="mb-6">
                                        <p className="text-[14px] text-white leading-relaxed h-[8.8rem] overflow-hidden">
                                            {plan.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Pricing */}
                                <div className="mb-6 text-center bg-gray-900 p-4">
                                    <p className="text-sm text-white mb-2">
                                        Starting at{' '}
                                        <span className="bg-gray-800 font-medium px-2 py-1 rounded-full text-xs text-white">
                                            {plan.rate}
                                        </span>
                                    </p>
                                    <p className="text-2xl font-bold text-white">{plan.price}</p>
                                </div>

                                <div className="p-4 flex-grow flex flex-col">
                                    {/* Details */}
                                    <div className="flex-grow space-y-4 mb-6">
                                        <div className="text-sm">
                                            <p className="font-semibold text-white mb-2 text-xs uppercase tracking-wide">
                                                IDEAL FOR
                                            </p>
                                            <p className="text-white leading-relaxed h-[4.5rem] overflow-hidden">
                                                {plan.idealFor}
                                            </p>
                                        </div>

                                        <div className="text-sm">
                                            <p className="font-semibold text-white mb-2 text-xs uppercase tracking-wide">
                                                COMMON ROLES
                                            </p>
                                            <p className="text-white leading-relaxed h-[3rem] overflow-hidden">
                                                {plan.roles}
                                            </p>
                                        </div>

                                        <div className="text-sm">
                                            <p className="font-semibold text-white mb-2 text-xs uppercase tracking-wide">
                                                TALENT SOURCE
                                            </p>
                                            <p className="text-white leading-relaxed h-[3rem] overflow-hidden">
                                                {plan.source}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <button className="w-full bg-gray-900 text-white text-sm font-semibold py-3 rounded-lg hover:shadow-lg transition-colors duration-300 mt-auto">
                                        Hire Now
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
