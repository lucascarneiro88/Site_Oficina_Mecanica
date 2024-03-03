import React from "react";
import "./navBar.css";

function NavBar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    console.log("Scrolling to section:", sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <div className="redes-sociais">
        <a
          href="https://www.facebook.com/profile.php?id=100087134086815"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/mauro.figueira.319/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="logo">
        <img src="../img/logo-mecanico.png" alt="Logo da empresa" />
        <h3>Mauro Mecânico</h3>
      </div>
      <div className="list">
        <ul>
          <li>
            <a href="#services" onClick={() => scrollToSection("services")}>
              Serviços
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => scrollToSection("about")}>
              Quem Somos
            </a>
          </li>
          <li>
            <a href="#reviews" onClick={() => scrollToSection("reviews")}>
              Avaliações
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
