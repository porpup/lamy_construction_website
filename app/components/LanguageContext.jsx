"use client";

import React, { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

const translations = {
	en: {
		home: "Home",
		gallery: "Gallery",
		contacts: "Contact",
		switchLanguage: "FR",
	},
	fr: {
		home: "Accueil",
		gallery: "Galerie",
		contacts: "Contact",
		switchLanguage: "EN",
	},
};

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Get the saved language from local storage
		const savedLanguage = localStorage.getItem("language") || "fr";
		setLanguage(savedLanguage);
		setLoading(false);
	}, []);

	const toggleLanguage = () => {
		setLanguage((prevLanguage) => {
			const newLanguage = prevLanguage === "en" ? "fr" : "en";
			// Save the new language to local storage
			localStorage.setItem("language", newLanguage);
			return newLanguage;
		});
	};

	if (loading) {
		return null; // or a loading spinner if you prefer
	}

	return (
		<LanguageContext.Provider
			value={{ language, toggleLanguage, translations: translations[language] }}
		>
			{children}
		</LanguageContext.Provider>
	);
};
