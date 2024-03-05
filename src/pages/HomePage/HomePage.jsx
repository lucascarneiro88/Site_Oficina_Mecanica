import React from "react";
import NavBar from "../../Components/NavbarComponents/NavBar.jsx";
import Welcome from "../../Components/WelcomeComponents/Welcome.jsx";
import ServiceCard from "../../Components/ServiceCardComponents/ServiceCard.jsx";
import servicesData from "../../data/servicesData.js";
import AboutUs from "../../Components/AboutUsComponents/AboutUs.jsx";
import Footer from "../../Components/FooterComponents/Footer.jsx";
import Review from "../../Components/ReviewsComponents/Review.jsx";

import "./homePage.css";

function HomePage() {
  return (
    <div className="homePage">
      <NavBar />
      <Welcome />
      <div className="services-info">
        <span className="whatsapp-link">
          <a
            href="https://api.whatsapp.com/send?phone=5564996343207"
            target="_blank"
            rel="noopener noreferrer"
          >
            Venda de peças
          </a>
        </span>
      </div>

      <div className="home" id="services">
        <h1 className="subtitle-services">Nossos Serviços</h1>
        <div className="services">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
        <div>
          <AboutUs />
        </div>
        <div id="reviews">
          <Review />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
