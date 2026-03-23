import React from "react";
import "./css/Chatbot.css";
import send from "../../assets/send.png";

const Chatbot = () => {
  return (
    <>
      <div className="Connection-database"></div>
      <div className="chatbot-container">
        <div className="chat-box">
          <div>
            <h2>Chat Conversation</h2>
            <p className="sub-text">Ask questions in natural language</p>
          </div>
          <div className="chat-message"></div>

          <div className="input-box">
            <input
              type="text"
              placeholder="Ask a question about your database..."
            />
            <button>
              <img src={send} alt="send" />
            </button>
          </div>
        </div>

        <div className="center-box">
          <div className="card">
            <h2>Generated SQL Query</h2>
            <p className="sub-text">AI-generated SQL based on your question</p>
            <div className="placeholder">
              SQL query will appear here after you ask a question
            </div>
          </div>

          <div className="card">
            <h2>Query Results</h2>
            <p className="sub-text">Database query results</p>
            <div className="placeholder">
              Results will appear here after executing a query
            </div>
          </div>
        </div>

        <div className="history-box">
          <h2>Query History</h2>
          <p className="sub-text">Recent queries</p>
          <div className="placeholder">No query history yet</div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
