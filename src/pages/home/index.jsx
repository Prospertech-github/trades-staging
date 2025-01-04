import React from "react";
import { Link } from "react-router-dom";
import { FaBolt, FaCoins } from "react-icons/fa";
import Outlet from "../../uiComponents/outlet";
import home from "./home.module.css";
import SectionHeading from "../../uiComponents/sectionHeading";

function Home() {
  return (
    <Outlet>
      <section className={home.heroSection}>
        <div>
          <h1>
            Trade Commodities Confidently on{" "}
            <span className="specialText">Our Platform</span>
          </h1>
          <p>
            Enhance your trading strategy with favorable conditions for precious
            metals and energies, maximizing profitability and resilience.
          </p>
        </div>

        <div className={home.heroFeatures}>
          <div>
            <FaBolt className="specialText" size={42} />
            <p>
              Built for <br /> <strong>Super Traders</strong>
            </p>
          </div>
          <div>
            <FaCoins className="specialText" size={42} />
            <p>
              Tailored Trading <br /> <strong>Elite</strong>
            </p>
          </div>
        </div>

        <div>
          <Link to="/register"> Register </Link>
          <Link to="/login">Login</Link>
        </div>
      </section>

      <section className={home.whySection}>
        <SectionHeading
          title="Why Trade with"
          specialText="RoyalTradex?"
          paragraph="Trade commodities for profit, diversification, and protection against
        inflation, leveraging their inherent value and market dynamics to fortify your portfolio"
        />

        <div>
          <div>
              <iframe
                width="1206"
                height="678"
                src="https://www.youtube.com/embed/A3s0PliLOnY"
                title="Stonking The Stocks | Timothy Ronald | TEDxYouth@SmakOne"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
          </div>
          
          <div className={home.gridCtn}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          
        </div>
      </section>
    </Outlet>
  );
}

export default Home;
