import React from 'react'
import Outlet from '../../uiComponents/outlet'
import HeroSection from './components/heroSection'
import WhySection from '../home/components/whySection/whySection'
import HowtoTrade from './components/howtoTrade'
import about from './about.module.css'

function About() {
  return (
    <Outlet>
      <HeroSection />
      <div className={about.whyDiv}>
        <WhySection />
      </div>
      <HowtoTrade />
    </Outlet>
  )
}

export default About