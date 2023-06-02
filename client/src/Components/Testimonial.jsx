import React from 'react'
import "../CSS/Testimonial.css"


export default function Testimonial(props) {
  return (
    <div className='Testimonial'>
      <div className='content'>
        <img src={require("../Assets/chloe.jpg")} alt="" className='testimonial-img' />
        <div className="testimonial_name sans-serif" >
            {props.name}
        </div>
        <div className="testimonial_email sans-serif">
            {props.email}
        </div>
        <div className="testimonial-text sans-serif">
            {props.text}
        </div>
      </div>

    </div>
  )
}
