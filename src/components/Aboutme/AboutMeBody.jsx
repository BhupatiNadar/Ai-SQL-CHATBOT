import React from 'react'
import "./Css/AboutMeBody.css"
import inner_container from "../../assets/inner-container2.webp";
const AboutMeBody = () => {
  return (
    <div className="AboutMeBody-container">
      <div className="AboutMeBody-innercontainer1">
        <h1>Our Mission</h1>
        <p>
          The AI-Based SQL Chatbot is designed to bridge the gap between
          technical and non-technical users by making database querying
          accessible to everyone.
        </p>
        <p>
          Traditional SQL querying requires deep technical knowledge and can be
          time-consuming. Our solution leverages cutting-edge AI technology to
          transform natural language questions into precise SQL queries.
        </p>
        <p>
          Traditional SQL querying requires deep technical knowledge and can be
          time-consuming. Our solution leverages cutting-edge AI technology to
          transform natural language questions into precise SQL queries.
        </p>
      </div>
      <div className="AboutMeBody-innercontainer2">
        <img className='aboutme_img' src={inner_container} alt="" />
      </div>
    </div>
  );
}

export default AboutMeBody