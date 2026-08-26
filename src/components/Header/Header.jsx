import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT US' },
    { path: '/corporate-tours', label: 'CORPORATE TOURS' },
    { path: '/packages', label: 'PACKAGES ▾' },
    { path: '/services', label: 'SERVICES ▾' },
    { path: '/gallery', label: 'GALLERY' },
    { path: '/contact', label: 'CONTACT US' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`header ${scrolled || !isHomePage ? 'scrolled' : ''}`}
    >
      {/* Top Bar for contacts - optional, shown only when not scrolled or integrated nicely */}
      <div className="container header-container">

        {/* Logo */}
        <div className="header-logo">
          <img src="/orange%20logo.png" alt="Infinity Vacations Logo" />
        </div>

        {/* Navigation */}
        <nav className="nav-menu">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link 
                  to={link.path} 
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="mobile-toggle">
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Desktop Action Button */}
        <div className="nav-menu">
          <button className="primary-btn">EXPLORE</button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link 
                  to={link.path} 
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mobile-explore-btn"><button className="primary-btn">EXPLORE</button></li>
          </ul>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
