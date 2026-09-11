import React from 'react';
import { motion } from 'framer-motion';
import { FaTag, FaHotel, FaSuitcaseRolling, FaUsers, FaHeadset, FaShieldAlt } from 'react-icons/fa';
import './WhyChooseUs.css';

const features = [
  { icon: <FaTag />, title: "Best Price Guarantee", description: "We offer the most competitive rates in the market. If you find a lower price, we'll match it to ensure you get the best deal." },
  { icon: <FaHotel />, title: "Handpicked Hotels", description: "Every hotel is carefully vetted for quality, exceptional service, and comfort to ensure a truly memorable stay." },
  { icon: <FaSuitcaseRolling />, title: "Customized Packages", description: "Tailor-made itineraries designed exclusively around your personal preferences, schedule, and specific budget." },
  { icon: <FaUsers />, title: "Experienced Team", description: "Our passionate travel experts bring years of industry experience to guide you through every step of your journey." },
  { icon: <FaHeadset />, title: "24/7 Customer Support", description: "Round-the-clock dedicated assistance before, during, and after your trip for complete peace of mind." },
  { icon: <FaShieldAlt />, title: "Safe & Comfortable", description: "Your safety is our utmost priority. We partner only with trusted, certified, and reliable local providers." }
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="why-item"
            >
              <div className="why-icon-container">
                {item.icon}
              </div>
              <div className="why-content">
                <h3 className="why-title">
                  {item.title}
                </h3>
                <p className="why-desc">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
