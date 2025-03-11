import React, { lazy, Suspense, useMemo } from "react";
import { notFound } from "next/navigation";
import { servicesData } from "@/utils/services";
import { titleDescription } from "@/utils/TitleDesBanner";
import { getCategoryDataByType } from "@/utils/techstack";
import Statistics from "@/components/Stats/Statistics";
import { faqs } from "@/utils/faqs";
import { aboutUs } from "@/utils/aboutUs";

// Lazy load components
const CaseStudyPage = lazy(() =>
  import("@/components/case-studies/CaseStudyPage")
);
const Client = lazy(() => import("@/components/client/Client"));
const IndustriesCater = lazy(() =>
  import("@/components/industries/Industries")
);
const NewsletterStyleTwo = lazy(() =>
  import("@/components/newsletter/NewsLetter")
);
const AboutService = lazy(() =>
  import("@/components/services-components/AboutService")
);
const Banner = lazy(() => import("@/components/services-components/Banner"));
const Faqs = lazy(() => import("@/components/services-components/Faqs"));
const Process = lazy(() => import("@/components/services-components/Process"));
const TechStackAndTools = lazy(() =>
  import("@/components/services-components/TechStackAndTools")
);
const WhatWeDo = lazy(() =>
  import("@/components/services-components/WhatWeDo")
);

// Define the list of valid services
const services = [
  "app-development",
  "mobile-application",
  "web-development",
  "software-development",
  "implementation",
  "sap-application",
  "sale-force",
  "hubspot",
  "intelligent-data",
  "data-annotation",
  "data-engineering",
  "data-management",
  "generative-ai-services",
  "enterprise-ai-services",
  "data-modernization-services",
];

// This function generates static paths for the service pages
export async function generateStaticParams() {
  return services.map((service) => ({ service }));
}

export async function generateMetadata({ params }) {
  const { service } = params;

  // Fetch title and description based on service
  const bannerInfo = titleDescription[service] || {};

  return {
    title: bannerInfo.metaTitle || "Default Service Title",
    description: bannerInfo.metaDescription || "Default Service Description",
  };
}

// The page component for each service
export default function ServicePage({ params }) {
  const { service } = params;

  // Memoize the service data retrieval and the banner info
  const serviceData = useMemo(() => servicesData[service] || [], [service]);
  const bannerInfo = useMemo(() => titleDescription[service] || [], [service]);
  const faqsData = useMemo(() => faqs[service] || [], [service]);
  const aboutUsContent = useMemo(
    () => aboutUs[service] || aboutUs.default,
    [service]
  );

  // Memoize the exclusion check for performance
  const excludedServices = useMemo(
    () => [
      "implementation",
      "sap-application",
      "sale-force",
      "hubspot",
      "intelligent-data",
      "data-annotation",
      "data-engineering",
      "data-management",
      "generative-ai-services",
      "enterprise-ai-services",
      "data-modernization-services",
    ],
    []
  );

  // Check if `service` param exists
  if (!service) {
    console.log("Service not found - missing service param");
    notFound(); // Redirect to 404 page if `service` is missing
  }

  // Safely check if service exists in the services array
  const matchedService = useMemo(
    () => services.find((s) => s.toLowerCase() === service?.toLowerCase()),
    [service]
  );

  // If the service is not valid, show the 404 page
  if (!matchedService) {
    notFound(); // Use Next.js built-in notFound function
  }
  // Memoize category-specific data retrieval
  const stacks = useMemo(
    () => getCategoryDataByType(service, "stack"),
    [service]
  );
  const tools = useMemo(
    () => getCategoryDataByType(service, "tool"),
    [service]
  );
  const frameworks = useMemo(
    () => getCategoryDataByType(service, "framework"),
    [service]
  );
  const databases = useMemo(
    () => getCategoryDataByType(service, "database"),
    [service]
  );
  const platforms = useMemo(
    () => getCategoryDataByType(service, "platform"),
    [service]
  );

  return (
    <div>
      <Suspense fallback={<div></div>}>
        <Banner
          pageTitle={bannerInfo.title}
          banner={bannerInfo.banner}
          pagesubtitle={bannerInfo.description}
        />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <Statistics />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <Client />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <AboutService
          heading={aboutUsContent?.heading}
          subheading={aboutUsContent?.subheading}
          image={aboutUsContent?.image}
        />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <WhatWeDo heading="What We Do" service={serviceData} />
        <Process />
      </Suspense>
      <Suspense fallback={<div></div>}>
        {!excludedServices.includes(service) && (
          <TechStackAndTools
            stacks={stacks}
            tools={tools}
            framework={frameworks}
            database={databases}
            platform={platforms}
          />
        )}
      </Suspense>
      <Suspense fallback={<div></div>}>
        <Faqs faq={faqsData} />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <IndustriesCater bg="bg-white" />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <CaseStudyPage />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <NewsletterStyleTwo />
      </Suspense>
    </div>
  );
}
