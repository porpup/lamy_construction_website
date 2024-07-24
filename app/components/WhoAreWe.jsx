"use client";

import React, { useEffect, useState, useRef, useContext } from "react";
import Image from "next/image";
import { LanguageContext } from "./LanguageContext";
import whoAreWe_en from "@public/assets/text/en/whoAreWe_en";
import whoAreWe_fr from "@public/assets/text/fr/whoAreWe_fr";

const WhoAreWe = () => {
	const [animateText, setAnimateText] = useState(false);
	const [animateImage, setAnimateImage] = useState(false);
	const [animateTitle, setAnimateTitle] = useState(false);
	const textRef = useRef(null);
	const imageRef = useRef(null);
	const titleRef = useRef(null);
	const { language } = useContext(LanguageContext);

	useEffect(() => {
		const handleScroll = () => {
			if (titleRef.current) {
				const rect = titleRef.current.getBoundingClientRect();
				if (rect.top < window.innerHeight * 0.9) {
					setAnimateTitle(true);
				}
			}
			if (textRef.current) {
				const rect = textRef.current.getBoundingClientRect();
				if (rect.top < window.innerHeight * 0.9) {
					setAnimateText(true);
				}
			}
			if (imageRef.current) {
				const rect = imageRef.current.getBoundingClientRect();
				if (rect.top < window.innerHeight * 0.9) {
					setAnimateImage(true);
				}
			}
		};

		// Trigger on scroll and initial load
		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const texts = language === "en" ? whoAreWe_en : whoAreWe_fr;

	return (
		<div className="flex flex-col md:flex-row">
			<div
				ref={imageRef}
				id="image"
				className={`relative w-full h-32 md:h-auto md:w-1/2 overflow-hidden transition-transform duration-700 ${
					animateImage ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<Image
					src="/assets/expert_en_plancher.jpg"
					alt="expert_en_plancher"
					fill
					className="absolute object-cover"
				/>
			</div>
			<div
				ref={textRef}
				id="text"
				className={`md:w-1/2 w-full p-8 md:p-16 tc_light_yellow ${
					animateText ? "slide-up show" : "slide-up"
				}`}
			>
				<p
					ref={titleRef}
					className={`tc_light_brown mb-4 text-2xl ${
						animateTitle ? "fade-in" : ""
					}`}
				>
					{texts.title}
				</p>
				<p className="mb-4">{texts.paragraph1}</p>
				<p className="mb-4">{texts.paragraph2}</p>
				<p className="mb-4">{texts.paragraph3}</p>
				<p className="mb-4">{texts.paragraph4}</p>
				<p className="mb-4">{texts.paragraph5}</p>
				<p className="mb-4">{texts.paragraph6}</p>
			</div>
		</div>
	);
};

export default WhoAreWe;
