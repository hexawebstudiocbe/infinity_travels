import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTag, FaSuitcase, FaHeadset, FaShieldAlt } from 'react-icons/fa';
import './Hero.css';

const features = [
  { icon: <FaTag />, title: "BEST PRICE\nGUARANTEE" },
  { icon: <FaSuitcase />, title: "CUSTOMIZED\nPACKAGES" },
  { icon: <FaHeadset />, title: "24/7 CUSTOMER\nSUPPORT" },
  { icon: <FaShieldAlt />, title: "SAFE & COMFORT\nTRAVEL" }
];

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="hero-section" style={{ backgroundColor: '#000' }}>
      {/* Loading Spinner until video is ready */}
      {!isVideoLoaded && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1, backgroundColor: '#000' }}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            style={{ width: '40px', height: '40px', border: '4px solid rgba(255,255,255,0.3)', borderTop: '4px solid #fff', borderRadius: '50%' }}
          />
        </div>
      )}

      {/* Background Video dynamically loaded based on screen size to save bandwidth */}
      <video
        key={isMobile ? 'mobile' : 'desktop'}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setIsVideoLoaded(true)}
        /* Add a poster image here for instant loading. Example: poster={isMobile ? "/videos-poster.jpg" : "/video-poster.jpg"} */
        style={{ objectFit: 'cover', width: '100%', height: '100%', opacity: isVideoLoaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
        className="hero-video"
      >
        <source src={isMobile ? "/videos.mp4" : "/video.mp4"} type="video/mp4" />
      </video>

      {/* Dark overlay to make text readable */}
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-content"
        >
          <h2 className="hero-subtitle">
            EXPLORE THE WORLD
          </h2>
          <div className="hero-divider-container">
            <div className="hero-divider"></div>
            <span className="hero-divider-text">WITH</span>
            <div className="hero-divider"></div>
          </div>
          <h1 className="hero-title">
            INFINITY<br/>VACATIONS
          </h1>
          <p className="hero-desc">
            Unforgettable Journeys.<br/>Endless Memories.
          </p>
          <div style={{ marginBottom: '30px', display: 'inline-block', backgroundColor: 'rgba(30, 163, 177, 0.2)', border: '1px solid var(--color-primary)', padding: '8px 15px', borderRadius: '30px', fontSize: '0.9rem', fontWeight: 'bold', letterSpacing: '1px', color: '#fff' }}>
            🌟 SERVICE - ALL OVER INDIA
          </div>
          <br/>
          <Link to="/packages/international" className="primary-btn hero-btn" style={{display: 'inline-block', textDecoration: 'none'}}>
            EXPLORE PACKAGES <span>»</span>
          </Link>
        </motion.div>

        {/* Right Badges */}
        <div className="hero-badges hero-badges-grid">
          {features.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              className="hero-badge"
            >
              <div className="hero-badge-icon">
                {item.icon}
              </div>
              <div className="hero-badge-text">
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
