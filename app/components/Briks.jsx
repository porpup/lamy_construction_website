"use client";

import React, { useEffect, useState, useRef, useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import briks_en from "@public/assets/text/en/briks_en";
import briks_fr from "@public/assets/text/fr/briks_fr";
import Image from "next/image";

const Briks = () => {
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

			checkVisibility(textRef1, setAnimateText, "text1");
			checkVisibility(textRef2, setAnimateText, "text2");
			checkVisibility(imageRef1, setAnimateImages, "image1");
			checkVisibility(imageRef2, setAnimateImages, "image2");
			checkVisibility(imageRef3, setAnimateImages, "image3");

			if (titleRef1.current) {
				const rect = titleRef1.current.getBoundingClientRect();
				if (rect.top < window.innerHeight * 0.9) {
					setAnimateTitle1(true);
				}
			}

			if (titleRef2.current) {
				const rect = titleRef2.current.getBoundingClientRect();
				if (rect.top < window.innerHeight * 0.9) {
					setAnimateTitle2(true);
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

	const texts = language === "en" ? briks_en : briks_fr;

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
						ref={titleRef1}
						className={`text-stone-800 mb-4 text-2xl ${
							animateTitle1 ? "fade-in" : ""
						}`}
					>
						{texts.bricksTitle}
					</p>
					<p className="mb-4">{texts.bricksParagraph1}</p>
					<p className="mb-4">{texts.bricksParagraph2}</p>
				</div>
				<div
					ref={imageRef1}
					id="image1"
					className="relative w-full h-32 lg:h-[24rem] md:h-[16rem] overflow-hidden"
				>
					<Image
						src="/assets/briques.jpg"
						alt="briques"
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
					className={`tc_light_yellow p-8 transition-transform duration-700 ${
						animateText.text2 ? "slide-up show" : "slide-up"
					}`}
				>
					<p
						ref={titleRef2}
						className={`text-stone-800 mb-4 text-2xl ${
							animateTitle2 ? "fade-in" : ""
						}`}
					>
						{texts.expertiseTitle}
					</p>
					<ul className="mb-4">
						{texts.expertiseList.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
				<div className="relative w-full h-32 md:h-32 flex items-center space-x-4 p-10">
					<a
						href="https://www.oiq.qc.ca/"
						target="_blank"
						rel="noopener noreferrer"
						className="relative w-1/2 h-full overflow-hidden"
					>
						<Image
							ref={imageRef2}
							id="image2"
							src="/assets/ordre_ingenieurs_du_quebec_logo.png"
							alt="ordre_ingenieurs_du_quebec_logo"
							fill
							className={`object-contain absolute transition-transform duration-700 ${
								animateImages.image2 ? "translate-y-0" : "translate-y-full"
							}`}
						/>
					</a>
					<a
						href="https://www.oaq.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="relative w-1/2 h-full overflow-hidden"
					>
						<Image
							ref={imageRef3}
							id="image3"
							src="/assets/ordre_des_architectes_du_québec_logo.png"
							alt="ordre_des_architectes_du_québec_logo"
							fill
							className={`object-contain absolute transition-transform duration-700 delay-300 ${
								animateImages.image3 ? "translate-y-0" : "translate-y-full"
							}`}
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Briks;
