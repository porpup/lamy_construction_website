"use client";

import { Inter } from "next/font/google";
import "@styles/globals.css";
import BasePath from "./components/BasePath";
import { useEffect, useState } from "react";
import { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });
const basePath = BasePath();

export default function RootLayout({ children }) {
	const [navbarColor, setNavbarColor] = useState("#0EA5E9");

	useEffect(() => {
		const metaThemeColor = document.querySelector("meta[name=theme-color]");
		if (metaThemeColor) {
			metaThemeColor.setAttribute("content", navbarColor);
		}
	}, [navbarColor]);

	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<link
					rel="preload"
					href="https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nBrXyw023e.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href={`${basePath}/assets/icons/apple-touch-icon.png`}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href={`${basePath}/assets/icons/favicon-32x32.png`}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href={`${basePath}/assets/icons/favicon-16x16.png`}
				/>
				<link
					rel="manifest"
					href={`${basePath}/assets/icons/site.webmanifest`}
				/>
				<link
					rel="mask-icon"
					href={`${basePath}/assets/icons/safari-pinned-tab.svg`}
					color="#5bbad5"
				/>
				<link
					rel="shortcut icon"
					href={`${basePath}/assets/icons/favicon.ico`}
				/>
				<meta name="apple-mobile-web-app-title" content="Lamy Construction" />
				<meta name="application-name" content="Lamy Construction" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta
					name="msapplication-config"
					content={`${basePath}/assets/icons/browserconfig.xml`}
				/>
				<meta name="theme-color" content={navbarColor} />
				<meta name="description" content={metadata.description} />
				<meta name="keywords" content={metadata.keywords} />
				<meta property="og:title" content={metadata.title} />
				<meta property="og:description" content={metadata.description} />
				<meta
					property="og:image"
					content={`${basePath}/assets/icons/og-image.png`}
				/>
				<meta property="og:url" content="https://yourwebsite.com" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={metadata.title} />
				<meta name="twitter:description" content={metadata.description} />
				<meta
					name="twitter:image"
					content={`${basePath}/assets/icons/twitter-image.png`}
				/>
				<title>{metadata.title}</title>
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
