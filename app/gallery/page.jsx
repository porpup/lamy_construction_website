"use client";

import React, { useState, useEffect } from "react";
import { LanguageProvider } from "../components/LanguageContext";
import Navbar from "../components/Navbar";
import ImageCarousel from "../components/ImageCarousel";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Gallery = () => {
	const [navbarColor, setNavbarColor] = useState("#292524");
	const [fullscreen, setFullscreen] = useState(false);

	const handleColorChange = (color) => {
		setNavbarColor(color);
	};

	const handleFullscreenChange = (isFullscreen) => {
		setFullscreen(isFullscreen);
	};

	useEffect(() => {
		const metaThemeColor = document.querySelector("meta[name=theme-color]");
		if (metaThemeColor) {
			metaThemeColor.setAttribute("content", "#292524"); // Set to bg-stone-800 color
		}
	}, []);

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
					scrolled={false}
					onColorChange={handleColorChange}
					initialBgColor="bg-stone-800/90"
				/>
				<ImageCarousel onFullscreenChange={handleFullscreenChange} />
				<Footer />
			</motion.div>
		</LanguageProvider>
	);
};

export default Gallery;
