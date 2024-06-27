"use client";

import React, { useEffect, useState, useRef, useContext } from "react";
import BasePath from "./BasePath";
import Image from "next/image";
import { LanguageContext } from "../components/LanguageContext";

const Insulation = () => {
	const basePath = BasePath();
	const [animateText, setAnimateText] = useState(false);
	const textRef = useRef(null);
	const { language } = useContext(LanguageContext);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setAnimateText(true);
					} else {
						setAnimateText(false);
					}
				});
			},
			{
				threshold: 0.1,
			}
		);

		if (textRef.current) {
			observer.observe(textRef.current);
		}

		return () => {
			if (textRef.current) {
				observer.unobserve(textRef.current);
			}
		};
	}, []);

	return (
		<div className="flex flex-col md:flex-row">
			<div className="md:w-1/2 w-full relative justify-center items-end">
				<Image
					src={`${basePath}/assets/isolation.png`}
					alt="isolation"
					width={1920}
					height={1080}
					style={{ width: "100%", height: "auto" }}
				/>
			</div>
			<div
				ref={textRef}
				className={`md:w-1/2 w-full tc_light_yellow p-16 slide-up ${
					animateText ? "show" : ""
				}`}
			>
				{language === "en" ? (
					<>
						<p className="tc_light_brown mb-4 text-2xl">INSULATION</p>
						<p className="font-extrabold text-lg">Urethane</p>
						<p className="mb-4">
							Urethane insulation proves to be a solution that combines energy
							savings and occupant comfort like no other insulation, suitable
							for all types of buildings.
						</p>
						<p className="mb-4 font-extrabold">
							50% energy savings, uses 50% less space, and is fire-resistant.
						</p>
						<p className="tc_light_brown text-lg mb-4">Here's why</p>
						<p className="mb-4 font-extrabold">
							One of the major advantages of urethane insulation is that it
							combines the following characteristics:
						</p>
						<div className="mb-4">
							<li>
								Superior insulating properties: very high thermal resistance
								with an R-factor of over 6.
							</li>
							<li>
								Air barrier properties: air cannot infiltrate the urethane or
								its periphery.
							</li>
							<li>Vapor barrier properties: certain insulators.</li>
						</div>
						<p className="mb-4 tc_light_brown text-lg">
							Batt Insulation (Mineral Wool)
						</p>
						<div className="mb-4">
							<li>Easy to install by friction.</li>
							<li>Contains 73% recycled materials.</li>
							<li>
								Certified by SCS Certification UL GREENGUARD GOLD for indoor air
								quality.
							</li>
							<li>
								Formaldehyde-free, validated by UL Environment Product
								Environmental Declaration.
							</li>
						</div>
					</>
				) : (
					<>
						<p className="tc_light_brown mb-4 text-2xl">ISOLATION</p>
						<p className="font-extrabold text-lg">L'uréthane</p>
						<p className="mb-4">
							Une isolation à l'uréthane s'avère une solution qui allie économie
							d'énergie et confort des occupants comme aucun autre isolant et
							ce, pour tout type de bâtiment.
						</p>
						<p className="mb-4 font-extrabold">
							50% d'économie d'énergie, utilise 50% moins d'espace et il est
							anti-feu.
						</p>
						<p className="tc_light_brown text-lg mb-4">Voici pourquoi</p>
						<p className="mb-4 font-extrabold">
							Un des avantages majeurs d'une isolation à l'uréthane est de
							combiner les caractéristiques suivantes:
						</p>
						<div className="mb-4">
							<li>
								Propriétés isolantes supérieures: une résistance thermique très
								élevée avec un facteur R de plus de 6.
							</li>
							<li>
								Propriétés de pare-air: l'air ne peut s'infiltrer dans
								l'uréthane ou en périphérie de celui-ci.
							</li>
							<li>Propriété de pare-vapeur: certains isolants.</li>
						</div>
						<p className="mb-4 tc_light_brown text-lg">
							En matelas (Laine minérale)
						</p>
						<div className="mb-4">
							<li>Facile à installer par friction.</li>
							<li>Elle contient 73% de matières recyclées.</li>
							<li>
								Certifiée par SCS Certification UL GREENGUARD OR pour la qualité
								de l'air à l'intérieur des locaux.
							</li>
							<li>
								Sans formaldéhyde, validé par UL Environnent Déclaration
								environnementale de produits UL.
							</li>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Insulation;
