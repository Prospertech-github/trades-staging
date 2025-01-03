import React from "react";
import { Link } from "react-router-dom";
import navbar from "./stylesheets/navbar.module.css";

function Navbar() {
  return (
    <header>
      <div className={navbar.logo}>
        <h1 className="specialText"> RoyalTradex </h1>
      </div>

      <nav>
        <ul className={navbar.navItems}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={navbar.authBtns}>
            <Link to="/login">Login</Link>
          </li>
          <li className={navbar.authBtns}>
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
