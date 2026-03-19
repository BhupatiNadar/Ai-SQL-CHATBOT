import React from 'react'
import "./css/FeaturesBody.css"

const FeaturesBody = () => {
  return (
    <div className="FeaturesBody-maincontainer">
      <div className="FeaturesBody-Box">
        <h1>Natural Language to SQL Conversion</h1>
        <p>
          Simply type your questions in plain English, and our AI automatically
          converts them into optimized SQL queries. No technical knowledge
          required.
        </p>
      </div>
      <div className="FeaturesBody-Box">
        <h1>Live Database Querying</h1>
        <p>
          Execute queries on your live databases in real-time. Get instant
          access to the most current data without any delays.
        </p>
      </div>
      <div className="FeaturesBody-Box">
        <h1>Query Results Table</h1>
        <p>
          View your query results in a clean, organized table format with
          sorting, filtering, and export capabilities.
        </p>
      </div>
      <div className="FeaturesBody-Box">
        <h1>Chat-based Interaction</h1>
        <p>
          Interact with your database through an intuitive chat interface. Ask
          follow-up questions and refine your queries conversationally.
        </p>
      </div>
      <div className="FeaturesBody-Box">
        <h1>Query History</h1>
        <p>
          Access your previous queries and results anytime. Reuse successful
          queries and track your data exploration journey.
        </p>
      </div>
      <div className="FeaturesBody-Box">
        <h1>Secure & Private</h1>
        <p>
          Your data security is our priority. All queries are executed securely
          with proper authentication and authorization.
        </p>
      </div>
      <div className="FeaturesBody-Box">
        <h1>Lightning Fast</h1>
        <p>
          Optimized query generation and execution ensures you get results in
          seconds, not minutes.
        </p>
      </div>
      <div className="FeaturesBody-Box">
        <h1>Multi-Database Support</h1>
        <p>
          Works with MySQL, PostgreSQL, SQLite, and other popular database
          systems.
        </p>
      </div>
      <div className="FeaturesBody-Box">
        <h1>Smart Insights</h1>
        <p>
          Get automatic suggestions for related queries and insights based on
          your data patterns.
        </p>
      </div>
    </div>
  );
}

export default FeaturesBody