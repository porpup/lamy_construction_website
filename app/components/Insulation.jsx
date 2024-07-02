"use client";

import React, { useEffect, useState, useRef, useContext } from "react";
import BasePath from "./BasePath";
import Image from "next/image";
import { LanguageContext } from "./LanguageContext";
import insulation_en from "@public/assets/text/insulation_en";
import insulation_fr from "@public/assets/text/insulation_fr";

const Insulation = () => {
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

	const texts = language === "en" ? insulation_en : insulation_fr;

	return (
		<div className="flex flex-col md:flex-row">
			<div className="md:w-1/2 w-full relative justify-center items-end">
				<Image
					src={`${basePath}/assets/isolation.jpg`}
					alt="isolation"
					width={1920}
					height={1080}
					style={{ width: "100%", height: "auto" }}
				/>
			</div>
			<div
				ref={textRef1}
				id="text1"
				className={`md:w-1/2 w-full tc_light_yellow p-16 slide-up ${
					animateText.text1 ? "show" : ""
				}`}
			>
				<p className="tc_light_brown mb-4 text-2xl">{texts.title}</p>
				<p className="font-extrabold text-lg">{texts.subtitle1}</p>
				<p className="mb-4">{texts.paragraph1}</p>
				<p className="mb-4 font-extrabold">{texts.paragraph2}</p>
				<p className="tc_light_brown text-lg mb-4">{texts.subtitle2}</p>
				<p className="mb-4 font-extrabold">{texts.paragraph3}</p>
				<ul className="mb-4">
					{texts.list1.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
				<p className="mb-4 tc_light_brown text-lg">{texts.subtitle3}</p>
				<ul className="mb-4">
					{texts.list2.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Insulation;
