import React from 'react';
import { motion } from 'framer-motion';
import { FaTag, FaHotel, FaSuitcaseRolling, FaUsers, FaHeadset, FaShieldAlt } from 'react-icons/fa';

const features = [
  { icon: <FaTag />, title: "Best Price\nGuarantee" },
  { icon: <FaHotel />, title: "Handpicked\nHotels" },
  { icon: <FaSuitcaseRolling />, title: "Customized\nPackages" },
  { icon: <FaUsers />, title: "Experienced\nTeam" },
  { icon: <FaHeadset />, title: "24/7 Customer\nSupport" },
  { icon: <FaShieldAlt />, title: "Safe & Comfortable\nJourney" }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-darker)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 className="section-title">
            WHY CHOOSE US?
          </h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
          gap: '30px',
          textAlign: 'center'
        }}>
          {features.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px'
              }}
            >
              <div style={{ 
                color: 'var(--color-gold)', 
                fontSize: '2.5rem',
                border: '1px solid rgba(198, 156, 56, 0.3)',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={e => {
                e.currentTarget.style.backgroundColor = 'var(--color-gold)';
                e.currentTarget.style.color = 'var(--bg-darker)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-gold)';
              }}
              >
                {item.icon}
              </div>
              <div style={{ 
                fontSize: '0.9rem', 
                fontWeight: 600, 
                color: '#fff', 
                whiteSpace: 'pre-line',
                letterSpacing: '1px'
              }}>
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
