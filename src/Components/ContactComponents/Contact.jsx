import React from 'react';
import './contact.css'; // Importe seu arquivo CSS de estilos

function Contact() {
    const phoneNumber = 'SEU-NÚMERO-DE-TELEFONE'; // Substitua pelo número de telefone da oficina
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    const handleWhatsAppClick = () => {
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div>
            <button className="whatsapp-button" onClick={handleWhatsAppClick}>
            <img src="https://www.designi.com.br/images/preview/12585402-m.jpg" alt="WhatsApp Icon" />
                <span>Contato via WhatsApp</span>
            </button>
        </div>
    );
}

export default Contact;
