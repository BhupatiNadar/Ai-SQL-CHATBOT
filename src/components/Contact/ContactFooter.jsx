import React from "react";
import "./css/ContactFooter.css";

const ContactFooter = () => {
  return (
    <div className="faq-container">
      <div className="faq-content">
        <h1 className="faq-title">Frequently Asked Questions</h1>

        <div className="faq-card">
          <h2>How accurate are the SQL queries?</h2>
          <p>
            Our AI generates highly accurate SQL queries with a success rate of
            over 95%. The system continuously learns and improves from usage
            patterns.
          </p>
        </div>

        <div className="faq-card">
          <h2>Which databases are supported?</h2>
          <p>
            We support MySQL, PostgreSQL, SQLite, Microsoft SQL Server, and
            Oracle databases. More database systems are being added regularly.
          </p>
        </div>

        <div className="faq-card">
          <h2>Is my data secure?</h2>
          <p>
            Yes! We use industry-standard encryption and never store your actual
            database data. All queries are executed securely with proper
            authentication.
          </p>
        </div>
      </div>

      <div className="faq-footer">
        © 2026 AI SQL Chatbot. All rights reserved.
      </div>
    </div>
  );
};

export default ContactFooter;
