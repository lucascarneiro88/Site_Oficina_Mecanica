import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="redes-sociais-footer">
            <a
              href="https://www.instagram.com/mauro.figueira.319/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100087134086815"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
          <div className="footer-section contato">
            <h3>Contato</h3>
            <p>
              <img
                src="../img/icon-phone.png"
                alt="Ícone Telefone"
                className="icone-contato"
              />{" "}
              (48) 99634-3207
            </p>
            <p>
              <img
                src="../img/icon-email.png"
                alt="Ícone Email"
                className="icone-contato"
              />{" "}
              oficinamauromecanicoltda@gmail.com
            </p>
          </div>

          <div className="footer-section endereco">
            <h3>Endereço</h3>
            <p>Rua: Av. Dona Santina C. da Silva - Limeira</p>
            <p>Cidade: Biguaçu - SC</p>
            <p>CEP: 88160-000</p>
          </div>
        </div>
      </div>
      <div className="signature">
        Lucas Carneiro &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
}

export default Footer;
