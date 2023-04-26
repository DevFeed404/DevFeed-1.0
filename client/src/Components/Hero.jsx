import React from 'react'
import "../CSS/Hero.css"

export default function Hero() {
  return (
    <div className='hero'>
        <div className="hero-data">
            <div className="hero-head" >
                Inspire. Educate. Aware.
            </div>
            <div className="hero-text">
                We are a community of tech enthusiast for your betterment and ayush chutiya hai.
            </div>
        </div>
        
        <div className="hero-image nm:hidden">
            <img src={require("../Assets/hero-doodle.png")} alt="" className='hero-img'/>
        </div>
    </div>
  )
}
