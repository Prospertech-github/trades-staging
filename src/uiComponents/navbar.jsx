import React from 'react'
import navbar from './stylesheets/navbar.module.css'

function Navbar() {
  return (
    <header>
        <div className={navbar.logo}>
            <h1> RoyalTradex </h1>
        </div>

        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar