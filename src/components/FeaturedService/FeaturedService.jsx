import React from "react";
import {
  FiCode,
  FiTool,
  FiDatabase,
  FiLayers,
  FiServer,
  FiLayout,
} from "react-icons/fi";

const FeaturedService = () => {
  return (
    <div className="repair-services-area py-10 md:py-20">
      <div className="container mx-auto">
        <div className="section-title text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Our Featured Services that We Provide
          </h2>
          <p className="mt-2 tracking-normal leading-relaxed text-white">
            Technology, like art, is a soaring exercise of the human
            imagination.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-items-center">
          <div className="single-repair-services bg1 p-4 rounded-lg text-left">
            <div className="icon mb-2 flex items-center justify-center">
              <FiCode className="w-10 h-10" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-1 text-black">
              Application Development
            </h3>
            <p className="text-sm md:text-base">
              Cutting-edge application offerings with seamless integration,
              robust security, and support, to ensure your business stays ahead.
            </p>
          </div>

          <div className="single-repair-services bg2 p-4 rounded-lg text-left">
            <div className="icon mb-2 flex items-center justify-center">
              <FiTool className="w-10 h-10" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-1 text-black">
              Implementation
            </h3>
            <p className="text-sm md:text-base">
              Implementation services to effectively integrate and deploy
              advanced solutions tailored to your business needs.
            </p>
          </div>

          <div className="single-repair-services bg3 p-4 rounded-lg text-left">
            <div className="icon mb-2 flex items-center justify-center">
              <FiDatabase className="w-10 h-10" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-1 text-black">
              Intelligent Data Services
            </h3>
            <p className="text-sm md:text-base">
              Data Services, with a focus on precision and innovation to uncover
              valuable insights, transforming raw data into actionable
              intelligence.
            </p>
          </div>

          <div className="single-repair-services bg4 p-4 rounded-lg text-left">
            <div className="icon mb-2 flex items-center justify-center">
              <FiLayers className="w-10 h-10" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-1 text-black">
              AI/ML
            </h3>
            <p className="text-sm md:text-base">
              Utilizing AI and ML to transform complex data sets into applicable
              insights, enabling you to make informed decisions and implement
              innovative solutions.
            </p>
          </div>
          <div className="single-repair-services bg5 p-4 rounded-lg text-left">
            <div className="icon mb-2 flex items-center justify-center">
              <FiServer className="w-10 h-10" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-1 text-black">
              Cloud Services
            </h3>
            <p className="text-sm md:text-base">
              Comprehensive cloud services from migration and deployment to
              ongoing management to enhance your business operations
              efficiently.
            </p>
          </div>
          <div className="single-repair-services bg6 p-4 rounded-lg text-left">
            <div className="icon mb-2 flex items-center justify-center">
              <FiLayout className="w-10 h-10" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-1 text-black">
              UX/UI
            </h3>
            <p className="text-sm md:text-base">
              Focusing on user research, prototyping, and testing to ensure
              smooth navigation and attractive visual design to enhance user
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedService;
