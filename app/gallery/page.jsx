import React from "react";
import { LanguageProvider } from "@app/components/LanguageContext";
import Navbar from "@app/components/Navbar";
import ImageCarousel from "@app/components/ImageCarousel";
import Footer from "@app/components/Footer";

const Gallery = () => {
	return (
		<LanguageProvider>
			<Navbar scrolled={true} />
			<ImageCarousel />
			<Footer />
		</LanguageProvider>
	);
};

export default Gallery;
