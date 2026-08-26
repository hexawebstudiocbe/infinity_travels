import React from 'react';
import { motion } from 'framer-motion';
import { FaTag, FaSuitcase, FaHeadset, FaShieldAlt } from 'react-icons/fa';
import './Hero.css';

const features = [
  { icon: <FaTag />, title: "BEST PRICE\nGUARANTEE" },
  { icon: <FaSuitcase />, title: "CUSTOMIZED\nPACKAGES" },
  { icon: <FaHeadset />, title: "24/7 CUSTOMER\nSUPPORT" },
  { icon: <FaShieldAlt />, title: "SAFE & COMFORT\nTRAVEL" }
];

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      >
        <source src="/vid.mp4" type="video/mp4" />
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
          <button className="primary-btn hero-btn">
            EXPLORE PACKAGES <span>»</span>
          </button>
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
