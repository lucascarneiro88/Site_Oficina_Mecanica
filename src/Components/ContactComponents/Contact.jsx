import React from "react";
import "./contact.css";

function Contact() {
  const phoneNumber = "48996343207"; 
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div>
      <button className="whatsapp-button" onClick={handleWhatsAppClick}>
        <img
          src="../img/watsapp-icon.png"
          alt="WhatsApp Icon"
        />
      </button>
    </div>
  );
}

export default Contact;
