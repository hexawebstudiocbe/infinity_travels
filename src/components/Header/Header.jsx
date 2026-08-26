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
            <li><Link to="/" className="nav-link active">HOME</Link></li>
            <li><Link to="/" className="nav-link">ABOUT US</Link></li>
            <li><Link to="/corporate-tours" className="nav-link">CORPORATE TOURS</Link></li>
            <li><Link to="/" className="nav-link">PACKAGES ▾</Link></li>
            <li><Link to="/" className="nav-link">SERVICES ▾</Link></li>
            <li><Link to="/" className="nav-link">GALLERY</Link></li>
            <li><Link to="/" className="nav-link">CONTACT US</Link></li>
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
            <li><Link to="/" className="nav-link active" onClick={() => setMobileMenuOpen(false)}>HOME</Link></li>
            <li><Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>ABOUT US</Link></li>
            <li><Link to="/corporate-tours" className="nav-link" onClick={() => setMobileMenuOpen(false)}>CORPORATE TOURS</Link></li>
            <li><Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>PACKAGES ▾</Link></li>
            <li><Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>SERVICES ▾</Link></li>
            <li><Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>GALLERY</Link></li>
            <li><Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>CONTACT US</Link></li>
            <li className="mobile-explore-btn"><button className="primary-btn">EXPLORE</button></li>
          </ul>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
