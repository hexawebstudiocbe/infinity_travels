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
          Effective Date: [Date]
        </p>
        
        <p className="legal-text">
          Welcome to Infinity Vacations. By accessing or using our website, services, or booking any travel product through us, you agree to the following Terms & Conditions.
        </p>

        <h2 className="legal-section-title">1. About Infinity Vacations</h2>
        <p className="legal-text">
          Infinity Vacations provides travel-related services including domestic and international tour packages, corporate tours, hotel bookings, transportation, sightseeing, flight bookings, visa assistance and other travel-related services.<br/><br/>
          Infinity Vacations may act as a travel agent, tour operator or intermediary depending on the service booked. Certain services are provided by third-party suppliers such as airlines, hotels, transport operators, activity providers and destination partners.
        </p>

        <h2 className="legal-section-title">2. Booking & Confirmation</h2>
        <ul className="legal-list">
          <li>All bookings are subject to availability and confirmation.</li>
          <li>A booking will be considered confirmed only after the required payment has been received and confirmation is issued by Infinity Vacations.</li>
          <li>Prices and availability may change until the booking is confirmed.</li>
          <li>Customers must provide accurate passenger names, dates of birth, passport details and other required information.</li>
          <li>Any error in customer-provided information may result in additional charges or cancellation.</li>
        </ul>

        <h2 className="legal-section-title">3. Pricing & Payment</h2>
        <ul className="legal-list">
          <li>Package prices will be communicated before confirmation.</li>
          <li>Applicable taxes, government charges, service charges and other mandatory fees may be included or separately specified in the quotation.</li>
          <li>Customers must make payments according to the payment schedule communicated by Infinity Vacations.</li>
          <li>Failure to make payment within the specified period may result in cancellation of the booking.</li>
          <li>Additional charges may apply due to changes in airline fares, hotel rates, currency exchange rates, taxes or government regulations before final confirmation.</li>
        </ul>

        <h2 className="legal-section-title">4. Flight Bookings</h2>
        <p className="legal-text">
          Airline tickets are subject to the airline's fare rules and conditions.<br/><br/>
          Infinity Vacations is not responsible for airline delays, cancellations, schedule changes, baggage restrictions, denied boarding or other circumstances controlled by the airline, subject to applicable law.<br/><br/>
          Customers should verify flight timings before travelling and follow the airline's check-in and baggage requirements.
        </p>

        <h2 className="legal-section-title">5. Hotel Bookings</h2>
        <p className="legal-text">
          Hotel bookings are subject to the hotel's availability, policies and conditions.<br/><br/>
          Room categories, amenities, check-in/check-out times and facilities may vary between properties.<br/><br/>
          The hotel may require a security deposit or additional payment directly from the customer.
        </p>

        <h2 className="legal-section-title">6. Visa & Immigration</h2>
        <p className="legal-text">
          Visa assistance provided by Infinity Vacations does not guarantee visa approval.<br/><br/>
          Visa decisions are made solely by the relevant embassy, consulate or immigration authority.<br/><br/>
          Customers are responsible for providing genuine and accurate documents and complying with immigration requirements.<br/><br/>
          Visa fees and service charges may be non-refundable once the application process has commenced, subject to the applicable booking terms.
        </p>

        <h2 className="legal-section-title">7. Passport & Travel Documents</h2>
        <p className="legal-text">
          Customers are responsible for ensuring that their passport, visa, permits and other travel documents are valid and meet the requirements of the destination country.<br/><br/>
          Infinity Vacations shall not be responsible for travel restrictions, denied boarding or entry refusal resulting from incorrect, incomplete or invalid travel documents, subject to applicable law.
        </p>

        <h2 className="legal-section-title">8. Corporate Tours</h2>
        <p className="legal-text">
          For corporate group tours:
        </p>
        <ul className="legal-list">
          <li>The corporate client must provide accurate participant information.</li>
          <li>A designated coordinator may be required for communication and approvals.</li>
          <li>Payment schedules will be agreed upon in the corporate quotation or agreement.</li>
          <li>Changes in participant numbers may affect the package price.</li>
          <li>Cancellation and amendment charges will depend on supplier terms and the agreed corporate contract.</li>
          <li>Special requirements should be communicated before final confirmation.</li>
        </ul>

        <h2 className="legal-section-title">9. Changes to Itinerary</h2>
        <p className="legal-text">
          Infinity Vacations may modify an itinerary when reasonably necessary due to circumstances such as:
        </p>
        <ul className="legal-list">
          <li>Flight schedule changes</li>
          <li>Weather conditions</li>
          <li>Government restrictions</li>
          <li>Natural disasters</li>
          <li>Hotel availability</li>
          <li>Local operational conditions</li>
          <li>Safety considerations</li>
          <li>Supplier changes</li>
        </ul>
        <p className="legal-text">
          Where reasonably possible, customers will be informed of such changes and suitable alternatives will be offered.
        </p>

        <h2 className="legal-section-title">10. Force Majeure</h2>
        <p className="legal-text">
          Infinity Vacations shall not be responsible for failure or delay caused by circumstances beyond its reasonable control, including natural disasters, pandemics, war, terrorism, strikes, government restrictions, political disturbances, severe weather, airline disruptions or other unforeseen events, subject to applicable law.<br/><br/>
          Any refund or compensation in such circumstances will be subject to the applicable supplier's terms and the amounts actually recoverable from suppliers.
        </p>

        <h2 className="legal-section-title">11. Customer Responsibilities</h2>
        <p className="legal-text">
          Customers agree to:
        </p>
        <ul className="legal-list">
          <li>Follow applicable laws and regulations.</li>
          <li>Follow airline, hotel and tour operator rules.</li>
          <li>Provide accurate information and documents.</li>
          <li>Maintain appropriate travel insurance where required or recommended.</li>
          <li>Respect local customs and regulations.</li>
          <li>Pay all applicable charges within the agreed timelines.</li>
        </ul>

        <h2 className="legal-section-title">12. Travel Insurance</h2>
        <p className="legal-text">
          Travel insurance is recommended for domestic and international travel.<br/><br/>
          Unless specifically included in the package, travel insurance must be purchased separately by the customer.<br/><br/>
          Customers are responsible for reviewing the coverage, exclusions and claim procedures of their insurance policy.
        </p>

        <h2 className="legal-section-title">13. Third-Party Suppliers</h2>
        <p className="legal-text">
          Infinity Vacations may use third-party suppliers including airlines, hotels, transportation companies, activity providers, visa service providers and destination management companies.<br/><br/>
          Their respective terms and conditions may apply in addition to these Terms & Conditions.
        </p>

        <h2 className="legal-section-title">14. Website Information</h2>
        <p className="legal-text">
          Infinity Vacations makes reasonable efforts to keep information on the website accurate and updated.<br/><br/>
          However, prices, availability, schedules, hotel facilities and travel requirements may change without prior notice.<br/><br/>
          Website content should not be considered a guarantee of availability or service unless confirmed in writing by Infinity Vacations.
        </p>

        <h2 className="legal-section-title">15. Intellectual Property</h2>
        <p className="legal-text">
          All website content including logos, text, graphics, photographs, designs and other materials belonging to Infinity Vacations may not be copied, reproduced, modified or commercially used without prior written permission.<br/><br/>
          Third-party trademarks and content remain the property of their respective owners.
        </p>

        <h2 className="legal-section-title">16. Privacy</h2>
        <p className="legal-text">
          Infinity Vacations may collect and process customer information necessary to provide travel services, process bookings, communicate with customers and comply with applicable legal requirements.<br/><br/>
          Customer information will be handled in accordance with our Privacy Policy.
        </p>

        <h2 className="legal-section-title">17. Complaints & Grievance Redressal</h2>
        <p className="legal-text">
          Customers may contact Infinity Vacations regarding any booking or service-related complaint through the contact details published on our website.<br/><br/>
          We will make reasonable efforts to review and resolve complaints within an appropriate period.
        </p>
        <p className="legal-text">
          <strong>Grievance Contact:</strong><br/>
          Name: [Name]<br/>
          Email: <a href="mailto:info@infinityvacations.net">info@infinityvacations.net</a><br/>
          Phone: [Phone Number]
        </p>

        <h2 className="legal-section-title">18. Limitation of Liability</h2>
        <p className="legal-text">
          Infinity Vacations will make reasonable efforts to provide the services described in the confirmed booking.<br/><br/>
          However, Infinity Vacations shall not be responsible for losses arising from circumstances outside its reasonable control or from acts, omissions, delays, cancellations or failures of third-party suppliers, subject to applicable law.<br/><br/>
          Nothing in these Terms & Conditions is intended to exclude or limit any consumer rights or liability that cannot legally be excluded or limited.
        </p>

        <h2 className="legal-section-title">19. Governing Law</h2>
        <p className="legal-text">
          These Terms & Conditions shall be governed by the laws applicable in India.<br/><br/>
          Any dispute shall be subject to the jurisdiction of the competent courts, subject to applicable law.
        </p>

        <h2 className="legal-section-title">20. Changes to These Terms</h2>
        <p className="legal-text">
          Infinity Vacations reserves the right to update these Terms & Conditions from time to time.<br/><br/>
          The updated version will be published on this website with the revised effective date.
        </p>

        <h2 className="legal-section-title">21. Contact Us</h2>
        <p className="legal-text">
          <strong>Infinity Vacations</strong><br/>
          <strong>Email:</strong> <a href="mailto:info@infinityvacations.net">info@infinityvacations.net</a><br/>
          <strong>Phone:</strong> [Phone Number]<br/>
          <strong>Address:</strong> [Business Address]<br/>
          <strong>Website:</strong> [Website]
        </p>
        
        <p className="legal-text">
          <em>By making a booking with Infinity Vacations, you acknowledge that you have read and agreed to these Terms & Conditions.</em>
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
