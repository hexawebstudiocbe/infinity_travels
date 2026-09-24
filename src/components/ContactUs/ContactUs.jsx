import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaSpinner, FaExclamationCircle } from 'react-icons/fa';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    bot_field: '' // Honeypot field
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    error: null,
    success: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Spam protection check (honeypot)
    if (formData.bot_field) {
      return; // Silent reject for bots
    }

    // Basic frontend validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ ...status, error: "Please fill in all required fields." });
      return;
    }

    setStatus({ submitting: true, error: null, success: false });

    // TODO: Connect to real submission endpoint here.
    // For now, we simulate an error because there is no endpoint configured.
    setTimeout(() => {
      setStatus({
        submitting: false,
        error: "Submission endpoint not configured. Please contact us via phone or email.",
        success: false
      });
      
      // Track failed form submission
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'form_error', {
          'event_category': 'Contact',
          'event_label': 'Endpoint Missing'
        });
      }
    }, 1500);
  };

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We'd love to hear from you. Let us help you plan your next dream vacation.
        </motion.p>
      </div>

      <div className="contact-content container">
        <motion.div 
          className="contact-info-wrapper"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Contact Information</h2>
          <p className="contact-subtext">Fill up the form and our team will get back to you within 24 hours.</p>
          
          <div className="info-items">
            <div className="info-item">
              <div className="info-icon">
                <FaPhoneAlt />
              </div>
              <div className="info-text">
                <h4>Phone</h4>
                <p><a href="tel:+919150041859" onClick={() => typeof window.gtag === 'function' && window.gtag('event', 'click', { event_category: 'Contact', event_label: 'Phone Link 1' })} style={{color: 'inherit', textDecoration: 'none'}}>+91 9150041859</a></p>
                <p><a href="tel:+919150051859" onClick={() => typeof window.gtag === 'function' && window.gtag('event', 'click', { event_category: 'Contact', event_label: 'Phone Link 2' })} style={{color: 'inherit', textDecoration: 'none'}}>+91 9150051859</a></p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-text">
                <h4>Email</h4>
                <p><a href="mailto:info@infinityvacations.net" style={{color: 'inherit', textDecoration: 'none'}}>info@infinityvacations.net</a></p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-text">
                <h4>Location</h4>
                <p>Headquarters: Coimbatore</p>
                <p style={{ marginTop: '4px', fontSize: '0.9em', color: 'var(--color-primary, #1ea3b1)' }}>Service - All Over India</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Honeypot field - hidden from real users */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <label htmlFor="bot_field">Don't fill this out if you're human:</label>
              <input type="text" id="bot_field" value={formData.bot_field} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input type="text" id="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="+91 00000 00000" value={formData.phone} onChange={handleChange} />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message *</label>
              <textarea id="message" rows="5" placeholder="How can we help you plan your trip?" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            
            {status.error && (
              <div style={{ color: '#d32f2f', backgroundColor: '#ffebee', padding: '10px', borderRadius: '4px', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaExclamationCircle />
                <span>{status.error}</span>
              </div>
            )}

            <button type="submit" className="submit-btn" disabled={status.submitting}>
              <span>{status.submitting ? 'Sending...' : 'Send Message'}</span>
              {status.submitting ? <FaSpinner className="submit-icon spinner" /> : <FaPaperPlane className="submit-icon" />}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
