import React from 'react'
import "../CSS/Navbar.css"

export default function Navbar() {
  return (
    <div className='nav-body'>
        <div className="logo">
            DevFeed
        </div>

        <div className="subscribe">
            Subscribe 
            <img src={require("../Assets/right.png")} alt=""  />
        </div>
    </div>
  )
}
