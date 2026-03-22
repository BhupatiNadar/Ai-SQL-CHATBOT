import React from "react";
import arrow_icon from "../../assets/arrow_icon.png";
import "./CSS/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-cta">
        <div className="footer-cta-content">
          <h1 className="footer-title">Ready to Get Started?</h1>
          <p className="footer-text">
            Start querying your databases with natural language today
          </p>

          <button className="footer-btn" type="button">
            <Link to="/chatbot">Try the Chatbot Now </Link>
            <img className="footer-icon" src={arrow_icon} alt="arrow icon" />
          </button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 AI SQL Chatbot. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
