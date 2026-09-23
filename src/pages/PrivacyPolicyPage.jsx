import React from 'react';
import { Helmet } from 'react-helmet-async';
import './LegalPages.css';

const PrivacyPolicyPage = () => {
  return (
    <div className="legal-page-container">
      <Helmet>
        <title>Privacy Policy | Infinity Vacations</title>
        <meta name="description" content="Privacy Policy for Infinity Vacations." />
        <link rel="canonical" href="https://www.infinityvacations.net/privacy-policy" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <h1 className="legal-title">Privacy Policy</h1>
      
      <div className="legal-content">
        
        <p className="legal-text">
          Infinity Vacations respects your privacy and is committed to protecting personal information provided by customers and website visitors.
        </p>

        <h2 className="legal-section-title">1. Information We Collect</h2>
        <p className="legal-text">
          Depending on the services requested, Infinity Vacations may collect information such as:
        </p>
        <ul className="legal-list">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Passenger information</li>
          <li>Date of birth</li>
          <li>Passport and travel-document details</li>
          <li>Travel preferences</li>
          <li>Booking information</li>
          <li>Payment-related information</li>
          <li>Enquiry and communication details</li>
        </ul>

        <h2 className="legal-section-title">2. How We Use Your Information</h2>
        <p className="legal-text">
          Information may be used to:
        </p>
        <ul className="legal-list">
          <li>Respond to enquiries</li>
          <li>Process travel bookings</li>
          <li>Arrange flights, hotels, transportation and tours</li>
          <li>Provide visa assistance</li>
          <li>Communicate booking updates</li>
          <li>Provide customer support</li>
          <li>Process payments through applicable payment providers</li>
          <li>Meet legal and regulatory requirements</li>
          <li>Improve our website and services</li>
        </ul>

        <h2 className="legal-section-title">3. Sharing of Information</h2>
        <p className="legal-text">
          Where necessary to provide requested travel services, information may be shared with relevant third parties such as:
        </p>
        <ul className="legal-list">
          <li>Airlines</li>
          <li>Hotels</li>
          <li>Transportation providers</li>
          <li>Activity providers</li>
          <li>Visa/immigration service providers</li>
          <li>Destination partners</li>
          <li>Payment providers</li>
          <li>Other suppliers involved in fulfilling the requested service</li>
        </ul>
        <p className="legal-text">
          Infinity Vacations will only share information as reasonably necessary for the relevant service or as required/permitted by applicable law.
        </p>

        <h2 className="legal-section-title">4. Payment Information</h2>
        <p className="legal-text">
          Payments may be processed through third-party payment providers.<br/>
          Infinity Vacations may not directly store complete payment-card details where payment processing is handled by an external payment provider.<br/>
          Customers should review the applicable payment provider's privacy terms where relevant.
        </p>

        <h2 className="legal-section-title">5. Cookies</h2>
        <p className="legal-text">
          Our website may use cookies and similar technologies to provide essential website functionality and understand website usage.<br/>
          Where applicable, analytics or other non-essential tracking technologies may be used in accordance with applicable requirements.
        </p>

        <h2 className="legal-section-title">6. Data Security</h2>
        <p className="legal-text">
          Infinity Vacations takes reasonable measures to protect personal information against unauthorized access, misuse, alteration or disclosure.<br/>
          However, no method of electronic transmission or storage can be guaranteed to be completely secure.
        </p>

        <h2 className="legal-section-title">7. Third-Party Websites</h2>
        <p className="legal-text">
          Our website may contain links to third-party websites or services.<br/>
          Infinity Vacations is not responsible for the privacy practices or content of third-party websites.<br/>
          Customers are encouraged to review the privacy policies of those third parties.
        </p>

        <h2 className="legal-section-title">8. Data Retention</h2>
        <p className="legal-text">
          Personal information may be retained for as long as reasonably necessary to provide services, maintain business records, resolve disputes, comply with legal obligations and meet other legitimate business requirements.
        </p>

        <h2 className="legal-section-title">9. Your Rights</h2>
        <p className="legal-text">
          Depending on applicable law, customers may have rights relating to their personal information, including requesting access, correction or other actions concerning their personal data.<br/>
          Requests can be made using the contact details below.
        </p>

        <h2 className="legal-section-title">10. Children's Privacy</h2>
        <p className="legal-text">
          Our services are not specifically directed toward children. Where information relating to a minor is required for a travel booking, it should be provided by or with the involvement of the child's parent or legal guardian.
        </p>

        <h2 className="legal-section-title">11. Changes to This Privacy Policy</h2>
        <p className="legal-text">
          Infinity Vacations may update this Privacy Policy from time to time.<br/>
          The updated version will be published on this website with the revised effective date.
        </p>

        <h2 className="legal-section-title">12. Contact Us</h2>
        <p className="legal-text">
          <strong>Infinity Vacations</strong><br/>
          <strong>Email:</strong> <a href="mailto:info@infinityvacations.net">info@infinityvacations.net</a><br/>
          <strong>Phone:</strong> [Phone Number]<br/>
          <strong>Address:</strong> [Business Address]
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
