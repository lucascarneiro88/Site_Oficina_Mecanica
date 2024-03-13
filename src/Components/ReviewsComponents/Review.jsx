import React from "react";

// import reviewsData from "../../data/reviewsData";
import "./review.css";

function Review(props) {
  const reviews = props.reviews.map((review, index) => (
    <div key={index} className="review">
      <h2>{review.nome}</h2>
      <p>{review.comentario}</p>
    </div>
  ));

  return (
    <div className="container">
      <h1>Comentários dos Clientes</h1>
     <div className="reviews">{reviews}</div> 
    </div>
  );
}

export default Review;
