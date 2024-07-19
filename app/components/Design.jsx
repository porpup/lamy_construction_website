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
	const textRef1 = useRef(null);
	const textRef2 = useRef(null);
	const { language } = useContext(LanguageContext);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (entry.target.id === "text1") {
							setAnimateText((prev) => ({ ...prev, text1: true }));
						} else if (entry.target.id === "text2") {
							setAnimateText((prev) => ({ ...prev, text2: true }));
						}
					}
				});
			},
			{
				threshold: 0.1,
			}
		);

		if (textRef1.current) {
			observer.observe(textRef1.current);
		}
		if (textRef2.current) {
			observer.observe(textRef2.current);
		}

		return () => {
			if (textRef1.current) {
				observer.unobserve(textRef1.current);
			}
			if (textRef2.current) {
				observer.unobserve(textRef2.current);
			}
		};
	}, []);

	const texts = language === "en" ? design_en : design_fr;

	return (
		<div className="bg_light_yellow flex flex-col md:flex-row min-h-screen">
			<div className="md:w-1/2 w-full flex flex-col justify-between">
				<div
					ref={textRef1}
					id="text1"
					className={`text-stone-800 p-8 slide-up ${
						animateText.text1 ? "show" : ""
					}`}
				>
					<p className="tc_light_brown mb-4 text-2xl">{texts.designTitle}</p>
					<p className="mb-4">{texts.designParagraph1}</p>
					<p className="mb-4">{texts.designParagraph2}</p>
				</div>
				<div className="relative w-full h-64 md:h-full">
					<Image
						src="/assets/conception_avec_decoratrice_fabrication_et_installation_darmoires.jpg"
						alt="conception_avec_decoratrice_fabrication_et_installation_darmoires"
						layout="fill"
						objectFit="cover"
						className="object-cover"
					/>
				</div>
			</div>
			<div className="md:w-1/2 w-full flex flex-col justify-between">
				<div className="relative w-full h-64 md:h-full">
					<Image
						src="/assets/ceramique.png"
						alt="ceramique"
						layout="fill"
						objectFit="cover"
						className="object-cover"
					/>
				</div>
				<div className="relative w-full h-64 md:h-full">
					<Image
						src="/assets/tapis.jpg"
						alt="tapis"
						layout="fill"
						objectFit="cover"
						className="object-cover"
					/>
				</div>
				<div
					ref={textRef2}
					id="text2"
					className={`text-stone-800 p-8 slide-up ${
						animateText.text2 ? "show" : ""
					}`}
				>
					<p className="tc_light_brown mb-4 text-2xl">{texts.flooringTitle}</p>
					<p className="mb-4">{texts.flooringParagraph1}</p>
				</div>
			</div>
		</div>
	);
};

export default Design;
