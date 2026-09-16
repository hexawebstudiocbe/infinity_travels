import React from 'react';
import { motion } from 'framer-motion';
import { FaPlaneDeparture, FaHotel, FaCampground, FaPassport, FaShieldAlt, FaSuitcaseRolling, FaUsers } from 'react-icons/fa';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'Flight Booking',
    shortDesc: 'Best price domestic and international flight bookings with flexible options and 24/7 support for seamless air travel.',
    longDesc: 'We offer competitive airfares on all major domestic and international airlines. Our team monitors prices to ensure you get the best deals, whether it\'s economy, business, or first class. We handle group bookings, last-minute reservations, and complex multi-city itineraries with ease.',
    icon: <FaPlaneDeparture />,
    image: '/flight booking.avif' // airplane interior/window
  },
  {
    id: 2,
    title: 'Hotel Reservations',
    shortDesc: 'Curated collection of premium hotels, resorts, and homestays worldwide. From budget-friendly to luxury accommodations.',
    longDesc: 'From boutique stays to luxury resorts, we curate the perfect accommodation for every traveler. Our partnerships with hotels worldwide ensure verified properties, best rates, and inclusive perks like complimentary upgrades and late checkouts.',
    icon: <FaHotel />,
    image: '/Hotel Reservations.avif' // luxury hotel
  },
  {
    id: 3,
    title: 'Experiential Stays',
    shortDesc: 'Unique accommodations that go beyond a simple room. Treehouses, glamping, heritage homes, and more.',
    longDesc: 'Immerse yourself in your destination with our handpicked experiential stays. Whether you dream of sleeping in a glass igloo under the Northern Lights, a luxury tent in the Sahara, or a heritage palace in Rajasthan, we make it happen.',
    icon: <FaCampground />,
    image: '/Experiential Stays.avif' // glamping/cabin
  },
  {
    id: 4,
    title: 'Visa & Passport Assistance',
    shortDesc: 'Hassle-free visa processing and passport assistance for all countries. Expert guidance through every step of the application process.',
    longDesc: 'Navigating visa requirements can be complex. Our experienced team handles the entire process — from documentation and form filling to embassy coordination and status tracking. We process visas for all major countries including USA, UK, Schengen, Australia, and more.',
    icon: <FaPassport />,
    image: '/Visa & Passport Assistance.avif' // passport pages
  },
  {
    id: 5,
    title: 'Travel Insurance',
    shortDesc: 'Comprehensive travel insurance plans covering medical emergencies, trip cancellations, and baggage protection worldwide.',
    longDesc: 'Travel with peace of mind knowing you\'re covered for medical emergencies, trip cancellations, lost baggage, and more. We partner with top insurance providers to offer comprehensive plans that suit every travel style and budget.',
    icon: <FaShieldAlt />,
    image: '/Travel Insurance.avif' // consulting/insurance desk
  },
  {
    id: 6,
    title: 'Holiday Packages',
    shortDesc: 'Thoughtfully crafted domestic and international holiday packages tailored to your preferences, budget, and travel style.',
    longDesc: 'Our curated holiday packages are designed to give you the best travel experience without the hassle. Each package includes flights, accommodation, transfers, sightseeing, and guided tours — all at best-in-market prices.',
    icon: <FaSuitcaseRolling />,
    image: '/Holiday Packages.avif' // holiday beach couple
  },
  {
    id: 7,
    title: 'MICE Events',
    shortDesc: 'End-to-end corporate travel management for Meetings, Incentives, Conferences, and Exhibitions across the globe.',
    longDesc: 'We specialize in corporate travel management for Meetings, Incentives, Conferences, and Exhibitions. From venue selection and logistics to team-building activities and seamless event execution, we handle every detail for a successful corporate event.',
    icon: <FaUsers />,
    image: '/MICE Events.avif' // corporate conference
  }
];

const Services = () => {
  return (
    <div className="services-page-wrapper">
      {/* Top Section: Header & Icon Grid */}
      <section className="services-overview-section section-padding">
        <div className="container">
          <div className="services-header text-center">
            <h2 className="section-title">Comprehensive Travel Solutions</h2>
            <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto 50px', color: 'var(--text-muted)' }}>
              End-to-end travel services designed to make your journey seamless from planning to return.
            </p>
          </div>

          <div className="services-icon-grid">
            {servicesData.map((service, index) => (
              <motion.div 
                key={service.id} 
                className="service-icon-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="service-icon-box">
                  {service.icon}
                </div>
                <h4 className="service-icon-title">{service.title}</h4>
                <p className="service-icon-desc">{service.shortDesc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Section: Zig-Zag Detailed View */}
      <section className="services-detailed-section section-padding" style={{ backgroundColor: 'var(--bg-dark)', padding: '80px 0' }}>
        <div className="container">
          <div className="detailed-services-container">
            {servicesData.map((service, index) => {
              const isEven = index % 2 !== 0; // if index 1, 3, 5 etc, reverse layout
              return (
                <div key={service.id} className={`service-detail-row ${isEven ? 'row-reverse' : ''}`}>
                  <motion.div 
                    className="service-detail-image"
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <img src={service.image} alt={service.title} loading="lazy" />
                  </motion.div>
                  <motion.div 
                    className="service-detail-content"
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3>{service.title}</h3>
                    <p>{service.longDesc}</p>
                    <a href="/contact" className="text-link">Get a Quote →</a>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
