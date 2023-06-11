import { Link } from "react-router-dom";
import { useState } from "react";

import "./DashboardNavBar.scss";
import DashboardImage from "../../assets/Ellipse 10.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-div">
        <h4 className="navbar-logo">VenomPay</h4>
        <ul className="navbar-links">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link">
              Services
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/wallet" className="navbar-link">
              Wallet
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/help" className="navbar-link">
              Help
            </Link>
          </li>
        </ul>
        <div className="navbar-user">
          <div className="navbar-bell-icon">
            <i className="fa fa-bell"></i>
          </div>
          <span className="navbar-username">Safari</span>
          <img
            src={DashboardImage}
            alt="User Avatar"
            className="navbar-avatar"
          />
        </div>
          <div className="navbar-toggle" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
      </div>
      <div className="navbar-menu-container">
      <div className={`navbar-menu ${isMenuOpen ? "" : "close"}`}>
      <ul className="hamburger-links">
          <li className="link">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="link">
            <Link to="/services">
              Services
            </Link>
          </li>
          <li className="link">
            <Link to="/wallet">
              Wallet
            </Link>
          </li>
          <li className="link">
            <Link to="/help">
              Help
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;