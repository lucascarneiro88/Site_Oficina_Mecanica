import React from 'react';
import { motion } from 'framer-motion';
import './serviceCard.css';

function ServiceCard(props) {
  return (
    <motion.div
      className="service-card"
      whileHover={{ scale: 1.05 }}
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
    </motion.div>
  );
}

export default ServiceCard;

