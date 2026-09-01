import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaSuitcase, FaUsers, FaBuilding, FaHandshake, FaPlane } from 'react-icons/fa';
import './CorporateTours.css';

const corporateFeatures = [
  {
    image: '/Incentive Travel.avif',
    icon: <FaTrophy />,
    title: "Corporate Incentive Tours",
    desc: "Reward your top performers with unforgettable domestic or international experiences designed to motivate, appreciate and retain your best talent.",
  },
  {
    image: '/Premium Stay & Dining.avif',
    icon: <FaSuitcase />,
    title: "Annual Company Trips",
    desc: "Give your employees a well-deserved break with professionally organized company outings, customized to your team size and budget.",
  },
  {
    image: '/Team Building.avif',
    icon: <FaUsers />,
    title: "Team-Building Tours",
    desc: "Strengthen teamwork, communication and relationships through carefully planned activities, experiences and destinations.",
  },
  {
    image: '/Customized.avif',
    icon: <FaBuilding />,
    title: "Corporate Conferences & Events",
    desc: "Complete travel support for conferences, seminars, meetings and corporate events — including transportation, accommodation and event coordination.",
  },
  {
    image: '/Partner Meets.avif',
    icon: <FaHandshake />,
    title: "Dealer & Partner Meets",
    desc: "Create memorable experiences for your dealers, distributors and business partners with premium travel programs and hospitality.",
  },
  {
    image: '/International Destinations.avif',
    icon: <FaPlane />,
    title: "International Corporate Tours",
    desc: "Take your team beyond borders with customized corporate journeys to destinations such as Thailand, Dubai, Singapore, Malaysia, Vietnam, Bali and more.",
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
        </div>
      </div>

      <div className="corporate-banner-container">
        <div className="corporate-banner-text">
          Reward Your Team. Inspire Your People. Explore the World.
        </div>
      </div>

      <div className="container">
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
