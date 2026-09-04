import React from 'react';
import { motion } from 'framer-motion';
import '../DomesticPackages/DomesticPackages.css'; // Reusing the same CSS

const destinations = [
  { id: 1, name: 'Thailand', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80', description: 'Land of Smiles' },
  { id: 2, name: 'Malaysia', image: '/malaysia.jpg', description: 'Truly Asia' },
  { id: 3, name: 'Singapore', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80', description: 'The Lion City' },
  { id: 4, name: 'Bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80', description: 'Island of the Gods' },
  { id: 5, name: 'Vietnam', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80', description: 'Timeless Charm' },
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
                <img src={dest.image} alt={dest.name} />
                <div className="package-overlay">
                  <div className="package-info">
                    <h3>{dest.name}</h3>
                    <p>{dest.description}</p>
                    <button className="secondary-btn mt-3" style={{padding: '8px 15px', fontSize: '0.85rem'}}>View Packages</button>
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
