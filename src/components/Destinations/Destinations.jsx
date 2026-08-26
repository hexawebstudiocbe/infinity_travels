import React from 'react';
import { motion } from 'framer-motion';
import './Destinations.css';

const destinations = [
  { id: 1, name: 'THAILAND', duration: '4 Nights / 5 Days', price: '₹24,999', img: 'https://images.unsplash.com/photo-1558486012-817176f84c6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { id: 2, name: 'MALAYSIA', duration: '4 Nights / 5 Days', price: '₹26,999', img: '/malaysia.jpg' },
  { id: 3, name: 'SINGAPORE', duration: '3 Nights / 4 Days', price: '₹23,999', img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { id: 4, name: 'BALI', duration: '4 Nights / 5 Days', price: '₹28,999', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { id: 5, name: 'VIETNAM', duration: '4 Nights / 5 Days', price: '₹27,999', img: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { id: 6, name: 'CAMBODIA', duration: '4 Nights / 5 Days', price: '₹26,999', img: '/cambodia.jpg' },
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
                />
              </div>
              <div className="destination-content">
                <h3 className="destination-name">{dest.name}</h3>
                <p className="destination-duration">{dest.duration}</p>
                <div className="destination-explore-badge">
                  Explore
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="destinations-footer">
          <button className="primary-btn btn-view-all">
            VIEW ALL PACKAGES <span>›</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
