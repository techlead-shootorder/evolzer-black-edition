/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://www.evolzer.com/", // Replace with your site's base URL
    generateRobotsTxt: true, // Generates a robots.txt file
    sitemapSize: 5000, // Split sitemaps if you have many pages
    changefreq: "daily", // Optional: Frequency of page changes
    priority: 0.7, // Optional: Default priority for URLs
    exclude: ["/admin/*", "/api/*"], // Optional: Exclude specific routes
    robotsTxtOptions: {
      additionalSitemaps: [
        "", // Add custom sitemaps if needed
      ],
    },
  };
  