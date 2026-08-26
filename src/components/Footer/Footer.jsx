import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">

          {/* Logo & About */}
          <div>
            <div className="footer-logo">
              <img src="/orange%20logo.png" alt="Infinity Vacations Logo" />
            </div>
            <p className="footer-about-text">
              We make your travel dreams come true with trusted service, best prices and unforgettable experiences.
            </p>
            <div className="footer-socials">
              {[FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube].map((Icon, idx) => (
                <a key={idx} href="#" className="footer-social-link">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-title">QUICK LINKS</h3>
            <ul className="footer-links">
              {['Home', 'About Us', 'Tour Packages', 'Services', 'Gallery', 'Blog', 'Contact Us'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="footer-title">OUR SERVICES</h3>
            <ul className="footer-links">
              {['Flight Booking', 'Hotel Booking', 'Visa Assistance', 'Travel Insurance', 'Airport Transfers', 'Group & Corporate Tours', 'Honeymoon Packages'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="footer-title">CONTACT US</h3>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <FaPhoneAlt className="footer-contact-icon" />
                <div>
                  <div>7418271859</div>
                  <div>9047471859</div>
                  <div>9500971859</div>
                  <div>9500241674</div>
                </div>
              </li>
              <li className="footer-contact-item align-center">
                <FaEnvelope className="footer-contact-icon" />
                <a href="mailto:info@infinityvacations.net">info@infinityvacations.net</a>
              </li>
              <li className="footer-contact-item align-center">
                <FaMapMarkerAlt className="footer-contact-icon" />
                <div>Coimbatore, Tamil Nadu, India</div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div>© 2026 Infinity Vacations. All Rights Reserved.</div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
