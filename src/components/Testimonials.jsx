import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    text: "Our trip to Thailand was amazing! Everything was perfectly arranged. Thank you Infinity Vacations!",
    name: "Aravind & Family",
    img: "https://i.pravatar.cc/150?img=11"
  },
  {
    text: "Excellent service and support throughout the trip. Highly recommended!",
    name: "Priya Mehta",
    img: "https://i.pravatar.cc/150?img=5"
  },
  {
    text: "Best travel experience with affordable price. Will travel again with Infinity Vacations.",
    name: "Suresh Kumar",
    img: "https://i.pravatar.cc/150?img=12"
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 className="section-title" style={{ color: '#fff' }}>
            <span style={{ position: 'relative', display: 'inline-block' }}>
              <span style={{ position: 'absolute', left: '-80px', top: '50%', width: '60px', height: '2px', backgroundColor: 'var(--color-gold)' }}></span>
              WHAT OUR CLIENTS SAY
              <span style={{ position: 'absolute', right: '-80px', top: '50%', width: '60px', height: '2px', backgroundColor: 'var(--color-gold)' }}></span>
            </span>
          </h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px'
        }}>
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{
                backgroundColor: 'var(--bg-card)',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
                position: 'relative'
              }}
            >
              <div style={{ position: 'absolute', top: '20px', left: '20px', color: 'rgba(198, 156, 56, 0.1)', fontSize: '3rem' }}>
                <FaQuoteLeft />
              </div>
              <p style={{ 
                color: '#ddd', 
                fontSize: '0.95rem', 
                lineHeight: 1.6, 
                marginBottom: '20px',
                position: 'relative',
                zIndex: 1,
                minHeight: '80px',
                marginTop: '10px'
              }}>
                {item.text}
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <img 
                  src={item.img} 
                  alt={item.name} 
                  style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} 
                />
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '5px' }}>{item.name}</h4>
                  <div style={{ color: 'var(--color-gold)', display: 'flex', gap: '2px', fontSize: '0.9rem' }}>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
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

export default Testimonials;
