import AboutUsValues from "@/components/about-us/AboutUsValues";
import Banner from "@/components/services-components/Banner";
import Team from "@/components/team/Team";
import { titleDescription } from "@/utils/TitleDesBanner";
import Image from "next/image";
import React from "react";

export async function generateMetadata() {
  return {
    title: "About Evolzer - Custom App, Web, AI & Software Development Experts",
    description:
      "Discover Evolzer, a trusted name in custom app development, web development & AI solutions. Learn about our expertise & how we drive digital transformation!",
  };
}

const Page = () => {
  const bannerInfo = titleDescription["about-us"] || [];
  return (
    <>
      <Banner
        pageTitle={bannerInfo.title}
        banner={bannerInfo.banner}
        pagesubtitle={bannerInfo.description}
      />
      <div className="about-area pt-20 pb-20 bg-black px-2">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-center !mb-3  ">
            <div className="w-full lg:w-1/2 relative h-80 ">
              {" "}
              {/* Add a height here */}
              <div className="ml-about-img">
                <Image
                  src="/images/about-2.png"
                  alt="About Us"
                  width={500}
                  height={350}
                  className="object-cover" // Ensure the image covers the container
                  style={{ borderRadius: "0px 50px 0px 50px" }}
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 pt-6 md:py-12 lg:py-0 h-80">
              <div className="ml-about-content !px-2">
                <h2 className="!mb-4 text-2xl  font-semibold text-white">
                  Redefining Possibilities with Technology
                </h2>
                <p className="text-white">
                  Welcome to Evolzer, where technology and innovation go hand in
                  hand. We deliver services that empower your business to thrive
                  in the digital landscape. Be it optimizing your IT
                  infrastructure, crafting innovative web applications, or
                  leveraging the power of your data, our tech enthusiasts are
                  here to turn your visions into reality.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="about-inner-area">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-[#BDBABA24] rounded-xl">
                <div className="about-text">
                  <h3 className="text-xl font-bold">Our History</h3>
                  <p className="text-white">
                    Originally, a digital marketing agency, we identified the
                    gap and the critical need for reliable and top-notch
                    technology services, hence Evolzer was born.
                  </p>
                </div>
              </div>
              <div className="p-4 bg-[#BDBABA24] rounded-xl">
                <div className="about-text">
                  <h3 className="text-xl font-bold">Our Mission</h3>
                  <p className="text-white">
                    Our mission is to deliver outstanding technology services
                    that provide continuous value to our clients.
                  </p>
                </div>
              </div>
              <div className="p-4 bg-[#BDBABA24] rounded-xl">
                <div className="about-text">
                  <h3 className="text-xl font-bold">Our Vision</h3>
                  <p className="text-white">
                    Our vision is to be a leading technology services provider
                    that unlocks new possibilities and drives our clients
                    success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutUsValues />
      <Team />
    </>
  );
};

export default Page;
