import React from 'react'
import "../CSS/Subscribe.css"
import { useState } from 'react';
import axios from 'axios';

export default function Subscribe() {
  const baseurl = "http://localhost:5000/api";//baseurl for posting
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [organisation, setorganisation] = useState("");
  //function to post data in backend
  const subscribe = () => {
    axios.post( baseurl+"/subscribe", {
      name: name,
      email: email,
      organization: organisation
    }).then((Response) => {
      
      if (Response.status = 200) {
        alert(Response.data.message);

        console.log("success");
      }
     
      console.log(Response);
      // window.location(baseurl);
    })

  }
  return (
    <div className='subscribe-con ' id='subscribe-con' data-aos = "slide-up" data-aos-once = "true">
      <div className="subs-doodle lg:hidden">
        <img src={require("../Assets/subs-doodle.png")} alt="" />
      </div>

      <div className="subscribe-body ">

        <div className="subscribe-heading ">
          <h2 className='poppins'>Subscribe to our newsletter</h2>
        </div>

        <div className="hr"></div>

        <div className="form-subheading comme">
          <h3>Stay updated and never miss an event</h3>
        </div>

        <form className="subscribe-form comme" method='POST' action = "localhost:3000">
          <h3 id="person-name-heading">Full name</h3>
          <input type="text" name="person-name" id="person-name" className='text-white' placeholder='Enter your full name' onChange={(e) => {

            setname(e.target.value);

          }} />

          <h3 id="person-email-heading">Email</h3>
          <input type="email" name="person-email" id="person-email" className='text-white' placeholder='Enter your email' onChange={(e) => {

            setemail(e.target.value);

          }} />

          <h3 id="person-org-heading">Organization/College</h3>
          <input type="text" name="person-org" id="person-org" className='text-white' placeholder='Enter your organization name' onChange={(e) => {
            if(e.target.value === "" || " " || "."){setorganisation(e.target.value); console.log("Success");};
            
            
          }} />

          <button type="submit" id='subscribe-btn' onClick={subscribe} ><p className='text-[#FFC000]'>SUBSCRIBE</p></button>
        </form>
      </div>
    </div>
  )
}
