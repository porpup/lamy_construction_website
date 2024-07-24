"use client";

import React, { useEffect, useState, useRef, useContext } from "react";
import Image from "next/image";
import { LanguageContext } from "./LanguageContext";
import insulation_en from "@public/assets/text/en/insulation_en";
import insulation_fr from "@public/assets/text/fr/insulation_fr";

const Insulation = () => {
	const [animateText, setAnimateText] = useState(false);
	const [animateImage, setAnimateImage] = useState(false);
	const textRef = useRef(null);
	const imageRef = useRef(null);
	const { language } = useContext(LanguageContext);

	useEffect(() => {
		const handleScroll = () => {
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

	const texts = language === "en" ? insulation_en : insulation_fr;

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
					src="/assets/isolation.jpg"
					alt="isolation"
					fill
					className="absolute object-cover"
				/>
			</div>
			<div
				ref={textRef}
				id="text"
				className={`md:w-1/2 w-full p-8 md:p-16 tc_light_yellow transition-transform duration-700 ${
					animateText ? "slide-up show" : "slide-up"
				}`}
			>
				<p className="tc_light_brown mb-4 text-2xl">{texts.title}</p>
				<p className="font-extrabold text-lg">{texts.subtitle1}</p>
				<p className="mb-4">{texts.paragraph1}</p>
				<p className="mb-4 font-extrabold">{texts.paragraph2}</p>
				<p className="tc_light_brown text-lg mb-4">{texts.subtitle2}</p>
				<p className="mb-4 font-extrabold">{texts.paragraph3}</p>
				<ul className="mb-4">
					{texts.list1.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
				<p className="mb-4 tc_light_brown text-lg">{texts.subtitle3}</p>
				<ul className="mb-4">
					{texts.list2.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Insulation;
