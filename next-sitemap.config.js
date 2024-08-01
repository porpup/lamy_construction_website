/** @type {import('next-sitemap').IConfig} */
const config = {
	siteUrl: "https://www.constructionlamy.com",
	generateRobotsTxt: false, // Disable automatic robots.txt generation
	sitemapSize: 5000, // Adjust based on the number of URLs
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/redirect-to-oiq", "/redirect-to-oaq"], // Paths to exclude
			},
		],
	},
};

module.exports = config;
