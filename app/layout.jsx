"use client";

import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@styles/globals.css";
import { useEffect, useState } from "react";
import { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
	navbarColor,
	fullscreen,
	fixedBgColor,
}) {
	const [themeColor, setThemeColor] = useState(navbarColor || fixedBgColor);

	useEffect(() => {
		const metaThemeColor = document.querySelector("meta[name=theme-color]");
		if (metaThemeColor) {
			metaThemeColor.setAttribute(
				"content",
				fullscreen ? "#000000" : themeColor
			);
		}
	}, [fullscreen, themeColor]);

	useEffect(() => {
		setThemeColor(navbarColor || fixedBgColor || "#292524"); // Default to bg-stone-800 color
	}, [navbarColor, fixedBgColor]);

	const jsonLd = {
		"@context": "http://schema.org",
		"@type": "Organization",
		name: "Lamy Construction",
		url: "https://www.constructionlamy.com",
		logo: "https://www.constructionlamy.com/assets/icons/logo.png",
	};

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
				<link rel="icon" type="image/png" sizes="16x16" href="/icon?size=16" />
				<link rel="icon" type="image/png" sizes="32x32" href="/icon?size=32" />
				<link rel="icon" type="image/png" sizes="48x48" href="/icon?size=48" />
				<link rel="manifest" href="/assets/icons/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/assets/icons/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta name="apple-mobile-web-app-title" content="Lamy Construction" />
				<meta name="application-name" content="Lamy Construction" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta
					name="msapplication-config"
					content="/assets/icons/browserconfig.xml"
				/>
				<meta
					name="theme-color"
					content={fullscreen ? "#000000" : themeColor}
				/>
				<meta name="description" content={metadata.description} />
				<meta name="keywords" content={metadata.keywords} />
				<meta property="og:title" content={metadata.title} />
				<meta property="og:description" content={metadata.description} />
				<meta
					property="og:image"
					content="https://www.constructionlamy.com/assets/icons/android-chrome-512x512.png"
				/>
				<meta property="og:url" content="https://www.constructionlamy.com" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={metadata.title} />
				<meta name="twitter:description" content={metadata.description} />
				<meta
					name="twitter:image"
					content="https://www.constructionlamy.com/assets/icons/android-chrome-192x192.png"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
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
