import React from 'react';
import NavBar from '../Components/NavbarComponents/NavBar.jsx';
import Welcome from '../Components/WelcomeComponents/Welcome.jsx';
import ServiceCard from '../Components/ServiceCardComponents/ServiceCard.jsx';
import servicesData from '../data/servicesData.js'; // Importa os dados dos serviços

function HomePage() {
  return (
    <div className='HomePage'>
      <NavBar />
      <Welcome />
      <div className="home">
        <h1>Nossos Serviços</h1>
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
      </div>
    </div>
  );
}

export default HomePage;
