import React from "react";
import Testimonial from "./Testimonial";
import testimonialList from "../utils/TestimonialData";
import Carousel from './Carousel'

export default function Testimonials() {
  let vw = window.screen.width / 100;
  // let vh = window.Screen.height / 100;
  // var vw = window.screen.availWidth;
  // const vh = screen.height;
  // console.log("Height is :", vw);
  function scrollLeft() {
    var element = document.getElementById("testimonials-body");
    element.scrollLeft += 30 * vw;
  }

  function scrollRight() {
    var element = document.getElementById("testimonials-body");
    element.scrollLeft -= 30 * vw;
  }

  return (
    <>
      <div className="testimonials-title  sans-serif font-bold text-center">
        People Talk About Us
      </div>
      <div className="flex justify-center py-16">
        <Carousel>
          {testimonialList.map((testi, index) => {
            return <Testimonial key={index} img_src={testi.img_src} text={testi.text} name={testi.name} email={testi.email} />;
          })}
        </Carousel>
      </div>
    </>
  );
}
