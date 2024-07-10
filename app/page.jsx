"use client";

import React, { useState, useEffect } from "react";
import { LanguageProvider } from "./components/LanguageContext";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import WhoAreWe from "./components/WhoAreWe";
import Paint from "./components/Paint";
import Design from "./components/Design";
import Insulation from "./components/Insulation";
import Roofing from "./components/Roofing";
import Washing from "./components/Washing";
import Briks from "./components/Briks";
import Footer from "./components/Footer";
import RootLayout from "./layout";

const Home = () => {
	const [navbarColor, setNavbarColor] = useState("#7DD3FC");

	const handleColorChange = (color) => {
		setNavbarColor(color);
	};

	useEffect(() => {
		const updateThemeColor = () => {
			const currentScrollY = window.scrollY;
			const metaThemeColor = document.querySelector("meta[name=theme-color]");
			if (metaThemeColor) {
				if (currentScrollY === 0) {
					metaThemeColor.setAttribute("content", "#7DD3FC");
				} else {
					metaThemeColor.setAttribute("content", navbarColor);
				}
			}
		};

		// Update theme color on initial load
		updateThemeColor();

		// Update theme color on scroll
		const handleScroll = () => {
			updateThemeColor();
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [navbarColor]);

	return (
		<LanguageProvider>
			<RootLayout navbarColor={navbarColor}>
				<Navbar
					onColorChange={handleColorChange}
					initialBgColor="bg-sky-300/90"
				/>
				<Welcome />
				<WhoAreWe />
				<Paint />
				<Design />
				<Insulation />
				<Roofing />
				<Washing />
				<Briks />
				<Footer />
			</RootLayout>
		</LanguageProvider>
	);
};

export default Home;
