import React from 'react'
import { FaChartBar } from 'react-icons/fa'
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import box from './stylesheets/whyBoxes.module.css'

function WhyBoxes({heading, description, children}) {
  return (
    <div className={box.box}>
        {children}
        <h3>{heading}</h3>
        <p>{description}</p>
    </div>
  )
}

export default WhyBoxes