"use client";

import BasePath from "./BasePath";
import React, { useEffect, useState, useRef } from "react";

const Briks = () => {
	const basePath = BasePath();
	const [animateText, setAnimateText] = useState({
		text1: false,
		text2: false,
	});
	const textRef1 = useRef(null);
	const textRef2 = useRef(null);

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
				threshold: 0.1, // Adjust this value as needed
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
					<p className="text-stone-800 mb-4 text-2xl">BRIQUES</p>
					<p className="mb-4">
						Nous offrons des projets clés en main, jusqu'à 12 étages pour votre
						projet: que ce soit pour un foyer, un mur ou la maçonnerie complète
						de votre demeure, commerces ou immeubles.
					</p>
					<p className="mb-4">
						Nous faisons aussi la réfection des points de maçonnerie et le
						remplacement des pièces de maçonnerie.
					</p>
				</div>
				<div className="flex-grow"></div>
				<div className="relative flex justify-center items-end">
					<img
						src={`${basePath}/assets/briques.png`}
						alt="briques"
						className="h-auto w-full object-cover"
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
				</div>
				<div className="flex-grow"></div>
				<div className="flex justify-between p-8 items-center">
					<div className="w-1/2 mx-8">
						<img
							src={`${basePath}/assets/ordre_ingenieurs_du_quebec_logo.png`}
							alt="ordre_ingenieurs_du_quebec_logo"
							className="h-auto w-full object-contain"
						/>
					</div>
					<div className="w-1/2 mx-8">
						<img
							src={`${basePath}/assets/ordre_des_architectes_du_québec_logo.png`}
							alt="ordre_des_architectes_du_québec_logo"
							className="h-auto w-full object-contain"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Briks;
