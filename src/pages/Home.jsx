import React from 'react';
import Hero from '../components/Hero/Hero';
import Destinations from '../components/Destinations/Destinations';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Testimonials from '../components/Testimonials/Testimonials';
import CTA from '../components/CTA/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Destinations />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
