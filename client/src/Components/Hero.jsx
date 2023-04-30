import React from 'react'
import "../CSS/Hero.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

export default function Hero() {

    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

  return (
    <div className='hero'>
        <div className="hero-data">
            <div className="hero-head" >
                Inspire. Educate. Aware.
            </div>
            <div className="hero-text">
                We are a community of tech enthusiast for your betterment .
            </div>
        </div>
            <div className="hero-image nm:hidden">
                <img src={require("../Assets/hero-doodle-2.png")} data-aos = "fade-up" alt="" className='hero-img'/>
            </div>
    </div>
  )
}
