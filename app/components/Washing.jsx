"use client";

import React, { useEffect, useState, useRef, useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import washing_en from "@public/assets/text/en/washing_en";
import washing_fr from "@public/assets/text/fr/washing_fr";
import Image from "next/image";

const Washing = () => {
	const [animateText, setAnimateText] = useState({
		text1: false,
		text2: false,
	});
	const [animateImages, setAnimateImages] = useState({
		image1: false,
		image2: false,
		image3: false,
	});
	const textRef1 = useRef(null);
	const textRef2 = useRef(null);
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
		};

		// Trigger on scroll and initial load
		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const texts = language === "en" ? washing_en : washing_fr;

	return (
		<div className="bg_light_yellow flex flex-col md:flex-row">
			<div className="md:w-1/2 w-full flex flex-col justify-between">
				<div
					ref={textRef1}
					id="text1"
					className={`text-stone-800 p-8 transition-transform duration-700 ${
						animateText.text1 ? "slide-up show" : "slide-up"
					}`}
				>
					<p className="tc_light_brown mb-4 text-2xl">{texts.disasterTitle}</p>
					<p className="mb-4">{texts.disasterParagraph1}</p>
					<ul className="mb-4">
						{texts.disasterList.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
					<p className="mb-4">{texts.disasterParagraph2}</p>
					<p className="mb-4">{texts.disasterParagraph3}</p>
				</div>
				<div
					ref={imageRef1}
					id="image1"
					className="relative w-full h-32 lg:h-[20rem] md:h-[15rem] overflow-hidden"
				>
					<Image
						src="/assets/expert_en_sinistre.jpg"
						alt="expert_en_sinistre"
						fill
						className={`object-cover absolute transition-transform duration-700 ${
							animateImages.image1 ? "translate-x-0" : "-translate-x-full"
						}`}
					/>
				</div>
			</div>
			<div className="md:w-1/2 w-full flex flex-col justify-between">
				<div
					ref={textRef2}
					id="text2"
					className={`text-stone-800 p-8 transition-transform duration-700 ${
						animateText.text2 ? "slide-up show" : "slide-up"
					}`}
				>
					<p className="tc_light_brown mb-4 text-2xl">{texts.pressureTitle}</p>
					<p className="mb-4">{texts.pressureParagraph1}</p>
					<p className="mb-4">{texts.pressureParagraph2}</p>
				</div>
				<div className="relative w-full h-auto flex flex-col">
					<div
						ref={imageRef2}
						id="image2"
						className="relative w-full h-32 lg:h-[20rem] md:h-[15rem] overflow-hidden"
					>
						<Image
							src="/assets/lavage_a_pression1.jpeg"
							alt="lavage_a_pression1"
							fill
							className={`object-cover absolute transition-transform duration-700 ${
								animateImages.image2 ? "translate-x-0" : "translate-x-full"
							}`}
						/>
					</div>
					<div
						ref={imageRef3}
						id="image3"
						className="relative w-full h-32 lg:h-[20rem] md:h-[15rem] overflow-hidden"
					>
						<Image
							src="/assets/lavage_a_pression2.jpg"
							alt="lavage_a_pression2"
							fill
							className={`object-cover absolute transition-transform duration-700 delay-300 ${
								animateImages.image3 ? "translate-x-0" : "translate-x-full"
							}`}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Washing;
