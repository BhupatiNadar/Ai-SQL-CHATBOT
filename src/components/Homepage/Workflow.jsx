import "./CSS/Workflow.css"

const Workflow=()=>{
return (
  <div className="workflow-container">
    <div className="workflow-innercontainer1">
      <h1>How It Works</h1>
      <p>
        Our AI chatbot simplifies database querying with an intuitive
        conversational interface
      </p>
    </div>
    <div className="workflow-innercontainer2">
      <div className="workflow-ans">
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="200px"
          height="200px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C5.6655 12 8.06036 10.8412 9.70832 9"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h1>Ask in Natural Language</h1>
        <p>Type your question in plain English - no SQL knowledge required</p>
      </div>
      <div className="workflow-ans">
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="200px"
          height="200px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <ellipse
            cx="12"
            cy="7"
            rx="7"
            ry="3"
            stroke="currentColor"
            stroke-width="2"
          />
          <path
            d="M5 13C5 13 5 15.3431 5 17C5 18.6569 8.13401 20 12 20C15.866 20 19 18.6569 19 17C19 16.173 19 13 19 13"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="square"
          />
          <path
            d="M5 7C5 7 5 10.3431 5 12C5 13.6569 8.13401 15 12 15C15.866 15 19 13.6569 19 12C19 11.173 19 7 19 7"
            stroke="currentColor"
            stroke-width="2"
          />
        </svg>
        <h1>AI Generates SQL</h1>
        <p>Our AI converts your question into optimized SQL queries</p>
      </div>
      <div className="workflow-ans">
        <svg className="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="200px"
          height="200px"
          viewBox="0 -0.5 25 25"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.759 5L7.5 11.222H10.759L8.315 19L18.5 11.222H14.019L16.463 5H10.759Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h1>Get Instant Results</h1>
        <p>View results in a clean, organized table format</p>
      </div>
    </div>
  </div>
);
}

export default Workflow