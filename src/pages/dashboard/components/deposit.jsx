import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./deposit.module.css";

const Deposit = () => {
  const [selectedMethod, setSelectedMethod] = useState("BTC");
  const [amount, setAmount] = useState(0);
  const [accessToken, setAccessToken] = useState("")

  useEffect(()=>{
    if(sessionStorage.getItem('userDetails')){
      const user = JSON.parse(sessionStorage.getItem('userDetails'));
      setAccessToken(user.accessToken);
    }
  },[])

  function deposit(e){
    e.preventDefault();
    if(amount){
      axios
        .post("https://api.goldencoin.pro/api/v1/deposits/new", 
          {amount},
          {
            headers:{
              Authorization: `Bearer ${accessToken}`
            }
          }
        )
        .then((response) => {
          alert(`${response.data.message} \nKindly reach out to the agent to confirm deposit`)
          setAmount(0)
          
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }


  return (
    <div className={styles.deposit}>
      <h1 className={styles.title}>Deposit Funds</h1>
      <p className={styles.subtitle}>Select payment method</p>
      <div className={styles.paymentMethods}>
        {["BTC", "ETH", "BNB", "LTC", "USDT"].map(
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
        {selectedMethod === "BTC" && (
          <input
            type="text"
            value="bc1qx5a0dm75e9w0l60a4d4ry4n7zpdnszvvjjkltg"
            readOnly
            className={styles.inputField}
          />
        )}
        
        {selectedMethod === "ETH" && (
          <input
            type="text"
            value="0x8AD74749D70bB370c3E6D5191c3a6744c6D95567"
            readOnly
            className={styles.inputField}
          />
        )}
        {selectedMethod === "BNB" && (
          <input
            type="text"
            value="0x8AD74749D70bB370c3E6D5191c3a6744c6D95567"
            readOnly
            className={styles.inputField}
          />
        )}
        {selectedMethod === "LTC" && (
          <input
            type="text"
            value="ltc1qfpekucdgdchrfxf5zt6nerjltzxes4hpes6d49"
            readOnly
            className={styles.inputField}
          />
        )}
        {selectedMethod === "USDT" && (
          <input
            type="text"
            value="0x8AD74749D70bB370c3E6D5191c3a6744c6D95567"
            readOnly
            className={styles.inputField}
          />
        )}
        
        <p>Enter amount sent</p>
        <input
          type="number"
          placeholder="Eg. 1000"
          className={styles.inputField}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className={styles.button} onClick={deposit}>Paid</button>
      </div>
    </div>
  );
};

export default Deposit;
