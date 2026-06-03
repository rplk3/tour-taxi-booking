import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (location.pathname === '/') {
        const homeSection = document.getElementById('home');
        const aboutSection = document.getElementById('about');

        if (homeSection && aboutSection) {
          const scrollPosition = window.scrollY + 120; // 120px offset for header
          if (scrollPosition >= aboutSection.offsetTop) {
            setActiveSection('about');
          } else {
            setActiveSection('home');
          }
        }
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavLinkClick = (e, targetId) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // offset for header height
          behavior: 'smooth',
        });
      }
    } else {
      navigate(`/#${targetId}`);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="header-nav container">
        <Link to="/" className="brand-logo">
          SRT Tours
        </Link>
        <div className="nav-links">
          <Link
            to="/"
            onClick={(e) => handleNavLinkClick(e, 'home')}
            className={location.pathname === '/' && activeSection === 'home' ? 'active' : ''}
          >
            Home
          </Link>
          <Link
            to="/#about"
            onClick={(e) => handleNavLinkClick(e, 'about')}
            className={location.pathname === '/' && activeSection === 'about' ? 'active' : ''}
          >
            About Us
          </Link>
          <Link
            to="/fleet"
            className={location.pathname === '/fleet' ? 'active' : ''}
          >
            Vehicles
          </Link>
          <Link
            to="/contact"
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </div>
        <div className="header-action">
          <Button variant="tertiary">Get a Free Quote</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
