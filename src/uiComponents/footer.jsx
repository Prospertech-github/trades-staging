import React from "react";
import { Link } from "react-router-dom";
import footer from "./stylesheets/footer.module.css";

function Footer() {
  return (
    <footer>
      <div>
        <p>
          <span className="specialText">
            &copy;{new Date().getFullYear()} RoyalTradex
          </span>
          . All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
