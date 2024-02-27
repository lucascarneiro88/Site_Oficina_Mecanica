import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./navBar.css"; // Import do arquivo CSS

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="redes-sociais">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="/caminho/para/facebook.png" alt="Facebook" /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src="/caminho/para/instagram.png" alt="Instagram" /></a>
      </div>
      <div className="logo">
        <img src="/caminho/para/o/logo.png" alt="Logo da empresa" />
      </div>
      <div className={`menu-container ${menuOpen ? 'open' : ''}`}>
        <ul className="menu">
          <li><Link to="/services">Serviços</Link></li>
          <li><Link to="/about">Quem Somos</Link></li>
          <li><Link to="/reviews">Avaliações</Link></li>
        </ul>
      </div>
      <button className="menu-btn" onClick={toggleMenu}>Menu</button>
    </nav>
  );
}

export default NavBar;
