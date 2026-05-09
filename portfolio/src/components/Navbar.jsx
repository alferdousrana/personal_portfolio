import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <h2 className="logo">Portfolio</h2>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/projects">Projects</Link>
          </li>

          <li>
            <button className="theme-btn" onClick={toggleTheme}>
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;