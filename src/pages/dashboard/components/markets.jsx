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

  return (
    <div>
      <h1>Markets</h1>
      <div className={styles.grid}>
        {data.map((item) => (
          <div key={item.id} className={styles.card}>
            <h3>
              {item.name} ({item.symbol.toUpperCase()})
            </h3>
            <p>${item.current_price.toFixed(2)}</p>
            <p
              className={
                item.price_change_percentage_24h < 0
                  ? styles.negative
                  : styles.positive
              }
            >
              {item.price_change_percentage_24h.toFixed(2)}%
            </p>
            <button>Buy</button>
            <button>Sell</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Markets;
