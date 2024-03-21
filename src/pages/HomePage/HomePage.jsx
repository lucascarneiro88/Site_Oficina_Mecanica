import React from "react";
import NavBar from "../../Components/NavbarComponents/NavBar.jsx";
import Welcome from "../../Components/WelcomeComponents/Welcome.jsx";
import ServiceCard from "../../Components/ServiceCardComponents/ServiceCard.jsx";
import servicesData from "../../data/servicesData.js";
import AboutUs from "../../Components/AboutUsComponents/AboutUs.jsx";
import Footer from "../../Components/FooterComponents/Footer.jsx";
import Review from "../../Components/ReviewsComponents/Review.jsx";
import Map from "../../Components/MapComponents/Map.jsx";
import LogoCarousel from "../../Components/LogoComponent/LogoCarousel.jsx";
import PartsSale from "../../Components/PartsSale/PartsSale.jsx";

import reviewsData from "../../data/reviewsData.js";
import "./homePage.css";
import ScrollToTopButton from "../../Components/ScrollToTopButton/ScrollToTopButton.jsx";

function HomePage() {
  return (
    <div className="homePage">
      <NavBar />
      <Welcome />
      <PartsSale />

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
          <LogoCarousel />
        </div>
        <div>
          <AboutUs />
        </div>
        <div>
          <Map />
        </div>
        <div id="reviews">
          <Review reviews={reviewsData} />
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default HomePage;
