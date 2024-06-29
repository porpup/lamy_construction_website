"use client";

import BasePath from "./BasePath";
import React, { useEffect, useState, useRef, useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

const Washing = () => {
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
							<p className="tc_light_brown mb-4 text-2xl">DISASTER EXPERT</p>
							<p className="mb-4">
								With our professional disaster services, you will be guided
								through the complexities of insurance requirements. We offer all
								the services:
							</p>
							<ul className="mb-4">
								<li>Post-disaster cleaning</li>
								<li>Construction</li>
								<li>Residential and commercial housekeeping</li>
								<li>Dry cleaning</li>
								<li>Excavation</li>
								<li>Water damage</li>
							</ul>
							<p className="mb-4">
								Specialized in cleaning, washing, stain removal, drying,
								decontamination, and so much more.
							</p>
							<p className="mb-4">
								We handle the communication with your insurance to ensure
								everything is resolved as quickly as possible.
							</p>
						</>
					) : (
						<>
							<p className="tc_light_brown mb-4 text-2xl">EXPERT EN SINISTRE</p>
							<p className="mb-4">
								Avec nos services de professionnels en sinistre, vous serez
								guidé à travers les complexités des exigences des assurances.
								Nous offrons tous les services :
							</p>
							<ul className="mb-4">
								<li>Nettoyage après sinistre</li>
								<li>Construction</li>
								<li>Entretien ménager résidentiel et commercial.</li>
								<li>Nettoyeur à sec</li>
								<li>Excavation</li>
								<li>Dégât d'eau</li>
							</ul>
							<p className="mb-4">
								Spécialisés pour nettoyer, laver, détacher, assécher,
								décontaminer et tellement plus encore.
							</p>
							<p className="mb-4">
								Nous nous occupons du lien avec vos assurances pour que tout
								soit réglé le plus rapidement possible.
							</p>
						</>
					)}
				</div>
				<div className="relative flex justify-center items-end">
					<img
						src={`${basePath}/assets/expert_en_sinistre.jpg`}
						alt="expert_en_sinistre"
						className="h-auto w-full object-cover"
					/>
				</div>
			</div>
			<div className="md:w-1/2 w-full flex-col justify-between">
				<div
					ref={textRef2}
					id="text2"
					className={`text-stone-800 p-8 slide-up ${
						animateText.text2 ? "show" : ""
					}`}
				>
					{language === "en" ? (
						<>
							<p className="tc_light_brown mb-4 text-2xl">PRESSURE WASHING</p>
							<p className="mb-4">
								We are highly qualified and can handle the cleaning of your
								residence or buildings.
							</p>
							<p className="mb-4">
								Lamy Wash is a reliable team that respects your deadlines and
								budgets. We ensure the best customer service and exceptional
								quality of execution.
							</p>
						</>
					) : (
						<>
							<p className="tc_light_brown mb-4 text-2xl">LAVAGE À PRESSION</p>
							<p className="mb-4">
								Nous sommes hautement qualifiés, et nous pouvons nous s'occuper
								du nettoyage de votre résidence ou de vos bâtiments.
							</p>
							<p className="mb-4">
								Lavage Lamy est une équipe fiable respectant vos échéanciers et
								vos budgets. Elle assure le meilleur service à la clientèle
								ainsi qu'une qualité d'exécution exceptionnelle.
							</p>
						</>
					)}
				</div>
				<div className="w-full flex flex-col">
					<div className="w-full">
						<img
							src={`${basePath}/assets/lavage_a_pression1.jpeg`}
							alt="lavage_a_pression1"
							className="h-auto w-full object-cover"
						/>
					</div>
					<div className="w-full">
						<img
							src={`${basePath}/assets/lavage_a_pression2.jpg`}
							alt="lavage_a_pression2"
							className="h-auto w-full object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Washing;
