import "./CSS/Navbar.css"

import icon from "../../assets/database_icon.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-icon_and_project_name">
        <img
          src={icon}
          alt="database icon"
          className="navbar-icon"
          style={{ width: "50px", height: "50px", borderRadius: "10px" }}
        />
        <h2>AI SQL Chatbot</h2>
      </div>
      <div className="navbar-main_navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Features</li>
          <li>How it works</li>
          <li className="navbar-chatbot-btn">chatbot</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar