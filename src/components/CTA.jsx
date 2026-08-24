import React from 'react';
import { motion } from 'framer-motion';
import { FaPlaneDeparture } from 'react-icons/fa';

const CTA = () => {
  return (
    <section style={{ 
      backgroundColor: 'var(--color-gold)', 
      padding: '40px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background patterns */}
      <div style={{ 
        position: 'absolute', 
        right: '10%', 
        bottom: '-20px', 
        opacity: 0.1, 
        fontSize: '10rem',
        color: '#000'
      }}>
        <FaPlaneDeparture />
      </div>

      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            alignItems: 'center', 
            justifyContent: 'space-between',
            gap: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ fontSize: '3rem', color: '#111' }}>
              <FaPlaneDeparture />
            </div>
            <div>
              <h2 style={{ 
                color: '#111', 
                fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', 
                fontFamily: 'var(--font-sans)', 
                fontWeight: 700,
                marginBottom: '5px'
              }}>
                READY TO PLAN YOUR DREAM VACATION?
              </h2>
              <p style={{ color: '#333', fontSize: '1rem', fontWeight: 500 }}>
                Contact us today and get the best deals!
              </p>
            </div>
          </div>
          
          <div>
            <button style={{
              backgroundColor: '#111',
              color: '#e8ae2c',
              padding: '15px 40px',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px'
            }}
            onMouseOver={e => { e.currentTarget.style.backgroundColor = '#222'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseOut={e => { e.currentTarget.style.backgroundColor = '#111'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              EXPLORE <span>›</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
