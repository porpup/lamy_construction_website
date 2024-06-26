'use client';

import BasePath from './BasePath';
import React, { useEffect, useState, useRef } from "react";

const Floor = () => {
  const basePath = BasePath();
  const [animateText, setAnimateText] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimateText(true);
          } else {
            setAnimateText(false);
          }
        });
      },
      {
        threshold: 0.1, // Adjust this value as needed
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
        <img
          src={`${basePath}/assets/expert_en_plancher.png`}
          alt="expert_en_plancher"
          className="h-auto w-full object-cover"
        />
      </div>
      <div
        ref={textRef}
        className={`md:w-1/2 w-full tc_light_yellow p-16 slide-up ${animateText ? 'show' : ''}`}
      >
        <p className="tc_light_brown mb-4 text-2xl">EXPERT EN PLANCHER</p>
        <p className="mb-4">Boily œuvre dans le domaine de la rénovation.</p>
        <p className="mb-4">
          Entreprise québécoise qui depuis son ouverture a réalisé plus de 500
          projets.
        </p>
        <p className="mb-4">L'entreprise offre plusieurs services :</p>
        <p className="mb-4">
          Toiture, peinture, lavage à pression, isolation, revêtements
          planchers, céramique, tapis, boiseries, moulures, rampes, portes,
          fenêtres, briques. Elle offre également un service d'expert en après
          sinistre.
        </p>
        <p className="mb-4">
          Son équipe a acquis avec les années, une réputa- tion de fiabilité, un
          service à la clientèle hors pair et surtout une qualité des travaux
          exceptionnelle. Nous mettons tout en œuvre afin de maintenir des
          standards de qualité élevés et une propreté du chantier exemplaire.
        </p>
        <p className="mb-4">
          L'entreprise se spécialise dans le domaine commercial et œuvre
          également dans le domaine de la restauration de bâtiments
          patrimoniaux.
        </p>
      </div>
    </div>
  );
}

export default Floor;
