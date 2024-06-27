import React from "react";

const Controls = ({ isMenuOpen, toggleMenu, isScrolled }) => {
	const lineBaseClass = "block w-full h-0.5 transition-transform duration-200";
	const colorClass = isScrolled ? "bg-neutral-100" : "bg-stone-800";

	return (
		<button className="menuToggle" onClick={toggleMenu}>
			<span
				className={`${lineBaseClass} ${
					isMenuOpen ? "translate-y-3 rotate-45" : ""
				} ${colorClass}`}
			></span>
			<span
				className={`${lineBaseClass} ${
					isMenuOpen ? "opacity-0" : ""
				} ${colorClass}`}
			></span>
			<span
				className={`${lineBaseClass} ${
					isMenuOpen ? "-translate-y-3 -rotate-45" : ""
				} ${colorClass}`}
			></span>
		</button>
	);
};

export default Controls;
