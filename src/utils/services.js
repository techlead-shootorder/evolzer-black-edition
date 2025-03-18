import {
  FaBell,
  FaDollarSign,
  FaHeadphones,
  FaInfo,
  FaLink,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import { FiBarChart, FiBarChart2, FiGrid, FiSettings } from "react-icons/fi";
import { MdMail } from "react-icons/md";

export const servicesData = {
  "web-development": [
    {
      imageUrl: "/images/web-services/web-con.jpg",
      card_title: "Web Consultation Services",
      card_subtitle:
        "We access your business and provide expert advice to help you make informed decisions and help you choose suitable solutions.",
    },
    {
      imageUrl: "/images/web-services/Web-design.jpg",
      card_title: "Website Design",
      card_subtitle:
        "We design the layout, user interface, visual appeal, and user experience of a website to ensure it is aesthetically pleasing, easy to navigate, and aligned with your brand’s identity.",
    },
    {
      imageUrl: "/images/web-services/front-end.jpg",
      card_title: "Front-end Development",
      card_subtitle:
        "This entails using HTML, CSS, JavaScript, and also various front-end frameworks to create visual and interactive elements on the website that the users interact with directly.",
    },
    {
      imageUrl: "/images/web-services/back-end-development.jpg",
      card_title: "Back-end Development",
      card_subtitle:
        "Using technologies such as PHP, Python, Ruby, and Node.js we work on the server-side of the website.",
    },
    {
      imageUrl: "/images/web-services/website-optimization.jpg",
      card_title: "Website Optimization",
      card_subtitle:
        "We optimize websites to enhance their performance, speed, and search engine optimization. Our tailored optimization strategies make sure your web application delivers an exceptional user experience and ranks higher in search results.",
    },
    {
      imageUrl: "/images/web-services/E-commerce.jpg",
      card_title: "E-commerce Development",
      card_subtitle:
        "We also specialize in developing captivating E-commerce solutions that help drive your sales and engage customers to uplift your business.",
    },
  ],
  "mobile-application": [
    {
      imageUrl:
        "/images/tools/mobile-application/consultation-and-strategy.jpg",
      card_title: "Consultation and Strategy",
      card_subtitle:
        "We analyze market trends, user behavior, perform competitor analysis for you, and craft a detailed plan that outlines the objectives, features, and roadmap of the app.",
    },
    {
      imageUrl: "/images/tools/mobile-application/uiux-design.jpg",
      card_title: "UI/UX Design",
      card_subtitle:
        "We create interfaces that are not only visually appealing but also easy to use. Our ultimate goal is to make the app seamless and user-friendly.",
    },
    {
      imageUrl: "/images/tools/mobile-application/native-app-development.jpg",
      card_title: "Native App Development",
      card_subtitle:
        "Be it for Android or iOS, we develop apps using the relevant technology.",
    },
    {
      imageUrl:
        "/images/tools/mobile-application/cross-platform-app-development.png",
      card_title: "Cross-Platform App Development",
      card_subtitle:
        "We develop high-performance apps that function on both Android and iOS using the latest framework.",
    },
    {
      imageUrl: "/images/tools/mobile-application/backend-development.jpg",
      card_title: "Backend Development",
      card_subtitle:
        "We create and manage back-end infrastructure that supports the app such as databases, servers, etc. We make use of cloud services for scalable and reliable back-end solutions.",
    },
    {
      imageUrl: "/images/tools/mobile-application/api-integration.jpg",
      card_title: "API Integration",
      card_subtitle:
        "We also connect the app with external sources and APIs to improve its functionality.",
    },
    {
      imageUrl:
        "/images/tools/mobile-application/quality-assurance-and-testing.webp",
      card_title: "Quality Assurance and Testing",
      card_subtitle:
        "We conduct rigorous testing for the app to make sure it functions smoothly under all conditions. We also gather user feedback to refine and improve the user experience.",
    },
    {
      imageUrl: "/images/tools/mobile-application/deployment-and-launch.png",
      card_title: "Deployment and Launch",
      card_subtitle:
        "We handle the process of preparing and submitting the app to the Google Play Store and Apple App Store and also conduct beta testing, making sure all the guidelines are met.",
    },
    {
      imageUrl: "/images/tools/mobile-application/maintenance-and-support.png",
      card_title: "Maintenance and Support",
      card_subtitle:
        "Our team keeps your app up-to-date with ongoing updates, enhancing performance and ensuring the app stays bug-free and the app performance is at its peak.",
    },
    {
      imageUrl: "/images/tools/mobile-application/marketing-and-analytics.png",
      card_title: "Marketing and Analytics",
      card_subtitle:
        "We also execute dynamic strategies to increase the downloads of your app. By implementing analytical tools, we track user behavior, engagement, and key metrics to maintain data for future updates and enhancements.",
    },
    {
      imageUrl: "/images/tools/mobile-application/security-and-compliance.webp",
      card_title: "Security and Compliance",
      card_subtitle:
        "We make sure that your app meets all industry requirements and standards like GDPR or HIPAA to keep you compliant and safe.",
    },
  ],
  shopify: [
    {
      imageUrl: "/images/tools/web-dev/shopify/shopify-store-design.jpg",
      card_title: "Shopify Store Design",
      card_subtitle:
        "Our skilled designers design a visually stunning Shopify store that reflects your brand and also makes sure your customers have a seamless shopping experience.",
    },
    {
      imageUrl: "/images/tools/web-dev/shopify/shopify-theme-developmen.jpg",
      card_title: "Shopify Theme Development",
      card_subtitle:
        "Whether you want a minimalistic or a feature-rich theme our developers create customized themes for you using HTML, CSS, and Liquid.",
    },
    {
      imageUrl: "/images/tools/web-dev/shopify/shopify-app-development.jpg",
      card_title: "Shopify App Development",
      card_subtitle:
        "From third-party integration to developing tailored features, we build apps that enhance the functionality of your store.",
    },
    {
      imageUrl: "/images/tools/web-dev/shopify/migration-to-shopify.jpg",
      card_title: "Migration to Shopify",
      card_subtitle:
        "We help you seamlessly migrate your existing store to Shopify, preserving your data, SEO rankings, and customer information.",
    },
    {
      imageUrl: "/images/tools/web-dev/shopify/shopify-seo-services.jpg",
      card_title: "Shopify SEO Services",
      card_subtitle:
        "With our comprehensive SEO services, you can improve the visibility of your store and attract organic traffic.",
    },
    {
      imageUrl:
        "/images/tools/web-dev/shopify/shopify-maintenance-and-support.jpg",
      card_title: "Shopify Maintenance and Support",
      card_subtitle:
        "Our maintenance services ensure the smooth operation of your Shopify stores and stay updated with the latest trends and technologies.",
    },
  ],
  "software-development": [
    {
      imageUrl: "/images/tools/web-dev/angular/angular-js-consulting.jpg",
      card_title: "AngularJS Consulting",
      card_subtitle:
        "We provide expert guidance on your projects, helping you to make informed decisions, optimize your process, and achieve your goals.",
    },
    {
      imageUrl:
        "/images/tools/web-dev/angular/custom-angular-web-development.jpg",
      card_title: "Custom Angular Web Development",
      card_subtitle:
        "We build robust and scalable solutions that make your business stand out and help you in revenue growth.",
    },
    {
      imageUrl:
        "/images/tools/web-dev/angular/saas-application-build-and-migration.jpg",
      card_title: "SaaS Application Build and Migration",
      card_subtitle:
        "Whether you are looking to build a new SaaS application or looking to migrate from your existing application, we have got you covered.",
    },
    {
      imageUrl: "/images/tools/web-dev/angular/mobile-app-development.jpg",
      card_title: "Mobile App Development",
      card_subtitle:
        "Our mobile app development services deliver high-performance, native-like apps for both iOS and Android platforms using AngularJS.",
    },
    {
      imageUrl: "/images/tools/web-dev/angular/web-application-development.jpg",
      card_title: "Web Application Development",
      card_subtitle:
        "We create high-performance web applications using AngularJS that are responsive, visually appealing, and user-friendly.",
    },
    {
      imageUrl:
        "/images/tools/web-dev/angular/react-app-support-maintenance.jpg",
      card_title: "Angular App Support & Maintenance",
      card_subtitle:
        "We offer ongoing support and maintenance to your applications to ensure that they remain up-to-date, secure, and always perform at their best.",
    },
  ],
  react: [
    {
      imageUrl: "/images/tools/web-dev/react/reactjs-consulting.jpg",
      card_title: "ReactJS Consulting",
      card_subtitle:
        "We provide expert guidance on your projects, helping you to make informed decisions, optimize your process, and achieve your goals.",
    },
    {
      imageUrl: "/images/tools/web-dev/react/custom-react-web-development.jpg",
      card_title: "Custom React Web Development",
      card_subtitle:
        "We build robust and scalable solutions that make your business stand out and help you in revenue growth.",
    },
    {
      imageUrl:
        "/images/tools/web-dev/react/saas-application-build-and-migration.jpg",
      card_title: "SaaS Application Build and Migration",
      card_subtitle:
        "Whether you are looking to build a new SaaS application or looking to migrate from your existing application, we have got you covered.",
    },
    {
      imageUrl: "/images/tools/web-dev/react/mobile-app-development.jpg",
      card_title: "Mobile App Development",
      card_subtitle:
        "Our mobile app development services deliver high-performance, native-like apps for both iOS and Android platforms using ReactJS.",
    },
    {
      imageUrl: "/images/tools/web-dev/react/web-application-development.jpg",
      card_title: "Web Application Development",
      card_subtitle:
        "We create high-performance web applications using ReactJS that are responsive, visually appealing, and user-friendly.",
    },
    {
      imageUrl:
        "/images/tools/web-dev/react/react-app-support-and-maintenance.jpg",
      card_title: "React App Support & Maintenance",
      card_subtitle:
        "We offer ongoing support and maintenance to your applications to ensure that they remain up-to-date, secure, and always perform at their best.",
    },
  ],
  php: [
    {
      imageUrl: "/images/tools/web-dev/php/php-consulting.jpg",
      card_title: "PHP Consulting",
      card_subtitle:
        "To ensure that you can make good decisions, complete the necessary work effectively and meet the goals, objectives, and milestones, we offer valuable recommendations and our consultants' advisory based on their invaluable experience and deep knowledge.",
    },
    {
      imageUrl: "/images/tools/web-dev/php/custom-php-web-development.jpg",
      card_title: "Custom PHP Web Development",
      card_subtitle:
        "Our web solutions are customized to be highly scalable, safer, and more secure and integrated into your business processes.",
    },
    {
      imageUrl: "/images/tools/web-dev/php/saas-application-development.jpg",
      card_title: "SaaS Application Development",
      card_subtitle:
        "From building new SaaS applications to migrating existing ones, our team ensures seamless and efficient development.",
    },
    {
      imageUrl: "/images/tools/web-dev/php/mobile-app-development.jpg",
      card_title: "Mobile App Development",
      card_subtitle:
        "We provide state-of-the-art mobile applications that are native and developed for both iOS and Android using PHP with outstanding performance.",
    },
    {
      imageUrl: "/images/tools/web-dev/php/web-application-development.jpg",
      card_title: "Web Application Development",
      card_subtitle:
        "We build appealing and easily navigable web applications with the help of PHP and other related technologies.",
    },
    {
      imageUrl: "/images/tools/web-dev/php/php-support-and-maintenance.jpg",
      card_title: "PHP Support & Maintenance",
      card_subtitle:
        "We also provide ongoing support, mostly to check the applications' security and ensure they are updated and running efficiently.",
    },
  ],
  "python-services": [
    {
      imageUrl: "/images/tools/web-dev/python/python-consulting.jpg",
      card_title: "Python Consulting",
      card_subtitle:
        "Our professionals recommend how to approach your projects, what decisions aid in the process, and how to maximize your results and reach goals.",
    },
    {
      imageUrl:
        "/images/tools/web-dev/python/custom-python-website-development.jpg",
      card_title: "Custom Python Website Development",
      card_subtitle:
        "Our solutions are scalable and well-constructed to ensure that your business is distinguished and can grow its revenues.",
    },
    {
      imageUrl:
        "/images/tools/web-dev/python/build-and-migration-of-saas-applications.jpg",
      card_title: "Build and Migration of SaaS Applications",
      card_subtitle:
        "Getting a new SaaS application or moving on from your current one, we are with you to help all through the process.",
    },
    {
      imageUrl:
        "/images/tools/web-dev/python/python-mobile-app-development.jpg",
      card_title: "Python Mobile App Development",
      card_subtitle:
        "Python mobile app development services allow your business to build seamless, high-quality apps for both iOS and Android.",
    },
    {
      imageUrl: "/images/tools/web-dev/python/web-application-development.jpg",
      card_title: "Web Application Development",
      card_subtitle:
        "We also build web platforms in Python with good reliability, visually appealing, and user-friendly.",
    },
    {
      imageUrl:
        "/images/tools/web-dev/python/support-and-maintenance-of-a-python-app.jpg",
      card_title: "Support and Maintenance of a Python App",
      card_subtitle:
        "Our company keeps your applications up to date, safe, and running optimally so you can focus on returning to your core business.",
    },
  ],
  "ruby-on-rails-services": [
    {
      imageUrl:
        "/images/tools/web-dev/ruby-on-rails/ruby-on-rails-maintenance-service.jpg",
      card_title: "Ruby on Rails Consulting",
      card_subtitle:
        "Our experts provide strategic insights and guidance to help you make informed decisions, streamline processes, and achieve your objectives.",
    },
    {
      imageUrl:
        "/images/tools/web-dev/ruby-on-rails/custom-ruby-on-rails-web-development.jpg",
      card_title: "Custom Ruby on Rails Web Development",
      card_subtitle:
        "We deliver large-scalable, secure, and stable web solutions that optimize business processes and promote development.",
    },
    {
      imageUrl:
        "/images/tools/web-dev/ruby-on-rails/saas-application-development.jpg",
      card_title: "SaaS Application Development",
      card_subtitle:
        "In particular, the team specifies whether the application needs to be built from scratch or migrated—it may be a new SaaS based on the customer's requirements.",
    },
    {
      imageUrl:
        "/images/tools/web-dev/ruby-on-rails/mobile-app-development.jpg",
      card_title: "Mobile App Development",
      card_subtitle:
        "Our applications are built for iOS and Android using the Ruby on Rails technology and contain zero defects, thus providing the best potential for success and easier use.",
    },
    {
      imageUrl:
        "/images/tools/web-dev/ruby-on-rails/web-application-development.jpg",
      card_title: "Web Application Development",
      card_subtitle:
        "Our team creates user-friendly and visually appealing web applications that are responsive with the help of Ruby on Rails.",
    },
    {
      imageUrl:
        "/images/tools/web-dev/ruby-on-rails/custom-ruby-on-rails-web-development.jpg",
      card_title: "Ruby on Rails Maintenance Service",
      card_subtitle:
        "We offer systematic updates and protection for your applications so that they remain safe, relevant, and efficient.",
    },
  ],
  woocommerce: [
    {
      imageUrl:
        "/images/tools/web-dev/woocommerce/custom-woocommerce-store-design.jpg",
      card_title: "WooCommerce Store Design",
      card_subtitle:
        "Our expert designers create a visually appealing WooCommerce store that provides a seamless shopping experience for your customers.",
    },
    {
      imageUrl:
        "/images/tools/web-dev/woocommerce/woocommerce-theme-development.jpg",
      card_title: "WooCommerce Theme Development",
      card_subtitle:
        "We develop custom WooCommerce themes tailored to your brand, ensuring a unique and engaging user experience.",
    },
    {
      imageUrl:
        "/images/tools/web-dev/woocommerce/woocommerce-plugin-development.jpg",
      card_title: "WooCommerce Plugin Development",
      card_subtitle:
        "From third-party integrations to custom plugins, we enhance the functionality of your WooCommerce store.",
    },
    {
      imageUrl:
        "/images/tools/web-dev/woocommerce/migration-to-woocommerce.jpg",
      card_title: "Migration to WooCommerce",
      card_subtitle:
        "We assist in migrating your existing store to WooCommerce, maintaining data integrity, SEO rankings, and customer information.",
    },
    {
      imageUrl: "/images/tools/web-dev/woocommerce/headless-woocommerce.jpg",
      card_title: "WooCommerce SEO Services",
      card_subtitle:
        "Our SEO experts optimize your WooCommerce store to improve its visibility and attract organic traffic.",
    },
    {
      imageUrl:
        "/images/tools/web-dev/woocommerce/woocommerce-maintenance-and-support.jpg",
      card_title: "WooCommerce Maintenance and Support",
      card_subtitle:
        "We provide ongoing maintenance and support to keep your WooCommerce store running smoothly and up-to-date with the latest trends.",
    },
  ],
  angular: [
    {
      imageUrl: "/images/tools/web-dev/angular/angular-js-consulting.jpg",
      card_title: "AngularJS Consulting",
      card_subtitle:
        "We provide expert guidance on your projects, helping you to make informed decisions, optimize your process, and achieve your goals.",
    },
    {
      imageUrl:
        "/images/tools/web-dev/angular/custom-angular-web-development.jpg",
      card_title: "Custom Angular Web Development",
      card_subtitle:
        "We build robust and scalable solutions that make your business stand out and help you in revenue growth.",
    },
    {
      imageUrl:
        "/images/tools/web-dev/angular/saas-application-build-and-migration.jpg",
      card_title: "SaaS Application Build and Migration",
      card_subtitle:
        "Whether you are looking to build a new SaaS application or looking to migrate from your existing application, we have got you covered.",
    },
    {
      imageUrl: "/images/tools/web-dev/angular/mobile-app-development.jpg",
      card_title: "Mobile App Development",
      card_subtitle:
        "Our mobile app development services deliver high-performance, native-like apps for both iOS and Android platforms using AngularJS.",
    },
    {
      imageUrl: "/images/tools/web-dev/angular/web-application-development.jpg",
      card_title: "Web Application Development",
      card_subtitle:
        "We create high-performance web applications using AngularJS that are responsive, visually appealing, and user-friendly.",
    },
    {
      imageUrl:
        "/images/tools/web-dev/angular/react-app-support-maintenance.jpg",
      card_title: "Angular App Support & Maintenance",
      card_subtitle:
        "We offer ongoing support and maintenance to your applications to ensure that they remain up-to-date, secure, and always perform at their best.",
    },
  ],
  "android-app-development": [
    {
      imageUrl: "/images/tools/mobile-application/android/custom-app.jpg",
      card_title: "Custom Android App Development",
      card_subtitle:
        "Our team of expert developers create custom Android applications that perfectly align with your business goals.",
    },
    {
      imageUrl: "/images/tools/mobile-application/android/uxui-design.jpg",
      card_title: "User-Centric UI/UX Design",
      card_subtitle:
        "We create interfaces that are visually stunning and user-friendly, enhancing the overall user experience.",
    },
    {
      imageUrl:
        "/images/tools/mobile-application/android/performance-optimization.jpg",
      card_title: "Performance Optimization",
      card_subtitle:
        "Through rigorous testing and fine-tuning, we make sure to deliver apps that perform optimally under all conditions.",
    },
    {
      imageUrl:
        "/images/tools/mobile-application/android/advanced-analytics.jpg",
      card_title: "Advanced Analytics Integration",
      card_subtitle:
        "We make sure to equip your app with tools to track your user interactions which help you assess user behavior.",
    },
    {
      imageUrl:
        "/images/tools/mobile-application/android/enterprise-solutions.jpg",
      card_title: "Enterprise Solutions",
      card_subtitle:
        "We develop scalable and secure apps that integrate seamlessly with your existing systems, enhancing productivity and efficiency.",
    },
  ],
  cordova: [
    {
      imageUrl:
        "/images/tools/mobile-application/cordova/custom-cordova-app-development.jpg",
      card_title: "Custom Cordova App Development",
      card_subtitle:
        "Our team of expert developers create custom Cordova mobile applications that perfectly align with your business goals.",
    },
    {
      imageUrl: "/images/tools/mobile-application/cordova/uxui-design.jpg",
      card_title: "UI/UX Design",
      card_subtitle:
        "We create interfaces that are visually stunning and user-friendly, enhancing the overall user experience.",
    },
    {
      imageUrl:
        "/images/tools/mobile-application/cordova/performance-optimization.jpg",
      card_title: "Performance Optimization",
      card_subtitle:
        "Through rigorous testing and fine-tuning, we make sure to deliver apps that perform optimally under all conditions.",
    },
    {
      imageUrl:
        "/images/tools/mobile-application/cordova/plugin-development-and-integration.jpg",
      card_title: "Plugin Development and Integration",
      card_subtitle:
        "We create custom plugins and integrate existing ones to extend your app’s functionality.",
    },
    {
      imageUrl:
        "/images/tools/mobile-application/cordova/quality-assurance.jpg",
      card_title: "App Testing and Quality Assurance",
      card_subtitle:
        "We rigorously test the app to ensure a bug-free and smooth experience for your users.",
    },
    {
      imageUrl:
        "/images/tools/mobile-application/cordova/maintenance-and-support.jpg",
      card_title: "Maintenance and Support",
      card_subtitle:
        "We offer ongoing maintenance and support to keep your app updated with the latest features and ensure it continues to perform at its best.",
    },
  ],
  flutter: [
    {
      imageUrl:
        "/images/tools/mobile-application/flutter/tailored-flutter-app-development.jpg",
      card_title: "Tailored Flutter App Development",
      card_subtitle:
        "Our team of expert developers create custom Flutter applications that perfectly align with your business goals.",
    },
    {
      imageUrl:
        "/images/tools/mobile-application/flutter/innovative-uiux-design.jpg",
      card_title: "Innovative UI/UX Design",
      card_subtitle:
        "We create interfaces that are visually stunning and user-friendly, enhancing the overall user experience.",
    },
    {
      imageUrl:
        "/images/tools/mobile-application/flutter/performance-optimization.jpg",
      card_title: "Performance Optimization",
      card_subtitle:
        "Through rigorous testing and fine-tuning, we make sure to deliver apps that perform optimally under all conditions.",
    },
    {
      imageUrl:
        "/images/tools/mobile-application/flutter/advanced-analytics-integration.jpg",
      card_title: "Advanced Analytics Integration",
      card_subtitle:
        "We make sure to equip your app with tools to track your user interactions which help you assess user behavior.",
    },
    {
      imageUrl:
        "/images/tools/mobile-application/flutter/enterprise-solutions.jpg",
      card_title: "Enterprise Solutions",
      card_subtitle:
        "We develop scalable and secure apps that integrate seamlessly with your existing systems, enhancing productivity and efficiency.",
    },
  ],
  "react-native": [
    {
      imageUrl:
        "/images/tools/mobile-application/react-native/tailored-native.jpg",
      card_title: "Tailored React Native App Development",
      card_subtitle:
        "Our team of expert developers create custom React Native applications that perfectly align with your business goals.",
    },
    {
      imageUrl: "/images/tools/mobile-application/react-native/uxuidesign.jpg",
      card_title: "Innovative UI/UX Design",
      card_subtitle:
        "We create interfaces that are visually stunning and user-friendly, enhancing the overall user experience.",
    },
    {
      imageUrl:
        "/images/tools/mobile-application/react-native/performance-optimization.jpg",
      card_title: "Performance Optimization",
      card_subtitle:
        "Through rigorous testing and fine-tuning, we make sure to deliver apps that perform optimally under all conditions.",
    },
    {
      imageUrl: "/images/tools/mobile-application/react-native/Analytics.jpg",
      card_title: "Advanced Analytics Integration",
      card_subtitle:
        "We make sure to equip your app with tools to track your user interactions which help you assess user behavior.",
    },
    {
      imageUrl:
        "/images/tools/mobile-application/react-native/integration-services.jpg",
      card_title: "Integration Services",
      card_subtitle:
        "We develop scalable and secure apps that integrate seamlessly with your existing systems, enhancing productivity and efficiency.",
    },
    {
      imageUrl:
        "/images/tools/mobile-application/react-native/maintenance-and-support.jpg",
      card_title: "Maintenance and Support",
      card_subtitle:
        "We provide ongoing support and maintenance to keep your app up-to-date and running smoothly.",
    },
  ],
  "sale-force": [
    {
      card_title: "Commerce Cloud",
      imageUrl: "",
      card_subtitle:
        "We help businesses revolutionize their eCommerce experiences with Salesforce Commerce Cloud. Our implementation services empower you to build seamless, scalable, and personalized shopping experiences that enhance customer engagement and drive sales.",
      icon: <FaShoppingCart />,
    },
    {
      card_title: "Community Cloud",
      imageUrl: "",
      card_subtitle:
        "Create vibrant online communities with Salesforce Community Cloud. Our services enable you to build connected digital experiences for customers, partners, and employees, ensuring collaboration, self-service, and engagement across your ecosystem.",
      icon: <FaUsers />,
    },
    {
      card_title: "Marketing Cloud",
      imageUrl: "",
      card_subtitle:
        "Transform your marketing efforts with Salesforce Marketing Cloud. Our solutions help you design targeted, data-driven campaigns, automate customer journeys, and deliver personalized experiences across email, mobile, social media, and digital advertising channels.",
      icon: <MdMail />,
    },
    {
      card_title: "Mulesoft Services",
      imageUrl: "",
      card_subtitle:
        "Unlock the power of seamless integration with Mulesoft. Our Mulesoft services connect disparate systems, applications, and data sources to streamline processes, increase efficiency, and provide actionable insights across your organization.",
      icon: <FaLink />,
    },
    {
      card_title: "Sales Cloud",
      imageUrl: "",
      card_subtitle:
        "Boost your sales team's productivity with Salesforce Sales Cloud. We help implement, customize, and optimize the platform to streamline lead management, automate workflows, and provide real-time insights for better decision-making.",
      icon: <FiBarChart2 />,
    },
    {
      card_title: "Salesforce CPQ",
      imageUrl: "",
      card_subtitle:
        "Enhance your sales process with Salesforce CPQ (Configure, Price, Quote). We assist in implementing CPQ solutions that simplify complex pricing, automate approvals, and generate accurate quotes, helping you close deals faster and with fewer errors.",
      icon: <FaDollarSign />,
    },
    {
      card_title: "Service Cloud",
      imageUrl: "",
      card_subtitle:
        "Improve customer satisfaction and loyalty with Salesforce Service Cloud. Our implementation services empower your support teams to deliver exceptional service through case management, omnichannel support, and AI-driven insights.",
      icon: <FaHeadphones />,
    },
    {
      card_title: "Tableau",
      imageUrl: "",
      card_subtitle:
        "Unlock the full potential of your data with Tableau. Our services integrate Tableau with Salesforce, helping you visualize and analyze data, create interactive dashboards, and make data-driven decisions to drive business growth.",
      icon: <FiBarChart />,
    },
  ],
  "commerce-cloud": [
    {
      imageUrl:
        "/images/tools/salesforce/commerce-cloud/salesforce-commerce-cloud-implementation.jpg",
      card_title: "Salesforce Commerce Cloud Implementation ",
      card_subtitle:
        "We help you with a smooth transition to Salesforce Commerce Cloud. From planning and strategy to deployment and training, we handle every aspect of your e-commerce platform.",
    },
    {
      imageUrl: "/images/tools/salesforce/commerce-cloud/e-commerce-b2b.jpg",
      card_title: "e-Commerce Platform for B2B and B2C ",
      card_subtitle:
        "Be it B2B or B2C, we leverage the power of Commerce Cloud to create effective and appealing e-commerce solutions. We develop solutions that target the audience, enhance your user experience, and drive sales.  ",
    },
    {
      imageUrl: "/images/tools/salesforce/commerce-cloud/order-management.jpg",
      card_title: "Order Management ",
      card_subtitle:
        "We help you streamline your order management process through Commerce Cloud. You can effectively manage order processing, inventory management, and fulfilment of orders.  ",
    },
    {
      imageUrl:
        "/images/tools/salesforce/commerce-cloud/catalog-management.jpg",
      card_title: "Product Catalog Management ",
      card_subtitle:
        "Our solutions help you to organize, update, manage, and personalize your catalog with ease. This ensures you provide a seamless shopping experience to your customers.  ",
    },
    {
      imageUrl:
        "/images/tools/salesforce/commerce-cloud/personalized-shopping-experiences.jpg",
      card_title: "Personalized Shopping Experiences ",
      card_subtitle:
        "Using Salesforce’s AI data-driven tools we help you provide your customers with an engaging shopping experience such as targeted promotions, personalized product recommendations, and customized content.  ",
    },
    {
      imageUrl:
        "/images/tools/salesforce/commerce-cloud/support-and-maintenance.jpg",
      card_title: "Support and Maintenance ",
      card_subtitle:
        "Our dedicated team makes sure that your platform runs smoothly. We provide monitoring, and troubleshooting services and also make sure that your platform is regularly updated.  ",
    },
  ],
  "community-cloud-service": [
    {
      imageUrl:
        "/images/tools/salesforce/community-cloud/customer-and-partner-portals.jpg",
      card_title: "Customer and Partner Portals ",
      card_subtitle:
        "We create customer and partner portals that help them access support, manage their accounts, and interact with your brand. It also enhances collaboration, communication, and resource sharing.  ",
    },
    {
      imageUrl:
        "/images/tools/salesforce/community-cloud/employee-intranets.jpg",
      card_title: "Employee Intranets ",
      card_subtitle:
        "We create an employee network that fosters internal communication and knowledge sharing. Employees can share information, collaborate on projects, and improve their productivity. ",
    },
    {
      imageUrl:
        "/images/tools/salesforce/community-cloud/content-and-knowledge-management.jpg",
      card_title: "Content and Knowledge Management  ",
      card_subtitle:
        "With content management tools, you can effectively organize and manage your digital content ensuring your community always has access to updated content. We also help you enable self-serve which helps reduce costs. ",
    },
    {
      imageUrl:
        "/images/tools/salesforce/community-cloud/community-engagement-tools.jpg",
      card_title: "Community Engagement Tools  ",
      card_subtitle:
        "Engagement tools such as discussion forums, event management, and gamification help to share experiences, engage with your audiences through workshops, and create a vibrant community atmosphere.  ",
    },
  ],
  "marketing-cloud": [
    {
      imageUrl:
        "/images/tools/salesforce/marketing-cloud/email-marketing-and-automation.jpg",
      card_title: "Commerce Cloud",
      card_subtitle:
        "We help you with email marketing and automation, enabling you to create, schedule, track, and analyze email campaigns. Deliver personalized email content based on customer preferences.",
    },
    {
      imageUrl:
        "/images/tools/salesforce/marketing-cloud/social-media-marketing.jpg",
      card_title: "Marketing Cloud",
      card_subtitle:
        "Expand your reach and engage with customers on their favorite social media platforms. We assist with the creation of social media campaigns and content scheduling, helping you build stronger relationships through frequent communication.",
    },
    {
      imageUrl:
        "/images/tools/salesforce/marketing-cloud/customer-journey-builder.jpg",
      card_title: "Community Cloud",
      card_subtitle:
        "We help you craft personalized journeys that guide prospects through the marketing funnel. Design, implement, and automate customer journeys and interactions based on customer behavior. Use analytics to measure effectiveness.",
    },
    {
      imageUrl:
        "/images/tools/salesforce/marketing-cloud/mobile-messaging-and-push-notifications.jpg",
      card_title: "Mulesoft Services",
      card_subtitle:
        "Connect with your customers timely through mobile messaging and push notifications. Send targeted SMS campaigns and deliver push notifications to keep your audience informed. Use mobile analytics to understand campaign performance.",
    },
    {
      imageUrl:
        "/images/tools/salesforce/marketing-cloud/personalize-engagement.jpg",
      card_title: "Sales Cloud",
      card_subtitle:
        "Craft personalized campaigns with precision that resonate with customers. Deliver timely, relevant experiences across channels to drive meaningful engagement and conversion, powered by AI personalization.",
    },
    {
      imageUrl:
        "/images/tools/salesforce/marketing-cloud/personalize-engagement.jpg",
      card_title: "Sales Force CPQ",
      card_subtitle:
        "Craft personalized campaigns with precision that resonate with customers. Deliver timely, relevant experiences across channels to drive meaningful engagement and conversion, powered by AI personalization.",
    },
    {
      imageUrl:
        "/images/tools/salesforce/marketing-cloud/personalize-engagement.jpg",
      card_title: "Service Cloud",
      card_subtitle:
        "Craft personalized campaigns with precision that resonate with customers. Deliver timely, relevant experiences across channels to drive meaningful engagement and conversion, powered by AI personalization.",
    },
    {
      imageUrl:
        "/images/tools/salesforce/marketing-cloud/personalize-engagement.jpg",
      card_title: "Tableau",
      card_subtitle:
        "Craft personalized campaigns with precision that resonate with customers. Deliver timely, relevant experiences across channels to drive meaningful engagement and conversion, powered by AI personalization.",
    },
  ],
  "mulesoft-services": [
    {
      imageUrl:
        "/images/tools/salesforce/mulesoft/custom-integration-solutions.jpg",
      card_title: "Custom Integration Solutions",
      card_subtitle:
        "We assess your integration needs and design a customized integration strategy. We also develop custom connectors to integrate Salesforce with various third-party systems. Data mapping and transformation ensure seamless data flow.",
    },
    {
      imageUrl:
        "/images/tools/salesforce/mulesoft/api-development-and-management.jpg",
      card_title: "API Development and Management",
      card_subtitle:
        "We design and develop secure, scalable, and reusable APIs. We help you manage the APIs for optimal performance and also implement API gateways to control and manage API traffic efficiently.",
    },
    {
      imageUrl: "/images/tools/salesforce/mulesoft/workflow-automation.jpg",
      card_title: "Workflow Automation",
      card_subtitle:
        "We create automated business processes and workflow designs to improve efficiency and reduce manual efforts. We also help in the integration of Mulesoft with Salesforce flows to automate complex business workflows.",
    },
    {
      imageUrl: "/images/tools/salesforce/mulesoft/data-integration.jpg",
      card_title: "Data Integration and Management",
      card_subtitle:
        "We ensure consistent and accurate data across all systems with robust data integration solutions. Data Synchronization, Data Quality Management, and Master Data Management help in maintaining data consistency.",
    },
    {
      imageUrl: "/images/tools/salesforce/mulesoft/data-integration.jpg",
      card_title: "Real-Time Analytics and Reporting",
      card_subtitle:
        "You can gain valuable insights with real-time data analytics and reporting capabilities. With Real-Time Data Integration, Custom Dashboards and Reports, and Predictive Analytics you can analyze data in real time.",
    },
  ],
  "sales-cloud": [
    {
      imageUrl:
        "/images/tools/salesforce/sales-cloud/lead-and-opportunity-management.jpg",
      card_title: "Lead and Opportunity Management",
      card_subtitle:
        "We help in developing lead tracking, opportunity management, and pipeline management services which help track leads, take necessary action to close the deals, and get a clear picture of your sales pipeline.",
    },
    {
      imageUrl:
        "/images/tools/salesforce/sales-cloud/contact and-account-management.jpg",
      card_title: "Contact and Account Management",
      card_subtitle:
        "We develop Contact and Account Management services which help you to track customer information and history. It also helps you oversee your accounts and enhance customer interactions.",
    },
    {
      imageUrl:
        "/images/tools/salesforce/sales-cloud/sales-forecasting-and-reporting.jpg",
      card_title: "Sales Forecasting and Reporting",
      card_subtitle:
        "With the help of Sales and Reporting tools, you can effectively generate reports to gain insights into sales performance with the help of dashboards. You can predict your sales and set realistic targets for yourself.",
    },
    {
      imageUrl:
        "/images/tools/salesforce/sales-cloud/workflow-and-approval-automation.jpg",
      card_title: "Workflow and Approval Automation",
      card_subtitle:
        "Workflow and Approval automation helps you to automate mundane tasks to improve efficiency and reduce human errors. It helps you to automate approval processes and also assign and manage tasks effectively to your team.",
    },
  ],
  "sales-force-cpq": [
    {
      imageUrl:
        "/images/tools/salesforce/saleforce-cpq/contract-management.jpg",
      card_title: "Product Configuration  ",
      card_subtitle:
        "We can help you customize your products to meet your customer needs by maintaining a dynamic product catalog with detailed specifications and using guided selling tools to choose the right products.  ",
    },
    {
      imageUrl:
        "/images/tools/salesforce/saleforce-cpq/pricing-and-discount-management.jpg",
      card_title: "Pricing and Discount Management  ",
      card_subtitle:
        "You can optimize your pricing using powerful tools that streamline pricing and discount management. You can ensure consistent and accurate pricing by setting automated pricing rules and managing discount policies.  ",
    },
    {
      imageUrl:
        "/images/tools/salesforce/saleforce-cpq/product-configuration.jpg",
      card_title: "Quote Generation  ",
      card_subtitle:
        "Using customizable templates and real-time data you can generate accurate and professional quotes quickly and easily. Integrated e-signature solutions streamline the approval process.  ",
    },
    {
      imageUrl: "/images/tools/salesforce/saleforce-cpq/quote-generation.jpg",
      card_title: "Contract Management  ",
      card_subtitle:
        "We help you simplify your contract creation and negotiation by providing preapproved contract templates. Automated approval workflows ensure accelerated contract approvals and renewals.  ",
    },
  ],
  "service-cloud": [
    {
      imageUrl: "/images/tools/salesforce/service-cloud/case-management.jpg",
      card_title: "Case Management",
      card_subtitle:
        "Streamline your case management process by case tracking, automated workflow, and case prioritization. You can track and monitor your customer issues, create workflows, and prioritize cases that need your immediate attention.",
    },
    {
      imageUrl:
        "/images/tools/salesforce/service-cloud/knowledge-management.jpg",
      card_title: "Knowledge Base and Article Management",
      card_subtitle:
        "Enhance your support team’s efficiency with a centralized knowledge base. Create a detailed repository with easy access to information. It helps you create support articles with quick solutions for common issues.",
    },
    {
      imageUrl:
        "/images/tools/salesforce/service-cloud/omnichannel-support.jpg",
      card_title: "Omnichannel Support",
      card_subtitle:
        "Ensure that you support the clients on multiple channels to match their needs. Be it Email support, Live chat, Phone support, and Social media, we help you to provide real-time support and customer interaction.",
    },
    {
      imageUrl:
        "/images/tools/salesforce/service-cloud/self-service-portals.jpg",
      card_title: "Self-Service Portals and Communities",
      card_subtitle:
        "We develop user-efficient self-service portals which help customers to find solutions and manage their accounts. You can also integrate them with articles for instant help. Online communities help customers share knowledge.",
    },
  ],
  tableau: [
    {
      imageUrl:
        "/images/tools/salesforce/tableau/interactive-dashboards-and-reports.jpg",
      card_title: "Interactive Dashboards and Reports",
      card_subtitle:
        "We design and create visually appealing and interactive dashboards that transform your data. We also help generate reports that allow users to explore data in real-time.",
    },
    {
      imageUrl: "/images/tools/salesforce/tableau/advanced-analytics.jpg",
      card_title: "Advanced Analytics and Data Exploration",
      card_subtitle:
        "We also create advanced analytical and data exploration tools that help perform in-depth analysis to identify trends, correlations, and outliers.",
    },
    {
      imageUrl: "/images/tools/salesforce/tableau/predictive-analytics.jpg",
      card_title: "Predictive Analytics",
      card_subtitle:
        "Predictive analytics can help anticipate future trends and make data-driven decisions. Predictive modeling, trend analysis, and scenario planning help predict future behavior and risk assessment.",
    },
    {
      imageUrl: "/images/tools/salesforce/tableau/data-integration.jpg",
      card_title: "Data Integration from Various Sources",
      card_subtitle:
        "To get a unified view of your business, we integrate data from diverse sources. Data connectivity, Data blending, and ETL (Extract, Transform, Load) processes ensure data consistency and accuracy.",
    },
  ],

  "sap-application": [
    {
      card_title: "Consultation and Strategy Development",
      icon: <FiSettings />,
      imageUrl: null, // Add image URL if available
      card_subtitle:
        "To achieve our clients' results, we collaborate with your team to determine your business goals and build an SAP-compliant plan for your goals.",
    },
    {
      card_title: "Implementation and Integration",
      icon: <MdMail />,
      imageUrl: null, // Add image URL if available
      card_subtitle:
        "Our experienced professionals are fully responsible for the implementation process so you can ensure a successful integration with your existing environment.",
    },
    {
      card_title: "Customization and Development",
      icon: <FaBell />,
      imageUrl: null, // Add image URL if available
      card_subtitle:
        "We could also implement SAP applications with related changes to your needs; we focus on delivering solutions that effectively solve your business needs.",
    },
    {
      card_title: "Training and Support",
      icon: <FiGrid />,
      imageUrl: null, // Add image URL if available
      card_subtitle:
        "Your team receives comprehensive training and support for your SAP applications to help them get the most use out of them. Support services implemented by us ensure that your systems are properly run and managed.",
    },
    {
      card_title: "Focused on continuous improvement",
      icon: <FaInfo />,
      imageUrl: null, // Add image URL if available
      card_subtitle:
        "Here, one can find professional support and focus on further improving the SAP applications developed in response to industry improvements and changes in the client's business.",
    },
  ],
  hubspot: [
    {
      card_title: "Hubspot CMS Implementation",
      url: "/hubspot/hubspot-cms-implementation",
      card_subtitle:
        "We help you transform your website into a powerful marketing tool with our HubSpot CMS Implementation services. We design and develop customized websites that are visually appealing and fully integrated with HubSpot’s CRM.",
      icon: <FiSettings />,
    },
    {
      card_title: "Hubspot Managed Services",
      url: "/hubspot/hubspot-managed-services",
      card_subtitle:
        "With our HubSpot Managed Services, we provide you with ongoing support and optimization to ensure that your HubSpot platform is up and running at its best. From system maintenance to updates, we take care of all the details.",
      icon: <MdMail />,
    },
    {
      card_title: "Hubspot Marketing Implementation",
      url: "/hubspot/hubspot-marketing-implementation",
      card_subtitle:
        "We help you leverage HubSpot’s marketing automation tools to create campaigns that are targeted, nurture leads, and measure the success of your marketing efforts, all while integrating seamlessly with your CRM.",
      icon: <FaBell />,
    },
    {
      card_title: "Hubspot Sales Implementation",
      url: "/hubspot/hubspot-sales-implementation",
      card_subtitle:
        "We help you drive revenue and close deals faster with HubSpot Sales Implementation services. We configure and customize the tool to match your process ensuring your team can manage leads, track sales, and generate forecasts.",
      icon: <FiGrid />,
    },
    {
      card_title: "Hubspot Service Implementation",
      url: "/hubspot/hubspot-services-implementation",
      card_subtitle:
        "We customize HubSpot’s set of tools to make sure they meet your specific needs, ensuring that your customer service, project management, and all other critical functions are fully optimized and aligned with your goals.",
      icon: <FaInfo />,
    },
  ],
  "data-annotation": [
    {
      imageUrl: "/images/tools/data-annotation/computer-vision.jpg",
      card_title: "Computer Vision ",
      card_subtitle:
        "Computer vision services such as image classification, object detection, and semantic segmentation help in tagging images with relevant labels, marking objects within images, and providing pixel-level annotations.  ",
    },
    {
      imageUrl: "/images/tools/data-annotation/nlp-svg-annotation.jpg",
      card_title: "NLP SVG Annotation",
      card_subtitle:
        "NLP is essential and beneficial for tasks like sentiment analysis, named entity recognition, and machine translation. With text classification and entity recognition, you can annotate text and identity entities. ",
    },
    {
      imageUrl: "/images/tools/data-annotation/content-moderation.jpg",
      card_title: "Content Moderation",
      card_subtitle:
        "Today, managing user-generated content is crucial for maintaining brand reputation and compliance. Our content moderation services provide automation and a manual review process to ensure your platform remains safe and user-friendly.  ",
    },
    {
      imageUrl: "/images/tools/data-annotation/data-processing.jpg",
      card_title: "Data Processing",
      card_subtitle:
        "We help you transform raw data into a goldmine of insights by cleaning, transforming, and structuring it to perfection. AI/ML models are built on a strong foundation, with accurate, reliable, and meaningful data that drives informed decisions.  ",
    },
    {
      imageUrl: "/images/tools/data-annotation/document-processing.jpg",
      card_title: "Document Processing",
      card_subtitle:
        "With our document processing services, you can your cluttered documents into actionable insights! With our cutting-edge annotation techniques, you can unlock the hidden value in unstructured text, transforming it into usable data that helps in decision-making.   ",
    },
    {
      imageUrl: "/images/tools/data-annotation/generative-ai.jpg",
      card_title: "Generative AI",
      card_subtitle:
        "We help you unlock the creative potential of AI with our annotation services, empowering your models to generate fresh, original content that is equal to human imagination. From text to images, music, and more we provide high-quality data.   ",
    },
  ],
  "data-engineering": [
    {
      imageUrl: "/images/tools/data-engineering/data-pipeline-development.jpg",
      card_title: "Data Pipeline Development",
      card_subtitle:
        "Our experts design and implement ETL (Extract, Transform, Load) and ELT (Extract, Load, Transform) which help you to streamline your data with robust, scalable and efficient data pipelines. This ensures seamless data transfer across systems. ",
    },
    {
      imageUrl:
        "/images/tools/data-engineering/data-integration-and-warehousing.jpg",
      card_title: "Data Integration and Warehousing",
      card_subtitle:
        "We help you integrate various data sources into a single data warehouse that acts as the foundation for all your analytics and reporting needs. We also specialize in creating cloud-native data lakes and warehouses that support real-time and batch processing.  ",
    },
    {
      imageUrl: "/images/tools/data-engineering/Data Quality-management.jpg",
      card_title: "Data Quality Management",
      card_subtitle:
        "We understand that your data is accurate, uniform, and trustworthy. With our data management solutions, you can detect and correct both conflicting information as well as accidental repetitions.   ",
    },
    {
      imageUrl:
        "/images/tools/data-engineering/data-governance-and-compliance.jpg",
      card_title: "Data Governance and Compliance",
      card_subtitle:
        "We help you establish strong data governance frameworks, ensuring your data management practices comply with industry standards and regulations. Our solutions emphasize data security, privacy, and traceability.  ",
    },
    {
      imageUrl:
        "/images/tools/data-engineering/data-transformation-and-enrichment.jpg",
      card_title: "Data Transformation and Enrichment",
      card_subtitle:
        "We clean, arrange, and enrich your data to make it ready for analytics, enabling actionable insights that help you drive your business. It also helps you to enhance your raw data with our transformation and enrichment services.   ",
    },
    {
      imageUrl: "/images/tools/data-engineering/big-data-solutions.jpg",
      card_title: "Big Data Solutions",
      card_subtitle:
        "Use enormous information stages to handle and evaluate huge amounts of data. We offer complete services for large-scale data such as choosing platforms, designing structures, installing them, supporting them, and enhancing the worth of data. ",
    },
    {
      imageUrl: "/images/tools/data-engineering/real-time-data-processing.jpg",
      card_title: "Real-time Data Processing",
      card_subtitle:
        "We make use of oriented structures combined with a continuous platform that provides real-time data processing thereby keeping your organization in front at the decision-making point in time.",
    },
  ],
  "data-management": [
    {
      imageUrl:
        "/images/tools/data-management/data-strategy-and-consulting.jpg",
      card_title: "Data Strategy and Consulting",
      card_subtitle:
        "At this stage, we help you develop a clear data management strategy that aligns with your business objectives. We work closely with you to design targeted data solutions that drive efficiency, compliance, and growth.",
    },
    {
      imageUrl:
        "/images/tools/data-management/data-governance-and-compliance.jpg",
      card_title: "Data Governance and Compliance",
      card_subtitle:
        "To ensure your data adheres to the regulations of the industry and quality standards, we implement precise policies for data including all the roles and processes that govern it. On the other side, our organization can maintain integrity, safety, and conformity through better frameworks for foes good governance. ",
    },
    {
      imageUrl: "/images/tools/data-management/data-integration.jpg",
      card_title: "Data Integration",
      card_subtitle:
        "We specialize in consolidating structured and unstructured data from various platforms, ensuring consistent access to comprehensive, high-quality datasets that seamlessly integrate data from multiple sources into a unified system.   ",
    },
    {
      imageUrl: "/images/tools/data-management/master-data-management.jpg",
      card_title: "Master Data Management (MDM)",
      card_subtitle:
        "Our primary information administration options help eradicate uncertainties, facilitate information transfer, and enhance decision-making by providing precise and uniform data across your organization.  ",
    },
    {
      imageUrl: "/images/tools/data-management/data-quality-management.jpg",
      card_title: "Data Quality Management",
      card_subtitle:
        "We offer comprehensive data quality management services, including data profiling, data cleansing, and data monitoring to ensure that your information becomes dependable enough so you can make decisions based on facts.  ",
    },
    {
      imageUrl: "/images/tools/data-management/metadata-management.jpg",
      card_title: "Metadata Management",
      card_subtitle:
        "Our metadata management solutions enable you to efficiently handle your data. We assist in cataloging and documenting your data assets, facilitating the finding, accessing, and understanding of information across the enterprise. ",
    },
    {
      imageUrl: "/images/tools/data-management/data-security-and-privacy.jpg",
      card_title: "Data Security and Privacy",
      card_subtitle:
        "By employing advanced data protection techniques, we can ensure that your valuable information is safe. Encryption, access restrictions, and different forms of protection are available to help maintain your data secure and abide by privacy standards. ",
    },
  ],
  "generative-ai-services": [
    {
      imageUrl: "/images/tools/generative-ai/ai-powered-content-generation.jpg",
      card_title: "AI-Powered Content Generation",
      card_subtitle:
        "Level up your content strategy with AI-based solutions. Whether you are automating marketing language, designing graphics, or generating personalized content in huge quantities, we can offer creative solutions that open up connections with your audience.",
    },
    {
      imageUrl: "/images/tools/generative-ai/custom-ai-model-development.jpg",
      card_title: "Custom AI Model Development",
      card_subtitle:
        "Integrate tailor-made AI models to your particular business by using our exclusive Generative AI solutions. We create and teach models that can produce counterfeit data, model scenarios, or invent product designs.",
    },
    {
      imageUrl:
        "/images/tools/generative-ai/conversational-ai-and-chatbots.jpg",
      card_title: "Conversational AI and Chatbots",
      card_subtitle:
        "Our generative AI chatbots and virtual assistants serve as the glue between the client and the organization, thus leading the establishment to develop an unprecedented relationship with the client through the means of language.",
    },
    {
      imageUrl: "/images/tools/generative-ai/ai-for-design-and-creativity.jpg",
      card_title: "AI for Design and Creativity",
      card_subtitle:
        "We unify Generative AI into your creative workflow, leading to fast prototyping, multiple design versions, and novelty through art and design-oriented fields projecting the creative processes with AI tools.",
    },
    {
      imageUrl: "/images/tools/generative-ai/synthetic-data-generation.jpg",
      card_title: "Synthetic Data Generation",
      card_subtitle:
        "We create high-quality artificial data for AI model training, testing, and simulations. The data we offer is an accurate representation of the data that you deal with in the real world, while the data itself is virtual and does not have any privacy issues.",
    },
    {
      imageUrl:
        "/images/tools/generative-ai/automated-code-and-software-generation.jpg",
      card_title: "Automated Code and Software Generation",
      card_subtitle:
        "Our solutions are designed to improve software development processes that will be instrumental in reducing time-to-market and through that, in increasing the code quality level.",
    },
  ],
  "enterprise-ai-services": [
    {
      imageUrl: "/images/tools/enterprise-ai/ai-strategy-and-consulting.jpg",
      card_title: "AI Strategy and Consulting",
      card_subtitle:
        "Our AI professionals collaborate with you to recognize high-impact use cases, design the most suitable AI strategy, and assist in the implementation of your AI transition. ",
    },
    {
      imageUrl:
        "/images/tools/enterprise-ai/custom-ai-solutions-development.jpg",
      card_title: "Custom AI Solutions Development",
      card_subtitle:
        "We deliver custom AI systems, be it predicted analytics, automation, or smart decision-making systems according to your enterprise's goals. ",
    },
    {
      imageUrl:
        "/images/tools/enterprise-ai/machine-learning-and-deep-learning.jpg",
      card_title: "Machine Learning and Deep Learning",
      card_subtitle:
        "Empower advanced insights and automation with machine learning and deep learning models. We fashion and send out scalable ML and DL processes in pace with your organization.  ",
    },
    {
      imageUrl: "/images/tools/enterprise-ai/nlp.jpg",
      card_title: "Natural Language Processing (NLP)",
      card_subtitle:
        "Our AI-driven chatbots, sentiment analysis tools, as well as text analytics systems are constructed to give the user a deeper knowledge coupled with more user involvement. ",
    },
    {
      imageUrl:
        "/images/tools/enterprise-ai/computer-vision-and-image-recognition.jpg",
      card_title: "Computer Vision and Image Recognition",
      card_subtitle:
        "Our computer vision solutions help automate quality control, enhance security, and enable innovative applications such as facial recognition, object detection, and visual data analysis. ",
    },
    {
      imageUrl: "/images/tools/enterprise-ai/ai-powered-automation.jpg",
      card_title: "AI-Powered Automation",
      card_subtitle:
        "Whether it's robotic process automation (RPA) or intelligent workflows, we carry out AI-based solutions that help to raise productivity as well as to save operational costs. ",
    },
  ],
  "data-modernization-services": [
    {
      imageUrl:
        "/images/tools/data-modernization/legacy-system-modernization.jpg",
      card_title: "Legacy System Modernization",
      card_subtitle:
        "We help you re-engineer and optimize your legacy databases, ensuring minimal disruption of services while enhancing performance and scalability.  ",
    },
    {
      imageUrl: "/images/tools/data-modernization/cloud-data-migration.jpg",
      card_title: "Cloud Data Migration",
      card_subtitle:
        "We specialize in cloud migrations across platforms such as AWS, Google Cloud, and Azure empowering improved flexibility, cost-efficiency, and access to advanced data processing capabilities.  ",
    },
    {
      imageUrl:
        "/images/tools/data-modernization/data-warehouse-modernization.jpg",
      card_title: "Data Warehouse Modernization",
      card_subtitle:
        "Transform your old-school data storage into a cloud-native or mixed architecture that allows for on-the-fly information processing, better analysis, and quicker querying.  ",
    },
    {
      imageUrl:
        "/images/tools/data-modernization/big-data-and-advanced-analytics.jpg",
      card_title: "Big Data and Advanced Analytics",
      card_subtitle:
        "Use modern techniques to get more from big data platforms and advanced analytics tools. Forecasts are made possible by integrating AI, ML and data lakes into your infrastructure. ",
    },
    {
      imageUrl:
        "/images/tools/data-modernization/data-governance-and-compliance.jpg",
      card_title: "Data Governance and Compliance",
      card_subtitle:
        "Our method guarantees that your data is always consistent, traceable, and adheres to the relevant industry norms during modernization.  ",
    },
    {
      imageUrl:
        "/images/tools/data-modernization/data-quality-and-transformation.jpg",
      card_title: "Data Quality and Transformation",
      card_subtitle:
        "We enhance data quality and reliability through our data quality and transformation solutions. We clean, standardize, and enrich your data so that it is ready for contemporary analytics and decision-making tools. ",
    },
  ],
  "hubspot-cms-implementation": [
    {
      imageUrl:
        "/images/tools/hubspot/hubspot-cms-implementation/website-development.jpg",
      card_title: "Website Development",
      card_subtitle:
        "We create customized websites that are tailored to your business needs. Utilizing the powerful capabilities of HubSpot CMS, we ensure that your website is user-friendly, visually appealing, and helps convert customers.",
    },
    {
      imageUrl:
        "/images/tools/hubspot/hubspot-cms-implementation/content-strategy.jpg",
      card_title: "Content Strategy",
      card_subtitle:
        "We develop strategic content for your website that effectively describes your business in a convincing way to potential customers. Be it an engaging blog or compelling landing pages, we create content that fosters engagement.",
    },
    {
      imageUrl:
        "/images/tools/hubspot/hubspot-cms-implementation/seo-optimization.jpg",
      card_title: "SEO Optimization",
      card_subtitle:
        "Our SEO experts implement best practices to improve your website ranking such as keyword research, on-page SEO, and back-linking strategies. We make sure to increase visibility and organic traffic to your site.",
    },
    {
      imageUrl:
        "/images/tools/hubspot/hubspot-cms-implementation/technical-setup.jpg",
      card_title: "Technical Setup",
      card_subtitle:
        "We fine-tune your website's performance, ensuring seamless analytics integration, mobile responsiveness, and lightning-fast page loads. Our tech experts handle the technical heavy lifting, so you can focus on growing your business.",
    },
  ],
  "hubspot-managed-services": [
    {
      imageUrl:
        "/images/tools/hubspot/hubspot-optimization/hubSpot-optimization.jpg",
      card_title: "HubSpot Optimization",
      card_subtitle:
        "We offer comprehensive HubSpot optimization services, ensuring all the features are well-configured and are utilized effectively to meet your business needs.",
    },
    {
      imageUrl:
        "/images/tools/hubspot/hubspot-optimization/onboarding-and-setup.jpg",
      card_title: "Onboarding and Setup",
      card_subtitle:
        "We offer a transition to HubSpot with our expert onboarding and setup services. From initial setup to implementation, we handle the entire process.",
    },
    {
      imageUrl:
        "/images/tools/hubspot/hubspot-optimization/strategy-development.jpg",
      card_title: "Strategy Development",
      card_subtitle:
        "We help you leverage HubSpot’s tools to achieve your goals by performing in-depth business analysis, creating custom plans, and implementing roadmaps.",
    },
    {
      imageUrl:
        "/images/tools/hubspot/hubspot-optimization/campaign-management.jpg",
      card_title: "Campaign Management",
      card_subtitle:
        "We design, execute, and monitor marketing campaigns that help you drive engagement and conversions that will help you get measurable results.",
    },
    {
      imageUrl:
        "/images/tools/hubspot/hubspot-optimization/automation-and-workflows.jpg",
      card_title: "Automation and Workflows",
      card_subtitle:
        "We create and optimize automated processes to streamline your marketing, sales, and services, improving your efficiency and productivity.",
    },
    {
      imageUrl:
        "/images/tools/hubspot/hubspot-optimization/training-and-support.jpg",
      card_title: "Training and Support",
      card_subtitle:
        "We provide your team with the necessary training on HubSpot and also provide continuous support to address any questions or challenges.",
    },
    {
      imageUrl:
        "/images/tools/hubspot/hubspot-optimization/reporting-and-analytics.jpg",
      card_title: "Reporting and Analytics",
      card_subtitle:
        "We provide you with reports and analytics of performance and key metrics that help you to take informed decisions, allowing you to refine your strategies.",
    },
    {
      imageUrl:
        "/images/tools/hubspot/hubspot-optimization/technical-services.jpg",
      card_title: "Technical Services",
      card_subtitle:
        "We address any technical issues promptly to make sure that your HubSpot setup runs seamlessly.",
    },
    {
      imageUrl:
        "/images/tools/hubspot/hubspot-optimization/continuous-optimization.jpg",
      card_title: "Continuous Optimization",
      card_subtitle:
        "We regularly review and enhance your HubSpot setup to ensure it is aligned with the evolving business needs and industry trends.",
    },
  ],
  "hubspot-marketing-implementation": [
    {
      imageUrl:
        "/images/tools/hubspot/hubspot-marketing/campaign-creation-and-execution.jpg",
      card_title: "Campaign Creation and Execution",
      card_subtitle:
        "We create marketing campaigns that attract your audience and help you drive results. From email to social media, our strategic approach makes sure your message is amplified.",
    },
    {
      imageUrl: "/images/tools/hubspot/hubspot-marketing/lead-generation.jpg",
      card_title: "Lead Generation",
      card_subtitle:
        "We help you to attract, capture, and nurture leads that are beneficial to you so that you can focus on converting them to loyal customers. Our customized strategies ensure a steady flow of good-quality leads.",
    },
    {
      imageUrl:
        "/images/tools/hubspot/hubspot-marketing/marketing-automation.jpg",
      card_title: "Marketing Automation",
      card_subtitle:
        "We automate your marketing workflows, which gives you the time to focus on what matters. We ensure to provide solutions that guarantee consistent, timely, and relevant interactions with your audience.",
    },
    {
      imageUrl:
        "/images/tools/hubspot/hubspot-marketing/analytics-and-reporting.jpg",
      card_title: "Analytics and Reporting",
      card_subtitle:
        "With HubSpot analytics and reporting services, you can get clear visibility into your marketing performance helping you to take informed decisions and to refine your strategies to maximize your ROI.",
    },
  ],
  "hubspot-sales-implementation": [
    {
      imageUrl:
        "/images/tools/hubspot/hubspot-sales/crm-setup-and-customization.jpg",
      card_title: "CRM Setup and Customization",
      card_subtitle:
        "We customize and set up the HubSpot CRM according to your business needs. Our team also configures the CRM to capture all the customer data and streamline your sales process ensuring your team has all the tools to close the deals effectively.",
    },
    {
      imageUrl: "/images/tools/hubspot/hubspot-sales/sales-automation.jpg",
      card_title: "Sales Automation",
      card_subtitle:
        "We implement automated workflows for routine tasks such as follow-ups, lead nurturing, and pipeline management. This allows your team to build relationships and close deals.",
    },
    {
      imageUrl: "/images/tools/hubspot/hubspot-sales/email-automation.jpg",
      card_title: "Email Tracking",
      card_subtitle:
        "You can stay informed with our email tracking services. We set up email tracking systems that track email opens, clicks, and responses giving you valuable insights on customer engagement.",
    },
    {
      imageUrl:
        "/images/tools/hubspot/hubspot-sales/sales-analytics-and-reporting.jpg",
      card_title: "Sales Analytics and Reporting",
      card_subtitle:
        "We configure HubSpot to provide you with reports and analytics about sales performance, pipeline health, and individual rep activity. This helps you to take informed decisions.",
    },
  ],
  "hubspot-services-implementation": [
    {
      imageUrl: "/images/tools/hubspot/hubspot-services/help-desk-setup.jpg",
      card_title: "Help Desk Setup",
      card_subtitle:
        "We streamline your customer support with expert help desk setup. We configure HubSpot Service Hub to provide you with a centralized system where your team can manage, track, and resolve customer queries effectively.",
    },
    {
      imageUrl:
        "/images/tools/hubspot/hubspot-services/knowledge-base-creation.jpg",
      card_title: "Knowledge Base Creation",
      card_subtitle:
        "You can empower your customers with a repository of knowledge. We help create an organized set of articles, FAQs, and how-to-do guidelines that allow your customers to find the information that they are looking for themselves.",
    },
    {
      imageUrl:
        "/images/tools/hubspot/hubspot-services/customer-feedback-mechanism.jpg",
      card_title: "Customer Feedback Mechanisms",
      card_subtitle:
        "We understand the need for customer feedback for business growth hence we create effective feedback mechanisms such as surveys, feedback forms, NPS trackers, etc. to gather the valuable insights necessary.",
    },
    {
      imageUrl: "/images/tools/hubspot/hubspot-services/service-automation.jpg",
      card_title: "Service Automation",
      card_subtitle:
        "We can help you to automate repetitive mundane tasks to reduce manual errors. This allows your team to focus on complex issues to improve the efficiency of the process and to ensure timely responses.",
    },
  ],
"custom-app-development": [
    {
      imageUrl:
        "/images/tools/custom-app-development/consultation-and-strategy.jpg",
      card_title: " Consultation and Strategy",
      card_subtitle:
        "We analyze market trends, study user behavior, and perform competitor analysis to craft a comprehensive strategy for your app. Our detailed roadmap defines objectives, key features, and development phases to ensure a well-structured approach.",
    },
    {
      imageUrl:
        "/images/tools/custom-app-development/native-app-development.jpg",
      card_title: "Native App Development",
      card_subtitle:
        "We specialize in developing high-performance native applications tailored for Android and iOS. By leveraging platform-specific technologies, we ensure smooth functionality and optimal performance.",
    },
    {
      imageUrl:
        "/images/tools/custom-app-development/cross-platform-and-backend-development.jpg",
      card_title: "Cross-Platform & Backend Development",
      card_subtitle:
        "We create high-performance cross-platform apps with a robust backend to ensure seamless functionality, scalability, and security.",
    },
    {
      imageUrl:
        "/images/tools/custom-app-development/api-integration.jpg",
      card_title: "API Integration",
      card_subtitle:
        "We enhance app functionality by integrating third-party APIs, enabling seamless connections with external services, payment gateways, and other essential tools.",
    },
    {
      imageUrl:
        "/images/tools/custom-app-development/testing-and-deployment.jpg",
      card_title: " Testing & Deployment",
      card_subtitle:
        "We rigorously test for stability, fix bugs, and refine based on user feedback. After that, we handle beta testing, app store submissions, and ensure compliance for a smooth launch.",
    },
    {
      imageUrl:
        "/images/tools/custom-app-development/maintenance-and-security.jpg",
      card_title: "Maintenance & Security",
      card_subtitle:
        "We provide ongoing updates, bug fixes, and performance optimizations while ensuring top-tier security and compliance with industry standards.",
    },
  ],
  "ui-and-ux": [
    {
      imageUrl:
        "/images/tools/ui-and-ux/user-research-and-analysis.jpg",
      card_title: "User Research & Analysis",
      card_subtitle:
        "Understanding user behavior for data-driven design.",
    },
    {
      imageUrl:
        "/images/tools/ui-and-ux/wireframing-and-prototyping.jpg",
      card_title: "Wireframing & Prototyping",
      card_subtitle:
        "Creating engaging blueprints for better usability.",
    },
    {
      imageUrl:
        "/images/tools/ui-and-ux/ui-ux-page.jpg",
      card_title: "UI/UX Design",
      card_subtitle:
        "Designing visually stunning and user-friendly interface.",
    },
    {
      imageUrl:
        "/images/tools/ui-and-ux/mobile-and-web-app-design.jpg",
      card_title: "Mobile & Web App Design ",
      card_subtitle:
        "Engaging designs customised for cross-platform experiences.",
    },
    {
      imageUrl:
        "/images/tools/ui-and-ux/usability-testing.jpg",
      card_title: " Usability Testing ",
      card_subtitle:
        "Ensuring seamless user interaction and functionality.",
    },
    {
      imageUrl:
        "/images/tools/ui-and-ux/design-system-and-branding.jpg",
      card_title: "Design System & Branding",
      card_subtitle:
        "Offering consistent, scalable, and brand-aligned visuals.",
    },
  ],
  // Add similar arrays for other services (e.g., app-development, software-development, etc.)
};
