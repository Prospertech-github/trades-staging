import styles from "./withdrawal.module.css";

const Withdrawal = () => {
  return (
    <div className={styles.withdraw}>
      <h1>Withdraw Funds</h1>
      <p>Enter withdrawal information correctly</p>
      <input type="text" placeholder="Enter withdrawal information correctly" />
      <p>Enter your BTC address</p>
      <input type="text" placeholder="Eg. bc1hju2893d..." />
      <p>Enter amount</p>
      <input type="number" placeholder="Eg. 1000" />
      <p>Note: Only enter a valid Bitcoin (BTC) address</p>
      <button>Withdraw</button>
    </div>
  );
};

export default Withdrawal;
