"use client";

import BasePath from "./BasePath";
import React, { useEffect, useState, useRef, useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

const Paint = () => {
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
							<p className="text-stone-800 mb-4 text-2xl">PAINTING</p>
							<p className="mb-4">
								Our roll or spray painting service offers you professional work,
								whether it be for residential, commercial, or industrial.
							</p>
							<p className="mb-4">
								Whether it’s renovations, plaster work, or preparation before
								application, you can count on our work and professionalism.
							</p>
							<p className="mb-4">Services offered</p>
							<div className="mb-4">
								<li>Interior / Exterior</li>
								<li>Concrete block</li>
								<li>Wood surfaces</li>
								<li>Stain and varnish</li>
								<li>Wallboard</li>
								<li>Plaster repair</li>
							</div>
							<p className="mb-4">And more...</p>
						</>
					) : (
						<>
							<p className="text-stone-800 mb-4 text-2xl">PEINTURE</p>
							<p className="mb-4">
								Notre service d'application de peinture au rouleau ou au fusil
								vous offre un travail professionnel. Que ce soit pour du
								résidentiel au commercial ou de l'industriel.
							</p>
							<p className="mb-4">
								Qu'il s'agisse de rénovations, de travaux de plâtre, de
								préparation avant application, vous pouvez compter sur notre
								travail ainsi que sur notre professionnalisme.
							</p>
							<p className="mb-4">Services offerts</p>
							<div className="mb-4">
								<li>Intérieur / Extérieur</li>
								<li>Bloc de béton</li>
								<li>Surface de bois</li>
								<li>Teinture et vernis</li>
								<li>Planche murale</li>
								<li>Réparation de plâtre</li>
							</div>
							<p className="mb-4">Et plus encore...</p>
						</>
					)}
				</div>
				<div className="relative flex justify-center items-end">
					<img
						src={`${basePath}/assets/peinture.png`}
						alt="peinture"
						className="h-auto w-full object-cover"
					/>
				</div>
			</div>
			<div className="md:w-1/2 w-full flex-col justify-between">
				<div className="w-full flex justify-center">
					<img
						src={`${basePath}/assets/boiseries.png`}
						alt="boiseries"
						className="h-auto w-full object-contain"
					/>
				</div>
				<div className="flex items-center w-full" style={{ height: "200px" }}>
					<div className="w-1/2 h-full">
						<img
							src={`${basePath}/assets/moulures_rampes.png`}
							alt="moulures_rampes"
							className="h-full w-full object-cover"
						/>
					</div>
					<div className="w-1/2 h-full">
						<img
							src={`${basePath}/assets/portes_et_fenetres.png`}
							alt="portes_et_fenetres"
							className="h-full w-full object-cover"
						/>
					</div>
				</div>
				<div className="flex-grow p-8"></div>
				<div
					ref={textRef2}
					id="text2"
					className={`tc_light_yellow p-8 slide-up ${
						animateText.text2 ? "show" : ""
					}`}
				>
					{language === "en" ? (
						<>
							<p className="text-stone-800 mb-4 text-2xl">
								WOODWORK, MOLDINGS, RAILINGS, DOORS, AND WINDOWS
							</p>
							<p className="mb-4">
								You will find among our selection of woodwork and framing, the
								necessary elements for the installation of your doors and
								moldings. A cabinetmaker can be on site for special orders of
								heritage woodwork, historical, interior, and exterior.
							</p>
						</>
					) : (
						<>
							<p className="text-stone-800 mb-4 text-2xl">
								BOISERIES, MOULURES, RAMPES, PORTES ET FENÊTRES
							</p>
							<p className="mb-4">
								Vous trouverez parmi notre assortiment de boiseries et cadrages,
								le nécessaire à l'installation de vos portes et de vos moulures.
								Possibilité d'ébéniste sur place pour commande spéciale de
								boiserie patrimo- niale, historique, intérieure et extérieure.
							</p>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Paint;
