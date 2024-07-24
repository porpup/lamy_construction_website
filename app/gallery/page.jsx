"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import { metadata } from '@app/metadata';
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
			metaThemeColor.setAttribute("content", "#292524");
		}
	}, []);

	const variants = {
		initial: { opacity: 0 },
		animate: { opacity: 1, transition: { duration: 0.5 } },
		exit: { opacity: 0, transition: { duration: 0.5 } },
	};

	return (
		<LanguageProvider>
			<Head>
				<title>Gallery - Lamy Construction</title>
				<meta
					name="description"
					content="Explore the gallery of Lamy Construction's completed projects."
				/>
				<meta property="og:title" content="Gallery - Lamy Construction" />
				<meta
					property="og:description"
					content="Explore the gallery of Lamy Construction's completed projects."
				/>
				<meta
					property="og:url"
					content="https://www.constructionlamy.com/gallery"
				/>
				<meta property="og:type" content="website" />
				{metadata.openGraph.images.map((image) => (
					<meta key={image.url} property="og:image" content={image.url} />
				))}
				<meta name="twitter:card" content={metadata.twitter.card} />
				<meta name="twitter:title" content="Gallery - Lamy Construction" />
				<meta
					name="twitter:description"
					content="Explore the gallery of Lamy Construction's completed projects."
				/>
				{metadata.twitter.images.map((image) => (
					<meta key={image} name="twitter:image" content={image} />
				))}
			</Head>
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
