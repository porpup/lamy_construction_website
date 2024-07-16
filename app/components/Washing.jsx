"use client";

import React, { useEffect, useState, useRef, useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import washing_en from "@public/assets/text/en/washing_en";
import washing_fr from "@public/assets/text/fr/washing_fr";

const Washing = () => {
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

	const texts = language === "en" ? washing_en : washing_fr;

	return (
		<div className="bg_light_yellow flex flex-col md:flex-row">
			<div className="md:w-1/2 w-full flex flex-col justify-between">
				<div
					ref={textRef1}
					id="text1"
					className={`text-stone-800 p-8 slide-up ${
						animateText.text1 ? "show" : ""
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
				<div className="relative flex justify-center items-end">
					<img
						src="/assets/expert_en_sinistre.jpg"
						alt="expert_en_sinistre"
						className="h-auto w-full object-cover"
					/>
				</div>
			</div>
			<div className="md:w-1/2 w-full flex-col justify-between">
				<div
					ref={textRef2}
					id="text2"
					className={`text-stone-800 p-8 slide-up ${
						animateText.text2 ? "show" : ""
					}`}
				>
					<p className="tc_light_brown mb-4 text-2xl">{texts.pressureTitle}</p>
					<p className="mb-4">{texts.pressureParagraph1}</p>
					<p className="mb-4">{texts.pressureParagraph2}</p>
				</div>
				<div className="w-full flex flex-col">
					<div className="w-full">
						<img
							src="/assets/lavage_a_pression1.jpeg"
							alt="lavage_a_pression1"
							className="h-auto w-full object-cover"
						/>
					</div>
					<div className="w-full">
						<img
							src="/assets/lavage_a_pression2.jpg"
							alt="lavage_a_pression2"
							className="h-auto w-full object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Washing;
