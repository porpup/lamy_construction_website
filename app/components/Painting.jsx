"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef, useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import paint_en from "@public/assets/text/en/paint_en";
import paint_fr from "@public/assets/text/fr/paint_fr";

const Painting = () => {
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

	const texts = language === "en" ? paint_en : paint_fr;

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
				<div className="relative w-full h-32 lg:h-[22rem] md:h-[16rem]">
					<Image
						src="/assets/peinture.jpg"
						alt="peinture"
						fill
						style={{ objectFit: "cover" }}
						className="object-cover"
					/>
				</div>
			</div>
			<div className="md:w-1/2 w-full flex flex-col justify-between">
				<div className="relative w-full h-32 lg:h-[30rem] md:h-[21rem]">
					<Image
						src="/assets/boiseries.jpg"
						alt="boiseries"
						fill
						style={{ objectFit: "cover" }}
						className="object-cover"
					/>
				</div>
				<div className="flex flex-row w-full h-32 lg:h-[12rem] md:h-[16rem]">
					<div className="relative w-1/2">
						<Image
							src="/assets/moulures_rampes.jpg"
							alt="moulures_rampes"
							fill
							style={{ objectFit: "cover" }}
							className="object-cover"
						/>
					</div>
					<div className="relative w-1/2">
						<Image
							src="/assets/portes_et_fenetres.jpeg"
							alt="portes_et_fenetres"
							fill
							style={{ objectFit: "cover" }}
							className="object-cover"
						/>
					</div>
				</div>
				<div
					ref={textRef2}
					id="text2"
					className={`tc_light_yellow p-8 slide-up ${
						animateText.text2 ? "show" : ""
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
