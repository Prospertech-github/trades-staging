import React, { useState } from "react";
import { Link } from "react-router-dom";
import navbar from "./stylesheets/navbar.module.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={navbar.header}>
      <div className={navbar.logo}>
        <h1 className={navbar.specialText}>RoyalTradex</h1>
      </div>

      <button
        className={`${navbar.hamburger} ${menuOpen ? navbar.active : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`${navbar.nav} ${menuOpen ? navbar.open : ""}`}>
        <ul className={navbar.navItems}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login" className={navbar.authBtn} onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className={navbar.authBtn} onClick={() => setMenuOpen(false)}>
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
