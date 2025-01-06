import React from "react";
import Outlet from "../../uiComponents/outlet";
import StockPrices from "./components/stockComponent/stockComponent";
import WhySection from "./components/whySection/whySection";
import home from "./home.module.css";
import HeroSection from "./components/heroSection/heroSection";
import Testimonials from "./components/testimonialSection/testimonials";


function Home() {
  return (
    <Outlet>
      <HeroSection />
      <WhySection />
      <StockPrices />
      <Testimonials />
    </Outlet>
  );
}

export default Home;
