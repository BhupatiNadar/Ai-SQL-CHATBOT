import "./CSS/Navbar.css"
import { Link } from "react-router-dom";
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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Features">Features</Link>
          </li>
          <li>
            <Link to="/How_it_works"> How it works</Link>
          </li>
          <li className="navbar-chatbot-btn">
            <Link to="/chatbot">chatbot</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar