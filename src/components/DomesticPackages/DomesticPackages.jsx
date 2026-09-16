import React from 'react';
import { motion } from 'framer-motion';
import './DomesticPackages.css';

const destinations = [
  { id: 1, name: 'Goa', image: '/destinations/goa.jpg', description: 'Beaches & Nightlife' },
  { id: 2, name: 'Kerala', image: '/destinations/kerala.jpg', description: 'God\'s Own Country' },
  { id: 3, name: 'Ladakh', image: '/destinations/ladakh.jpg', description: 'Land of High Passes' },
  { id: 4, name: 'Coorg', image: '/destinations/coorg.jpg', description: 'Scotland of India' },
  { id: 5, name: 'Ooty', image: '/destinations/ooty.jpg', description: 'Queen of Hill Stations' },
  { id: 6, name: 'Pondy', image: '/destinations/pondy.jpg', description: 'French Riviera of the East' },
  { id: 7, name: 'Mysore', image: '/destinations/mysore.jpg', description: 'City of Palaces' },
  { id: 8, name: 'Bangalore', image: '/destinations/bangalore.jpg', description: 'Garden City' },
  { id: 9, name: 'Udaipur', image: '/destinations/udaipur.jpg', description: 'City of Lakes' },
  { id: 10, name: 'Jaipur', image: '/destinations/jaipur.jpg', description: 'The Pink City' },
  { id: 11, name: 'Rishikesh', image: '/destinations/rishikesh.jpg', description: 'Yoga Capital of the World' },
  { id: 12, name: 'Andaman', image: '/destinations/andaman.jpg', description: 'Pristine Beaches & Corals' },
];

const DomesticPackages = () => {
  return (
    <section className="domestic-packages section">
      <div className="container">
        <div className="section-header text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Explore Incredible <span>India</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
          >
            Discover handpicked domestic destinations for an unforgettable journey.
          </motion.p>
        </div>

        <div className="packages-grid">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              className="package-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
            >
              <div className="package-image">
                <img src={dest.image} alt={dest.name} loading="lazy" />
                <div className="package-overlay">
                  <div className="package-info">
                    <h3>{dest.name}</h3>
                    <p>{dest.description}</p>
                    <button className="secondary-btn mt-3">View Packages</button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomesticPackages;
