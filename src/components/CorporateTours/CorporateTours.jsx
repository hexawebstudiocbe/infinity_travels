import React from 'react';
import { motion } from 'framer-motion';
import { FaPlane, FaTrophy, FaHandshake, FaHotel, FaBullseye } from 'react-icons/fa';
import './CorporateTours.css';

const corporateFeatures = [
  { 
    icon: <FaPlane />, 
    title: "International Destinations",
    desc: "Thailand • Singapore • Bali • Vietnam • Malaysia"
  },
  { 
    icon: <FaTrophy />, 
    title: "Incentive Travel",
    desc: "Reward high-performing teams with unforgettable experiences."
  },
  { 
    icon: <FaHandshake />, 
    title: "Team Building",
    desc: "Engaging activities designed to build stronger teams."
  },
  { 
    icon: <FaHotel />, 
    title: "Premium Stay & Dining",
    desc: "Quality hotels, corporate dinners & curated experiences."
  },
  { 
    icon: <FaBullseye />, 
    title: "100% Customized",
    desc: "Itineraries designed around your company's goals and budget."
  }
];

const CorporateTours = () => {
  return (
    <section className="section-padding" id="corporate-tours">
      <div className="container">
        <div className="corporate-header">
          <h2 className="section-title corporate-title">
             CORPORATE TOURS
          </h2>
          <p className="section-subtitle">
            Reward Your Team. Inspire Your People.
          </p>
        </div>

        <div className="corporate-grid">
          {corporateFeatures.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="corporate-card"
            >
              <div className="corporate-icon">
                {item.icon}
              </div>
              <h3 className="corporate-card-title">{item.title}</h3>
              <p className="corporate-card-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="corporate-footer">
          <h4>Infinity Vacations</h4>
          <p>Corporate Tours | Incentive Travel | Team Experiences</p>
        </div>
      </div>
    </section>
  );
};

export default CorporateTours;
