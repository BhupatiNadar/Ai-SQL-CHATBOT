import React from "react";
import "./css/How_it_workfooter.css";
import workflowimg from "../../assets/workflowimg.jpg";

const How_it_workfooter = () => {
  return (
    <div className="workflow-container">
      <h1 className="workflow-title">The Complete Workflow</h1>

      <div className="workflow-card">
        <img src={workflowimg} alt="workflow" />
      </div>

      <ul className="workflow-steps">
        <li>
          <span className="dot blue"></span> User Input
        </li>
        <li>
          <span className="dot cyan"></span> AI Processing
        </li>
        <li>
          <span className="dot green"></span> Database Query
        </li>
        <li>
          <span className="dot orange"></span> Results
        </li>
      </ul>

      <div className="footer">© 2026 AI SQL Chatbot. All rights reserved.</div>
    </div>
  );
};

export default How_it_workfooter;
