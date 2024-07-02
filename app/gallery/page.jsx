"use client";

import React, { useState } from "react";
import { LanguageProvider } from "@app/components/LanguageContext";
import Navbar from "@app/components/Navbar";
import ImageCarousel from "@app/components/ImageCarousel";
import Footer from "@app/components/Footer";
import RootLayout from "@app/layout";

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
			<RootLayout
				navbarColor={navbarColor}
				fullscreen={fullscreen}
				fixedBgColor="#292524"
			>
				<Navbar
					scrolled={false}
					onColorChange={handleColorChange}
					initialBgColor="bg-stone-800/90"
				/>
				<ImageCarousel onFullscreenChange={handleFullscreenChange} />
				<Footer />
			</RootLayout>
		</LanguageProvider>
	);
};

export default Gallery;
