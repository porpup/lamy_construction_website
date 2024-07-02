"use client";

import React, { useState } from "react";
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

	return (
		<LanguageProvider>
			<RootLayout navbarColor={navbarColor}>
				<Navbar onColorChange={handleColorChange} />
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
