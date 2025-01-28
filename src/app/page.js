import React, { Suspense, lazy } from "react";

// Lazy load components
const AboutUsContent = lazy(() => import("@/components/about-us/AboutUsContent"));
const HomePage = lazy(() => import("@/components/banner/HomePage"));
const CaseStudyPage = lazy(() => import("@/components/case-studies/CaseStudyPage"));
const Client = lazy(() => import("@/components/client/Client"));
const Discover = lazy(() => import("@/components/discover/Discover"));
const FeaturedService = lazy(() => import("@/components/FeaturedService/FeaturedService"));
const Industries = lazy(() => import("@/components/industries/Industries"));
const NewsletterStyleTwo = lazy(() => import("@/components/newsletter/NewsLetter"));
const Statistics = lazy(() => import("@/components/Stats/Statistics"));

// Fallback loader component
const Loader = () => <div></div>;

export default function Home() {
  return (
    <>
      {/* Suspense boundaries for critical sections */}
      <Suspense fallback={<Loader />}>
        <HomePage />
      </Suspense>
      
      <Suspense fallback={<Loader />}>
        <Statistics />
      </Suspense>

      {/* Lazy load AboutUsContent after some interaction or scroll */}
      <Suspense fallback={<Loader />}>
        <AboutUsContent />
      </Suspense>

      {/* Features that can be lazy-loaded later */}
      <Suspense fallback={<Loader />}>
        <FeaturedService />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Discover />
      </Suspense>

      {/* Load non-essential components later or on demand */}
      <Suspense fallback={<Loader />}>
        <Industries />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <CaseStudyPage />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <NewsletterStyleTwo />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Client />
      </Suspense>
    </>
  );
}
