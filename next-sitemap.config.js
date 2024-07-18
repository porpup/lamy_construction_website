/** @type {import('next-sitemap').IConfig} */
const config = {
	siteUrl: "https://www.constructionlamy.com",
	generateRobotsTxt: true, // Enable to generate a `robots.txt` file
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				allow: "/",
			},
		],
	},
};

module.exports = config;
