import arrow_icon from "../../assets/arrow_icon.png";
import sqlimg from "../../assets/imgicon2.jpg";
import "./CSS/BodyContent.css";

const BodyContent = () => {
  return (
    <div className="body-container">
      <div className="body-context">
        <span>✰ AI-Powered SQL Assistant</span>

        <h1>
          AI-Based SQL Chatbot for Live  Databases
        </h1>

        <h3>
          Transform natural language questions into SQL queries instantly. Query
          your databases using plain English and get results in seconds.
        </h3>

        <div className="body-button">
          <ul>
            <li className="start-btn">
              Start SQL Query
              <img
                className="body-arrow_icon"
                src={arrow_icon}
                alt="arrow icon"
              />
            </li>

            <li className="learn-btn">Learn More</li>
          </ul>
        </div>
      </div>

      <div className="body-img">
        <img className="body-SQLimg" src={sqlimg} alt="SQL illustration" />
      </div>
    </div>
  );
};

export default BodyContent;
