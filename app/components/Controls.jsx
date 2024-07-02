import React, { useState } from "react";

const Controls = ({ isMenuOpen, toggleMenu, isScrolled, isGalleryPage }) => {
	const [isPressed, setIsPressed] = useState(false);

	const handleMouseDown = () => {
		setIsPressed(true);
	};

	const handleMouseUp = (e) => {
		setIsPressed(false);
		e.target.blur(); // Remove focus from the button
	};

	const handleTouchStart = () => {
		setIsPressed(true);
	};

	const handleTouchEnd = (e) => {
		setIsPressed(false);
		e.target.blur(); // Remove focus from the button
	};

	const lineBaseClass = "block w-full h-0.5 transition-transform duration-200";
	const colorClass =
		isScrolled || isGalleryPage
			? "bg_gray group-hover:bg-neutral-100"
			: "bg-neutral-100 group-hover:bg-stone-800";
	const pressedClass = isPressed ? "bg-neutral-100" : "";

	return (
		<button
			className="menuToggle group outline-none focus:outline-none"
			onClick={toggleMenu}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
		>
			<span
				className={`${lineBaseClass} ${
					isMenuOpen ? "translate-y-3 rotate-45" : ""
				} ${colorClass} ${pressedClass}`}
			></span>
			<span
				className={`${lineBaseClass} ${
					isMenuOpen ? "opacity-0" : ""
				} ${colorClass} ${pressedClass}`}
			></span>
			<span
				className={`${lineBaseClass} ${
					isMenuOpen ? "-translate-y-3 -rotate-45" : ""
				} ${colorClass} ${pressedClass}`}
			></span>
		</button>
	);
};

export default Controls;
