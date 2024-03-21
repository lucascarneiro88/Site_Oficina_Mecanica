import React from "react";
import "./scrollToTopButton.css";

function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={scrollToTop} className="scrollToTopBtn">
      <img src="../img/logo-seta-topo.png" alt="Seta para cima" />
    </button>
  );
}

export default ScrollToTopButton;
