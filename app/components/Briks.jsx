'use client'

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Briks = () => {
  const pathname = usePathname();
  const basePath = pathname.includes('/lamy_construction_website') ? '/lamy_construction_website' : '';
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) { // Adjust this value as needed
        setAnimateText(true);
      } else {
        setAnimateText(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-stone-800 flex flex-col md:flex-row bg-stone-800 min-h-screen">
      <div className="md:w-1/2 w-full">
        <img
          src={`${basePath}/assets/briques.png`}
          alt="briques"
          className="h-full w-full object-cover"
        />
      </div>
      <div
        className={`md:w-1/2 w-full tc_light_yellow p-16 overflow-y-auto slide-up ${animateText ? 'show' : ''}`}
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
};

export default Briks;
