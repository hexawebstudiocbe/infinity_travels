import React from 'react';
import { Helmet } from 'react-helmet-async';
import './LegalPages.css';

const TermsAndConditionsPage = () => {
  return (
    <div className="legal-page-container">
      <Helmet>
        <title>Terms & Conditions | Infinity Vacations</title>
        <meta name="description" content="Terms & Conditions for Infinity Vacations." />
        <link rel="canonical" href="https://www.infinityvacations.net/terms-and-conditions" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <h1 className="legal-title">Terms & Conditions</h1>
      
      <div className="legal-content">
        <p className="legal-date">
          Last updated: [Date]
        </p>
        
        <h2 className="legal-section-title">1. Agreement to Terms</h2>
        <p className="legal-text">
          These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Infinity Vacations ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
        </p>

        <h2 className="legal-section-title">2. Booking and Reservations</h2>
        <p className="legal-text">
          All bookings are subject to availability. By making a booking, you represent that you are at least 18 years of age and possess the legal authority to enter into this agreement.
        </p>

        <h2 className="legal-section-title">3. Cancellations and Refunds</h2>
        <p className="legal-text">
          Cancellation policies vary depending on the specific package or service booked. Please refer to the specific cancellation policy provided at the time of booking. Refunds, if applicable, will be processed in accordance with our standard processing times.
        </p>

        <h2 className="legal-section-title">4. Travel Documents</h2>
        <p className="legal-text">
          It is the traveler's responsibility to ensure they have the appropriate travel documents, including passports, visas, and health certificates, required for their destination.
        </p>

        <h2 className="legal-section-title">5. Contact Us</h2>
        <p className="legal-text">
          In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <br/>
          <strong>Email:</strong> info@infinityvacations.net
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
