"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { LanguageContext } from "./LanguageContext";

const Welcome = () => {
	const { language } = useContext(LanguageContext);

	return (
		<div id="home" className="relative text-center">
			<Image
				src="/assets/construction.jpg"
				alt="construction"
				width={1920}
				height={1080}
				style={{ width: "100%", height: "auto" }}
			/>
			{language === "en" ? (
				<p className="absolute top-[44%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-0 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-100 whitespace-nowrap drop-shadow-lg">
					Precision. Reliability. Excellence.
				</p>
			) : (
				<p className="absolute top-[44%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-0 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-100 whitespace-nowrap drop-shadow-lg">
					Précision. Fiabilité. Excellence.
				</p>
			)}
		</div>
	);
};

export default Welcome;
