import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./stylesheets/sidebar.module.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </button>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <h2 className="specialText">GoldenCoin Pro</h2>
        <nav>
          <ul>
            <li>
              <Link to="markets" onClick={() => setIsOpen(false)}>Markets</Link>
            </li>
            <li>
              <Link to="deposit" onClick={() => setIsOpen(false)}>Deposit</Link>
            </li>
            <li>
              <Link to="withdraw" onClick={() => setIsOpen(false)}>Withdraw</Link>
            </li>
            <li>
              <Link to="profile" onClick={() => setIsOpen(false)}>Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Sidebar;