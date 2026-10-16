import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Destinations.css';

const destinations = [
  { id: 1, name: 'THAILAND', price: '₹24,999', img: '/thailand.jpg' },
  { id: 2, name: 'MALAYSIA', price: '₹26,999', img: '/malaysia.jpg' },
  { id: 3, name: 'SINGAPORE', price: '₹23,999', img: '/singapore.jpg' },
  { id: 4, name: 'BALI', price: '₹28,999', img: '/bali.jpg' },
  { id: 5, name: 'VIETNAM', price: '₹27,999', img: '/vietnam.jpg' },
  { id: 6, name: 'CAMBODIA', price: '₹26,999', img: '/cambodia.jpg' },
];

const Destinations = () => {
  return (
    <section className="section-padding bg-dark">
      <div className="container">
        <div className="destinations-header">
          <h2 className="section-title text-gold">
            TOP DESTINATIONS
          </h2>
          <p className="section-subtitle dest-subtitle">Discover the world with our best selling tour packages</p>
        </div>

        <div className="destinations-grid">
          {destinations.map((dest, index) => (
            <motion.div 
              key={dest.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="destination-card"
            >
              <div className="destination-img-container">
                <img 
                  src={dest.img} 
                  alt={dest.name} 
                  className="destination-img"
                  loading="lazy"
                />
              </div>
              <div className="destination-content">
                <h3 className="destination-name">{dest.name}</h3>
                <Link to="/packages/international" className="destination-explore-badge" style={{textDecoration: 'none'}}>
                  Explore
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="destinations-footer">
          <Link to="/packages/international" className="primary-btn btn-view-all" style={{display: 'inline-block', textDecoration: 'none'}}>
            VIEW ALL PACKAGES <span>›</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
