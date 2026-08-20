import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>Infinity Vacations | Your Journey, Our Passion</title>
          <meta name="description" content="Explore the world with Infinity Vacations. Best price guarantee, customized packages, and 24/7 customer support for safe & comfortable travel." />
          <meta name="keywords" content="travel, tours, packages, thailand, malaysia, singapore, bali, vietnam, cambodia, vacations" />
        </Helmet>

        <Header />
        
        <main>
          <Hero />
          <Destinations />
          <WhyChooseUs />
          <Testimonials />
          <CTA />
        </main>
        
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
