import React from "react";

// Web Development Data

const webDevelopment = [
  // Stacks
  {
    name: "LAMP",
    imageUrl: "/images/tech-stack/lampstark.webp",
    navigate: "/under-maintenance",
    type: "stack",
  },
  {
    name: "MEAN",
    imageUrl: "/images/tech-stack/mean.webp",
    navigate: "/under-maintenance",
    type: "stack",
  },
  {
    name: "MERN",
    imageUrl: "/images/tech-stack/mern.webp",
    navigate: "/under-maintenance",
    type: "stack",
  },
  {
    name: "MEVN",
    imageUrl: "/images/tech-stack/mevn.webp",
    navigate: "/under-maintenance",
    type: "stack",
  },
  // Tools
  {
    name: "PHP",
    imageUrl: "/images/tech-stack/php.png",
    navigate: "/web-development/php",
    type: "tool",
  },
  {
    name: "Python",
    imageUrl: "/images/tech-stack/python.png",
    navigate: "/web-development/python-services",
    type: "tool",
  },
  {
    name: "JavaScript",
    imageUrl: "/images/tech-stack/javascript.webp",
    navigate: "/under-maintenance",
    type: "tool",
  },
  {
    name: "TypeScript",
    imageUrl: "/images/tech-stack/typescript.webp",
    navigate: "/under-maintenance",
    type: "tool",
  },
  {
    name: "Perl",
    imageUrl: "/images/tech-stack/perl.webp",
    navigate: "/under-maintenance",
    type: "tool",
  },
  {
    name: "Bash",
    imageUrl: "/images/tech-stack/Bash.webp",
    navigate: "/under-maintenance",
    type: "tool",
  },
  {
    name: "Go",
    imageUrl: "/images/tech-stack/go.webp",
    navigate: "/under-maintenance",
    type: "tool",
  },
  {
    name: "Rust",
    imageUrl: "/images/tech-stack/Rust.webp",
    navigate: "/under-maintenance",
    type: "tool",
  },
  // Frameworks
  {
    name: "React JS",
    imageUrl: "/images/tech-stack/img1.png",
    navigate: "/web-development/react",
    type: "framework",
  },
  {
    name: "Angular JS",
    imageUrl: "/images/tech-stack/img3.png",
    navigate: "/web-development/angular",
    type: "framework",
  },
  {
    name: "Vue JS",
    imageUrl: "/images/tech-stack/img4.jpg",
    navigate: "/web-development/vue",
    type: "framework",
  },
  {
    name: "Next JS",
    imageUrl: "/images/tech-stack/nexjs.webp",
    navigate: "/under-maintenance",
    type: "framework",
  },
  // Databases
  {
    name: "MongoDB",
    imageUrl: "/images/tech-stack/mangodb.webp",
    navigate: "/web-development/",
    type: "database",
  },
  {
    name: "MySQL",
    imageUrl: "/images/tech-stack/mysql.webp",
    navigate: "/under-maintenance",
    type: "database",
  },
  {
    name: "PostgreSQL",
    imageUrl: "/images/tech-stack/postgresql.webp",
    navigate: "/under-maintenance",
    type: "database",
  },
  {
    name: "SQlite",
    imageUrl: "/images/tech-stack/sql-lite.webp",
    navigate: "/under-maintenance",
    type: "database",
  },
  {
    name: "Microsoft Azure SQL Database",
    imageUrl: "/images/tech-stack/sql-azure.webp",
    navigate: "/under-maintenance",
    type: "database",
  },
  {
    name: "Oracle Database",
    imageUrl: "/images/tech-stack/oracle.webp",
    navigate: "/under-maintenance",
    type: "database",
  },
  {
    name: "IBM",
    imageUrl: "/images/tech-stack/ibm-db.webp",
    navigate: "/under-maintenance",
    type: "database",
  },
  {
    name: "Reddis",
    imageUrl: "/images/tech-stack/redis.webp",
    navigate: "/under-maintenance",
    type: "database",
  },
  {
    name: "Amazon DynamoDB",
    imageUrl: "/images/tech-stack/amazon-dynamo.webp",
    navigate: "/under-maintenance",
    type: "database",
  },
  {
    name: "Amazon RDS",
    imageUrl: "/images/tech-stack/amazon-rds.webp",
    navigate: "/under-maintenance",
    type: "database",
  },
  {
    name: "SAP Hana",
    imageUrl: "/images/tech-stack/sap-hana.webp",
    navigate: "/under-maintenance",
    type: "database",
  },

  // Platforms
  {
    name: "WordPress",
    imageUrl: "/images/tech-stack/wordpress.webp",
    navigate: "/under-maintenance",
    type: "platform",
  },
  {
    name: "Shopify",
    imageUrl: "/images/tech-stack/shopify.png",
    navigate: "/web-development/shopify",
    type: "platform",
  },
  {
    name: "BigCommerce",
    imageUrl: "/images/tech-stack/bigcommerce.webp",
    navigate: "/under-maintenance",
    type: "platform",
  },
  {
    name: "Squarespace",
    imageUrl: "/images/tech-stack/squarespace.webp",
    navigate: "/web-development/squarespace",
    type: "platform",
  },
  {
    name: "Wix",
    imageUrl: "/images/tech-stack/wix.webp",
    navigate: "/under-maintenance",
    type: "platform",
  },
  {
    name: "Maganto",
    imageUrl: "/images/tech-stack/Magento.webp",
    navigate: "/under-maintenance",
    type: "platform",
  },
];

// Filter the data into different categories
export const webDevelopmentStacks = webDevelopment.filter(
  (item) => item.type === "stack"
);

export const webDevelopmentFrameworks = webDevelopment.filter(
  (item) => item.type === "framework"
);

export const webDevelopmentTools = webDevelopment.filter(
  (item) => item.type === "tool"
);

export const webDevelopmentDatabases = webDevelopment.filter(
  (item) => item.type === "database"
);

export const webDevelopmentPlatforms = webDevelopment.filter(
  (item) => item.type === "platform"
);

// All Services Data
const servicesData = {
  "web-development": [
    {
      name: "LAMP",
      imageUrl: "/images/tech-stack/lampstark.webp",
      navigate: "/under-maintenance",
      type: "stack",
    },
    {
      name: "MEAN",
      imageUrl: "/images/tech-stack/mean.webp",
      navigate: "/under-maintenance",
      type: "stack",
    },
    {
      name: "MERN",
      imageUrl: "/images/tech-stack/mern.webp",
      navigate: "/under-maintenance",
      type: "stack",
    },
    {
      name: "MEVN",
      imageUrl: "/images/tech-stack/mevn.webp",
      navigate: "/under-maintenance",
      type: "stack",
    },
    // Tools
    {
      name: "PHP",
      imageUrl: "/images/tech-stack/php.png",
      navigate: "/web-development/php",
      type: "tool",
    },
    {
      name: "Python",
      imageUrl: "/images/tech-stack/python.png",
      navigate: "/web-development/python-services",
      type: "tool",
    },
    {
      name: "JavaScript",
      imageUrl: "/images/tech-stack/javascript.webp",
      navigate: "/under-maintenance",
      type: "tool",
    },
    {
      name: "TypeScript",
      imageUrl: "/images/tech-stack/typescript.webp",
      navigate: "/under-maintenance",
      type: "tool",
    },
    {
      name: "Perl",
      imageUrl: "/images/tech-stack/perl.webp",
      navigate: "/under-maintenance",
      type: "tool",
    },
    {
      name: "Bash",
      imageUrl: "/images/tech-stack/Bash.webp",
      navigate: "/under-maintenance",
      type: "tool",
    },
    {
      name: "Go",
      imageUrl: "/images/tech-stack/go.webp",
      navigate: "/under-maintenance",
      type: "tool",
    },
    {
      name: "Rust",
      imageUrl: "/images/tech-stack/Rust.webp",
      navigate: "/under-maintenance",
      type: "tool",
    },
    // Frameworks
    {
      name: "React JS",
      imageUrl: "/images/tech-stack/img1.png",
      navigate: "/web-development/react",
      type: "framework",
    },
    {
      name: "Angular JS",
      imageUrl: "/images/tech-stack/img3.png",
      navigate: "/web-development/angular",
      type: "framework",
    },
    {
      name: "Vue JS",
      imageUrl: "/images/tech-stack/img4.jpg",
      navigate: "/web-development/vue",
      type: "framework",
    },
    {
      name: "Next JS",
      imageUrl: "/images/tech-stack/nexjs.webp",
      navigate: "/under-maintenance",
      type: "framework",
    },
    // Databases
    {
      name: "MongoDB",
      imageUrl: "/images/tech-stack/mangodb.webp",
      navigate: "/under-maintenance",
      type: "database",
    },
    {
      name: "MySQL",
      imageUrl: "/images/tech-stack/mysql.webp",
      navigate: "/under-maintenance",
      type: "database",
    },
    {
      name: "PostgreSQL",
      imageUrl: "/images/tech-stack/postgresql.webp",
      navigate: "/under-maintenance",
      type: "database",
    },
    {
      name: "SQlite",
      imageUrl: "/images/tech-stack/sql-lite.webp",
      navigate: "/under-maintenance",
      type: "database",
    },
    {
      name: "Microsoft Azure SQL Database",
      imageUrl: "/images/tech-stack/sql-azure.webp",
      navigate: "/under-maintenance",
      type: "database",
    },
    {
      name: "Oracle Database",
      imageUrl: "/images/tech-stack/oracle.webp",
      navigate: "/under-maintenance",
      type: "database",
    },
    {
      name: "IBM",
      imageUrl: "/images/tech-stack/ibm-db.webp",
      navigate: "/under-maintenance",
      type: "database",
    },
    {
      name: "Reddis",
      imageUrl: "/images/tech-stack/redis.webp",
      navigate: "/under-maintenance",
      type: "database",
    },
    {
      name: "Amazon DynamoDB",
      imageUrl: "/images/tech-stack/amazon-dynamo.webp",
      navigate: "/under-maintenance",
      type: "database",
    },
    {
      name: "Amazon RDS",
      imageUrl: "/images/tech-stack/amazon-rds.webp",
      navigate: "/under-maintenance",
      type: "database",
    },
    {
      name: "SAP Hana",
      imageUrl: "/images/tech-stack/sap-hana.webp",
      navigate: "/under-maintenance",
      type: "database",
    },

    // Platforms
    {
      name: "WordPress",
      imageUrl: "/images/tech-stack/wordpress.webp",
      navigate: "/under-maintenance",
      type: "platform",
    },
    {
      name: "Shopify",
      imageUrl: "/images/tech-stack/shopify.png",
      navigate: "/web-development/shopify",
      type: "platform",
    },
    {
      name: "BigCommerce",
      imageUrl: "/images/tech-stack/bigcommerce.webp",
      navigate: "/under-maintenance",
      type: "platform",
    },
    {
      name: "Squarespace",
      imageUrl: "/images/tech-stack/squarespace.webp",
      navigate: "/under-maintenance",
      type: "platform",
    },
    {
      name: "Wix",
      imageUrl: "/images/tech-stack/wix.webp",
      navigate: "/under-maintenance",
      type: "platform",
    },
    {
      name: "Maganto",
      imageUrl: "/images/tech-stack/Magento.webp",
      navigate: "/under-maintenance",
      type: "platform",
    },
    // Add more items as needed
  ],

  "mobile-application": [
    // Stacks
    {
      name: "React Native",
      imageUrl: "/images/tech-stack/React Native.png",
      navigate: "/mobile-application/react-native",
      type: "framework",
    },
    {
      name: "Android Application",
      imageUrl: "/images/tech-stack/android.png",
      navigate: "/mobile-application/android-app-development",
      type: "tool",
    },

    {
      name: "Flutter",
      imageUrl: "/images/tech-stack/flutter.png",
      navigate: "/mobile-application/flutter",
      type: "framework",
    },
    {
      name: "Ionic App",
      imageUrl: "/images/tech-stack/ionic-app-dev.png",
      navigate: "/mobile-application/ionic-app-development",
      type: "framework",
    },
    {
      name: "iOS",
      imageUrl: "/images/tech-stack/ios.png",
      navigate: "/mobile-application/ios",
      type: "tool",
    },
    {
      name: "Cordova",
      imageUrl: "/images/tech-stack/cordova.png",
      navigate: "/mobile-application/cordova",
      type: "framework",
    },
    // Add more items as needed
  ],
  "software-development": [
    {
      name: "Java Web Application",
      imageUrl: "/images/tech-stack/java.png",
      navigate: "/under-maintenance",
      type: "framework",
    },
    {
      name: "Microsoft Azure",
      imageUrl: "/images/tech-stack/microsoft-azure.png",
      navigate: "/under-maintenance",
      type: "tool",
    },
    {
      name: "Springboot",
      imageUrl:"/images/tech-stack/springboot.png",
      navigate: "/under-maintenance",
      type: "framework",
    },
    {
      name: "Ionic App Development",
      imageUrl:"/images/tech-stack/ionic.png",
      navigate: "/under-maintenance",
      type: "framework",
    },
    {
      name: "iOS",
      imageUrl:"/images/tech-stack/ios.png",
      navigate: "/mobile-application/ios",
      type: "framework",
    },
    {
      name: "React Native",
      imageUrl:"/images/tech-stack/img1.png",     
      navigate: "/mobile-application/react-native",
      type: "framework",
    },
  ],

  // Add more categories like "software-development", etc.
};

// Utility function to filter by type for a given category
export const getCategoryDataByType = (category, type) => {
  if (!servicesData[category]) {
    console.warn(`Category '${category}' does not exist in servicesData.`);
    return [];
  }
  return servicesData[category].filter((item) => item.type === type);
};

// Example Usage:
// getCategoryDataByType("web-development", "stack");
// getCategoryDataByType("mobile-application", "tool");
