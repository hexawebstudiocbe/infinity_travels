import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <Helmet>
        <title>404 - Page Not Found | Infinity Vacations</title>
        <meta name="description" content="The page you are looking for doesn't exist." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src="/logo1.png" alt="Infinity Vacations Logo" className="not-found-logo" />
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="not-found-title"
      >
        404
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="not-found-subtitle"
      >
        Looks like you're lost!
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="not-found-text"
      >
        The page you are looking for doesn't exist, has been moved, or is temporarily unavailable. Don't worry, there are still plenty of amazing destinations to discover.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="not-found-actions"
      >
        <Link to="/" className="not-found-btn">
          Back to Home
        </Link>
        <Link to="/packages/international" className="not-found-btn-outline">
          Explore Packages
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
