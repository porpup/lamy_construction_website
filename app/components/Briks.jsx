"use client";

import BasePath from "./BasePath";
import Image from "next/image";
import React, { useEffect, useState, useRef, useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import briks_en from "@public/assets/text/briks_en";
import briks_fr from "@public/assets/text/briks_fr";

const Briks = () => {
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

	const texts = language === "en" ? briks_en : briks_fr;

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
					<p className="text-stone-800 mb-4 text-2xl">{texts.bricksTitle}</p>
					<p className="mb-4">{texts.bricksParagraph1}</p>
					<p className="mb-4">{texts.bricksParagraph2}</p>
				</div>
				<div className="relative flex justify-center items-end">
					<Image
						src={`${basePath}/assets/briques.jpg`}
						alt="briques"
						width={1920}
						height={1080}
						style={{ width: "100%", height: "auto" }}
						className="object-cover"
					/>
				</div>
			</div>
			<div className="md:w-1/2 w-full flex-col justify-between">
				<div
					ref={textRef2}
					id="text2"
					className={`tc_light_yellow p-8 slide-up ${
						animateText.text2 ? "show" : ""
					}`}
				>
					<p className="text-stone-800 mb-4 text-2xl">{texts.expertiseTitle}</p>
					<ul className="mb-4">
						{texts.expertiseList.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
				<div className="flex justify-between p-8 items-center">
					<div className="w-1/2 mx-8">
						<Image
							src={`${basePath}/assets/ordre_ingenieurs_du_quebec_logo.png`}
							alt="ordre_ingenieurs_du_quebec_logo"
							width={600}
							height={400}
							style={{ width: "100%", height: "auto" }}
							className="object-contain"
						/>
					</div>
					<div className="w-1/2 mx-8">
						<Image
							src={`${basePath}/assets/ordre_des_architectes_du_québec_logo.png`}
							alt="ordre_des_architectes_du_québec_logo"
							width={600}
							height={400}
							style={{ width: "100%", height: "auto" }}
							className="object-contain"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Briks;
