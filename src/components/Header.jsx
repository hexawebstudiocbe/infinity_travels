import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(15, 15, 15, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.5)' : 'none',
        padding: scrolled ? '15px 0' : '25px 0'
      }}
    >
      {/* Top Bar for contacts - optional, shown only when not scrolled or integrated nicely */}
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo%20no%20bg.png" alt="Infinity Vacations Logo" style={{ height: '60px', width: 'auto' }} />
        </div>

        {/* Navigation */}
        <nav className="nav-menu">
          <ul style={{ 
            display: 'flex', 
            listStyle: 'none', 
            gap: '25px', 
            margin: 0, 
            padding: 0,
            alignItems: 'center'
          }}>
            <li><a href="#" style={{ color: 'var(--color-gold)', fontSize: '0.9rem', fontWeight: 600 }}>HOME</a></li>
            <li><a href="#" style={{ fontSize: '0.9rem', fontWeight: 500 }}>ABOUT US</a></li>
            <li><a href="#" style={{ fontSize: '0.9rem', fontWeight: 500 }}>PACKAGES ▾</a></li>
            <li><a href="#" style={{ fontSize: '0.9rem', fontWeight: 500 }}>SERVICES ▾</a></li>
            <li><a href="#" style={{ fontSize: '0.9rem', fontWeight: 500 }}>GALLERY</a></li>
            <li><a href="#" style={{ fontSize: '0.9rem', fontWeight: 500 }}>BLOG</a></li>
            <li><a href="#" style={{ fontSize: '0.9rem', fontWeight: 500 }}>CONTACT US</a></li>
          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="mobile-toggle" style={{ display: 'flex', alignItems: 'center' }}>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ 
              background: 'transparent', 
              color: 'var(--color-gold)', 
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Desktop Action Button */}
        <div className="nav-menu">
          <button className="gold-btn">ENQUIRE NOW</button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          backgroundColor: 'rgba(15, 15, 15, 0.98)',
          padding: '20px',
          borderBottom: '1px solid #333'
        }}>
          <ul style={{ 
            display: 'flex', 
            flexDirection: 'column',
            listStyle: 'none', 
            gap: '15px', 
            margin: 0, 
            padding: 0,
            textAlign: 'center'
          }}>
            <li><a href="#" style={{ color: 'var(--color-gold)', fontSize: '1.1rem', fontWeight: 600 }}>HOME</a></li>
            <li><a href="#" style={{ fontSize: '1.1rem', fontWeight: 500 }}>ABOUT US</a></li>
            <li><a href="#" style={{ fontSize: '1.1rem', fontWeight: 500 }}>PACKAGES ▾</a></li>
            <li><a href="#" style={{ fontSize: '1.1rem', fontWeight: 500 }}>SERVICES ▾</a></li>
            <li><a href="#" style={{ fontSize: '1.1rem', fontWeight: 500 }}>GALLERY</a></li>
            <li><a href="#" style={{ fontSize: '1.1rem', fontWeight: 500 }}>BLOG</a></li>
            <li><a href="#" style={{ fontSize: '1.1rem', fontWeight: 500 }}>CONTACT US</a></li>
            <li style={{ marginTop: '10px' }}><button className="gold-btn" style={{ width: '100%' }}>ENQUIRE NOW</button></li>
          </ul>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
