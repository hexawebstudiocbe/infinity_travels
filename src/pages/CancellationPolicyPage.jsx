import React from 'react';
import { Helmet } from 'react-helmet-async';
import './LegalPages.css';

const CancellationPolicyPage = () => {
  return (
    <div className="legal-page-container">
      <Helmet>
        <title>Cancellation & Refund Policy | Infinity Vacations</title>
        <meta name="description" content="Cancellation and Refund Policy for Infinity Vacations." />
        <link rel="canonical" href="https://www.infinityvacations.net/cancellation-policy" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <h1 className="legal-title">Cancellation & Refund Policy</h1>
      
      <div className="legal-content">
        <p className="legal-date">
          Effective Date: [Date]
        </p>
        
        <p className="legal-text">
          At Infinity Vacations, cancellation and refund conditions may vary depending on the travel service booked and the applicable terms of the relevant supplier.
        </p>

        <h2 className="legal-section-title">1. Cancellation Requests</h2>
        <ul className="legal-list">
          <li>Cancellation requests must be submitted in writing through the contact details provided by Infinity Vacations.</li>
          <li>A cancellation will be considered received only after it has been acknowledged by Infinity Vacations.</li>
          <li>Cancellation charges may depend on the date of cancellation, type of service and supplier's applicable policy.</li>
        </ul>

        <h2 className="legal-section-title">2. Supplier Cancellation Policies</h2>
        <p className="legal-text">
          Cancellation charges may be determined by the respective:
        </p>
        <ul className="legal-list">
          <li>Airlines</li>
          <li>Hotels</li>
          <li>Transport providers</li>
          <li>Activity providers</li>
          <li>Tour operators</li>
          <li>Destination management companies</li>
          <li>Visa service providers</li>
        </ul>
        <p className="legal-text">
          The specific cancellation terms provided in the customer's quotation or booking confirmation will apply to that booking.
        </p>

        <h2 className="legal-section-title">3. Refunds</h2>
        <ul className="legal-list">
          <li>Refunds, where applicable, will be processed after receiving the applicable refund from the relevant supplier.</li>
          <li>Certain bookings may be completely non-refundable.</li>
          <li>Convenience fees, service charges, visa fees and other applicable charges may not be refundable.</li>
          <li>Refund processing time may vary depending on the supplier and payment method.</li>
          <li>The amount refunded may be subject to deductions permitted under the applicable booking and supplier terms.</li>
        </ul>

        <h2 className="legal-section-title">4. Flight Cancellation</h2>
        <ul className="legal-list">
          <li>Flight cancellations and refunds are subject to the applicable airline's fare rules.</li>
          <li>Airline cancellation fees, fare restrictions and other applicable charges may be deducted from the refundable amount.</li>
        </ul>

        <h2 className="legal-section-title">5. Hotel Cancellation</h2>
        <ul className="legal-list">
          <li>Hotel cancellation and refund conditions are subject to the hotel's applicable cancellation policy.</li>
          <li>Some hotel bookings may be partially refundable or completely non-refundable.</li>
        </ul>

        <h2 className="legal-section-title">6. Tour Package Cancellation</h2>
        <p className="legal-text">
          Cancellation charges for tour packages may depend on:
        </p>
        <ul className="legal-list">
          <li>Destination</li>
          <li>Travel dates</li>
          <li>Supplier policies</li>
          <li>Hotel cancellation terms</li>
          <li>Transportation arrangements</li>
          <li>Flight tickets</li>
          <li>Activities</li>
          <li>Number of days before departure</li>
        </ul>
        <p className="legal-text">
          The applicable charges will be communicated to the customer where applicable.
        </p>

        <h2 className="legal-section-title">7. Visa Cancellation & Refunds</h2>
        <ul className="legal-list">
          <li>Visa fees and service charges may be non-refundable once the application process has commenced.</li>
          <li>Visa decisions are made by the relevant embassy, consulate or immigration authority and are outside the control of Infinity Vacations.</li>
        </ul>

        <h2 className="legal-section-title">8. Force Majeure</h2>
        <p className="legal-text">
          In circumstances such as natural disasters, pandemics, war, government restrictions, severe weather, airline disruptions or other events beyond reasonable control, refunds or compensation will be subject to the applicable supplier terms and the amounts actually recoverable from suppliers.
        </p>

        <h2 className="legal-section-title">9. Refund Processing Time</h2>
        <p className="legal-text">
          Refund processing times may vary depending on:
        </p>
        <ul className="legal-list">
          <li>Supplier processing time</li>
          <li>Banking/payment provider processing</li>
          <li>Payment method</li>
          <li>Type of booking</li>
        </ul>
        <p className="legal-text">
          Customers will be informed when the applicable refund has been processed by Infinity Vacations.
        </p>

        <h2 className="legal-section-title">10. Contact Us</h2>
        <p className="legal-text">
          For cancellation or refund requests:<br/>
          <strong>Infinity Vacations</strong><br/>
          <strong>Email:</strong> <a href="mailto:info@infinityvacations.net">info@infinityvacations.net</a><br/>
          <strong>Phone:</strong> [Phone Number]<br/>
          <strong>Address:</strong> [Business Address]
        </p>
        <p className="legal-text">
          <em>Important: The cancellation and refund conditions specifically provided in a customer's quotation or booking confirmation may take precedence over the general terms of this policy for that particular booking, subject to applicable law.</em>
        </p>
      </div>
    </div>
  );
};

export default CancellationPolicyPage;
