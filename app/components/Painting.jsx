"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef, useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import painting_en from "@public/assets/text/en/painting_en";
import painting_fr from "@public/assets/text/fr/painting_fr";

const Painting = () => {
	const [animateText, setAnimateText] = useState({
		text1: false,
		text2: false,
	});
	const [animateImages, setAnimateImages] = useState({
		image1: false,
		image2: false,
		image3: false,
		image4: false,
	});
	const textRef1 = useRef(null);
	const textRef2 = useRef(null);
	const imageRef1 = useRef(null);
	const imageRef2 = useRef(null);
	const imageRef3 = useRef(null);
	const imageRef4 = useRef(null);
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
			checkVisibility(imageRef4, setAnimateImages, "image4");
		};

		// Trigger on scroll and initial load
		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const texts = language === "en" ? painting_en : painting_fr;

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
					<p className="text-stone-800 mb-4 text-2xl">{texts.paintingTitle}</p>
					<p className="mb-4">{texts.paintingParagraph1}</p>
					<p className="mb-4">{texts.paintingParagraph2}</p>
					<p className="mb-4">{texts.services}</p>
					<ul className="mb-4">
						{texts.serviceList.map((service, index) => (
							<li key={index}>{service}</li>
						))}
					</ul>
					<p className="mb-4">{texts.andMore}</p>
				</div>
				<div
					ref={imageRef1}
					id="image1"
					className="relative w-full h-32 lg:h-[22rem] md:h-[16rem] overflow-hidden"
				>
					<Image
						src="/assets/peinture.jpg"
						alt="peinture"
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
					className="relative w-full h-32 lg:h-[30rem] md:h-[21rem] overflow-hidden"
				>
					<Image
						src="/assets/boiseries.jpg"
						alt="boiseries"
						fill
						className={`object-cover absolute transition-transform duration-700 ${
							animateImages.image2 ? "translate-x-0" : "translate-x-full"
						}`}
					/>
				</div>
				<div className="flex flex-row w-full h-32 lg:h-[12rem] md:h-[16rem]">
					<div
						ref={imageRef3}
						id="image3"
						className="relative w-1/2 overflow-hidden"
					>
						<Image
							src="/assets/moulures_rampes.jpg"
							alt="moulures_rampes"
							fill
							className={`object-cover absolute transition-transform duration-700 ${
								animateImages.image3 ? "translate-y-0" : "-translate-y-full"
							}`}
						/>
					</div>
					<div
						ref={imageRef4}
						id="image4"
						className="relative w-1/2 overflow-hidden"
					>
						<Image
							src="/assets/portes_et_fenetres.jpeg"
							alt="portes_et_fenetres"
							fill
							className={`object-cover absolute transition-transform duration-700 delay-300 ${
								animateImages.image4 ? "translate-y-0" : "-translate-y-full"
							}`}
						/>
					</div>
				</div>
				<div
					ref={textRef2}
					id="text2"
					className={`tc_light_yellow p-8 transition-transform duration-700 ${
						animateText.text2 ? "slide-up show" : "slide-up"
					}`}
				>
					<p className="text-stone-800 mb-4 text-2xl">{texts.woodworkTitle}</p>
					<p className="mb-4">{texts.woodworkParagraph1}</p>
				</div>
			</div>
		</div>
	);
};

export default Painting;
