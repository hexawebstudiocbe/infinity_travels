import React from 'react';
import { motion } from 'framer-motion';
import { FaPlane, FaTrophy, FaHandshake, FaHotel, FaBullseye, FaArrowRight } from 'react-icons/fa';
import './CorporateTours.css';

const corporateFeatures = [
  {
    image: '/International Destinations.avif',
    icon: <FaPlane />,
    title: "International Destinations",
    desc: "Thailand • Singapore • Bali • Vietnam • Malaysia",
  },
  {
    image: '/Incentive Travel.avif',
    icon: <FaTrophy />,
    title: "Incentive Travel",
    desc: "Reward high-performing teams with unforgettable experiences.",
  },
  {
    image: '/Team Building.avif',
    icon: <FaHandshake />,
    title: "Team Building",
    desc: "Engaging activities designed to build stronger teams.",
  },
  {
    image: '/Premium Stay & Dining.avif',
    icon: <FaHotel />,
    title: "Premium Stay & Dining",
    desc: "Quality hotels, corporate dinners & curated experiences.",
  },
  {
    image: '/Customized.avif',
    icon: <FaBullseye />,
    title: "100% Customized",
    desc: "Itineraries designed around your company's goals and budget.",
  }
];

const CorporateTours = () => {
  return (
    <section className="corporate-section section-padding" id="corporate-tours">
      <div className="container">
        <div className="corporate-header">
          <div className="corporate-title-wrapper">
            <span className="corporate-line left"></span>
            <h2 className="corporate-title">CORPORATE TOURS</h2>
            <span className="corporate-line right"></span>
          </div>
          <p className="corporate-subtitle">
            Reward Your Team. Inspire Your People.
          </p>
        </div>

        <div className="corporate-grid">
          {corporateFeatures.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="corporate-card"
            >
              <div className="corporate-card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="corporate-card-content">
                <div className="corporate-icon-wrapper">
                  <div className="corporate-icon">
                    {item.icon}
                  </div>
                </div>
                <h3 className="corporate-card-title">{item.title}</h3>
                <p className="corporate-card-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="corporate-footer-banner">
          <h4 className="corporate-brand">Infinity Vacations</h4>
          <p className="corporate-footer-links">
            <span>Corporate Tours</span>
            <span className="separator">|</span>
            <span>Incentive Travel</span>
            <span className="separator">|</span>
            <span>Team Experiences</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CorporateTours;
