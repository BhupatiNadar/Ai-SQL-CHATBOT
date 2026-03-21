import React from "react";
import "./css/ContactBody.css";

const ContactBody = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-form">
          <h1>Send us a Message</h1>

          <label>Name</label>
          <input type="text" placeholder="Your Name" />

          <label>Email</label>
          <input type="text" placeholder="your.email@example.com" />

          <label>Message</label>
          <textarea placeholder="Tell us what you think or ask us a question"></textarea>

          <button>Send Message</button>
        </div>

        <div className="contact-info">
          <h1>Connect With Us</h1>
          <p className="contact-desc">
            We're here to help and answer any question you might have.
          </p>

          <div className="info-card">
            <h3>Email</h3>
            <p>nadarbhupati@gmail.com</p>
            <span>We typically respond within 24 hours</span>
          </div>

          <div className="info-card">
            <h3>GitHub</h3>
            <p>github.com/aisqlchatbot</p>
            <span>Check out our open-source projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBody;
