import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaBullseye, FaLightbulb, FaAward } from 'react-icons/fa';
import './CorporateAbout.css';

const specializations = [
  "Corporate Incentive Trips",
  "Sales Achievement & Reward Tours",
  "Employee Recognition Trips",
  "Corporate Team Outings",
  "International Corporate Tours",
  "Dealer & Distributor Incentive Tours",
  "Annual Meetings & Conferences",
  "MICE Travel & Events",
  "Corporate Group Travel",
  "Customized Corporate Travel Packages"
];

const whyChooseUs = [
  { title: "Professional Planning", desc: "End-to-end coordination from planning to return." },
  { title: "Customized Experiences", desc: "Trips designed around your company's goals and budget." },
  { title: "International Destinations", desc: "Carefully planned experiences across popular global destinations." },
  { title: "Reliable Support", desc: "Dedicated assistance throughout the journey." },
  { title: "Memorable Experiences", desc: "Travel programs that employees will genuinely appreciate and remember." }
];

const CorporateAbout = () => {
  return (
    <section className="corporate-about-section" id="corporate-about">
      <div className="container">
        {/* Intro */}
        <div className="about-intro">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-header"
          >
            <h2 className="about-title">About Us</h2>
            <h3 className="about-subtitle">Infinity Vacations – Your Corporate Travel Partner</h3>
            <div style={{ marginTop: '15px', display: 'inline-block', backgroundColor: 'var(--color-primary, #1ea3b1)', padding: '6px 18px', borderRadius: '20px', color: '#fff', fontWeight: '600', fontSize: '0.9rem', letterSpacing: '0.5px' }}>
              📍 Headquarters: Coimbatore &nbsp;|&nbsp; ✈️ Service - All Over India
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="about-text"
          >
            <p>At Infinity Vacations, we specialize in creating memorable corporate travel and incentive experiences designed to motivate teams, recognize achievements, strengthen employee engagement, and build lasting business relationships.</p>
            <p>We work closely with companies to plan and manage corporate incentive trips, sales achievement tours, employee reward programs, team outings, conferences, and corporate group travel — both in India and internationally.</p>
            <p>From selecting the right destination to arranging flights, hotels, transportation, activities, meals, sightseeing, and on-trip assistance, our team manages every detail with professionalism and care.</p>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="vision-mission-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="vm-card"
          >
            <div className="vm-icon"><FaLightbulb /></div>
            <h4>Our Vision</h4>
            <p>To become a trusted corporate travel and incentive partner, helping companies motivate their people, celebrate achievements, and create stronger teams through exceptional travel experiences.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="vm-card"
          >
            <div className="vm-icon"><FaBullseye /></div>
            <h4>Our Mission</h4>
            <p>To transform corporate travel into meaningful experiences that reward performance, inspire employees, strengthen relationships, and create unforgettable memories.</p>
          </motion.div>
        </div>

        {/* Specializations & Why Choose Us */}
        <div className="about-details-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="specializations-box"
          >
            <h3 className="section-title">What We Specialize In</h3>
            <ul className="spec-list">
              {specializations.map((item, idx) => (
                <li key={idx}><FaCheckCircle className="check-icon" /> {item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="why-choose-box"
          >
            <h3 className="section-title">Why Companies Choose Infinity Vacations</h3>
            <p className="why-choose-intro">We understand that every organization has different objectives, budgets, and employee expectations. Our approach is to create customized travel experiences that deliver value to both the company and its employees.</p>
            <div className="why-choose-features">
              {whyChooseUs.map((item, idx) => (
                <div className="feature-item" key={idx}>
                  <div className="feature-icon"><FaAward /></div>
                  <div className="feature-content">
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="about-footer-banner"
        >
          <h4>We Don't Just Plan Trips. We Create Experiences That Reward Success.</h4>
          <p className="about-brand">Infinity Vacations</p>
          <p className="about-tags">Corporate Travel • Incentive Trips • MICE • Group Travel</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CorporateAbout;
