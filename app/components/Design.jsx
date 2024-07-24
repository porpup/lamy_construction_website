"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef, useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import design_en from "@public/assets/text/en/design_en";
import design_fr from "@public/assets/text/fr/design_fr";

const Design = () => {
	const [animateText, setAnimateText] = useState({
		text1: false,
		text2: false,
	});
	const [animateImages, setAnimateImages] = useState({
		image1: false,
		image2: false,
		image3: false,
	});
	const [animateTitle1, setAnimateTitle1] = useState(false);
	const [animateTitle2, setAnimateTitle2] = useState(false);
	const textRef1 = useRef(null);
	const textRef2 = useRef(null);
	const titleRef1 = useRef(null);
	const titleRef2 = useRef(null);
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

			const checkTitleVisibility = (ref, setState) => {
				if (ref.current) {
					const rect = ref.current.getBoundingClientRect();
					if (rect.top < window.innerHeight * 0.9) {
						setState(true);
					}
				}
			};

			checkVisibility(textRef1, setAnimateText, "text1");
			checkVisibility(textRef2, setAnimateText, "text2");
			checkVisibility(imageRef1, setAnimateImages, "image1");
			checkVisibility(imageRef2, setAnimateImages, "image2");
			checkVisibility(imageRef3, setAnimateImages, "image3");
			checkTitleVisibility(titleRef1, setAnimateTitle1);
			checkTitleVisibility(titleRef2, setAnimateTitle2);
		};

		// Trigger on scroll and initial load
		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const texts = language === "en" ? design_en : design_fr;

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
					<p
						ref={titleRef1}
						className={`tc_light_brown mb-4 text-2xl ${
							animateTitle1 ? "fade-in" : ""
						}`}
					>
						{texts.designTitle}
					</p>
					<p className="mb-4">{texts.designParagraph1}</p>
					<p className="mb-4">{texts.designParagraph2}</p>
				</div>
				<div
					ref={imageRef1}
					id="image1"
					className="relative w-full h-32 lg:h-[23rem] md:h-[15rem] overflow-hidden"
				>
					<Image
						src="/assets/conception_avec_decoratrice_fabrication_et_installation_darmoires.jpg"
						alt="conception_avec_decoratrice_fabrication_et_installation_darmoires"
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
					className="relative w-full h-32 lg:h-[15.5rem] md:h-[13.5rem] overflow-hidden"
				>
					<Image
						src="/assets/ceramique.png"
						alt="ceramique"
						fill
						className={`object-cover absolute transition-transform duration-700 ${
							animateImages.image2 ? "translate-x-0" : "translate-x-full"
						}`}
					/>
				</div>
				<div
					ref={imageRef3}
					id="image3"
					className="relative w-full h-32 lg:h-[15.5rem] md:h-[13.5rem] overflow-hidden"
				>
					<Image
						src="/assets/tapis.jpg"
						alt="tapis"
						fill
						className={`object-cover absolute transition-transform duration-700 ${
							animateImages.image3 ? "translate-x-0" : "translate-x-full"
						}`}
					/>
				</div>
				<div
					ref={textRef2}
					id="text2"
					className={`text-stone-800 p-8 transition-transform duration-700 ${
						animateText.text2 ? "slide-up show" : "slide-up"
					}`}
				>
					<p
						ref={titleRef2}
						className={`tc_light_brown mb-4 text-2xl ${
							animateTitle2 ? "fade-in" : ""
						}`}
					>
						{texts.flooringTitle}
					</p>
					<p className="mb-4">{texts.flooringParagraph1}</p>
				</div>
			</div>
		</div>
	);
};

export default Design;
