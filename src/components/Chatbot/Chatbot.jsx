import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./css/Chatbot.css";
import send from "../../assets/send.png";

export default function Chatbot() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [sqlQuery, setSqlQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [queryLoading, setQueryLoading] = useState(false);

  const [resQuery, setResQuery] = useState({
    columns: [],
    rows: [],
  });

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async () => {
    if (!userInput.trim()) return;

    const userMessage = userInput;

    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setUserInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://127.0.0.1:8000/Sql_Chatbot", {
        user_input: userMessage,
      });

      const botResponse = res.data.query;

      setSqlQuery(botResponse);

      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: error.response?.data?.detail || "Error generating SQL query",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleQuery = async () => {
    if (!sqlQuery) return;

    setQueryLoading(true);

    try {
      const res = await axios.post("http://127.0.0.1:8000/Query", {
        query: sqlQuery,
      });

      setResQuery({
        columns: res.data.columns || [],
        rows: res.data.rows || [],
      });
    } catch (error) {
      alert(error.response?.data?.detail || "Error executing query");
    } finally {
      setQueryLoading(false);
    }
  };

  return (
    <div style={{ height: "100%" }}>
      <div className="chatbot-container">
        <div className="chat-box">
          <div>
            <h2>Chat Conversation</h2>
            <p className="sub-text">Ask questions in natural language</p>
          </div>

          <div className="chat-message">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.sender === "user" ? "user-message" : "bot-message"
                }
              >
                {msg.sender === "bot" ? (
                  <pre className="sql-text">{msg.text}</pre>
                ) : (
                  msg.text
                )}
              </div>
            ))}

            {loading && <div className="bot-message">Generating SQL...</div>}

            <div ref={chatEndRef} />
          </div>

          <div className="input-box">
            <input
              value={userInput}
              placeholder="Ask about your database..."
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />

            <button onClick={handleSubmit} disabled={loading}>
              <img src={send} alt="send" />
            </button>
          </div>
        </div>


        <div cassName="center-box">
          <div className="card">
            <div className="header-row">
              <div>
                <h2>Generated SQL</h2>
                <p className="sub-text">AI-generated query</p>
              </div>

              <button
                onClick={handleQuery}
                disabled={!sqlQuery || queryLoading}
              >
                <img src={send} alt="run" />
              </button>
            </div>

            <div className="code-block">
              {sqlQuery || "SQL will appear here"}
            </div>
          </div>
 
          <div className="card">
            <h2>Results</h2>
            <p className="sub-text">Query output</p>

            <div className="table-wrapper">
              {queryLoading ? (
                "Executing..."
              ) : Array.isArray(resQuery.rows) && resQuery.rows.length ? (
                <table>
                  <thead>
                    <tr>
                      {resQuery.columns.map((col, i) => (
                        <th key={i}>{col}</th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {resQuery.rows.map((row, i) => (
                      <tr key={i}>
                        {resQuery.columns.map((col, j) => (
                          <td key={j}>
                            {typeof row === "object" ? row[col] : row[j]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                "No results yet"
              )}
            </div>
          </div>
        </div>

        <div className="history-box">
          <h2>History:</h2>

          <div className="history-list">
            {messages
              .filter((m) => m.sender === "user")
              .slice(-5)
              .map((m, i) => (
                <>
                  <div key={i} className="history-block">
                    {i + 1}:{m.text}
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
