import React, { useState } from "react";
import styles from "./withdrawal.module.css";

const Withdrawal = () => {
  return (
    <div className={styles.withdraw}>
      <h1 className={styles.title}>Withdraw Funds</h1>
      <p className={styles.subtitle}>Enter withdrawal information correctly</p>
      <input type="text" placeholder="Enter withdrawal information correctly" className={styles.inputField} />
      <p className={styles.label}>Enter your BTC address</p>
      <input type="text" placeholder="Eg. bc1hju2893d..." className={styles.inputField} />
      <p className={styles.label}>Enter amount</p>
      <input type="number" placeholder="Eg. 1000" className={styles.inputField} />
      <p className={styles.note}>Note: Only enter a valid Bitcoin (BTC) address</p>
      <button className={styles.button}>Withdraw</button>
    </div>
  );
};

export default Withdrawal;