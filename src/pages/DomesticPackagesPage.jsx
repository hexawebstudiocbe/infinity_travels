import React from 'react';
import { Helmet } from 'react-helmet-async';
import DomesticPackages from '../components/DomesticPackages/DomesticPackages';

const DomesticPackagesPage = () => {
  return (
    <>
      <Helmet>
        <title>Domestic Packages | Infinity Vacations</title>
        <meta name="description" content="Explore beautiful domestic destinations in India with Infinity Vacations." />
        <link rel="canonical" href="https://www.infinityvacations.net/packages/domestic" />
        <meta property="og:title" content="Domestic Packages | Infinity Vacations" />
        <meta property="og:description" content="Explore beautiful domestic destinations in India with Infinity Vacations." />
        <meta property="og:url" content="https://www.infinityvacations.net/packages/domestic" />
      </Helmet>
      
      {/* Optional: Add a small hero section for the page if you want */}
      <div className="page-hero" style={{ 
        height: '40vh', 
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/destinations/kerala.jpg") center/cover no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '80px' // to account for fixed header
      }}>
        <div className="container text-center">
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 3rem)', fontWeight: '700' }}>Domestic Packages</h1>
        </div>
      </div>

      <DomesticPackages />
    </>
  );
};

export default DomesticPackagesPage;
