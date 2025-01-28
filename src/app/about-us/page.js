import AboutUsValues from "@/components/about-us/AboutUsValues";
import Banner from "@/components/services-components/Banner";
import Team from "@/components/team/Team";
import { titleDescription } from "@/utils/TitleDesBanner";
import Image from "next/image";
import React from "react";

const Page = () => {
  const bannerInfo = titleDescription["about-us"] || [];
  return (
    <>
      <Banner
        pageTitle={bannerInfo.title}
        banner={bannerInfo.banner}
        pagesubtitle={bannerInfo.description}
      />
      <div className="about-area pt-20 pb-20 bg-[#f9f6f6]">
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

            <div className="w-full lg:w-1/2">
              <div className="ml-about-content !px-2">
                <h2 className="!mb-4 text-2xl  font-semibold">
                  Redefining Possibilities with Technology
                </h2>
                <p>
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
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-1/3 md:w-1/2 sm:w-1/2 p-4">
                <div className="about-text">
                  <h3 className="text-xl font-bold">Our History</h3>
                  <p>
                    Originally, a digital marketing agency, we identified the
                    gap and the critical need for reliable and top-notch
                    technology services, hence Evolzer was born.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/3 md:w-1/2 sm:w-1/2 p-4">
                <div className="about-text">
                  <h3 className="text-xl font-bold">Our Mission</h3>
                  <p>
                    Our mission is to deliver outstanding technology services
                    that provide continuous value to our clients.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/3 md:w-1/2 sm:w-1/2 p-4">
                <div className="about-text">
                  <h3 className="text-xl font-bold">Our Vision</h3>
                  <p>
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
      <Team/>
    </>
  );
};

export default Page;
