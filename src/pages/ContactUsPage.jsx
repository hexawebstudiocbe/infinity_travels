import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactUs from '../components/ContactUs/ContactUs';

const ContactUsPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Infinity Vacations</title>
        <meta name="description" content="Get in touch with Infinity Vacations. Let us help you plan your next dream vacation with our 24/7 customer support." />
        <link rel="canonical" href="https://www.infinityvacations.net/contact" />
        <meta property="og:title" content="Contact Us | Infinity Vacations" />
        <meta property="og:description" content="Get in touch with Infinity Vacations. Let us help you plan your next dream vacation." />
        <meta property="og:url" content="https://www.infinityvacations.net/contact" />
      </Helmet>
      <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
        <ContactUs />
      </div>
    </>
  );
};

export default ContactUsPage;
