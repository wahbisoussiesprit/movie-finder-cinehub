import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          {/* Logo and tagline */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">CINE</span>
              <span className="logo-dot">.</span>
              <span className="logo-text">HUB</span>
            </div>
            <p className="footer-tagline">
              Unlimited entertainment. Anywhere, anytime.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <span className="social-icon">📘</span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span className="social-icon">🐦</span>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <span className="social-icon">📸</span>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <span className="social-icon">📺</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-links">
            <div className="link-column">
              <h3 className="link-title">Browse</h3>
              <a href="#" className="footer-link">Movies</a>
              <a href="#" className="footer-link">TV Shows</a>
              <a href="#" className="footer-link">New Releases</a>
              <a href="#" className="footer-link">Trending</a>
              <a href="#" className="footer-link">My List</a>
            </div>
            
            <div className="link-column">
              <h3 className="link-title">Account</h3>
              <a href="#" className="footer-link">Profile</a>
              <a href="#" className="footer-link">Settings</a>
              <a href="#" className="footer-link">Help Center</a>
              <a href="#" className="footer-link">Subscription</a>
              <a href="#" className="footer-link">Sign Out</a>
            </div>
            
            <div className="link-column">
              <h3 className="link-title">Company</h3>
              <a href="#" className="footer-link">About Us</a>
              <a href="#" className="footer-link">Careers</a>
              <a href="#" className="footer-link">Contact</a>
              <a href="#" className="footer-link">Press</a>
              <a href="#" className="footer-link">Legal</a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h3 className="newsletter-title">Stay Updated</h3>
            <p className="newsletter-text">
              Subscribe to get notified about new releases and updates.
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                aria-label="Email for newsletter"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} CineHub. All rights reserved. 
            <span className="copyright-note"> This is a demo project for interview purposes.</span>
          </div>
          <div className="footer-legal">
            <a href="#" className="legal-link">Privacy Policy</a>
            <a href="#" className="legal-link">Terms of Service</a>
            <a href="#" className="legal-link">Cookie Policy</a>
          </div>
        </div>

        {/* Interview note */}
        <div className="interview-note">
          <p>
            <strong>Interview Project Note:</strong> This is a React demonstration project showcasing 
            component architecture, state management, and modern CSS. Built by Wahbi Soussi for 
            frontend developer Internship positions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;