'use client'; // Add this line

import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

const translations = {
  en: {
    home: "Home",
    contacts: "Contact",
    switchLanguage: "FR"
  },
  fr: {
    home: "Accueil",
    contacts: "Contact",
    switchLanguage: "EN"
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr'); // Set French as the default language

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'fr' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};
