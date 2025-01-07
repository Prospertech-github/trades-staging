import React from "react";
import { Link } from "react-router-dom";
import {FaBolt, FaCoins } from "react-icons/fa";
import heroSection from './heroSection.module.css'

function HeroSection() {
  return (
    <section className={heroSection.heroSection}>
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

      <div className={heroSection.heroFeatures}>
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
  );
}

export default HeroSection;
