import React, { useEffect } from "react";
import axios from "axios";
import styles from "./markets.module.css";

const Markets = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 10,
          page: 1,
          sparkline: false,
        },
      })
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  const formatPrice = (price) => {
    return price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Markets</h1>
      <div className={styles.grid}>
        {data.map((item) => (
          <div key={item.id} className={styles.card}>
            <h3 className={styles.cardTitle}>
              {item.name} ({item.symbol.toUpperCase()})
            </h3>
            <p className={styles.price}>${formatPrice(item.current_price)}</p>
            <p
              className={
                item.price_change_percentage_24h < 0
                  ? styles.negative
                  : styles.positive
              }
            >
              {item.price_change_percentage_24h.toFixed(2)}%
            </p>
            <button className={`${styles.buyBtn} ${styles.button}`}>Buy</button>
            <button className={`${styles.sellBtn} ${styles.button}`}>Sell</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Markets;