// app/industry/[industry]/page.js

import CaseStudyPage from "@/components/case-studies/CaseStudyPage";
import AboutIndustry from "@/components/industries/AboutIndustry";
import Banner from "@/components/industries/Banner";
import ServicesIndustry from "@/components/industries/ServicesIndustry";
import Faqs from "@/components/services-components/Faqs";
import { titleDescriptionIndustry } from "@/utils/TitleDesBanner";
import Image from "next/image";
import { notFound } from "next/navigation";

// List of valid industry pages
const validIndustries = [
  "agriculture",
  "automobile",
  "e-commerce-industry",
  "education",
  "fintech",
  "fmcg",
  "healthcare-industry",
  "hospitality",
  "manufacturing",
  "real-estate",
  "technology",
  "travel-and-tourism",
];

// This function generates the static params for valid industries
export async function generateStaticParams() {
  return validIndustries.map((industry) => ({ industry }));
}

const IndustryPage = ({ params }) => {
  const { industry } = params;

  // Check if the industry is valid
  if (!validIndustries.includes(industry)) {
    notFound(); // Trigger 404 page if industry is invalid
  }
  const titleDesc = titleDescriptionIndustry[industry] || [];
  console.log(titleDesc.heading);
  return (
    <div>
      <Banner pageTitle={titleDesc.title} banner={titleDesc.banner} />
      {/* Render industry-specific content */}
      <AboutIndustry
        heading={titleDesc.heading}
        challenges={titleDesc.business_challenge_data}
      />
      <ServicesIndustry
        service_heading={titleDesc.benefits_heading}
        benefits={titleDesc.benefits}
      />
      <div className="container mx-auto ptb-80">
        <h2 className="text-left mb-4 text-2xl font-bold">
          {titleDesc.faq_section_heading}
        </h2>
        <p className="pb-3 pt-3">{titleDesc.faq_section_paragraph}</p>
        <div className="grid grid-cols-12 gap-4 items-stretch">
          <div className="col-span-6 h-full">
            <Faqs faq={titleDesc.faqs} bg="bg-white" textLeft="text-left" />
          </div>
          <div className="col-span-6 h-full mt-4 flex items-center">
            <div className="w-full h-full relative">
              <Image
                src={titleDesc.faq_section_image}
                alt="industries images"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-tr-[45px] rounded-bl-[45px]"
              />
            </div>
          </div>
        </div>
      </div>
      <CaseStudyPage />
    </div>
  );
};

export default IndustryPage;
