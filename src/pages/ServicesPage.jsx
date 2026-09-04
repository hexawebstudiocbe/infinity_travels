import React from 'react';
import { Helmet } from 'react-helmet-async';
import Services from '../components/Services/Services';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Infinity Vacations</title>
        <meta name="description" content="Explore the comprehensive travel services offered by Infinity Vacations, including flight bookings, hotel reservations, and custom tour packages." />
      </Helmet>
      <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
        <Services />
      </div>
    </>
  );
};

export default ServicesPage;
