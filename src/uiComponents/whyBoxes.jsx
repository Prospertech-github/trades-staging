import React from 'react'
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