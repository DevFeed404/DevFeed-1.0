import React from 'react'
import "../CSS/Subscribe.css"

export default function Subscribe() {
  return (
    <div className='subscribe-con'>
        <div className="subscribe-heading">
            <h2>Subscribe to our newsletter</h2>
        </div>

        <div className="hr"></div>

        <div className="form-subheading">
          <h3>Stay updated and never miss an event</h3>
        </div>

        <form action="" method="post" className="subscribe-form">
          <h3 id = "person-name-heading">Full name</h3>
          <input type="text" name="person-name" id="person-name" placeholder='Enter your full name' />

          <h3 id="person-email-heading">Email</h3>
          <input type="email" name="person-email" id="person-email" placeholder='Enter your email'/>

          <h3 id="person-org-heading">Organisation</h3>
          <input type="text" name="person-org" id="person-org" placeholder='Enter your organisation name'/>

          <button type="submit" id='subscribe-btn'>SUBSCRIBE</button>
        </form>
    </div>
  )
}
