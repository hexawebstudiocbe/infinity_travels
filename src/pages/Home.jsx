import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero/Hero';
import Destinations from '../components/Destinations/Destinations';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import CorporateBanner from '../components/CorporateBanner/CorporateBanner';
import Testimonials from '../components/Testimonials/Testimonials';
import CTA from '../components/CTA/CTA';

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Infinity Vacations",
    "url": "https://www.infinityvacations.net",
    "logo": "https://www.infinityvacations.net/logo1.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9150041859",
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <Helmet>
        <title>Infinity Vacations | Your Dream Travel Partner</title>
        <meta name="description" content="Discover the best holiday packages and customized travel experiences with Infinity Vacations. We offer domestic and international tours, corporate travel, and more." />
        <link rel="canonical" href="https://www.infinityvacations.net/" />
        <meta property="og:title" content="Infinity Vacations | Your Dream Travel Partner" />
        <meta property="og:description" content="Discover the best holiday packages and customized travel experiences with Infinity Vacations." />
        <meta property="og:url" content="https://www.infinityvacations.net/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Infinity Vacations | Your Dream Travel Partner" />
        <meta name="twitter:description" content="Discover the best holiday packages and customized travel experiences with Infinity Vacations." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Hero />
      <Destinations />
      <WhyChooseUs />
      <HowItWorks />
      <CorporateBanner />
      {/* <Testimonials /> */}
      <CTA />
    </>
  );
};

export default Home;
