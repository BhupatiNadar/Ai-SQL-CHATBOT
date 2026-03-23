import React from "react";
import "./css/Chatbot.css";
import send from "../../assets/send.png";
import { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [user_input, set_user_input] = useState({ user_input :""});
  const [response,setresponse]=useState("")

  const handlechange_input=(e)=>{
    set_user_input({
      ...user_input,
      [e.target.name] : e.target.value
    });
  };

   const handleSubmit = async () => {
     try {
       const res = await axios.post(
         "http://127.0.0.1:8000/Sql_Chatbot",
         user_input,
       );

       setresponse(res.data.query)
       alert("Message sent successfully!");

       set_user_input({
         user_input: "",
       });
     } catch (error) {
       console.error(error);
       alert("Error sending message");
     }
   };

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
              name="user_input"
              value={user_input.user_input}
              placeholder="Ask a question about your database..."
              onChange={handlechange_input}
            />
            <button onClick={handleSubmit}>
              <img src={send} alt="send" />
            </button>
          </div>
        </div>

        <div className="center-box">
          <div className="card">
            <h2>Generated SQL Query</h2>
            <p className="sub-text">AI-generated SQL based on your question</p>
            <div className="placeholder">
              {response
                ? response
                : "SQL query will appear here after you ask a question"}
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
