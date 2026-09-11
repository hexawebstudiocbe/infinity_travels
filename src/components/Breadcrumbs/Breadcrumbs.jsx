import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaChevronRight, FaHome } from 'react-icons/fa';
import './Breadcrumbs.css';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // If we're on the home page, we want a placeholder so the header doesn't overlap the Hero section?
  // Actually, the Hero section has padding-top: 80px in its CSS, so it's fine.
  if (pathnames.length === 0) {
    return null;
  }

  const formatName = (name) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="breadcrumbs-wrapper">
      <div className="container">
        <nav className="breadcrumbs" aria-label="breadcrumb">
          <ol className="breadcrumbs-list">
            <li className="breadcrumbs-item">
              <Link to="/" className="breadcrumbs-link"><FaHome className="breadcrumbs-icon" /> Home</Link>
            </li>
            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              const formattedName = formatName(name);

              return (
                <li key={name} className="breadcrumbs-item">
                  <FaChevronRight className="breadcrumbs-separator" />
                  {isLast ? (
                    <span className="breadcrumbs-current" aria-current="page">
                      {formattedName}
                    </span>
                  ) : (
                    <Link to={routeTo} className="breadcrumbs-link">
                      {formattedName}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;
