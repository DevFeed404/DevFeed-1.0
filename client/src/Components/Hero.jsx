import React,{useState, useEffect} from 'react'
import "../CSS/Hero.css"
import AOS from "aos"
import "aos/dist/aos.css"
import Translation from './Translate/HeroT.json'

export default function Hero({language}) {
    const [content, setContent] = useState(Translation.english);

    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);
    useEffect(() => {
        if (language === "english") {
          setContent(Translation.english);
        } else if (language === "hindi") {
          setContent(Translation.hindi);
        }
      }, [language]);
  return (
    <div className='hero' id='home'>
        <div className="hero-data">
            <div className="hero-head">
            {content.p.p1} <p>{content.p.p2} </p> {content.p.p3}
            </div>
            <div className="hero-text">
           <span className='text-[#28004d] comme'>{content.span.span1} </span> {content.span.span2} 
            </div>
        </div>
            <div className="hero-image nm:hidden">
                <img src={require("../Assets/hero-doodle-2.png")} data-aos = "fade-up" data-aor-once = "true" alt="" className='hero-img'/>
            </div>
    </div>
  )
}
