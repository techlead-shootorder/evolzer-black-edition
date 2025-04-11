/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.evolzer.com/", // Your site's base URL
  generateRobotsTxt: true, // Generate robots.txt file
  sitemapSize: 5000, // Ensure all URLs go into a single sitemap
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/admin/*", "/api/*"],
  generateIndexSitemap: false, // 👈 This disables multiple files like sitemap-0.xml
  sitemapBaseFileName: "sitemap", // 👈 This names the file sitemap.xml instead
  robotsTxtOptions: {
    additionalSitemaps: [], // Optional: Leave empty or add other custom sitemap URLs if needed
  },
};
