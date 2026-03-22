import React, { useState } from "react";
import axios from "axios";
import "./css/ContactBody.css";

const ContactBody = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/contact", formData);

      console.log(res.data);
      alert("Message sent successfully!");
      
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error sending message");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-form">
          <h1>Send us a Message</h1>

          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />

          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
          />

          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us what you think or ask us a question"
          ></textarea>

          <button onClick={handleSubmit}>Send Message</button>
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
