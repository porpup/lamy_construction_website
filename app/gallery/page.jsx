"use client";

import React, { useState } from "react";
import { LanguageProvider } from "@app/components/LanguageContext";
import Navbar from "@app/components/Navbar";
import ImageCarousel from "@app/components/ImageCarousel";
import Footer from "@app/components/Footer";
import RootLayout from "@app/layout";

const Gallery = () => {
	const [navbarColor, setNavbarColor] = useState("#93845e"); // Light brown color
	const [fullscreen, setFullscreen] = useState(false);

	const handleColorChange = (color) => {
		setNavbarColor(color);
	};

	const handleFullscreenChange = (isFullscreen) => {
		setFullscreen(isFullscreen);
	};

	return (
		<LanguageProvider>
			<RootLayout
				navbarColor={navbarColor}
				fullscreen={fullscreen}
				fixedBgColor="#292524"
				initialColor="#292524" // Light brown color for initial load
			>
				<Navbar
					scrolled={false}
					onColorChange={handleColorChange}
					initialBgColor="#292524"
				/>
				<ImageCarousel onFullscreenChange={handleFullscreenChange} />
				<Footer />
			</RootLayout>
		</LanguageProvider>
	);
};

export default Gallery;
