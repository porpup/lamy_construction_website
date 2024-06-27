import React from "react";
import { LanguageProvider } from "./components/LanguageContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Floor from "./components/Floor";
import Paint from "./components/Paint";
import Briks from "./components/Briks";
import Footer from "./components/Footer";

const Page = () => {
	return (
		<div>
			<LanguageProvider>
				<Navbar />
				<Home />
				<Floor />
				<Paint />

				<Briks />
				<Footer />
			</LanguageProvider>
		</div>
	);
};

export default Page;
