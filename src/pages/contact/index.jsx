import React from 'react'
import Outlet from '../../uiComponents/outlet'
import HeroSection from './components/heroSection'
import ContactDiv from './components/contactDiv'

function Contact() {
  return (
    <Outlet>
      <HeroSection />
      <ContactDiv />
    </Outlet>
  )
}

export default Contact