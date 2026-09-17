import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header/Header';
import Home from './pages/Home';
import CorporateToursPage from './pages/CorporateToursPage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import DomesticPackagesPage from './pages/DomesticPackagesPage';
import InternationalPackagesPage from './pages/InternationalPackagesPage';
import ContactUsPage from './pages/ContactUsPage';
import NotFoundPage from './pages/NotFoundPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import CancellationPolicyPage from './pages/CancellationPolicyPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import Footer from './components/Footer/Footer';
import WhatsAppCTA from './components/CTA/WhatsAppCTA';
import './index.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Helmet>
            <title>Infinity Vacations | Your Journey, Our Passion</title>
            <meta name="description" content="Explore the world with Infinity Vacations. Best price guarantee, customized packages, and 24/7 customer support for safe & comfortable travel." />
            <meta name="keywords" content="travel, tours, packages, thailand, malaysia, singapore, bali, vietnam, cambodia, vacations" />
          </Helmet>

          <Header />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/corporate-tours" element={<CorporateToursPage />} />
              <Route path="/packages/domestic" element={<DomesticPackagesPage />} />
              <Route path="/packages/international" element={<InternationalPackagesPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactUsPage />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
              <Route path="/cancellation-policy" element={<CancellationPolicyPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          <WhatsAppCTA />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
