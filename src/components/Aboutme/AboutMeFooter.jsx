import React from "react";
import "./Css/AboutMeFooter.css";

const AboutMeFooter = () => {
  return (
    <div className="AboutMeFooter-maincontainer">
      <div className="AboutMeFooter-innercontainer1">
        <h1>Technologies Used</h1>

        <div className="AboutMeFooter-boxcontainer">
          <div className="AboutMeFooter-Box">
            <h2>Artificial Intelligence</h2>
            <p>
              Advanced AI models trained on SQL and natural language to
              understand context and generate accurate queries.
            </p>
          </div>

          <div className="AboutMeFooter-Box">
            <h2>Natural Language Processing</h2>
            <p>
              State-of-the-art NLP algorithms that interpret user intent and
              extract key information from conversational queries.
            </p>
          </div>

          <div className="AboutMeFooter-Box">
            <h2>SQL Query Engine</h2>
            <p>
              Robust SQL generation and optimization engine that creates
              efficient queries for various database systems.
            </p>
          </div>

          <div className="AboutMeFooter-Box">
            <h2>Database Integration</h2>
            <p>
              Seamless integration with multiple database systems including
              MySQL, PostgreSQL, and more.
            </p>
          </div>
        </div>
      </div>

      <div className="AboutMeFooter-innercontainer2">
        <p>© 2026 AI SQL Chatbot. All rights reserved.</p>
      </div>
    </div>
  );
};

export default AboutMeFooter;
