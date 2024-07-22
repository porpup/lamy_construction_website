/** @type {import('next-sitemap').IConfig} */
const config = {
	siteUrl: "https://www.constructionlamy.com",
	generateRobotsTxt: false, // Disable automatic robots.txt generation
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/redirect-to-oiq", "/redirect-to-oaq"], // Add the paths you want to exclude
			},
		],
		additionalSitemaps: ["https://www.constructionlamy.com/sitemap.xml"],
	},
};

module.exports = config;
