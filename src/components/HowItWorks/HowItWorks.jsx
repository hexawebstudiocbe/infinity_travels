import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaClipboardList, FaSuitcaseRolling, FaPlane } from 'react-icons/fa';
import './HowItWorks.css';

const steps = [
  {
    id: 1,
    icon: <FaMapMarkedAlt />,
    title: 'Choose Destination',
    desc: 'Browse our extensive list of destinations and pick your dream vacation spot.'
  },
  {
    id: 2,
    icon: <FaClipboardList />,
    title: 'Customize Package',
    desc: 'Work with our experts to tailor the itinerary to your preferences and budget.'
  },
  {
    id: 3,
    icon: <FaSuitcaseRolling />,
    title: 'Pack Your Bags',
    desc: 'We handle all the bookings and paperwork while you get ready for the trip.'
  },
  {
    id: 4,
    icon: <FaPlane />,
    title: 'Enjoy Your Trip',
    desc: 'Experience a seamless, unforgettable journey with our 24/7 support.'
  }
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-darker">
      <div className="container">
        <div className="how-it-works-header text-center">
          <h2 className="section-title text-gold">HOW IT WORKS</h2>
          <p className="section-subtitle">Your perfect vacation in 4 simple steps</p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id} 
              className="step-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="step-icon-wrapper">
                <div className="step-number">{step.id}</div>
                <div className="step-icon">{step.icon}</div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
              {index < steps.length - 1 && (
                <div className="step-connector"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
