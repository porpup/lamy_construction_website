"use client";

import BasePath from "./BasePath";
import React, { useEffect, useState, useRef, useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

const Design = () => {
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
		<div className="bg_light_yellow flex flex-col md:flex-row">
			<div className="md:w-1/2 w-full flex flex-col justify-between">
				<div
					ref={textRef1}
					id="text1"
					className={`text-stone-800 p-8 slide-up ${
						animateText.text1 ? "show" : ""
					}`}
				>
					{language === "en" ? (
						<>
							<p className="tc_light_brown mb-4 text-2xl">
								DESIGN WITH A DECORATOR, MANUFACTURING, AND INSTALLATION OF
								CABINETS
							</p>
							<p className="mb-4">
								We specialize in the design, manufacturing, and installation of
								custom kitchen and bathroom cabinets, and have been doing so for
								many years.
							</p>
							<p className="mb-4">
								Our mission is simple: customer satisfaction, achieved by
								optimizing our processes day by day. We accomplish this by
								respecting deadlines and your budget, offering the best quality
								at the best price, and ensuring your satisfaction throughout the
								completion of your project!
							</p>
						</>
					) : (
						<>
							<p className="tc_light_brown mb-4 text-2xl">
								CONCEPTION AVEC DÉCORATRICE, FABRICATION ET INSTALLATION
								D'ARMOIRES
							</p>
							<p className="mb-4">
								Nous sommes spécialisé dans la conception, la fabrication et
								l'installation d'armoires de cuisine et de salle de bain sur
								mesure, depuis plusieurs années.
							</p>
							<p className="mb-4">
								Notre mission est bien simple, la satisfaction client, en
								optimisant nos processus jour après jour. Nous y arrivons en
								respectant nos échéanciers et votre budget, en offrant la
								meilleure qualité au meilleur prix, et en s'assurant de votre
								satisfaction tout au long de la réalisation de votre projet!
							</p>
						</>
					)}
				</div>
				<div className="relative flex justify-center items-end">
					<img
						src={`${basePath}/assets/conception_avec_decoratrice_fabrication_et_installation_darmoires.jpg`}
						alt="conception_avec_decoratrice_fabrication_et_installation_darmoires"
						className="h-auto w-full object-cover"
					/>
				</div>
			</div>
			<div className="md:w-1/2 w-full flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full">
						<img
							src={`${basePath}/assets/ceramique.png`}
							alt="ceramique"
							className="h-auto w-full object-cover"
						/>
					</div>
					<div className="w-full">
						<img
							src={`${basePath}/assets/tapis.jpg`}
							alt="tapis"
							className="h-auto w-full object-cover"
						/>
					</div>
				</div>
				<div className="flex-grow p-8"></div>
				<div
					ref={textRef2}
					id="text2"
					className={`text-stone-800 p-8 slide-up ${
						animateText.text2 ? "show" : ""
					}`}
				>
					{language === "en" ? (
						<>
							<p className="tc_light_brown mb-4 text-2xl">
								FLOOR COVERINGS, CERAMIC, AND CARPET
							</p>
							<p className="mb-4">
								Floor and decoration covering. Residential or commercial
								projects, our experts will guide you through each step of your
								renovation project. You will have access to specialized
								consulting services and designers to help you find the right
								material for your decor and complete your project with peace of
								mind.
							</p>
						</>
					) : (
						<>
							<p className="tc_light_brown mb-4 text-2xl">
								REVÊTEMENTS PLANCHER, CÉRAMIQUE ET TAPIS
							</p>
							<p className="mb-4">
								Revêtement de sol et de décoration. Projets résidentiels ou
								commerciaux, nos experts vont vous guider à chacune des étapes
								de votre projet de rénovation. Vous aurez accès au service de
								conseiller spécialisé et de designer afin de vous aider à
								trouver le bon matériel pour votre décor et ainsi compléter
								votre projet en toute quiétude.
							</p>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Design;
