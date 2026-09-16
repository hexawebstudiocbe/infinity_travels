import React from 'react';
import { Helmet } from 'react-helmet-async';
import CorporateTours from '../components/CorporateTours/CorporateTours';

const CorporateToursPage = () => {
  return (
    <>
      <Helmet>
        <title>Corporate Tours & MICE | Infinity Vacations</title>
        <meta name="description" content="Expert corporate travel management, MICE events, and team-building experiences with Infinity Vacations." />
        <link rel="canonical" href="https://www.infinityvacations.net/corporate-tours" />
        <meta property="og:title" content="Corporate Tours & MICE | Infinity Vacations" />
        <meta property="og:description" content="Expert corporate travel management, MICE events, and team-building experiences with Infinity Vacations." />
        <meta property="og:url" content="https://www.infinityvacations.net/corporate-tours" />
      </Helmet>
      <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
        <CorporateTours />
      </div>
    </>
  );
};

export default CorporateToursPage;
