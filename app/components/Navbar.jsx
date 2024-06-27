'use client';

import React, { useState, useEffect, useContext } from "react";
import BasePath from './BasePath';
import Link from "next/link";
import Image from "next/image";
import { LanguageContext } from '../components/LanguageContext';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const basePath = BasePath();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, translations } = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkClass = `font-bold text-lg ${isScrolled ? 'tc_gray hover:text-neutral-100' : 'text-stone-800 hover:text-neutral-100'}`;

  return (
    <div
      className={`fixed top-0 left-0 w-full z-10 transition-colors duration-300 ${isScrolled ? "bg-stone-800" : "bg-transparent"}`}
    >
      <div className="mx-auto flex items-center justify-between p-3">
        <Link href="/">
          <Image
            src={`${basePath}/assets/logo.png`}
            width={70}
            height={70}
            alt="logo"
            priority={true}
            style={{ width: '70px', height: '70px' }}
          />
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            ☰
          </button>
        </div>
        <nav className={`flex items-center space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
          <Link href="/" className={linkClass}>{translations.home}</Link>
          <ScrollLink to="footer" smooth={true} duration={500} className={`cursor-pointer ${linkClass}`} onClick={toggleMenu}>
            {translations.contacts}
          </ScrollLink>
          <button
            onClick={toggleLanguage}
            className={`${linkClass} border border-current px-2 py-1 rounded`}
          >
            {language === 'en' ? 'FR' : 'EN'}
          </button>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-2 p-3">
          <Link href="/" onClick={toggleMenu} className={linkClass}>{translations.home}</Link>
          <ScrollLink to="footer" smooth={true} duration={500} className={`cursor-pointer ${linkClass}`} onClick={toggleMenu}>
            {translations.contacts}
          </ScrollLink>
          <button
            onClick={() => { toggleLanguage(); toggleMenu(); }}
            className={`${linkClass} border border-current px-2 py-1 rounded`}
          >
            {language === 'en' ? 'FR' : 'EN'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
