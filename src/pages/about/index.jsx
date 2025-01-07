import React from 'react'
import Outlet from '../../uiComponents/outlet'
import HeroSection from './components/heroSection'
import WhySection from '../home/components/whySection/whySection'
import about from './about.module.css'

function About() {
  return (
    <Outlet>
      <HeroSection />
      <div className={about.whyDiv}>
        <WhySection />
      </div>
    </Outlet>
  )
}

export default About