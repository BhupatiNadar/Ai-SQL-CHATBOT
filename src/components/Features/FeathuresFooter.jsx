import React from "react";
import "./css/FeathuresFooter.css";

const FeathuresFooter = () => {
  return (
    <div className="FeathuresFooter-footer">
      <div className="footer-content">
        <h1 className="footer-title">Why Choose Our SQL Chatbot?</h1>
        <p className="footer-subtitle">
          Experience the future of database querying with AI-powered assistance
        </p>

        <div className="footer-stats">
          <div className="footer-stat-box">
            <h1>10x</h1>
            <p>Faster query generation</p>
          </div>

          <div className="footer-stat-box">
            <h1>0</h1>
            <p>SQL knowledge required</p>
          </div>

          <div className="footer-stat-box">
            <h1>100%</h1>
            <p>Accurate query translation</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 AI SQL Chatbot. All rights reserved.
      </div>
    </div>
  );
};

export default FeathuresFooter;
