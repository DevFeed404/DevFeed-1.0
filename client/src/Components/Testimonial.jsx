import React from 'react'
import "../CSS/Testimonial.css"

export default function Testimonial(props) {
  return (
    <div className='Testimonial'>
        <img src={require("../Assets/"+props.img_src+".jpg")} alt="" className='testimonial-img' />
        <div className="testimonial-text sans-serif">
            {props.text}
        </div>
        <hr style={{"BackgroundColor": "white", "width": "30%", "marginTop": "2vh"}} />
        <hr style={{"BackgroundColor": "white", "width": "30%"}} />
        <hr style={{"BackgroundColor": "white", "width": "30%", "marginBottom": "2vh"}} />
        <div className="testimonial_name sans-serif" >
            {props.name}
        </div>

    </div>
  )
}
