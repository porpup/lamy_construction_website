"use client";

import React, { useState, useEffect } from "react";
import { LanguageProvider } from "./components/LanguageContext";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import WhoAreWe from "./components/WhoAreWe";
import Painting from "./components/Painting";
import Design from "./components/Design";
import Insulation from "./components/Insulation";
import Roofing from "./components/Roofing";
import Washing from "./components/Washing";
import Briks from "./components/Briks";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

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

	const variants = {
		initial: { opacity: 0 },
		animate: { opacity: 1, transition: { duration: 0.5 } },
		exit: { opacity: 0, transition: { duration: 0.5 } },
	};

	return (
		<LanguageProvider>
			<motion.div
				initial="initial"
				animate="animate"
				exit="exit"
				variants={variants}
			>
				<Navbar
					onColorChange={handleColorChange}
					initialBgColor="bg-sky-300/90"
				/>
				<Welcome />
				<WhoAreWe />
				<Painting />
				<Design />
				<Insulation />
				<Roofing />
				<Washing />
				<Briks />
				<Footer />
			</motion.div>
		</LanguageProvider>
	);
};

export default Home;
