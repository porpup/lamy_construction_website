import React from "react";
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

const Home = () => {
	return (
		<LanguageProvider>
			<Navbar />
			<Welcome />
			<Floor />
			<Paint />
			<Design />
			<Insulation />
			<Roofing />
			<Washing />
			<Briks />
			<Footer />
		</LanguageProvider>
	);
};

export default Home;
