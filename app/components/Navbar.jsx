'use client';

import React, { useState, useEffect } from "react";
import BasePath from './BasePath';
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	const basePath = BasePath();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		// Set the initial state based on the current scroll position
		handleScroll();

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={`fixed top-0 left-0 w-full z-10 transition-colors duration-300 ${
				isScrolled ? "bg-stone-800" : "bg-transparent"
			}`}
		>
			<div className="mx-auto flex items-center justify-between p-4">
				<Link href="/">
					<Image
						src={`${basePath}/assets/logo.png`}
						width={70}
						height={70}
						alt="logo"
					/>
				</Link>
				{/* Add other navbar items here */}
			</div>
		</div>
	);
};

export default Navbar;
