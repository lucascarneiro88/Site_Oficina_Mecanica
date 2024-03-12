import React from "react";
import logoCarouselData from "../../data/logoCarouselData";
import "./logoCarousel.css";

function LogoCarousel() {
  const combinedLogos = [...logoCarouselData, ...logoCarouselData];

  return (
    <div className="logos">
      <div className="logo-slide">
        {combinedLogos.map((logo) => (
          <img key={logo.id} src={logo.url} alt={logo.alt} />
        ))}
      </div>
      <div className="logo-slide">
        {combinedLogos.map((logo) => (
          <img key={logo.id} src={logo.url} alt={logo.alt} />
        ))}
      </div>
    </div>
  );
}

export default LogoCarousel;
