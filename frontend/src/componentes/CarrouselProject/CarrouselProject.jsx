import React, { useState, useEffect } from "react";
import "./CarrouselProject.css";
const CarrouselProject = () => {
  const images = [
    "https://res.cloudinary.com/doczyujqf/image/upload/v1704298991/FZ%20OBRAs/jacek-dylag-nhCPOp4A2Xo-unsplash_yahkvb.jpg",
    "https://res.cloudinary.com/doczyujqf/image/upload/v1704293836/FZ%20OBRAs/fons-heijnsbroek-vBfEZdpEr-E-unsplash_cvqckd.jpg",
    "https://res.cloudinary.com/doczyujqf/image/upload/v1700068022/Zuch%20Properties/Slides/slide3_bz7to1_xeg5wx_11zon_zwtfwt.webp",
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    const preloadImages = () => {
      images.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };
    preloadImages();
  }, [images]);

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      next();
    }, 8000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [selectedIndex]);

  // const previous = () => {
  //   const condition = selectedIndex > 0;
  //   const nextIndex = condition ? selectedIndex - 1 : images.length -1;
  //   setSelectedImage(images[nextIndex]);
  //   setSelectedIndex(nextIndex);
  // };
  const next = () => {
    const condition = selectedIndex < images.length - 1;
    const nextIndex = condition ? selectedIndex + 1 : 0;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };
  return (
    <div className="carousel-div w-full">
      <div className="carousel-slider overflow-hidden">
        <img
          key={selectedIndex}
          src={selectedImage}
          alt="Imagen carrusel"
          className="carousel-img image-fade-in-zoom"
        />
        <h2 className="title-over font-montserrat-300 text-xl">FZ OBRAS </h2>
        <div className="max-w-[1300px]">
          <h1 className="title-over-image w-full font-barlow-700 text-4xl md:text-7xl md:w-2/3">
          Nuestros Proyectos: Experiencia y Excelencia <br/>en Acción
          </h1>
        </div>
        <button>Ver todas las propiedades</button>
      </div>
    </div>
  );
};

export default CarrouselProject;
