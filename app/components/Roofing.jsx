"use client";

import React, { useEffect, useState, useRef, useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import roofing_en from "@public/assets/text/en/roofing_en";
import roofing_fr from "@public/assets/text/fr/roofing_fr";
import Image from "next/image";

const Roofing = () => {
	const [animateText, setAnimateText] = useState({
		text1: false,
		text2: false,
	});
	const [animateImages, setAnimateImages] = useState({
		image1: false,
		image2: false,
		image3: false,
	});
	const [animateTitle, setAnimateTitle] = useState(false);
	const textRef1 = useRef(null);
	const textRef2 = useRef(null);
	const titleRef = useRef(null);
	const imageRef1 = useRef(null);
	const imageRef2 = useRef(null);
	const imageRef3 = useRef(null);
	const { language } = useContext(LanguageContext);

	useEffect(() => {
		const handleScroll = () => {
			const checkVisibility = (ref, setState, key) => {
				if (ref.current) {
					const rect = ref.current.getBoundingClientRect();
					if (rect.top < window.innerHeight * 0.9) {
						setState((prevState) => ({ ...prevState, [key]: true }));
					}
				}
			};

			checkVisibility(textRef1, setAnimateText, "text1");
			checkVisibility(textRef2, setAnimateText, "text2");
			checkVisibility(imageRef1, setAnimateImages, "image1");
			checkVisibility(imageRef2, setAnimateImages, "image2");
			checkVisibility(imageRef3, setAnimateImages, "image3");

			if (titleRef.current) {
				const rect = titleRef.current.getBoundingClientRect();
				if (rect.top < window.innerHeight * 0.9) {
					setAnimateTitle(true);
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

	const texts = language === "en" ? roofing_en : roofing_fr;

	return (
		<div className="bg_light_brown flex flex-col md:flex-row">
			<div className="md:w-1/2 w-full flex flex-col justify-between">
				<div
					ref={textRef1}
					id="text1"
					className={`tc_light_yellow p-8 transition-transform duration-700 ${
						animateText.text1 ? "slide-up show" : "slide-up"
					}`}
				>
					<p
						ref={titleRef}
						className={`text-stone-800 mb-4 text-2xl ${
							animateTitle ? "fade-in" : ""
						}`}
					>
						{texts.title}
					</p>
					<p className="mb-4">{texts.paragraph1}</p>
					<p className="mb-4">{texts.paragraph2}</p>
					<p className="mb-4">{texts.paragraph3}</p>
					<p className="mb-4">{texts.paragraph4}</p>
				</div>
				<div
					ref={imageRef1}
					id="image1"
					className="relative w-full h-32 lg:h-[21.5rem] md:h-[27.5rem] overflow-hidden"
				>
					<Image
						src="/assets/toiture1.jpg"
						alt="toiture1"
						fill
						className={`object-cover absolute transition-transform duration-700 ${
							animateImages.image1 ? "translate-x-0" : "-translate-x-full"
						}`}
					/>
				</div>
			</div>
			<div className="md:w-1/2 w-full flex flex-col justify-between">
				<div
					ref={imageRef2}
					id="image2"
					className="relative w-full h-32 lg:h-[26rem] md:h-[29rem] overflow-hidden"
				>
					<Image
						src="/assets/toiture2.jpg"
						alt="toiture2"
						fill
						className={`object-cover absolute transition-transform duration-700 ${
							animateImages.image2 ? "translate-x-0" : "translate-x-full"
						}`}
					/>
				</div>
				<div
					ref={imageRef3}
					id="image3"
					className="relative w-full h-32 lg:h-[21.5rem] md:h-[27.5rem] overflow-hidden"
				>
					<Image
						src="/assets/toiture3.jpg"
						alt="toiture3"
						fill
						className={`object-cover absolute transition-transform duration-700 delay-300 ${
							animateImages.image3 ? "translate-x-0" : "translate-x-full"
						}`}
					/>
				</div>
			</div>
		</div>
	);
};

export default Roofing;
