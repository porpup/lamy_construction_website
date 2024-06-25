import { Inter } from "next/font/google";
import "@styles/globals.css";
import BasePath from "./components/BasePath";

const inter = Inter({ subsets: ["latin"] });
const basePath = BasePath();

export const metadata = {
	title: "Lamy Construction",
	description: "Lamy Construction Website",
	icons: {
		icon: `${basePath}/assets/logo.png`,
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
