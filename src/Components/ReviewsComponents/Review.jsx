import React from 'react';
import './review.css';

function Review() {
  return (
    <div>
      <h1>Comentários dos Clientes</h1>
      <div className="review">
        <h2>Cliente Satisfeito</h2>
        <p>"Excelente serviço! A oficina resolveu meu problema rapidamente e com um preço justo. Recomendo!"</p>
      </div>
      <div className="review">
        <h2>Cliente Feliz</h2>
        <p>"Fui muito bem atendido na Mauro Mecânico. Profissionais competentes e serviço de qualidade."</p>
      </div>
      <div className="review">
        <h2>Cliente Fiel</h2>
        <p>"Já sou cliente há anos e sempre fico satisfeito com o serviço prestado. Recomendo a todos!"</p>
      </div>
    </div>
  );
}

export default Review;
