import { BiSolidSend } from "react-icons/bi";

const tailwindStyles = {
  listItem: "mb-4", // Adds bottom margin to each list item for spacing
};

export const aboutUs = {
  // Default content for pages not explicitly defined
  default: {
    heading: "Our Expert Services",
    subheading: (
      <>
        At Evolzer, we bring you industry-leading services to enhance your
        digital presence. Here&apos;s what we offer:
        <ul className="mt-3">
          <li className={tailwindStyles.listItem}>
            <strong>Tailored Solutions:</strong> Custom strategies designed to
            meet your unique business needs.
          </li>
          <li className={tailwindStyles.listItem}>
            <strong>Seamless Experiences:</strong> A focus on user-centric
            design to maximize engagement and satisfaction.
          </li>
          <li className={tailwindStyles.listItem}>
            <strong>Ongoing Support:</strong> Dedicated support to ensure
            long-term success and growth for your business.
          </li>
        </ul>
      </>
    ),
    image: "/images/services-details-image/web-development.jpg",
  },

  // Shopify service content
  shopify: {
    heading: "",
    subheading: (
      <>
        At Evolzer, we specialize in building Shopify stores that drive results
        and enhance your e-commerce success. Here&apos;s what we offer:
        <ul className="mt-3">
          <li className={tailwindStyles.listItem}>
            <strong>Custom Shopify Solutions:</strong> Tailor-made online stores
            designed to fit your brand and business needs.
          </li>
          <li className={tailwindStyles.listItem}>
            <strong>Optimized for Conversions:</strong> Attract and convert more
            customers with a design that focuses on user experience and sales
            growth.
          </li>
          <li className={tailwindStyles.listItem}>
            <strong>Comprehensive Support:</strong> From setup to launch, we
            provide ongoing support to ensure your store&apos;s performance and
            growth.
          </li>
        </ul>
      </>
    ),
    image: "/images/services-details-image/shopify.webp",
  },

  // Web development service content
  "web-development": {
    heading:
      "Elevate your online presence with our professional web development.",
    subheading: (
      <>
        <ul>
          <li className={tailwindStyles.listItem}>
            At Evolzer, we&apos;ve got you covered when it comes to web
            development. Whether you are a start-up or an established
            organization, we are here to make your ideas into reality. Our team
            of talented designers and developers create responsive and custom
            web applications, ensuring that your website not only performs well
            but is also user-friendly. We stay up-to-date with the latest
            technologies and best industry practices to ensure your website
            stands out in the competitive digital landscape.
          </li>
        </ul>
      </>
    ),
    image: "/images/services-details-image/web-development.jpg",
  },

  // Additional services content (mobile-application, software-development, etc.)
  "mobile-application": {
    heading: "Creating Apps That Drive Success",
    subheading: (
      <>
        <ul>
          <li className={tailwindStyles.listItem}>
            At Evolzer, we are dedicated to turning your app visions into
            reality. With a passion for excellence and innovation, we offer you
            comprehensive mobile development services tailored to your unique
            needs. What sets us apart is our comprehensive mobile app
            development approach. From conceptualization to development to
            deployment to post-launch support, we pay close attention to every
            single detail along the way. Our development process is agile,
            allowing continuous feedback and iteration making sure that the
            final product aligns perfectly with your business goals. Our
            commitment to top-notch quality and excellence ensures that your app
            is reliable, scalable, and customer-centric.
          </li>
        </ul>
      </>
    ),
    image: "/images/services-details-image/mobile-application.jpg",
  },

  "software-development": {
    heading: "Building software that drives business success.",
    subheading: (
      <>
        <ul>
          <li className={tailwindStyles.listItem}>
            At Evolzer, we specialize in creating cutting-edge mobile and web
            applications that are customized to meet your business needs. Our
            comprehensive app development services cover everything, right from
            initial concept design to deployment and ongoing maintenance. We are
            dedicated to transforming your ideas into secure, scalable, and
            user-friendly applications that will help your business grow.
          </li>
          <li className={tailwindStyles.listItem}>
            We offer consulting in application development and software
            configuration management while also employing practices in agile
            methodology, source control, continuous delivery, variance analysis,
            and more.
          </li>
        </ul>
      </>
    ),
    image: "/images/services-details-image/software-development.jpg",
  },
  "sap-application": {
    heading: "Boost your business with optimized SAP solutions.",
    subheading: (
      <>
        <ul>
          <li className={tailwindStyles.listItem}>
            It is essential to harness modern technological tools as the
            business landscape changes quickly and dynamically. SAP application
            services allow you to simplify processes, increase the efficiency of
            business interactions, and encourage innovations. We at Evolzer,
            offer you the highest quality SAP application consulting with a
            focus on the specific demands of your organization.
          </li>
          <li className={tailwindStyles.listItem}>
            SAP solutions help you manage opting, automating, and integrating
            some of the most central business processes to minimize effort and
            possibilities of errors. SAP services combine numerous operational
            processes to minimize the number of repetitive functions. This
            generates better productivity and increased velocity to deliver
            value and adjust to market needs more effectively.
          </li>
        </ul>
      </>
    ),
    image: "/images/services-details-image/sap.jpg",
  },
  "sale-force": {
    heading: " Transform your business with our expert Salesforce solutions.",
    subheading: (
      <>
        <ul>
          <li className={tailwindStyles.listItem}>
            In today&apos;s competitive environment, practical tools for
            organizing customer work, cooperating with partners, and simplifying
            business processes are critical. Salesforce is a worldwide CRM
            system that can optimize and transform your business operations and
            customer engagement. For your Salesforce management needs at
            Evolzer, we provide integrated Salesforce services across the
            business.
          </li>
          <li className={tailwindStyles.listItem}>
            With Salesforce, you can better record and understand consumers
            feedback. Access to detailed customer histories helps you to achieve
            more personalized communication, leading to excellent service and
            better customer relationships.
          </li>
        </ul>
      </>
    ),
    image: "/images/services-details-image/salesforce-1.jpg",
  },
  hubspot: {
    heading: "Enhance your marketing and sales with HubSpot solutions.",
    subheading: (
      <>
        <p>
          Customer relationships, effective management, and efficient working
          are key factors determining success in the present era. HubSpot, a
          leading inbound offerings provider, includes an inbound marketing,
          sales, and service platform to help you improve your marketing,
          organize your sales, and deliver great customer service.
        </p>
        <ul
          style={{
            marginTop: "15px",
            lineHeight: "1.8",
            listStyleType: "none",
          }}
        >
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                marginRight: "8px",
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Tailored HubSpot Implementation
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                marginRight: "8px",
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Maximizing CRM Value
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                marginRight: "8px",
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Lead Generation Enhancement
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                marginRight: "8px",
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Streamlining Sales Processes
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                marginRight: "8px",
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Comprehensive Data Integration
          </li>
        </ul>
      </>
    ),
    image: "/images/services-details-image/hubspot-1.jpg",
  },
  "data-annotation": {
    heading: "Unlock AI’s full potential with precise data annotation.",
    subheading: (
      <>
        <ul>
          <li className={tailwindStyles.listItem}>
            At Evolzer, we provide comprehensive data annotation services that
            ensure high-quality, precise labeling of raw data to empower your
            AI/ML models. Our expert team enhances model accuracy and
            performance, driving smarter decision-making and advanced automation
            across various industries.
          </li>
          <br />
          We are responsible for:
        </ul>
        <ul
          style={{
            marginTop: "15px",
            lineHeight: "1.8",
            listStyleType: "none",
          }}
        >
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                marginRight: "8px",
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Comprehensive Data Annotation
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                marginRight: "8px",
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Enhanced Model Accuracy
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                marginRight: "8px",
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Industry-Specific Applications
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                marginRight: "8px",
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Unlocking AI Potential
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                marginRight: "8px",
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Unlocking AI Potential
          </li>
        </ul>
      </>
    ),
    image: "/images/tools/data-annotation/data-annotation-section.jpg",
  },
  "data-engineering": {
    heading: "Fast, reliable data engineering to power your business.",
    subheading: (
      <>
        <ul>
          <li className={tailwindStyles.listItem}>
            We at Evolzer, do data engineering by way of designing and
            implementing strong, expandable architectures which can smoothly
            merge different inputs. We come up with end-to-end data pipelines
            through ETL or ELT techniques making sure that the process is as
            optimal as possible. In our approach, the quality of data is a
            priority and we perform many validation checks as well as enrichment
            processes so that the information is precise, reliable, and ready
            for analysis; to provide real-time insights based on it. In addition
            to that, we apply stringent measures concerning compliance and
            security when dealing with data governance; thus, keeping
            organizations afloat. We also employ modern tools together with
            cloud-based solutions to bring you solutions efficient enough to
            meet the needs of your business strategy while encouraging
            decision-making based on big data analytics.
          </li>
        </ul>
      </>
    ),
    image: "/images/tools/data-engineering/data-engineering-section.jpg",
  },
  "data-management": {
    heading: "Manage and streamline your data efficiently.",
    subheading: (
      <>
        <ul>
          <li className={tailwindStyles.listItem}>
            Evolzer serves you through data management services offering a
            holistic approach aimed at ensuring that your information is
            accurate, safe, and easily accessible. To begin with, we establish
            tailored data strategies that fit your company objectives; this is
            normally followed by seamless integration of data from different
            sources into one system.
            <br />
            We are responsible for:{" "}
          </li>
        </ul>
        <ul
          style={{
            marginTop: "15px",
            lineHeight: "1.8",
            listStyleType: "none",
          }}
        >
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                marginRight: "8px",
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Data governance activities
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                marginRight: "8px",
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Quality management{" "}
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                marginRight: "8px",
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Safeguard information systems
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                marginRight: "8px",
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Master Data Management
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                marginRight: "8px",
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Facilitate sound decision-making
          </li>
        </ul>
      </>
    ),
    image: "/images/tools/data-management/section.jpg",
  },
  "generative-ai-services": {
    heading: "Unlock new possibilities with generative AI.",
    subheading: (
      <>
        <ul>
          <li className={tailwindStyles.listItem}>
            Evolzer provides generative AI services tailoring AI solutions that
            encourage creativity, automation, and innovation in various areas.
            We use cutting-edge generative models such as GPT and GANs to
            produce custom content variables, smart chatbots, and auto-design
            solutions that suit your business.
            <br />
            We are responsible for:
          </li>
        </ul>
        <ul
          style={{
            marginTop: "15px",
            lineHeight: "1.8",
            listStyleType: "none",
          }}
        >
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Creating scalable and secure AI models
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Transforming operations
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Producing synthetic data
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Seamless integration of AI technologies
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Harness generative AI
          </li>
        </ul>
      </>
    ),
    image: "/images/tools/generative-ai/section.jpg",
  },
  "enterprise-ai-services": {
    heading: "Unlock new possibilities with Enterprise AI.",
    subheading: (
      <>
        <ul>
          <li className={tailwindStyles.listItem}>
            Evolzer provides enterprise AI solutions using AI approaches that
            align strategically with your organization&apos;s objectives to
            achieve innovation and operational efficiency. First, we meet up for
            a detailed consultation to recognize the areas where AI can help the
            most and then we develop custom AI models, no matter if it&apos;s
            related to predictive analytics, automation, or intelligent
            decision-making.
            <br />
            We are responsible for:
          </li>
        </ul>
        <ul
          style={{
            marginTop: "15px",
            lineHeight: "1.8",
            listStyleType: "none",
          }}
        >
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Developing and deploying AI models
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Seamless integration
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Ensuring scalability
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Maintaining compliance
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Full AI management
          </li>
        </ul>
      </>
    ),
    image: "/images/tools/enterprise-ai/section.jpg",
  },
  "data-modernization-services": {
    heading: "Unlock new possibilities with Enterprise AI.",
    subheading: (
      <>
        <ul>
          <li className={tailwindStyles.listItem}>
            We, at Evolzer, offer data modernization services by turning legacy
            systems into modern, cloud-native, and adaptable platforms. We
            follow a robust approach that starts with the strategic evaluation
            of your existing infrastructure and guarantees a smooth migration to
            advanced data environments.
          </li>
        </ul>
        <ul
          style={{
            marginTop: "15px",
            lineHeight: "1.8",
            listStyleType: "none",
          }}
        >
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Utilizing contemporary tools and cloud platforms
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Enhanced agility
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Achieving cost efficiency
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Preparing for scalability
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Driving business development
          </li>
        </ul>
      </>
    ),
    image: "/images/tools/data-modernization/section.jpg",
  },
  "custom-app-development": {
    heading: "Professional Custom App Development Help Your Business",
    subheading: (
      <>
        <ul
          style={{
            marginTop: "15px",
            lineHeight: "1.8",
            listStyleType: "none",
          }}
        >
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                color: "#f15a29",
                fontSize: "16px",
              }}
            />{" "}
            Scalability : Future-proof your business with apps designed to grow
            with you.
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            <b>Efficiency </b> : Streamline operations and improve productivity.
          </li>

          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Enhanced User Experience: Engage customers with seamless and
            intuitive designs.
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Competitive Edge: Stand out with a custom solution tailored to your
            unique needs.
          </li>
        </ul>
      </>
    ),
    image: "/images/tools/data-modernization/section.jpg",
  },
  "ui-and-ux": {
    heading: "Transforming Digital Experiences with expert UI/UX Services",
    subheading: (
      <>
        <ul
          style={{
            marginTop: "15px",
            lineHeight: "1.8",
            listStyleType: "none",
          }}
        >
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                color: "#f15a29",
                fontSize: "16px",
              }}
            />{" "}
            User-Centric Design : Seamlessly designed interfaces that enhance usability and engagement.
          </li>
          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Adaptive & Scalable Solutions  : Custom UI/UX strategies that evolve with your business needs and technology trends.
          </li>

          <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
           Performance-Driven Experiences : Optimized designs ensuring seamless navigation, faster load times, and higher conversions.
          </li>
          {/* <li className="flex items-center gap-2">
            <BiSolidSend
              style={{
                color: "#f15a29",
                fontSize: "20px",
              }}
            />{" "}
            Competitive Edge: Stand out with a custom solution tailored to your
            unique needs.
          </li> */}
        </ul>
      </>
    ),
    image: "/images/tools/ui-and-ux/Transforming-digital.jpg",
  },
};
