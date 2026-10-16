import React from 'react';
import { motion } from 'framer-motion';
import '../DomesticPackages/DomesticPackages.css'; // Reusing the same CSS

const destinations = [
  { id: 1, name: 'Thailand', image: '/thailand.jpg', description: 'Land of Smiles' },
  { id: 2, name: 'Malaysia', image: '/malaysia.jpg', description: 'Truly Asia' },
  { id: 3, name: 'Singapore', image: '/singapore.jpg', description: 'The Lion City' },
  { id: 4, name: 'Bali', image: '/bali.jpg', description: 'Island of the Gods' },
  { id: 5, name: 'Vietnam', image: '/vietnam.jpg', description: 'Timeless Charm' },
  { id: 6, name: 'Cambodia', image: '/cambodia.jpg', description: 'Kingdom of Wonder' },
];

const InternationalPackages = () => {
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
            Explore <span>International</span> Destinations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
          >
            Discover handpicked international destinations for an unforgettable journey.
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
                    {/* <button className="secondary-btn mt-3">View Packages</button> */}
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

export default InternationalPackages;
