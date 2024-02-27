import React from 'react';
import './welcome.css'; // Import do arquivo CSS

function Welcome() {
  return (
    <div className="welcome-container"> {/* Adicione a classe welcome-container aqui */}
      <div className="welcome-text">
        <h2>Bem-vindo ao nosso site!</h2>
        <p>Estamos felizes em tê-lo aqui. Explore nossos serviços e descubra mais sobre nós.</p>
      </div>
      <div className="welcome-background">
        <img src="/img/ImgWelcome2.png.jpg" alt="imagem caminhões" className="welcome-image" />
      </div>
    </div>
  );
}

export default Welcome;
