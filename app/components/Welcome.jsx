"use client";

import React, { useEffect, useRef, useContext } from "react";
import Image from "next/image";
import { LanguageContext } from "./LanguageContext";
import welcome_en from "@public/assets/text/en/welcome_en";
import welcome_fr from "@public/assets/text/fr/welcome_fr";

const Welcome = () => {
	const { language } = useContext(LanguageContext);
	const imageContainerRef = useRef(null);
	const textRef = useRef(null);

	useEffect(() => {
		if (imageContainerRef.current) {
			imageContainerRef.current.classList.add("zoom-out");
		}
		if (textRef.current) {
			textRef.current.classList.add("zoom-in");
		}
	}, []);

	const texts = language === "en" ? welcome_en : welcome_fr;

	return (
		<div id="home" className="relative text-center">
			<div ref={imageContainerRef} className="w-full h-full overflow-hidden">
				<Image
					src="/assets/construction.jpg"
					alt="construction"
					width={1920}
					height={1080}
					style={{ width: "100%", height: "auto" }}
					priority
					className="zoom-out-image"
				/>
			</div>
			<p
				ref={textRef}
				className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-0 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-neutral-100 whitespace-nowrap drop-shadow-lg neon-glow"
			>
				{texts.welcomeText}
			</p>
		</div>
	);
};

export default Welcome;
