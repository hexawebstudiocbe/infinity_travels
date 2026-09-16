import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppCTA.css';

const WhatsAppCTA = () => {
  return (
    <a 
      href="https://wa.me/919150041859" 
      className="whatsapp-cta"
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onClick={() => {
        // Track the click event if GA is loaded
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'click', {
            'event_category': 'WhatsApp',
            'event_label': 'Floating CTA',
            'value': 1
          });
        }
      }}
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppCTA;
