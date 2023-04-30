import React from 'react'
import "../CSS/Navbar.css"

export default function Navbar() {
  return (
    <div className='nav-body'>
        <div className="logo">
            <img src={require("../Assets/devfeed-logo.png")} alt="" id='nav-logo' />
        </div>
        <div className="subscribe font-medium">
            Subscribe 
            {/* <img src={require("../Assets/right.png")} alt=""  /> */}
        </div>
    </div>
  )
}
