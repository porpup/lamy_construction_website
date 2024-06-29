"use client";

import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BasePath from "./BasePath";

const ImageCarousel = () => {
  const basePath = BasePath();
  const [sliderLoaded, setSliderLoaded] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const isDragging = useRef(false); // Track if the user is dragging

  useEffect(() => {
    setSliderLoaded(true);
  }, []);

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
    speed: 1500,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    centerMode: true, // Enable center mode
    centerPadding: "60px", // Padding around the centered slide
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px",
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

  const handleMouseUp = (e, image) => {
    e.currentTarget.style.outline = "none"; // Remove outline on mouseup
    if (!isDragging.current) {
      openFullScreen(image);
    }
    isDragging.current = false;
  };

  // Function to open image in full screen overlay
  const openFullScreen = (imageUrl) => {
    setFullscreenImage(imageUrl);
  };

  // Function to close full screen overlay
  const closeFullScreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="image-carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="image-slide"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={(e) => handleMouseUp(e, image)}
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
      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={closeFullScreen}>
          <div className="fullscreen-content">
            <img src={fullscreenImage} alt="Full Screen Image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
