import React from "react";
import logoCarouselData from "../../data/logoCarouselData";
import "./logoCarousel.css";

function LogoCarousel() {
  return (
    <div className="logos">
      <div className="logos-slide">
        {logoCarouselData.map((logo, index) => (
          <img key={`logo_${index}`} src={logo.url} alt={logo.alt} />
        ))}
      </div>
      <div className="logos-slide">
        {logoCarouselData.map((logo, index) => (
          <img key={`logo_${index}`} src={logo.url} alt={logo.alt} />
        ))}
      </div>
    </div>
  );
}

export default LogoCarousel;
