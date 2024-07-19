"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = ({ onFullscreenChange }) => {
	const [sliderLoaded, setSliderLoaded] = useState(false);
	const [fullscreenImageIndex, setFullscreenImageIndex] = useState(null);
	const [touchStartX, setTouchStartX] = useState(0);
	const [touchEndX, setTouchEndX] = useState(0);
	const isDragging = useRef(false);

	const originalThemeColorRef = useRef("");

	const setThemeColor = (color) => {
		let metaTag = document.querySelector('meta[name="theme-color"]');
		if (!metaTag) {
			metaTag = document.createElement("meta");
			metaTag.name = "theme-color";
			document.head.appendChild(metaTag);
		}
		if (!originalThemeColorRef.current) {
			originalThemeColorRef.current = metaTag.content;
		}
		metaTag.content = color;
	};

	useEffect(() => {
		setSliderLoaded(true);

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

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [fullscreenImageIndex]);

	useEffect(() => {
		onFullscreenChange(fullscreenImageIndex !== null);
		if (fullscreenImageIndex !== null) {
			setThemeColor("#000000");
		} else {
			setThemeColor(originalThemeColorRef.current || "#ffffff");
		}
	}, [fullscreenImageIndex, onFullscreenChange]);

	const images = [
		"/assets/gallery/gallery1.jpg",
		"/assets/gallery/gallery2.jpg",
		"/assets/gallery/gallery3.jpg",
		"/assets/gallery/gallery4.jpg",
		"/assets/gallery/gallery5.jpg",
		"/assets/gallery/gallery6.jpg",
		"/assets/gallery/gallery7.jpg",
	];

	const settings = {
		dots: true,
		infinite: true,
		speed: 2500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		centerMode: true,
		centerPadding: "110px",
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
		e.currentTarget.style.outline = "none";
	};

	const handleMouseMove = () => {
		isDragging.current = true;
	};

	const handleMouseUp = (e, index) => {
		e.currentTarget.style.outline = "none";
		if (!isDragging.current) {
			openFullScreen(index);
		}
		isDragging.current = false;
	};

	const openFullScreen = (index) => {
		setFullscreenImageIndex(index);
	};

	const closeFullScreen = () => {
		setFullscreenImageIndex(null);
	};

	const handleTouchStart = (e) => {
		setTouchStartX(e.touches[0].clientX);
	};

	const handleTouchMove = (e) => {
		setTouchEndX(e.touches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (touchStartX - touchEndX > 50) {
			showNextImage();
		} else if (touchEndX - touchStartX > 50) {
			showPreviousImage();
		}
	};

	const showNextImage = () => {
		setFullscreenImageIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

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
						<Image
							src={image}
							alt={`gallery-image${index + 1}`}
							width={800}
							height={600}
							className="carousel-image"
							priority={index === 0}
						/>
					</div>
				))}
			</Slider>

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
							tabIndex="-1"
						>
							&#10094;
						</button>
						<Image
							src={images[fullscreenImageIndex]}
							alt="Full Screen Image"
							width={1920}
							height={1080}
							style={{ width: "auto", height: "auto" }}
						/>
						<button
							className="fullscreen-next"
							onClick={(e) => {
								e.stopPropagation();
								showNextImage();
							}}
							tabIndex="-1"
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
