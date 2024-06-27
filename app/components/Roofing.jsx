"use client";

import BasePath from "./BasePath";
import React, { useEffect, useState, useRef, useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

const Roofing = () => {
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
							<p className="text-stone-800 mb-4 text-2xl">ROOFING</p>
							<p className="mb-4">
								Qualified, competent, and reliable team. Our reputation is built
								on our reliability, good service, and exceptional quality of our
								work.
							</p>
							<p className="mb-4">20-year guarantee.</p>
							<p className="mb-4">
								Not sure which option to choose? Our team of professionals will
								be happy to answer your questions and offer you the best
								solution based on your needs.
							</p>
							<p className="mb-4">
								Contact us for your cornice restoration and repair needs!
							</p>
						</>
					) : (
						<>
							<p className="text-stone-800 mb-4 text-2xl">TOITURE</p>
							<p className="mb-4">
								Équipe qualifiée, compétente et fiable. Notre réputation repose
								sur notre fiabilité, notre bon service et une qualité
								exceptionnelle de nos travaux.
							</p>
							<p className="mb-4">Garantie de 20 ans.</p>
							<p className="mb-4">
								Vous n'êtes pas certain du choix à faire? C'est avec plaisir que
								notre équipe de professionnels répondra à vos questions et vous
								proposera la meilleure solution, en fonction de vos besoins.
							</p>
							<p className="mb-4">
								Contactez-nous pour vos besoins en restauration et en réparation
								de corniche!
							</p>
						</>
					)}
				</div>
				<div className="relative flex justify-center items-end">
					<img
						src={`${basePath}/assets/toiture1.png`}
						alt="toiture1"
						className="h-auto w-full object-cover"
					/>
				</div>
			</div>
			<div className="md:w-1/2 w-full flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full">
						<img
							src={`${basePath}/assets/toiture2.png`}
							alt="toiture2"
							className="h-auto w-full object-cover"
						/>
					</div>
					<div className="w-full">
						<img
							src={`${basePath}/assets/toiture3.png`}
							alt="toiture3"
							className="h-auto w-full object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Roofing;
