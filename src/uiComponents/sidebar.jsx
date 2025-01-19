import React from "react";
import { Link } from "react-router-dom";
import styles from "./stylesheets/sidebar.module.css"

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2 className="specialText">GoldenCoin Pro</h2>
      <nav>
        <ul>
          <li>
            <Link to="markets">Markets</Link>
          </li>
          <li>
            <Link to="deposit">Deposit</Link>
          </li>
          <li>
            <Link to="withdraw">Withdraw</Link>
          </li>
          <li>
            <Link to="profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
