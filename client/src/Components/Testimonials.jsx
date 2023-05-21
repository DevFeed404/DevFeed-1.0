import React,{useState,useEffect} from 'react'
import Testimonial from './Testimonial'
import Translation from './Translate/Testimonial.json'


export default function Testimonials({language}) {
  const [content, setContent] = useState(Translation.english);
  let vw = window.screen.width / 100;
  // let vh = window.Screen.height / 100;
  // var vw = window.screen.availWidth;
  // const vh = screen.height;
  // console.log("Height is :", vw);
  function scrollLeft(){
    var element = document.getElementById('testimonials-body');
    element.scrollLeft += 30*vw;
  }

  function scrollRight(){
    var element = document.getElementById('testimonials-body');
    element.scrollLeft -= 30*vw;
  }
  useEffect(() => {
    if (language === "english") {
      setContent(Translation.english);
    } else if (language === "hindi") {
      setContent(Translation.hindi);
    }
  }, [language]);
  return (
    <>
      <div className="testimonials-title  sans-serif font-bold">
        {content.heading}
 
      </div>
      
      <div id="testimonial-con">

        <div className="testimonials-control" id='left-control' onClick={scrollRight}><img src={require("../Assets/right.png")} alt="" /></div>
        <div className='testimonials-body comme' id='testimonials-body' data-aos = "slide-left" data-aos-once = "true">
            <Testimonial img_src = "../Assets/himesh.jpg" text = {content.text} name = {content.name} email = "xyz@gmail.com"/>
            <Testimonial img_src = "../Assets/himesh.jpg" text = {content.text} name = {content.name} email = "xyz@gmail.com"/>
            <Testimonial img_src = "../Assets/himesh.jpg" text = {content.text} name = {content.name} email = "xyz@gmail.com"/>
            <Testimonial img_src = "../Assets/himesh.jpg" text = {content.text} name = {content.name} email = "xyz@gmail.com"/>
            <Testimonial img_src = "../Assets/himesh.jpg" text = {content.text} name = {content.name} email = "xyz@gmail.com"/>
           
        </div>
        <div className="testimonials-control" id='right-control' onClick={scrollLeft}><img src={require("../Assets/right.png")} alt=""/></div>
      </div>
    </>
  )
}
