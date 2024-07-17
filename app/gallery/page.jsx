"use client";

import React, { useState } from "react";
import { LanguageProvider } from "../components/LanguageContext";
import Navbar from "../components/Navbar";
import ImageCarousel from "../components/ImageCarousel";
import Footer from "../components/Footer";

const Gallery = () => {
	const [navbarColor, setNavbarColor] = useState("#292524");
	const [fullscreen, setFullscreen] = useState(false);

	const handleColorChange = (color) => {
		setNavbarColor(color);
	};

	const handleFullscreenChange = (isFullscreen) => {
		setFullscreen(isFullscreen);
	};

	return (
		<LanguageProvider>
			<Navbar
				scrolled={false}
				onColorChange={handleColorChange}
				initialBgColor="bg-stone-800/90"
			/>
			<ImageCarousel onFullscreenChange={handleFullscreenChange} />
			<Footer />
		</LanguageProvider>
	);
};

export default Gallery;
