import React from 'react';
import { motion } from 'framer-motion';

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
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 className="section-title" style={{ color: '#fff' }}>
            <span style={{ position: 'relative', display: 'inline-block' }}>
              <span style={{ position: 'absolute', left: '-80px', top: '50%', width: '60px', height: '2px', backgroundColor: 'var(--color-gold)' }}></span>
              TOP DESTINATIONS
              <span style={{ position: 'absolute', right: '-80px', top: '50%', width: '60px', height: '2px', backgroundColor: 'var(--color-gold)' }}></span>
            </span>
          </h2>
          <p className="section-subtitle" style={{ color: '#555' }}>Discover the world with our best selling tour packages</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '30px',
          marginBottom: '50px'
        }}>
          {destinations.map((dest, index) => (
            <motion.div 
              key={dest.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img 
                  src={dest.img} 
                  alt={dest.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '10px', letterSpacing: '1px' }}>{dest.name}</h3>
                <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '15px' }}>{dest.duration}</p>
                <div style={{ 
                  backgroundColor: 'var(--color-gold-light)', 
                  display: 'inline-block',
                  padding: '5px 15px',
                  borderRadius: '4px',
                  color: '#000',
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}>
                  Enquire Now
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button style={{
            backgroundColor: '#111',
            color: 'var(--color-gold)',
            padding: '12px 30px',
            border: '1px solid var(--color-gold)',
            borderRadius: '4px',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'all 0.3s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px'
          }}
          onMouseOver={e => { e.currentTarget.style.backgroundColor = 'var(--color-gold)'; e.currentTarget.style.color = '#111'; }}
          onMouseOut={e => { e.currentTarget.style.backgroundColor = '#111'; e.currentTarget.style.color = 'var(--color-gold)'; }}
          >
            VIEW ALL PACKAGES <span>›</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
