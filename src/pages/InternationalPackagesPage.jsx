import React from 'react';
import { Helmet } from 'react-helmet-async';
import InternationalPackages from '../components/InternationalPackages/InternationalPackages';

const InternationalPackagesPage = () => {
  return (
    <>
      <Helmet>
        <title>International Packages | Infinity Vacations</title>
        <meta name="description" content="Explore amazing international destinations with Infinity Vacations." />
        <link rel="canonical" href="https://www.infinityvacations.net/packages/international" />
        <meta property="og:title" content="International Packages | Infinity Vacations" />
        <meta property="og:description" content="Explore amazing international destinations with Infinity Vacations." />
        <meta property="og:url" content="https://www.infinityvacations.net/packages/international" />
      </Helmet>
      
      {/* Optional: Add a small hero section for the page if you want */}
      <div className="page-hero" style={{ 
        height: '40vh', 
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/malaysia.jpg") center/cover no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '80px' // to account for fixed header
      }}>
        <div className="container text-center">
          <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700' }}>International Packages</h1>
        </div>
      </div>

      <InternationalPackages />
    </>
  );
};

export default InternationalPackagesPage;
