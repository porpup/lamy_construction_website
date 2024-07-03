"use client";

import React, { useState, useEffect } from "react";
import { LanguageProvider } from "./components/LanguageContext";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Floor from "./components/Floor";
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
		const handleScroll = () => {
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
		handleScroll();

		// Update theme color on scroll
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
				<Floor />
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
