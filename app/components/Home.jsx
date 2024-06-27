'use client';

import React, { useContext } from "react";
import BasePath from "./BasePath";
import { LanguageContext } from '../components/LanguageContext'; // Adjust the path if needed

const Home = () => {
  const basePath = BasePath();
  const { language } = useContext(LanguageContext);

  return (
    <div className="relative text-center">
      <img
        src={`${basePath}/assets/constructors.png`}
        alt="constructors"
        className="w-full"
      />
      {language === 'en' ? (
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-stone-800 whitespace-nowrap drop-shadow-lg vision-text">
          Precision. Reliability. Excellence.
        </p>
      ) : (
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-stone-800 whitespace-nowrap drop-shadow-lg vision-text">
          Précision. Fiabilité. Excellence.
        </p>
      )}
    </div>
  );
};

export default Home;
