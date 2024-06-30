"use client";

import React, { useEffect, useState, useRef, useContext } from "react";
import BasePath from "./BasePath";
import Image from "next/image";
import { LanguageContext } from "../components/LanguageContext";

const Floor = () => {
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
					src={`${basePath}/assets/expert_en_plancher.jpg`}
					alt="expert_en_plancher"
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
						<p className="tc_light_brown mb-4 text-2xl">FLOORING EXPERT</p>
						<p className="mb-4">Lamy operates in the field of renovation.</p>
						<p className="mb-4">
							A Quebec company that has completed more than 500 projects since
							its inception.
						</p>
						<p className="mb-4">The company offers several services:</p>
						<p className="mb-4">
							Roofing, painting, pressure washing, insulation, floor coverings,
							ceramics, carpets, woodwork, moldings, railings, doors, windows,
							bricks. It also offers post-disaster expert services.
						</p>
						<p className="mb-4">
							Over the years, its team has earned a reputation for reliability,
							exceptional customer service, and above all, outstanding quality
							of work. We strive to maintain high standards of quality and
							exemplary cleanliness on the job site.
						</p>
						<p className="mb-4">
							The company specializes in the commercial sector and also works in
							the restoration of heritage buildings.
						</p>
					</>
				) : (
					<>
						<p className="tc_light_brown mb-4 text-2xl">EXPERT EN PLANCHER</p>
						<p className="mb-4">Lamy œuvre dans le domaine de la rénovation.</p>
						<p className="mb-4">
							Entreprise québécoise qui depuis son ouverture a réalisé plus de
							500 projets.
						</p>
						<p className="mb-4">L'entreprise offre plusieurs services:</p>
						<p className="mb-4">
							Toiture, peinture, lavage à pression, isolation, revêtements
							planchers, céramique, tapis, boiseries, moulures, rampes, portes,
							fenêtres, briques. Elle offre également un service d'expert en
							après sinistre.
						</p>
						<p className="mb-4">
							Son équipe a acquis avec les années, une réputation de
							fiabilité, un service à la clientèle hors pair et surtout une
							qualité des travaux exceptionnelle. Nous mettons tout en œuvre
							afin de maintenir des standards de qualité élevés et une propreté
							du chantier exemplaire.
						</p>
						<p className="mb-4">
							L'entreprise se spécialise dans le domaine commercial et œuvre
							également dans le domaine de la restauration de bâtiments
							patrimoniaux.
						</p>
					</>
				)}
			</div>
		</div>
	);
};

export default Floor;
