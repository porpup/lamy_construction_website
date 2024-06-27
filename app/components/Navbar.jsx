"use client";

import React, { useState, useEffect, useContext } from "react";
import BasePath from "./BasePath";
import Link from "next/link";
import Image from "next/image";
import { LanguageContext } from "../components/LanguageContext";
import { Link as ScrollLink } from "react-scroll";
import Controls from "./Controls";

const Navbar = () => {
	const basePath = BasePath();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { language, toggleLanguage, translations } = useContext(LanguageContext);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const linkClass = `font-bold text-lg ${
		isScrolled
			? "text-neutral-100 hover:text-neutral-200"
			: "text-stone-800 tc_hover_light_brown"
	}`;

	return (
		<div
			className={`fixed top-0 left-0 w-full z-10 transition-colors duration-200 ${
				isScrolled ? "bg-stone-800" : "bg_light_yellow"
			}`}
		>
			<div className="mx-auto flex items-center justify-between p-2">
				<Link href="/">
					<Image
						src={`${basePath}/assets/icons/logo.svg`}
						width={55}
						height={55}
						alt="logo"
						priority={true}
						style={{ width: "55px", height: "55px" }}
					/>
				</Link>
				<div className="md:hidden">
					<Controls isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} isScrolled={isScrolled} />
				</div>
				<nav className={`hidden md:flex items-center space-x-4`}>
					<ScrollLink to="home" smooth={true} duration={500} className={`cursor-pointer ${linkClass}`}>
						{translations.home}
					</ScrollLink>
					<ScrollLink
						to="footer"
						smooth={true}
						duration={500}
						className={`cursor-pointer ${linkClass}`}
					>
						{translations.contacts}
					</ScrollLink>
					<button
						onClick={toggleLanguage}
						className={`${linkClass} border border-current px-2 py-1 rounded`}
					>
						{language === "en" ? "FR" : "EN"}
					</button>
				</nav>
			</div>
			{isMenuOpen && (
				<div className="md:hidden flex flex-col items-center space-y-2 p-3">
					<ScrollLink to="home" smooth={true} duration={500} className={`cursor-pointer ${linkClass}`} onClick={toggleMenu}>
						{translations.home}
					</ScrollLink>
					<ScrollLink
						to="footer"
						smooth={true}
						duration={500}
						className={`cursor-pointer ${linkClass}`}
						onClick={toggleMenu}
					>
						{translations.contacts}
					</ScrollLink>
					<button
						onClick={() => {
							toggleLanguage();
							toggleMenu();
						}}
						className={`${linkClass} border border-current px-2 py-1 rounded`}
					>
						{language === "en" ? "FR" : "EN"}
					</button>
				</div>
			)}
		</div>
	);
};

export default Navbar;
