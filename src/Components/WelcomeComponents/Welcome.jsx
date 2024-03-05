import React from "react";
import { motion } from "framer-motion";

import "./welcome.css";
import Contact from "../ContactComponents/Contact";

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-text">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            fontSize: "88px",
            fontWeight: "bold",
            color: "#fff",
            textShadow: "2px 2px 4px rgba(26, 23, 23, 0.829)",
          }}
        >
          Mauro Mecânico
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          style={{ fontSize: "40px", color: "#fff" }}
        >
          Bem-vindo ao nosso site!
        </motion.h2>
        <div className="happy-text">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            style={{
              fontWeight: "bold",
              fontSize: "30px",
              color: "#ffffff",
              textShadow: "2px 2px 4px hsla(0, 0%, 5.88235294117647%, 0.945)",
            }}
          >
            <motion.span
              style={{
                display: "block",
                textAlign: "center",
                marginBottom: "10px",
                borderBottom: "2px solid #ffffff",
              }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 1.8 }}
            />
            Estamos felizes em tê-lo aqui. Explore nossos serviços e descubra
            mais sobre nós.
          </motion.p>
        </div>
        <div>
          <Contact />
        </div>
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
