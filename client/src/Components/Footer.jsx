import React from 'react'
import "../CSS/Footer.css"

export default function Footer() {

  return (
    <>
    <div className="feedback-con">
        
        <div className="feedback ">
            <h3>
                Your feedback is highly valuable to us.
            </h3>

            <div className="hr" style={{"width": "10%"}}></div>

            <form action="" method="post" className='feedback-form mt-3' id='feedback-form'>
                {/* <h2>Feedback</h2> */}
                <textarea name="feedback" id="feedback" placeholder='Your feedback'></textarea>
                {/* <input type="text" name="feedback" id="feedback" placeholder='Your feedback'/> */}
                <button type="submit">SEND</button>
            </form>
        </div>

        <div className="feedback-doodle">
            <img src={require("../Assets/feedback.png")} alt="" />
        </div>
    </div>
    <div className='footer'>

        <div className="footer-title">
        {/* <img src={require("../Assets/devfeed-logo2.png")} alt="" id='footer-logo' /> */}
        DevFeed
        </div>
        <div className="copyright">
            &copy; Copyrights by DevFeed. All rights reserved 
        </div>
    </div>
    </>
  )
}
