import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';
import './SocialFloaters.css';

const SocialFloaters = () => {
  return (
    <div className="social-floaters">
      <a 
        href="https://wa.me/919150041859" 
        className="social-floater whatsapp"
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onClick={() => {
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
      
      <a 
        href="https://www.instagram.com/infinityvacations.holidays?utm_source=qr&stkn=MTlvMnpyMWJpbHp2MA==" 
        className="social-floater instagram"
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
      >
        <FaInstagram size={32} />
      </a>
      
      <a 
        href="https://www.linkedin.com/in/infinityvacations-holidays-828404438/" 
        className="social-floater linkedin"
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Connect with us on LinkedIn"
      >
        <FaLinkedin size={32} />
      </a>
      
      <a 
        href="https://www.threads.net/" 
        className="social-floater threads"
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Connect with us on Threads"
      >
        <FaThreads size={32} />
      </a>
    </div>
  );
};

export default SocialFloaters;
