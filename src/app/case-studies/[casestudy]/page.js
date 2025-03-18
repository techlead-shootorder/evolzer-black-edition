// src/app/case-studies/[casestudy]/page.js

import Banner from "@/components/case-studies/Banner";
import { caseStudyData } from "@/utils/case-studies";
import { notFound } from "next/navigation";
import { titleDescription } from "@/utils/TitleDesBanner";

// Define static paths using `generateStaticParams`
export async function generateStaticParams() {
  if (!caseStudyData) {
    return [];
  }

  return Object.keys(caseStudyData).map((id) => ({ casestudy: id }));
}

const CaseStudyPage = ({ params }) => {
  // Access the specific case study based on the URL parameter
  const caseStudy = caseStudyData ? caseStudyData[params.casestudy] : null;

  if (!caseStudy) {
    notFound();
  }

  const currentTitleDesc = titleDescription[params.casestudy] || {
    title: "Default Title",
    banner: "/images/default-banner.jpg", // Fallback values
  };
 
  const {
    heroSection: { title, description, mainImage },
    idea,
    solution,
    fullStorySection,
    overviewSection: { overview, location, industries, services, technologies },
    coreFeaturesSection: { features: userProfileFeatures, image },
    challengesAndInnovationsSection: { items: challengesAndInnovations },
    resultsSection: { results },
  } = caseStudy;

  return (
    <>
      <Banner pageTitle={currentTitleDesc.title} banner={currentTitleDesc.banner}/>
      <div className="casestudyNew">
        <div className="relative  casestudyNew__hero">
          {/* Hero Section */}
          <div className="container mx-auto py-10 px-4 caseStudyHero">
            <div className="flex flex-col xl:flex-row gap-10 ">
              <div className="flex-1">
                <h1 className="caseStudyHero__title ">{title}</h1>
                <p className="caseStudyHero__description text-white">{description}</p>
              </div>
              <div className="caseStudyHero__gallery flex-1 flex justify-center items-center">
                <img
                  className="rounded-md"
                  src={mainImage.src}
                  alt={mainImage.alt}
                  width={800}
                  height={400}
                  layout="responsive" // Or set layout="fixed" if you prefer
                  unoptimized // Use this if the image is external or dynamic
                />
                <div className="caseStudyHero__slider slide-1 mt-4">
                  <img
                    className="caseStudyHero__slider__video video show"
                    src="/images/case-study/Chef-Havn.webp"
                    alt="Video Image"
                    placeholder="blurred"
                    layout="constrained"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Case Study Overview */}
          {/* Case Study Overview */}
          <div className="container caseStudyOverview">
            <div className="grid gap-12 xl:grid-cols-12 caseStudyOverview__row">
              {" "}
              {/* Changed to 12-column grid */}
              {/* Overview Section */}
              <div className="col-span-8">
                <h2 className="caseStudyOverview__subtitle subtitle text-3xl font-semibold text-gray-800 mb-4">
                  Overview
                </h2>
                <div
                  className="section-title "
                  style={{ textAlign: "left", marginBottom: "20px" }}
                >
                  <h2> The Client</h2>
                </div>
                <p className="text-white">{overview}</p>
              </div>
              {/* Details Section */}
              <div className="bg-gray-50 shadow-lg rounded-lg p-8 col-span-4 space-y-2">
                {" "}
                {/* Reduced padding */}
                <div className="">
                  <span className="">Location:</span>
                  <div>{location}</div>
                </div>
                <div className="">
                  <span className="">Industries:</span>
                  <div>{industries.join(", ")}</div>
                </div>
                <div className="">
                  <span className="">Services:</span>
                  <div>
                    {services.map((service) => {
                      return (
                        <div href={service.link} key={service}>
                          {service.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="">
                  <span className="">Technologies:</span>
                  <div>
                    {technologies.map((technology) => {
                      return (
                        <div href={technology.link} key={technology}>
                          {technology.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="caseStudyPlans">
            <div className="container mx-auto px-4">
              <div className="caseStudyPlans__row flex flex-wrap">
                <div className="w-full lg:w-1/3 caseStudyPlans__title font-bold">
                  Project Idea
                </div>
                <div className="w-full lg:w-2/3 agency-about-contents">
                  <p>{idea}</p>
                </div>
              </div>
              <div className="caseStudyPlans__row flex flex-wrap">
                <div className="w-full lg:w-1/3 caseStudyPlans__title font-bold">
                  Solution
                </div>
                <div className="w-full lg:w-2/3 agency-about-contents text-white">
                  {solution}
                </div>
              </div>
            </div>
          </div>

          {/* User Profile Features */}
          <div className="container caseStudyCoreFeatures mx-auto my-10 px-4 ptb-80">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 pr-4">
                <div className="caseStudyCoreFeatures__title titled">
                  <h2 className="text-3xl font-semibold  mb-6">
                    Core Features
                  </h2>
                </div>
                <div className="caseStudyCoreFeatures__content content">
                  <ul className="list-disc pl-5 space-y-4">
                    {userProfileFeatures.map((feature, index) => (
                      <li key={index}>
                        <h4
                          className="text-xl font-semibold"
                          style={{ fontWeight: 400 }}
                        >
                          {feature.title}
                        </h4>
                        <p className="text-white">{feature.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 caseStudyCoreFeatures__video">
                <img
                  className="object-cover w-full h-full" // Ensures the image covers the space
                  src={image.src} // Update with your image path
                  alt="macbook background Web and Mobile Solutions For HR Management on Construction Sites"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Challenges and Innovations */}
          {/* Full Story and Challenges and Innovations */}
          <div className="container caseStudySolution ptb-80">
            <div className="row caseStudySolution__row">
              <div className="col-lg-12">
                <h3 className="caseStudySolution__subtitle subtitle">
                  Full Story
                </h3>
                <h3 className="caseStudySolution__title title">
                  {fullStorySection.title}
                </h3>
                <div className="caseStudySolution__content content">
                  <p>
                    <span className="font-normal text-white">
                      {fullStorySection.description}
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-lg-12 caseStudySolution__photo">
                <img
                  width="2048"
                  src={fullStorySection.image.src}
                  className="photo text-center"
                  alt="Case Study Solution second Photo"
                  data-lazy-src="../../images/case-study/GSB Phone.webp"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-12">
                <div className="caseStudySolution__contentBottom content">
                  <h2 className="mb-3">Challenges and Innovations</h2>
                  <ul className="space-y-3">
                    {challengesAndInnovations.map((item, index) => (
                      <li key={index}>
                        <p>
                          <span className="font-semibold text-white">
                            Challenge:
                          </span>{" "}
                          {item.challenge}
                        </p>
                        <p>
                          <span className="font-semibold text-white ">
                            Solution:
                          </span>{" "}
                          {item.solution}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}

          <div className="caseStudyResults">
            <div className="container mx-auto px-4">
              <div className="caseStudyResults__row">
                <div className="w-full">
                  <h3 className="caseStudyResults__title text-3xl font-semibold mb-4">
                    Results
                  </h3>
                  <ul className="caseStudyResults__lists list-disc pl-5 space-y-2">
                    {/* Map through the results array */}
                    {results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyPage;
