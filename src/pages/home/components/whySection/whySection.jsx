import React from 'react'
import WhyBoxes from "../../../../uiComponents/whyBoxes";
import SectionHeading from '../../../../uiComponents/sectionHeading';
import {FaChartBar, FaRunning } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { RiUserCommunityFill } from "react-icons/ri";
import whySection from './whySection.module.css'

function WhySection() {
  return (
    <section>
        <SectionHeading
          title="Why Trade with"
          specialText="GoldenCoin?"
          paragraph="Trade commodities for profit, diversification, and protection against
        inflation, leveraging their inherent value and market dynamics to fortify your portfolio"
        />

        <div>
          <div className={whySection.vidCtn}>
            <iframe
              src="https://www.youtube.com/embed/A3s0PliLOnY"
              title="Stonking The Stocks | Timothy Ronald | TEDxYouth@SmakOne"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          <div className={whySection.gridCtn}>
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
  )
}

export default WhySection