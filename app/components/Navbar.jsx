"use client";

import React, { useState, useEffect, useContext, useRef } from "react";
import BasePath from "./BasePath";
import Controls from "./Controls";
import Image from "next/image";
import { LanguageContext } from "./LanguageContext";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({ scrolled, onColorChange }) => {
	const basePath = BasePath();
	const [isScrolled, setIsScrolled] = useState(scrolled || false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { language, toggleLanguage, translations } =
		useContext(LanguageContext);
	const navbarRef = useRef(null);
	const [offset, setOffset] = useState(0);
	const [scrollDirection, setScrollDirection] = useState("up");
	const [lastScrollY, setLastScrollY] = useState(0);
	const scrollThreshold = 50; // Adjust this value to make the detection less sensitive

	useEffect(() => {
		if (!scrolled) {
			const handleScroll = () => {
				const currentScrollY = window.scrollY;
				setIsScrolled(currentScrollY > 10);

				if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
					if (currentScrollY > lastScrollY) {
						setScrollDirection("down");
					} else {
						setScrollDirection("up");
					}
					setLastScrollY(currentScrollY);
				}
			};

			window.addEventListener("scroll", handleScroll);
			return () => {
				window.removeEventListener("scroll", handleScroll);
			};
		}
	}, [scrolled, lastScrollY]);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (navbarRef.current && !navbarRef.current.contains(event.target)) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMenuOpen]);

	useEffect(() => {
		const bodyPaddingTop = parseInt(
			window.getComputedStyle(document.body).paddingTop,
			10
		);
		setOffset(-bodyPaddingTop);
	}, []);

	useEffect(() => {
		const color = isScrolled ? "#292524" : "#7DD3FC";
		onColorChange(color);
	}, [isScrolled, onColorChange]);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const linkClass = `font-bold text-lg ${
		isScrolled
			? "tc_gray hover:text-neutral-100"
			: "text-neutral-100 hover:text-stone-800"
	}`;

	const handleHomeClick = (event) => {
		if (window.location.pathname === `${basePath}/`) {
			event.preventDefault();
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	const handleGalleryClick = (event) => {
		if (window.location.pathname === `${basePath}/gallery`) {
			event.preventDefault();
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	return (
		<div
			ref={navbarRef}
			className={`fixed top-0 left-0 w-full z-10 transition-transform duration-200 px-4 ${
				isScrolled ? "bg-stone-800/90" : "bg-sky-300/90"
			} ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}`}
		>
			<div className="mx-auto flex items-center justify-between p-2">
				<Link href="/">
					<div className="cursor-pointer" onClick={handleHomeClick}>
						<div className="relative w-14 h-14">
							<Image
								src={`${basePath}/assets/icons/logo.svg`}
								alt="logo"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								style={{ objectFit: "contain" }}
							/>
						</div>
					</div>
				</Link>
				<div className="md:hidden">
					<Controls
						isMenuOpen={isMenuOpen}
						toggleMenu={toggleMenu}
						isScrolled={isScrolled}
					/>
				</div>
				<nav className={`hidden md:flex items-center space-x-4`}>
					<Link href="/">
						<div
							className={`cursor-pointer ${linkClass}`}
							onClick={handleHomeClick}
						>
							{translations.home}
						</div>
					</Link>
					<Link href="/gallery">
						<div
							className={`cursor-pointer ${linkClass}`}
							onClick={handleGalleryClick}
						>
							{translations.gallery}
						</div>
					</Link>
					<ScrollLink
						to="footer"
						smooth={true}
						duration={500}
						offset={offset}
						className={`cursor-pointer ${linkClass}`}
						onClick={toggleMenu}
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
			<div
				className={`md:hidden flex flex-col items-center space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
					isMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
				}`}
			>
				<Link href="/">
					<div
						className={`cursor-pointer ${linkClass}`}
						onClick={(e) => {
							handleHomeClick(e);
							toggleMenu();
						}}
					>
						{translations.home}
					</div>
				</Link>
				<Link href="/gallery">
					<div
						className={`cursor-pointer ${linkClass}`}
						onClick={(e) => {
							handleGalleryClick(e);
							toggleMenu();
						}}
					>
						{translations.gallery}
					</div>
				</Link>
				<ScrollLink
					to="footer"
					smooth={true}
					duration={500}
					offset={offset}
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
		</div>
	);
};

export default Navbar;
