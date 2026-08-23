import React from 'react';
import { motion } from 'framer-motion';
import { FaTag, FaSuitcase, FaHeadset, FaShieldAlt } from 'react-icons/fa';

const features = [
  { icon: <FaTag />, title: "BEST PRICE\nGUARANTEE" },
  { icon: <FaSuitcase />, title: "CUSTOMIZED\nPACKAGES" },
  { icon: <FaHeadset />, title: "24/7 CUSTOMER\nSUPPORT" },
  { icon: <FaShieldAlt />, title: "SAFE & COMFORT\nTRAVEL" }
];

const Hero = () => {
  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: '600px',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      overflow: 'hidden'
    }}>

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      >
        <source src="/vid.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay to make text readable */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 1
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ maxWidth: '600px' }}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: 300, letterSpacing: '4px', color: '#fff', marginBottom: '10px' }}>
            EXPLORE THE WORLD
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '10px' }}>
            <div style={{ height: '1px', backgroundColor: 'var(--color-gold)', width: '60px' }}></div>
            <span style={{ fontSize: '1.2rem', letterSpacing: '2px' }}>WITH</span>
            <div style={{ height: '1px', backgroundColor: 'var(--color-gold)', width: '60px' }}></div>
          </div>
          <h1 style={{ 
            fontSize: '4.5rem', 
            fontWeight: 700, 
            lineHeight: 1.1, 
            marginBottom: '20px',
            textShadow: '0 4px 10px rgba(0,0,0,0.5)'
          }}>
            INFINITY<br/>VACATIONS
          </h1>
          <p style={{ 
            fontSize: '1.5rem', 
            fontStyle: 'italic',
            color: '#ddd',
            marginBottom: '40px',
            fontFamily: 'var(--font-serif)'
          }}>
            Unforgettable Journeys.<br/>Endless Memories.
          </p>
          <button className="gold-btn" style={{ fontSize: '1.1rem', padding: '15px 35px' }}>
            EXPLORE PACKAGES <span>»</span>
          </button>
        </motion.div>

        {/* Right Badges */}
        <div className="hero-badges" style={{ gap: '15px' }}>
          {features.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              style={{
                backgroundColor: 'rgba(20, 20, 20, 0.7)',
                backdropFilter: 'blur(10px)',
                padding: '15px 25px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                borderLeft: '4px solid var(--color-gold)',
                minWidth: '250px'
              }}
            >
              <div style={{ color: 'var(--color-gold)', fontSize: '1.8rem' }}>
                {item.icon}
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', whiteSpace: 'pre-line' }}>
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default Hero;
