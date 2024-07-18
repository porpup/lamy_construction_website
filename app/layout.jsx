"use client";

import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@styles/globals.css";
import { useEffect } from "react";
import { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
	navbarColor,
	fullscreen,
	fixedBgColor,
}) {
	useEffect(() => {
		const metaThemeColor = document.querySelector("meta[name=theme-color]");
		if (metaThemeColor) {
			if (fullscreen) {
				metaThemeColor.setAttribute("content", "#000000"); // Set to the background color when images are in fullscreen
			} else {
				metaThemeColor.setAttribute("content", fixedBgColor || navbarColor);
			}
		}
	}, [navbarColor, fullscreen, fixedBgColor]);

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
					href="/assets/icons/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/assets/icons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/assets/icons/favicon-16x16.png"
				/>
				<link rel="manifest" href="/assets/icons/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/assets/icons/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<link rel="shortcut icon" href="/assets/icons/favicon.ico" />
				<meta name="apple-mobile-web-app-title" content="Lamy Construction" />
				<meta name="application-name" content="Lamy Construction" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta
					name="msapplication-config"
					content="/assets/icons/browserconfig.xml"
				/>
				<meta
					name="theme-color"
					content={fullscreen ? "#000000" : fixedBgColor || navbarColor}
				/>
				<meta name="description" content={metadata.description} />
				<meta name="keywords" content={metadata.keywords} />
				<meta property="og:title" content={metadata.title} />
				<meta property="og:description" content={metadata.description} />
				<meta property="og:image" content="/assets/icons/og-image.png" />
				<meta property="og:url" content="https://www.constructionlamy.com" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={metadata.title} />
				<meta name="twitter:description" content={metadata.description} />
				<meta name="twitter:image" content="/assets/icons/twitter-image.png" />
				<title>{metadata.title}</title>
			</head>
			<body className={inter.className}>
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
