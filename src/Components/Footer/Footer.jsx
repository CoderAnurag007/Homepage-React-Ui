import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="rounded-border1"></div>
      <div className="rounded-border2"></div>
      <div className="footer-links-box">
        <div className="footer-links">
          Company
          <div className="footer-link">About us</div>
          <div className="footer-link">Portfolio</div>
          <div className="footer-link">Pricing</div>
          <div className="footer-link">Contact</div>
        </div>
        <div className="footer-links">
          Contact
          <div className="footer-link">Quote</div>
          <div className="footer-link">infenito@gmail.com</div>
          <div className="footer-link">9843753330</div>
        </div>
        <div className="footer-links">
          More
          <div className="footer-link">Instagram</div>
          <div className="footer-link">Facebook</div>
          <div className="footer-link">Linkedin</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
