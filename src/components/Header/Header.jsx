import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT US' },
    { path: '/corporate-tours', label: 'CORPORATE TOURS' },
    { 
      path: '/packages', 
      label: 'PACKAGES ▾',
      dropdown: [
        { path: '/packages/domestic', label: 'Domestic' },
        { path: '/packages/international', label: 'International' }
      ]
    },
    { path: '/services', label: 'SERVICES' },
    // { path: '/gallery', label: 'GALLERY' },
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
          <img src="/logo1.png" alt="Infinity Vacations Logo" />
        </div>

        {/* Navigation */}
        <nav className="nav-menu">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.label} className={link.dropdown ? 'has-dropdown' : ''}>
                {link.dropdown ? (
                  <span 
                    className={`nav-link ${location.pathname.startsWith(link.path) ? 'active' : ''}`}
                    style={{cursor: 'pointer'}}
                  >
                    {link.label}
                  </span>
                ) : (
                  <Link 
                    to={link.path} 
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                )}
                {link.dropdown && (
                  <ul className="dropdown-menu">
                    {link.dropdown.map(dropItem => (
                      <li key={dropItem.label}>
                        <Link to={dropItem.path} className="dropdown-link">
                          {dropItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
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
          <Link to="/packages/international" className="primary-btn">EXPLORE</Link>
        </div>
      </div>

      {/* Mobile Menu Overlay / Side Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
              className="mobile-menu-sidebar"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <button 
                className="mobile-close-btn" 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.label} className={link.dropdown ? 'mobile-has-dropdown' : ''}>
                {link.dropdown ? (
                  <span 
                    className={`nav-link ${location.pathname.startsWith(link.path) ? 'active' : ''}`}
                    style={{cursor: 'pointer'}}
                    onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                  >
                    {link.label}
                  </span>
                ) : (
                  <Link 
                    to={link.path} 
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                )}
                {link.dropdown && activeDropdown === link.label && (
                  <ul className="mobile-dropdown-menu">
                    {link.dropdown.map(dropItem => (
                      <li key={dropItem.label}>
                        <Link 
                          to={dropItem.path} 
                          className="mobile-dropdown-link"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="mobile-explore-btn" onClick={() => setMobileMenuOpen(false)}>
              <Link to="/packages/international" className="primary-btn" style={{display: 'inline-block'}}>EXPLORE</Link>
            </li>
          </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
