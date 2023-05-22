import React from "react";
import Testimonial from "./Testimonial";
import testimonialList from "../utils/TestimonialData";

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
      <div className="testimonials-title  sans-serif font-bold">
        People Talk About Us
      </div>

      <div id="testimonial-con">
        <div
          className="testimonials-control"
          id="left-control"
          onClick={scrollRight}
        >
          <img src={require("../Assets/right.png")} alt="" />
        </div>
        <div
          className="testimonials-body comme"
          id="testimonials-body"
          data-aos="slide-left"
          data-aos-once="true"
        >
          {testimonialList.map((testi, index) => {
           return <Testimonial key={index} img_src={testi.img_src} text={testi.text} name={testi.name} email={testi.email} />;
          })}
        </div>
        <div
          className="testimonials-control"
          id="right-control"
          onClick={scrollLeft}
        >
          <img src={require("../Assets/right.png")} alt="" />
        </div>
      </div>
    </>
  );
}
