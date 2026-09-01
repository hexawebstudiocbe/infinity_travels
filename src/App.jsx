 import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header/Header';
import Home from './pages/Home';
import CorporateToursPage from './pages/CorporateToursPage';
import AboutUsPage from './pages/AboutUsPage';
import Footer from './components/Footer/Footer';
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
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
