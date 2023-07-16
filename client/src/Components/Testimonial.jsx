import React from 'react'
import "../CSS/Testimonial.css"

export default function Testimonial(props) {
  return (
    <div className='Testimonial  dark:bg-[#0D2F3F]'>
      <img src={require("../Assets/himesh.jpg")} alt="" className='testimonial-img' />
      <div className="testimonial-text sans-serif dark:text-white">
        {props.text}
      </div>
      <hr style={{ "BackgroundColor": "white", "width": "30%", "marginTop": "2vh" }} />
      <hr style={{ "BackgroundColor": "white", "width": "30%" }} />
      <hr style={{ "BackgroundColor": "white", "width": "30%", "marginBottom": "2vh" }} />
      <div className="testimonial_name dark:text-white sans-serif" >
        {props.name}
      </div>
      <div className="testimonial_email dark:text-white sans-serif">
        {props.email}
      </div>

    </div>
  )
}
