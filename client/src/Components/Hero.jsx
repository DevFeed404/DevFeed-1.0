import React from 'react'
import "../CSS/Hero.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

export default function Hero() {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className='hero' id='home'>
            <div className="hero-data">
                <div className="hero-head">
                    Educate. <p>Connect. </p> Aware.
                </div>
                <div className="hero-text">
                    <span className='text-[#28004d] comme'>what are you waiting for? </span> Join our community and be<br></br> a part of the tech revolution!
                </div>
            </div>
            <div className="hero-image nm:hidden">
                <img src={require("../Assets/3d-casual-life-colleagues-discussing-team-project.png")} data-aos="fade-up" data-aor-once="true" alt="" className='hero-img' />
            </div>
        </div>
    )
}
