const fs = require("fs");
const path = require("path");

const robotsTxtContent = `
User-agent: *
Allow: /
Disallow: /redirect-to-oiq
Disallow: /redirect-to-oaq

# Sitemaps
Sitemap: https://www.constructionlamy.com/sitemap.xml
`.trim();

const outputPath = path.join(__dirname, "public", "robots.txt");

fs.writeFileSync(outputPath, robotsTxtContent, "utf8");
console.log("robots.txt file generated successfully!");
