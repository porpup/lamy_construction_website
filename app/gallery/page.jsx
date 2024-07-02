"use client";

import React, { useState } from "react";
import { LanguageProvider } from "@app/components/LanguageContext";
import Navbar from "@app/components/Navbar";
import ImageCarousel from "@app/components/ImageCarousel";
import Footer from "@app/components/Footer";
import RootLayout from "@app/layout";

const Gallery = () => {
	const [navbarColor, setNavbarColor] = useState("#292524");

	const handleColorChange = (color) => {
		setNavbarColor(color);
	};

	return (
		<LanguageProvider>
			<RootLayout navbarColor={navbarColor}>
				<Navbar scrolled={true} onColorChange={handleColorChange} />
				<ImageCarousel />
				<Footer />
			</RootLayout>
		</LanguageProvider>
	);
};

export default Gallery;
