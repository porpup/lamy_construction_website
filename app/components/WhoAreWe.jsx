"use client";

import React, { useEffect, useState, useRef, useContext } from "react";
import BasePath from "./BasePath";
import Image from "next/image";
import { LanguageContext } from "./LanguageContext";
import whoAreWe_en from "@public/assets/text/en/whoAreWe_en";
import whoAreWe_fr from "@public/assets/text/fr/whoAreWe_fr";

const WhoAreWe = () => {
	const basePath = BasePath();
	const [animateText, setAnimateText] = useState(false);
	const [hasAnimated, setHasAnimated] = useState(false);
	const textRef = useRef(null);
	const { language } = useContext(LanguageContext);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setAnimateText(true);
						setHasAnimated(true);
					} else if (!hasAnimated) {
						setAnimateText(false);
					}
				});
			},
			{
				threshold: 0.1,
			}
		);

		if (textRef.current) {
			observer.observe(textRef.current);
		}

		return () => {
			if (textRef.current) {
				observer.unobserve(textRef.current);
			}
		};
	}, [hasAnimated]);

	const texts = language === "en" ? whoAreWe_en : whoAreWe_fr;

	return (
		<div className="flex flex-col md:flex-row">
			<div className="md:w-1/2 w-full relative justify-center items-end">
				<Image
					src={`${basePath}/assets/expert_en_plancher.jpg`}
					alt="expert_en_plancher"
					width={1920}
					height={1080}
					style={{ width: "100%", height: "auto" }}
				/>
			</div>
			<div
				ref={textRef}
				className={`md:w-1/2 w-full tc_light_yellow p-16 slide-up ${
					animateText ? "show" : ""
				}`}
			>
				<p className="tc_light_brown mb-4 text-2xl">{texts.title}</p>
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
