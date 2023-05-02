import React from 'react'
import "../CSS/Footer.css"
import { useState} from 'react';
import axios from 'axios';

export default function Footer() {
    const baseurl = "http://localhost:5000/api";//baseurl for posting
    const [feedback, setfeedback] = useState("");
    const feedbackmain = () => {
        axios.post(baseurl+"/feedback", {

            feedback: feedback

        }).then((Response) => {
            if (Response.status = 200) {
               
                alert(Response.data.message);


                console.log("success");
                
            }
            console.log(Response);
        })

    }



    return (
        <>
            <div className="feedback-con" data-aos = "fade-up" data-aos-once = "true">

                <div className="feedback ">
                    <h3 className='mx-auto'>
                    Shape us with your feedback.
                    </h3>

                    <div className="hr mx-auto" style={{ "width": "30%" }}></div>

                    <form className='feedback-form mt-3 ' id='feedback-form'>
                        {/* <h2>Feedback</h2> */}
                        <textarea name="feedback" id="feedback" placeholder='Your feedback' onChange={(e) => {

                            setfeedback(e.target.value);

                        }}></textarea>
                        {/* <input type="text" name="feedback" id="feedback" placeholder='Your feedback'/> */}
                        <button type="submit"   onClick={feedbackmain}><span className='buttontext'>SEND</span></button>
                    </form>
                </div>

                <div className="feedback-doodle  nm:hidden">
                    <img src={require("../Assets/feedback.png")} alt="" />
                </div>
            </div>

            <div className='footer'>
            {/* <div className="hr" style={{ "width": "90%" , "marginTop":"3vh"}}></div> */}
                <div className='footer-main'>
                    <div className="footer-title">
                        DevFeed
                    </div>
                    <div className="footer-para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </div>
                    <div className="copyright">
                        &copy; Copyrights by DevFeed. All rights reserved minor check
                    </div>
                </div>



            </div>
        </>
    )
}
