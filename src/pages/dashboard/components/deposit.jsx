import React, {useState} from "react";
import styles from './deposit.module.css';

const Deposit = () => {
  const [selectedMethod, setSelectedMethod] = useState("BTC");

  return (
    <div className={styles.deposit}>
      <h1>Deposit Funds</h1>
      <p>Select payment method</p>
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
        <p>Scan the QR code or copy the {selectedMethod} address below.</p>
        <input
          type="text"
          value="bc1qkclz5vxwks9q4cnvztgzqda5482wdx0krth"
          readOnly
        />
        <p>Enter amount sent</p>
        <input type="number" placeholder="Eg. 1000" />
        <p>Upload payment proof</p>
        <input type="file" />
        <button>Paid</button>
      </div>
    </div>
  );
};

export default Deposit;
