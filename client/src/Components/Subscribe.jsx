import React from 'react'
import "../CSS/Subscribe.css"
import { useState } from 'react';
import axios from 'axios';

export default function Subscribe() {
  const baseurl = "dev-feedmain.vercel.app";//baseurl for posting
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [organisation, setorganisation] = useState("");
  //function to post data in backend
  const subscribe = (e) => {
    // e.preventDefault();
    axios.post( baseurl+"/api/sendtome", {
      name: name,
      email: email,
      organization: organisation
    }).then((Response) => {
      
      if (Response.status = 200) {
        alert(Response.data.message);

        console.log("success");
      }
     
      console.log(Response);
      window.location("/");
    })

  }
  return (
    <div className='subscribe-con ' id='subscribe-con' data-aos = "slide-up" data-aos-once = "true">
      <div className="subs-doodle lg:hidden">
        <img src={require("../Assets/subs-doodle.png")} data-aos = "fade-up" data-aos-once = "true" alt="" />
      </div>

      <div className="subscribe-body " data-aos = "slide-left" data-aos-once = "true">

        <div className="subscribe-heading ">
          <h2 className='poppins'>Subscribe to our newsletter</h2>
        </div>

        <div className="hr"></div>

        <div className="form-subheading comme">
          <h3>Stay updated and never miss an event</h3>
        </div>

        <form className="subscribe-form comme" method='POST' action='https://dev-feedmain.vercel.app/api/sendtome'>
          <h3 id="person-name-heading">Full name</h3>
          <input type="text" name="person-name" id="person-name" className='text-[0D2F3F]' placeholder='Enter your full name' onChange={(e) => {

            setname(e.target.value);

          }} />

          <h3 id="person-email-heading">Email</h3>
          <input type="email" name="person-email" id="person-email" className='text-[0D2F3F]' placeholder='Enter your email' onChange={(e) => {

            setemail(e.target.value);

          }} />

          <h3 id="person-org-heading">Organization/College</h3>
          <input type="text" name="person-org" id="person-org" className='text-[0D2F3F]' placeholder='Enter your organization name' onChange={(e) => {
            if(e.target.value === "" || " " || "."){setorganisation(e.target.value); console.log("Success");};
            
            
          }} />

          <button type="submit" id='subscribe-btn' onClick={subscribe} ><p>SUBSCRIBE</p></button>
        </form>
      </div>
    </div>
  )
}
