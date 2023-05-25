import React from "react";
import Testimonial from "./Testimonial";
import testimonialList from "../utils/TestimonialData";
import Carousel from './Carousel'

export default function Testimonials() {
  
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
