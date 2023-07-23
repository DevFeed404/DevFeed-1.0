import React from 'react'
import Testimonial from './Testimonial'

export default function Testimonials() {
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
  
  return (
    <>
      <div className="testimonials-title  sans-serif font-bold">
        People Talk About Us
 
      </div>
      
      <div id="testimonial-con">

        <div className="testimonials-control" id='left-control' onClick={scrollRight}><img src={require("../Assets/right.png")} alt="" /></div>
        <div className='testimonials-body comme' id='testimonials-body' data-aos = "slide-left" data-aos-once = "true">
            <Testimonial img_src = "1" text = "Devfeed is a game-changer! It keeps me up-to-date on the latest happenings with concise, relevant content delivered straight to my inbox. Highly recommended!" name = "Himesh Nayak"/>
            <Testimonial img_src = "2" text = "This newsletter website is a fantastic resource for staying up-to-date on upcoming events. The site is user-friendly and provides comprehensive information in one convenient location." name = "Utkarsh Rai"/>
            <Testimonial img_src = "3" text = "This website is a must-have resource for staying informed. Its concise updates and user-friendly interface make it effortless to discover and engage with exciting events." name = "Dhruv Aeron"/>
            <Testimonial img_src = "4" text = "It is an invaluable resource, delivering timely and comprehensive updates on upcoming events. It's user-friendly interface makes finding and registering for events a breeze!" name = "Priyanshu Singh"/>
            <Testimonial img_src = "5" text = "The newsletter website provides timely updates and comprehensive information. Its user-friendly interface and engaging content make it a must-visit resource for event enthusiasts." name = "Taniska Jha"/>
           
        </div>
        <div className="testimonials-control" id='right-control' onClick={scrollLeft}><img src={require("../Assets/right.png")} alt=""/></div>
      </div>
    </>
  )
}
