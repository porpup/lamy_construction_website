import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Floor from "./components/Floor";
import Paint from './components/Paint';
import Briks from './components/Briks';
import Footer from "./components/Footer";

const page = () => {
	return (
		<div>
			<Navbar />
			<Home />
			<Floor />
			<Paint />

			<Briks/>
			<Footer />
		</div>
	);
};

export default page;
