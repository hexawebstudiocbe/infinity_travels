import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronRight, FaLinkedin } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">

          {/* Logo & About */}
          <div>
            <div className="footer-logo">
              <img src="/logo1.png" alt="Infinity Vacations Logo" />
            </div>
            <p className="footer-about-text">
              We make your travel dreams come true with trusted service, best prices and unforgettable experiences.
            </p>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/infinityvacations-holidays-828404438/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <FaLinkedin size={16} />
              </a>
              <a href="https://www.instagram.com/infinityvacations.holidays?utm_source=qr&stkn=MTlvMnpyMWJpbHp2MA==" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <FaInstagram size={16} />
              </a>
              <a href="https://www.threads.com/@infinityvacations.holidays" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <FaThreads size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-title">QUICK LINKS</h3>
            <ul className="footer-links">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Corporate Tours', path: '/corporate-tours' },
                { 
                  label: 'Packages ▾', 
                  path: '#',
                  dropdown: [
                    { label: 'Domestic', path: '/packages/domestic' },
                    { label: 'International', path: '/packages/international' }
                  ]
                },
                { label: 'Services', path: '/services' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Contact Us', path: '/contact' }
              ].map((link, idx) => (
                <li key={idx} className={link.dropdown ? 'footer-has-dropdown' : ''}>
                  {link.dropdown ? (
                    <div className="footer-dropdown-wrapper">
                      <span className="footer-link" style={{cursor: 'pointer'}}>
                        <FaChevronRight className="footer-link-arrow" /> {link.label}
                      </span>
                      <ul className="footer-dropdown-menu">
                        {link.dropdown.map((dropItem, dropIdx) => (
                          <li key={dropIdx}>
                            <Link to={dropItem.path} className="footer-dropdown-link">
                              {dropItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link to={link.path} className="footer-link">
                      <FaChevronRight className="footer-link-arrow" /> {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="footer-title">OUR SERVICES</h3>
            <ul className="footer-links">
              {['Flight Booking', 'Hotel Booking', 'Visa Assistance', 'Travel Insurance', 'Airport Transfers', 'Group & Corporate Tours'].map((link, idx) => (
                <li key={idx}>
                  <Link to="/services" className="footer-link">
                    <FaChevronRight className="footer-link-arrow" /> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="footer-title">CONTACT US</h3>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <div className="footer-contact-icon-wrapper">
                  <FaPhoneAlt className="footer-contact-icon" />
                </div>
                <div>
                  <div>9150041859</div>
                  <div>9150051859</div>
                </div>
              </li>
              <li className="footer-contact-item align-center">
                <div className="footer-contact-icon-wrapper">
                  <FaEnvelope className="footer-contact-icon" />
                </div>
                <a href="mailto:info@infinityvacations.net">info@infinityvacations.net</a>
              </li>
              <li className="footer-contact-item align-center">
                <div className="footer-contact-icon-wrapper">
                  <FaMapMarkerAlt className="footer-contact-icon" />
                </div>
                <div>Coimbatore, Tamil Nadu, India</div>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <div>© 2026 Infinity Vacations. All Rights Reserved.</div>
          <div className="footer-bottom-links">
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <span className="footer-bottom-separator">|</span>
            <Link to="/cancellation-policy">Cancellation & Refund Policy</Link>
            <span className="footer-bottom-separator">|</span>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
