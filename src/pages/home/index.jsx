import React from "react";
import Outlet from "../../uiComponents/outlet";
import StockPrices from "./components/stockComponent/stockComponent";
import WhySection from "./components/whySection/whySection";
import home from "./home.module.css";
import HeroSection from "./components/heroSection/heroSection";
import Testimonials from "./components/testimonialSection/testimonials";
import Faq from "./components/faq/faq";


function Home() {
  return (
    <Outlet>
<<<<<<< HEAD
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
          <div className={home.vidCtn}>
            <iframe
              src="https://www.youtube.com/embed/1rnXX28zKu_cl0KV"
              title="The Keys to Living a Rich Life | Bridget Hilton | TEDxTemecula"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          <div className={home.gridCtn}>
            <WhyBoxes
              heading="Low & Stable Spreads"
              description="Super competitive spreads with ultra fast execution speed"
            >
              <FaChartBar className="specialText" size={56} />
            </WhyBoxes>

            <WhyBoxes
              heading="Fast Execution"
              description="Never miss a pip. Get your orders executed in milliseconds"
            >
              <FaRunning className="specialText" size={56} />
            </WhyBoxes>

            <WhyBoxes
              heading="Security of Funds"
              description="Trade the commodity markets with negative balance protection"
            >
              <IoShieldCheckmark className="specialText" size={56} />
            </WhyBoxes>

            <WhyBoxes
              heading="Excellent Community"
              description="There is an active team behind us, and we adore communicating with our users"
            >
              <RiUserCommunityFill className="specialText" size={56} />
            </WhyBoxes>
          </div>
        </div>
      </section>

=======
      <HeroSection />
      <WhySection />
>>>>>>> da019ff86433c3e6a58593f4a17bcb7a53138794
      <StockPrices />
      <Testimonials />
      <Faq />
    </Outlet>
  );
}

export default Home;
