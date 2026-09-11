import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './CorporateBanner.css';

const CorporateBanner = () => {
  return (
    <section className="corporate-banner-section">
      <div className="corporate-banner-overlay"></div>
      <div className="container corporate-banner-content">
        <motion.div 
          className="corporate-banner-text-box"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="corporate-banner-title">Elevate Your Corporate Travel</h2>
          <p className="corporate-banner-subtitle">
            Specialized in MICE (Meetings, Incentives, Conferences, and Exhibitions) events. 
            We handle the logistics so you can focus on business.
          </p>
          <Link to="/corporate-tours" className="primary-btn corporate-banner-btn">
            Explore Corporate Tours <span>›</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CorporateBanner;
