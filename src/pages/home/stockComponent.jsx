import React, { useEffect, useState } from "react";
import styles from "./stockComponent.module.css";
import SectionHeading from "../../uiComponents/sectionHeading";
import axios from "axios";
import Loader from "../../uiComponents/loader";

const StockPrices = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchStocks = async () => {
      try {
        axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            sparkline: false
          }
        })
        .then(response => {
          setStocks(response.data);
          setLoading(false)
        })
      } catch (error) {
        console.error("Error fetching stocks data:", error);
      }
    };

    fetchStocks();
  }, []);

  return (
    <div className={styles.container}>
      <SectionHeading
          title=""
          specialText="Explore Our Commodity"
          paragraph="Trade commodities for profit, diversification, and protection against
        inflation, leveraging their inherent value and market dynamics to fortify your portfolio"
        />

      {loading ? (
        // <p>Loading...</p>
        <Loader />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Commodities</th>
              <th>Current Price</th>
              <th>24h</th>
              {/* <th>7d</th> */}
              <th>Market Capital</th>
            </tr>
          </thead>
          <tbody>
            {stocks && stocks.map((stock) => (
              <tr key={stock.id}>
                <td>
                  <img src={stock.image} alt={stock.name} className={styles.icon} />
                  {stock.name}
                </td>
                <td>${stock.current_price.toFixed(2)}</td>
                <td>{stock.price_change_percentage_24h.toFixed(2)}%</td>
                {/* <td>{stock.price_change_percentage_7d_in_currency?.toFixed(2) || "N/A"}%</td> */}
                <td>${stock.market_cap.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StockPrices;
