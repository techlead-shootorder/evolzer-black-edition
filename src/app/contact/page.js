import Contact from "@/components/contact-info/Contact";
import GoogleMap from "@/components/GoogleMap/GoogleMap";
import Banner from "@/components/services-components/Banner";
import React from "react";



// Generate Metadata for SEO
export async function generateMetadata() {
  return {
    title: "Contact Evolzer - App, Web & Software Development services",
    description:
      "Get in touch with Evolzer for expert custom app development, web development & AI services. Let’s discuss your project needs today! Contact us now!",
  };
}

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
