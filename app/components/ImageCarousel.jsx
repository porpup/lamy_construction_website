"use client";

import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BasePath from "./BasePath";
import { useFullScreen } from "./RootLayout";

const ImageCarousel = () => {
	const basePath = BasePath();
	const [sliderLoaded, setSliderLoaded] = useState(false);
	const [fullscreenImageIndex, setFullscreenImageIndex] = useState(null);
	const [touchStartX, setTouchStartX] = useState(0);
	const [touchEndX, setTouchEndX] = useState(0);
	const isDragging = useRef(false); // Track if the user is dragging

	const { setIsFullScreen } = useFullScreen();

	useEffect(() => {
		setSliderLoaded(true);

		// Add event listener for keydown events
		const handleKeyDown = (e) => {
			if (fullscreenImageIndex !== null) {
				if (e.key === "ArrowRight") {
					showNextImage();
				} else if (e.key === "ArrowLeft") {
					showPreviousImage();
				}
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [fullscreenImageIndex]);

	const images = [
		`${basePath}/assets/gallery/gallery1.jpg`,
		`${basePath}/assets/gallery/gallery2.jpg`,
		`${basePath}/assets/gallery/gallery3.jpg`,
		`${basePath}/assets/gallery/gallery4.jpg`,
		`${basePath}/assets/gallery/gallery5.jpg`,
		`${basePath}/assets/gallery/gallery6.jpg`,
		`${basePath}/assets/gallery/gallery7.jpg`,
	];

	const settings = {
		dots: true,
		infinite: true,
		speed: 2500,
		slidesToShow: 3, // Number of slides to show at once
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		centerMode: true, // Enable center mode
		centerPadding: "110px", // Padding around the centered slide
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: "110px",
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: "75px",
				},
			},
		],
	};

	const handleMouseDown = (e) => {
		isDragging.current = false;
		e.currentTarget.style.outline = "none"; // Remove outline on mousedown
	};

	const handleMouseMove = () => {
		isDragging.current = true;
	};

	const handleMouseUp = (e, index) => {
		e.currentTarget.style.outline = "none"; // Remove outline on mouseup
		if (!isDragging.current) {
			openFullScreen(index);
		}
		isDragging.current = false;
	};

	// Function to open image in full screen overlay
	const openFullScreen = (index) => {
		setFullscreenImageIndex(index);
		setIsFullScreen(true);
	};

	// Function to close full screen overlay
	const closeFullScreen = () => {
		setFullscreenImageIndex(null);
		setIsFullScreen(false);
	};

	// Function to handle touch start
	const handleTouchStart = (e) => {
		setTouchStartX(e.touches[0].clientX);
	};

	// Function to handle touch move
	const handleTouchMove = (e) => {
		setTouchEndX(e.touches[0].clientX);
	};

	// Function to handle touch end
	const handleTouchEnd = () => {
		if (touchStartX - touchEndX > 50) {
			// Swipe left
			showNextImage();
		} else if (touchEndX - touchStartX > 50) {
			// Swipe right
			showPreviousImage();
		}
	};

	// Function to show the next image
	const showNextImage = () => {
		setFullscreenImageIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	// Function to show the previous image
	const showPreviousImage = () => {
		setFullscreenImageIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	return (
		<div className="image-carousel-container pl-3 pr-3">
			<Slider {...settings}>
				{images.map((image, index) => (
					<div
						key={index}
						className="image-slide"
						onMouseDown={handleMouseDown}
						onMouseMove={handleMouseMove}
						onMouseUp={(e) => handleMouseUp(e, index)}
					>
						<img
							src={image}
							alt={`gallery-image${index + 1}`}
							className="carousel-image"
						/>
					</div>
				))}
			</Slider>

			{/* Full screen overlay */}
			{fullscreenImageIndex !== null && (
				<div
					className="fullscreen-overlay"
					onClick={closeFullScreen}
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
				>
					<div className="fullscreen-content">
						<button
							className="fullscreen-prev"
							onClick={(e) => {
								e.stopPropagation();
								showPreviousImage();
							}}
							tabIndex="-1" // Prevent focus
						>
							&#10094;
						</button>
						<img src={images[fullscreenImageIndex]} alt="Full Screen Image" />
						<button
							className="fullscreen-next"
							onClick={(e) => {
								e.stopPropagation();
								showNextImage();
							}}
							tabIndex="-1" // Prevent focus
						>
							&#10095;
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default ImageCarousel;
