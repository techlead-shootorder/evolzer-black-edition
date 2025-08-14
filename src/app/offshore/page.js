
import React from 'react'
import Hero from './Hero';
import Pricing from './Pricing';
import FaqSection from './FaqSection';
import Client from '@/components/client/Client';
import Form from './Form';

export async function generateMetadata() {
  return {
    title: "About Evolzer - Custom App, Web, AI & Software Development Experts",
    description:
      "Discover Evolzer, a trusted name in custom app development, web development & AI solutions. Learn about our expertise & how we drive digital transformation!",
  };
}

const Page = () => {

  return (
    <div>
      <Hero/>
      <Pricing/>
      <Client />
      {/* <Form/> */}
      {/* <OurPartners/> */}
      <FaqSection/>
    </div>
  );
};

export default Page;
