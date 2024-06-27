"use client";

import BasePath from "./BasePath";
import Image from "next/image";
import React, { useEffect, useState, useRef, useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

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
					{language === "en" ? (
						<>
							<p className="text-stone-800 mb-4 text-2xl">BRICKS</p>
							<p className="mb-4">
								We offer turnkey projects, up to 12 floors for your project:
								whether it's for a fireplace, a wall, or the complete masonry of
								your home, businesses, or buildings.
							</p>
							<p className="mb-4">
								We also do masonry point repair and masonry replacement.
							</p>
						</>
					) : (
						<>
							<p className="text-stone-800 mb-4 text-2xl">BRIQUES</p>
							<p className="mb-4">
								Nous offrons des projets clés en main, jusqu'à 12 étages pour
								votre projet: que ce soit pour un foyer, un mur ou la maçonnerie
								complète de votre demeure, commerces ou immeubles.
							</p>
							<p className="mb-4">
								Nous faisons aussi la réfection des points de maçonnerie et le
								remplacement des pièces de maçonnerie.
							</p>
						</>
					)}
				</div>
				<div className="relative flex justify-center items-end">
					<Image
						src={`${basePath}/assets/briques.png`}
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
					{language === "en" ? (
						<>
							<p className="text-stone-800 mb-4 text-2xl">OUR EXPERTISE</p>
							<div className="mb-4">
								<li>MEETING DEADLINES</li>
								<li>5-YEAR WARRANTY WITH CONTRACT PROOF</li>
								<li>INDEMNITY INSURANCE</li>
								<li>100% SATISFACTION GUARANTEED</li>
								<li>RBQ: 5848-3058-01</li>
								<li>LAW 122</li>
								<li>ENGINEER AND ARCHITECT SERVICES AVAILABLE</li>
							</div>
						</>
					) : (
						<>
							<p className="text-stone-800 mb-4 text-2xl">NOTRE EXPERTISE</p>
							<div className="mb-4">
								<li>RESPECT DES ÉCHÉANCIERS</li>
								<li>TRAVAUX GARANTIE 5 ANS AVEC PREUVE AU CONTRAT</li>
								<li>ASSURANCE INDEMNITÉ</li>
								<li>SATISFACTION GARANTIE À 100%</li>
								<li>RBQ: 5848-3058-01</li>
								<li>LOI 122</li>
								<li>SERVICE D'INGÉNIEURS ET ARCHITECTES DISPONIBLE</li>
							</div>
						</>
					)}
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
