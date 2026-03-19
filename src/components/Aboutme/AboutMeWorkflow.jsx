import React from 'react'
import "./Css/AboutMeWorkflow.css"
const AboutMeWorkflow = () => {
  return (
    <div className="AboutMeWorkflow-mainContainer">
      <div className="AboutMeWorkflow-innerContainer">
        <h1>How the AI SQL Chatbot Works</h1>
        <ol className="AboutMeWorkflow-Orderlist">
          <li>
            <h2>Natural Language Processing</h2>
            <p>
              Users type questions in plain English. The AI understands the
              intent and context of the query using advanced natural language
              processing.
            </p>
          </li>
          <li>
            <h2>SQL Generation</h2>
            <p>
              The AI analyzes your database schema and generates optimized SQL
              queries that accurately represent your question.
            </p>
          </li>
          <li>
            <h2>Live Database Execution</h2>
            <p>
              The generated SQL query is executed on your live database in
              real-time, ensuring you always get the most current data.
            </p>
          </li>
          <li>
            <h2>Results Display</h2>
            <p>
              Results are displayed in an easy-to-read table format, with
              options to export and further analyze the data.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default AboutMeWorkflow