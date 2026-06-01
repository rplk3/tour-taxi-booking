import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-py bg-inverse">
      <div className="container footer-grid">
        <div className="footer-col-1">
          <div className="footer-logo">Ceylon Journeys</div>
          <p className="footer-text mb-8">© 2024 Ceylon Journeys. All rights reserved. Curating luxury adventures in Sri Lanka.</p>
          <div className="social-links">
            <a href="#" className="social-link">
              <span className="material-symbols-outlined">social_leaderboard</span>
            </a>
            <a href="#" className="social-link">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a href="#" className="social-link">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Destinations</Link></li>
            <li><Link to="/fleet">Fleet</Link></li>
            <li><Link to="/contact">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Support</h4>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Travel Insurance</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-heading">Contact Us</h4>
          <div className="footer-contact">
            <div className="contact-item">
              <span className="material-symbols-outlined icon">location_on</span>
              <p>45 Heritage Square, Galle Fort,<br/>Sri Lanka</p>
            </div>
            <div className="contact-item">
              <span className="material-symbols-outlined icon">call</span>
              <p>+94 11 234 5678</p>
            </div>
            <div className="contact-item">
              <span className="material-symbols-outlined icon">mail</span>
              <p>concierge@ceylonjourneys.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
