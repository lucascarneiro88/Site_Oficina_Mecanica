import React from "react";
import logoCarouselData from "../../data/logoCarouselData";
import "./logoCarousel.css";

function LogoCarousel() {
  const combinedLogos = [...logoCarouselData, ...logoCarouselData];

  return (
    <div className="logos">
      <div className="logo-slide">
        {combinedLogos.map((logo, index) => (
          <img key={`logo_${index}`} src={logo.url} alt={logo.alt} />
        ))}
      </div>
      <div className="logo-slide">
        {combinedLogos.map((logo, index) => (
          <img key={`logo_${index + combinedLogos.length}`} src={logo.url} alt={logo.alt} />
        ))}
      </div>
    </div>
  );
}

export default LogoCarousel;
