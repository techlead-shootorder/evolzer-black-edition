import dynamic from "next/dynamic";
import { Suspense } from "react";
import AboutService from "@/components/services-components/AboutService";
import Banner from "@/components/services-components/Banner";
import { aboutUs } from "@/utils/aboutUs";
import { dataMapping } from "@/utils/process";
import { servicesData } from "@/utils/services";
import { titleDescription } from "@/utils/TitleDesBanner";
import { notFound } from "next/navigation";

// Dynamically import components to reduce initial load
const CaseStudyPage = dynamic(() => import("@/components/case-studies/CaseStudyPage"), { suspense: true });
const Client = dynamic(() => import("@/components/client/Client"), { suspense: true });
const NewsletterStyleTwo = dynamic(() => import("@/components/newsletter/NewsLetter"), { suspense: true });
const Process = dynamic(() => import("@/components/services-components/Process"), { suspense: true });
const WhatWeDo = dynamic(() => import("@/components/services-components/WhatWeDo"), { suspense: true });
const Statistics = dynamic(() => import("@/components/Stats/Statistics"), { suspense: true });
const FramerSlide = dynamic(() => import("@/components/subservice-components/FramerSlider"), { suspense: true });

// Allowed services structure to restrict service and subservice routes
const allowedServices = {
  "web-development": [
    "woocommerce",
    "shopify",
    "ruby-on-rails-services",
    "react",
    "python-services",
    "ruby",
    "angular",
    "php",
  ],
  "mobile-application": [
    "cordova",
    "flutter",
    "ionic-app-development",
    "ios",
    "android-app-development",
    "react-native",
  ],
  hubspot: [
    "hubspot-cms-implementation",
    "hubspot-managed-services",
    "hubspot-marketing-implementation",
    "hubspot-sales-implementation",
    "hubspot-services-implementation",
  ],
  "sale-force": [
    "commerce-cloud",
    "community-cloud-service",
    "marketing-cloud",
    "mulesoft-services",
    "sales-cloud",
    "sales-force-cpq",
    "service-cloud",
    "tableau",
  ],
};
export async function generateMetadata({ params }) {
  const { subservice } = params;

  // Fetch title and description based on service
  const bannerInfo = titleDescription[subservice] || {};

  return {
    title: bannerInfo.metaTitle || "Default Service Title",
    description: bannerInfo.metaDescription || "Default Service Description",
  };
}
// 
export default function SubservicePage({ params }) {
  const { service, subservice } = params; // Get the service and subservice from the URL

  // Check if the service and subservice are allowed
  const isValidSubservice = allowedServices[service]?.includes(subservice) ?? false;

  // If the subservice is not valid, show a 404 message
  if (!isValidSubservice) {
    notFound(); // Redirect to 404 page if `service` is missing
  }

  // Create a key to access subservice data
  const subserviceKey = `${subservice}`;
  const whatWeDoData = servicesData[subserviceKey] || [];
  const processData = dataMapping[subserviceKey] || [];
  const headingParagraph = titleDescription[subserviceKey] || [];
  const aboutUsContent = aboutUs[subserviceKey] || aboutUs.default;

  return (
    <>
      <Banner
        subservice={subserviceKey}
        pageTitle={headingParagraph.title}
        banner={headingParagraph.banner}
        pagesubtitle={headingParagraph.description}
      />

      {/* Lazy-load Statistics and FramerSlide for main content */}
      <Suspense fallback={<div></div>}>
        <Statistics />
      </Suspense>

      <Suspense fallback={<div></div>}>
        <FramerSlide />
      </Suspense>

      <div className="pt-28">
        {/* Lazy-load remaining components */}
        <Suspense fallback={<div></div>}>
          <Client />
        </Suspense>

        <Suspense fallback={<div></div>}>
          <AboutService
            heading={aboutUsContent.heading}
            subheading={aboutUsContent.subheading}
            image={aboutUsContent.image}
          />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <WhatWeDo service={whatWeDoData} heading="Things We Do" />
        </Suspense>

        <Suspense fallback={<div></div>}>
          <Process slide={processData.slides} />
        </Suspense>

        <Suspense fallback={<div></div>}>
          <CaseStudyPage />
        </Suspense>

        <Suspense fallback={<div></div>}>
          <NewsletterStyleTwo />
        </Suspense>
      </div>
    </>
  );
}
