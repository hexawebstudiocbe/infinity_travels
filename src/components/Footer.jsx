import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#111', color: '#ccc', paddingTop: '60px', paddingBottom: '20px' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '40px',
          marginBottom: '40px'
        }}>
          
          {/* Logo & About */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <img src="/logo%20no%20bg.png" alt="Infinity Vacations Logo" style={{ height: '60px', width: 'auto' }} />
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
              We make your travel dreams come true with trusted service, best prices and unforgettable experiences.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              {[FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube].map((Icon, idx) => (
                <a key={idx} href="#" style={{ 
                  width: '35px', height: '35px', 
                  borderRadius: '50%', 
                  border: '1px solid var(--color-gold)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-gold)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={e => { e.currentTarget.style.backgroundColor = 'var(--color-gold)'; e.currentTarget.style.color = '#111'; }}
                onMouseOut={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--color-gold)'; }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ color: 'var(--color-gold)', fontSize: '1.1rem', marginBottom: '20px' }}>QUICK LINKS</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Home', 'About Us', 'Tour Packages', 'Services', 'Gallery', 'Blog', 'Contact Us'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" style={{ fontSize: '0.9rem', color: '#ccc', transition: 'color 0.3s ease' }}
                    onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold)'}
                    onMouseOut={e => e.currentTarget.style.color = '#ccc'}
                  >{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 style={{ color: 'var(--color-gold)', fontSize: '1.1rem', marginBottom: '20px' }}>OUR SERVICES</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Flight Booking', 'Hotel Booking', 'Visa Assistance', 'Travel Insurance', 'Airport Transfers', 'Group & Corporate Tours', 'Honeymoon Packages'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" style={{ fontSize: '0.9rem', color: '#ccc', transition: 'color 0.3s ease' }}
                    onMouseOver={e => e.currentTarget.style.color = 'var(--color-gold)'}
                    onMouseOut={e => e.currentTarget.style.color = '#ccc'}
                  >{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 style={{ color: 'var(--color-gold)', fontSize: '1.1rem', marginBottom: '20px' }}>CONTACT US</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li style={{ display: 'flex', gap: '10px', fontSize: '0.9rem' }}>
                <FaPhoneAlt style={{ color: 'var(--color-gold)', marginTop: '4px' }} />
                <div>
                  <div>7418271859</div>
                  <div>9047471859</div>
                  <div>9500971859</div>
                  <div>9500241674</div>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '10px', fontSize: '0.9rem', alignItems: 'center' }}>
                <FaEnvelope style={{ color: 'var(--color-gold)' }} />
                <a href="mailto:info@infinityvacations.net">info@infinityvacations.net</a>
              </li>
              <li style={{ display: 'flex', gap: '10px', fontSize: '0.9rem', alignItems: 'center' }}>
                <FaMapMarkerAlt style={{ color: 'var(--color-gold)' }} />
                <div>Coimbatore, Tamil Nadu, India</div>
              </li>
            </ul>
          </div>



        </div>

        {/* Bottom Footer */}
        <div style={{ 
          borderTop: '1px solid #333', 
          paddingTop: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.85rem'
        }}>
          <div>© 2026 Infinity Vacations. All Rights Reserved.</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: '#ccc' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#ccc' }}>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
