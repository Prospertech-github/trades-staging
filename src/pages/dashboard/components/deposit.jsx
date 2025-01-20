import React, {useState} from "react";
import styles from './deposit.module.css';

const Deposit = () => {
  const [selectedMethod, setSelectedMethod] = useState("BTC");

  return (
    <div className={styles.deposit}>
      <h1 className={styles.title}>Deposit Funds</h1>
      <p className={styles.subtitle}>Select payment method</p>
      <div className={styles.paymentMethods}>
        {["BTC", "ETH", "BNB", "LTC", "USDT (ERC20)", "USDT (TRC20)"].map(
          (method) => (
            <div
              key={method}
              className={`${styles.paymentCard} ${
                selectedMethod === method ? styles.selected : ""
              }`}
              onClick={() => setSelectedMethod(method)}
            >
              {method}
            </div>
          )
        )}
      </div>
      <div className={styles.depositDetails}>
        <p>Copy the {selectedMethod} address below.</p>
        <input
          type="text"
          value="bc1qkclz5vxwks9q4cnvztgzqda5482wdx0krth"
          readOnly
          className={styles.inputField}
        />
        <p>Enter amount sent</p>
        <input type="number" placeholder="Eg. 1000" className={styles.inputField}/>
        <p>Upload payment proof</p>
        <input type="file" className={styles.inputField}/>
        <button className={styles.button}>Paid</button>
      </div>
    </div>
  );
};

export default Deposit;
