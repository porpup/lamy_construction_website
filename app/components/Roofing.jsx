"use client";

import React, { useEffect, useState, useRef, useContext } from "react";
import BasePath from "./BasePath";
import { LanguageContext } from "./LanguageContext";
import roofing_en from "@public/assets/text/en/roofing_en";
import roofing_fr from "@public/assets/text/fr/roofing_fr";

const Roofing = () => {
	const basePath = BasePath();
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

	const texts = language === "en" ? roofing_en : roofing_fr;

	return (
		<div className="bg_light_brown flex flex-col md:flex-row">
			<div className="md:w-1/2 w-full flex flex-col justify-between">
				<div
					ref={textRef1}
					id="text1"
					className={`tc_light_yellow p-8 slide-up ${
						animateText.text1 ? "show" : ""
					}`}
				>
					<p className="text-stone-800 mb-4 text-2xl">{texts.title}</p>
					<p className="mb-4">{texts.paragraph1}</p>
					<p className="mb-4">{texts.paragraph2}</p>
					<p className="mb-4">{texts.paragraph3}</p>
					<p className="mb-4">{texts.paragraph4}</p>
				</div>
				<div className="relative flex justify-center items-end">
					<img
						src={`${basePath}/assets/toiture1.jpg`}
						alt="toiture1"
						className="h-auto w-full object-cover"
					/>
				</div>
			</div>
			<div className="md:w-1/2 w-full flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full">
						<img
							src={`${basePath}/assets/toiture2.jpg`}
							alt="toiture2"
							className="h-auto w-full object-cover"
						/>
					</div>
					<div className="w-full">
						<img
							src={`${basePath}/assets/toiture3.jpg`}
							alt="toiture3"
							className="h-auto w-full object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Roofing;
