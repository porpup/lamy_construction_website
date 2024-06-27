import { Inter } from "next/font/google";
import "@styles/globals.css";
import BasePath from "./components/BasePath";

const inter = Inter({ subsets: ["latin"] });
const basePath = BasePath();

export const metadata = {
	title: "Lamy Construction",
	description: "Lamy Construction Website",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
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
				<meta name="theme-color" content="#ffffff" />
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
