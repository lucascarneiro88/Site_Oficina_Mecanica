import React from "react";
import { motion } from "framer-motion";

import "./welcome.css";

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-text">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            fontSize: "70px",
            fontWeight: "bold",
            color: "#fff",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", 
          }}
        >
          Mauro Mecânico
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, delay: 1 }} 
          style={{ fontSize: "24px", color: "#fff" }}
        >
          Bem-vindo ao nosso site!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, delay: 1.5 }} 
          style={{ color: "#fff" }}
        >
          Estamos felizes em tê-lo aqui. Explore nossos serviços e descubra mais
          sobre nós.
        </motion.p>
      </div>
      <div className="welcome-background">
        <img
          src="../img/welcome.png"
          alt="imagem caminhões"
          className="welcome-image"
        />
      </div>
    </div>
  );
}

export default Welcome;
