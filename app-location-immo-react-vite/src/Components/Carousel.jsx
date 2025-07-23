import React, { useState } from "react";
import "../styles/main.scss";
import arrowLeft from "../assets/images/arrow-left.png";
import arrowRight from "../assets/images/arrow-right.png";

function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0);
  const total = pictures.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="carousel">
      <img
        src={pictures[current]}
        alt={`Image ${current + 1}`}
        className="carousel-img"
      />

      {total > 1 && (
        <>
          <button className="carousel-arrow left" onClick={prevSlide}>
            <img src={arrowLeft} alt="Précédent" />
          </button>
          <button className="carousel-arrow right" onClick={nextSlide}>
            <img src={arrowRight} alt="Suivant" />
          </button>
          <div className="carousel-counter">
            {current + 1} / {total}
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;
