"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import { metadata } from "./metadata";
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

		updateThemeColor();
		window.addEventListener("scroll", updateThemeColor);

		return () => {
			window.removeEventListener("scroll", updateThemeColor);
		};
	}, [navbarColor]);

	const variants = {
		initial: { opacity: 0 },
		animate: { opacity: 1, transition: { duration: 0.5 } },
		exit: { opacity: 0, transition: { duration: 0.5 } },
	};

	return (
		<LanguageProvider>
			<Head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
				<meta name="keywords" content={metadata.keywords} />
				{metadata.icons.icon.map((icon) => (
					<link
						key={icon.sizes}
						rel="icon"
						type={icon.type}
						sizes={icon.sizes}
						href={icon.url}
					/>
				))}
				<link rel="apple-touch-icon" href={metadata.icons.apple} />
				{metadata.icons.other.map((icon) => (
					<link
						key={icon.url}
						rel={icon.rel}
						href={icon.url}
						color={icon.color}
					/>
				))}
				<link rel="manifest" href={metadata.manifest} />
				<meta name="theme-color" content="#7DD3FC" />
				<meta
					name="msapplication-TileColor"
					content={metadata.msapplication.TileColor}
				/>
				<meta
					name="msapplication-config"
					content={metadata.msapplication.config}
				/>
				<meta property="og:title" content={metadata.openGraph.title} />
				<meta
					property="og:description"
					content={metadata.openGraph.description}
				/>
				<meta property="og:url" content={metadata.openGraph.url} />
				<meta property="og:type" content={metadata.openGraph.type} />
				{metadata.openGraph.images.map((image) => (
					<meta key={image.url} property="og:image" content={image.url} />
				))}
				<meta name="twitter:card" content={metadata.twitter.card} />
				<meta name="twitter:title" content={metadata.twitter.title} />
				<meta
					name="twitter:description"
					content={metadata.twitter.description}
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
