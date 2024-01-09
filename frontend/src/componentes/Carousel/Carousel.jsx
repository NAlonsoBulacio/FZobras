import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../multimedia/slide1.jpg";
import img2 from "../../multimedia/slide2.jpg";
import "./Carousel.css";
const MyCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay={true}
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        interval={5000}
        infiniteLoop={true}
        useKeyboardArrows={true}
      >
        <div className="carousel-slide">
          <div className="image-container">
            <img src={img1} alt="Imagen 1" className="carousel-image" />
            <div className="image-text">
              <h1 className="font-poppins-500 text-xl md:text-6xl">Esta es tu empresa constructora de confianza</h1>
              <p>Otra información</p>
            </div>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="image-container">
            <img src={img2} alt="Imagen 2" className="carousel-image" />
            <div className="image-text">
              <h1 className="font-poppins-500 text-xl md:text-6xl">Tu texto aquí</h1>
              <p>Enserio somos los mejores</p>
            </div>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="image-container">
            <img src={img2} alt="Imagen 2" className="carousel-image" />
            <div className="image-text">
              <h1 className="font-poppins-500 text-xl md:text-6xl">Tu texto aquí</h1>
              <p>Enserio somos los mejores</p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
