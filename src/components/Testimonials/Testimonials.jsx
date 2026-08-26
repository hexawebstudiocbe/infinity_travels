import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

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
    <section className="section-padding bg-dark">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title text-gold">
            WHAT OUR CLIENTS SAY
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="testimonial-card"
            >
              <div className="testimonial-quote-icon">
                <FaQuoteLeft />
              </div>
              <p className="testimonial-text">
                {item.text}
              </p>
              
              <div className="testimonial-author">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="testimonial-img"
                />
                <div>
                  <h4 className="testimonial-name">{item.name}</h4>
                  <div className="testimonial-stars">
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
