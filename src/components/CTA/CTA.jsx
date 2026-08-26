import React from 'react';
import { motion } from 'framer-motion';
import { FaPlaneDeparture } from 'react-icons/fa';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      {/* Background patterns */}
      <div className="cta-bg-pattern">
        <FaPlaneDeparture />
      </div>

      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cta-content-wrapper"
        >
          <div className="cta-left">
            <div className="cta-icon">
              <FaPlaneDeparture />
            </div>
            <div>
              <h2 className="cta-title">
                READY TO PLAN YOUR DREAM VACATION?
              </h2>
              <p className="cta-subtitle">
                Contact us today and get the best deals!
              </p>
            </div>
          </div>
          
          <div>
            <button className="cta-btn">
              EXPLORE <span>›</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
