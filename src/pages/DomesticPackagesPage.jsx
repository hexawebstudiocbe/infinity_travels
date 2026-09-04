import React from 'react';
import { Helmet } from 'react-helmet-async';
import DomesticPackages from '../components/DomesticPackages/DomesticPackages';

const DomesticPackagesPage = () => {
  return (
    <>
      <Helmet>
        <title>Domestic Packages | Infinity Vacations</title>
        <meta name="description" content="Explore beautiful domestic destinations in India with Infinity Vacations." />
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
