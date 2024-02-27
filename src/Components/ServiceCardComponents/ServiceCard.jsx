import React from 'react';
import './serviceCard.css';

function ServiceCard(props) {
  return (
    <div
      className="service-card"
      whileHover={{ scale: 1.05 }} // Aumenta a escala ao passar o mouse
    >
 <div className="item">
  <div className="image-wrapper">
    <img src={props.imageUrl} alt={props.title} />
  </div>
  <div className="overlay">
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </div>
</div>
    </div>
  );
}

export default ServiceCard;
