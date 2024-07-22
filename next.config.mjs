/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
	async redirects() {
		return [
			{
				source: "/redirect-to-oiq", // Path to redirect from
				destination: "https://www.oiq.qc.ca", // External URL
				permanent: true,
			},
			{
				source: "/redirect-to-oaq", // Path to redirect from
				destination: "https://www.oaq.com", // External URL
				permanent: true,
			},
		];
	},
};

export default nextConfig;
