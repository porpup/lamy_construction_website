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
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-0 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-stone-800 whitespace-nowrap drop-shadow-lg vision-text">
          Precision. Reliability. Excellence.
        </p>
      ) : (
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-0 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-stone-800 whitespace-nowrap drop-shadow-lg vision-text">
          Précision. Fiabilité. Excellence.
        </p>
      )}
    </div>
  );
};

export default Home;
