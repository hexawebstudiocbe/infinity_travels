import React from 'react';
import { motion } from 'framer-motion';
import { FaTag, FaHotel, FaSuitcaseRolling, FaUsers, FaHeadset, FaShieldAlt } from 'react-icons/fa';
import './WhyChooseUs.css';

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
    <section className="section-padding bg-darker">
      <div className="container">
        <div className="why-header">
          <h2 className="section-title text-gold">
            WHY CHOOSE US?
          </h2>
        </div>

        <div className="why-grid">
          {features.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="why-item"
            >
              <div className="why-icon-container">
                {item.icon}
              </div>
              <div className="why-title">
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
