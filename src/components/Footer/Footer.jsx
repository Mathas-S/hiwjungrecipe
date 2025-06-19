import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Hiwjung. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/contact" className="footer-link">Contact</a>
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/terms" className="footer-link">Terms & Conditions</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" className="footer-social-icon" target="_blank" rel="noopener noreferrer">FB</a>
          <a href="https://twitter.com" className="footer-social-icon" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" className="footer-social-icon" target="_blank" rel="noopener noreferrer">IG</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
