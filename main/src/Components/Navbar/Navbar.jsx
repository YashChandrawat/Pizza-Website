import React from 'react'
import "./Navbar.css"
import logoImg from "../Navbar/logoNav.png"

function Navbar() {
  return (
    <div className='navbar'>
        <div className="left-navbar">
            <img src={logoImg} alt="" className='logo-img'/>
            <h2 className='logo-head'>PIZZA HUT</h2>
        </div>
        <div className="right-navbar">
            <ul>
                <li>HOME</li>
                <li>SHOP</li>
                <li>CONTACT</li>
                <li>ABOUT</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar