import React from 'react'
import "../CSS/Testimonial.css"

export default function Testimonial(props) {
  return (
    <div className='Testimonial'>
        <img src={require("../Assets/himesh.jpg")} alt="" className='testimonial-img' />
        <div className="testimonial-text">
            {props.text}
        </div>
        <hr style={{"BackgroundColor": "white", "width": "30%", "marginTop": "2vh"}} />
        <hr style={{"BackgroundColor": "white", "width": "30%"}} />
        <hr style={{"BackgroundColor": "white", "width": "30%", "marginBottom": "2vh"}} />
        <div className="testimonial_name">
            {props.name}
        </div>
        <div className="testimonial_email">
            {props.email}
        </div>

    </div>
  )
}
