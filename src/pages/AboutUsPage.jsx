import React from 'react';
import { Helmet } from 'react-helmet-async';
import CorporateAbout from '../components/CorporateAbout/CorporateAbout';

const AboutUsPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Infinity Vacations</title>
        <meta name="description" content="Learn more about Infinity Vacations, your trusted travel partner. We provide personalized holiday experiences, corporate travel solutions, and the best prices guaranteed." />
        <link rel="canonical" href="https://www.infinityvacations.net/about" />
        <meta property="og:title" content="About Us | Infinity Vacations" />
        <meta property="og:description" content="Learn more about Infinity Vacations, your trusted travel partner." />
        <meta property="og:url" content="https://www.infinityvacations.net/about" />
      </Helmet>
      <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
        <CorporateAbout />
      </div>
    </>
  );
};

export default AboutUsPage;
