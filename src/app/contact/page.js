import Contact from "@/components/contact-info/Contact";
import GoogleMap from "@/components/GoogleMap/GoogleMap";
import Banner from "@/components/services-components/Banner";
import React from "react";

const page = () => {
  return (
    <>
      <Banner
        pageTitle="Contact Us"
        banner="/images/banner-image/contact-us.jpg"
        pagesubtitle="Leading digital transformation with top-tier solutions in app development, data analytics, software, DevOps, UI/UX, AI, and machine learning."
        bg="bg-black"
        className="!h-[540px] !w-[1920px] !max-w-full !mx-auto" // Tailwind for responsive scaling
      />
      <Contact/>
      <GoogleMap/>
    </>
  );
};

export default page;
