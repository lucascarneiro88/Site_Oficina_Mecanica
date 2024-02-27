import React from 'react'
import './footer.css';


function Footer() {
  return (
    <footer className="footer">
    <div className="container">
        <div className="footer-content">
            <div className="footer-section">
                <h3>Contato</h3>
                <p>Telefone: (xx) xxxxx-xxxx</p>
                <p>Email: exemplo@example.com</p>
            </div>
            <div className="footer-section">
                <h3>Horário de Funcionamento</h3>
                <p>Segunda a Sexta: 08:00 - 18:00</p>
             
            </div>
            <div className="footer-section">
                <h3>Endereço</h3>
                <p>Rua Exemplo, 123</p>
                <p>Cidade, Estado</p>
            </div>
        </div>
    </div>
</footer>
);
}


export default Footer
