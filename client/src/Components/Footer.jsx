import React from 'react'
import "../CSS/Footer.css"
import { useState } from 'react';
import axios from 'axios';

export default function Footer() {
    const baseurl = "http://localhost:5000/api";//baseurl for posting
    const [feedback, setfeedback] = useState("");
    const feedbackmain = () => {
        axios.post(baseurl + "/feedback", {

            feedback: feedback

        }).then((Response) => {
            if (Response.status = 200) {

                alert(Response.data.message);


                console.log("success");

            }
            console.log(Response);
        })

    }
    function scrollToAbout() {
        var element = document.getElementById("about");
        element.scrollIntoView();
    }


    function scrollToSubs() {
        var element = document.getElementById("subscribe-con");
        element.scrollIntoView();
    }


    return (
        <>
            {/* <div className="feedback-con" data-aos = "fade-up" data-aos-once = "true"> */}
            {/* 
                <div className="feedback ">
                    <h3 className='mx-auto poppins'>
                    Shape us with your feedback.
                    </h3> */}

            {/* <div className="hr mx-auto" style={{ "width": "30%" }}></div>

                    <form className='feedback-form mt-3 ' id='feedback-form'> */}
            {/* <h2>Feedback</h2> */}
            {/* <textarea name="feedback" id="feedback" placeholder='Your feedback' onChange={(e) => {

                            setfeedback(e.target.value);

                        }}></textarea> */}
            {/* <input type="text" name="feedback" id="feedback" placeholder='Your feedback'/> */}
            {/* <button type="submit"   onClick={feedbackmain}><span className='buttontext'>SEND</span></button>
                    </form>
                </div> */}

            {/* <div className="feedback-doodle  nm:hidden">
                    <img src={require("../Assets/contact.png")} alt="" />
                </div>
            </div> */}

            <div className='flex flex-col w-screen justify-center bg-white items-center sans-serif  pt-[5vh] pb-[7vh]'>
                <div className='text-black title items-center sans-serif  font-bold'>Reach out to us</div>
                <div className='text-black text-lg items-center pt-1 pb-3 xsm:text-base xssm:text-xs'>Connect with us for any kind of query at</div>

                <div className='flex flex-row justify-between'>
                    <button type="submit" className='button mail-btn p-[0.5vh]'  ><span className='buttontext'><a href="mailto:devfeed.in@gmail.com">devfeed.in@gmail.com</a></span></button>
                  
                        <div className='copybutton' onClick={() => {
                            navigator.clipboard.writeText("devfeed.in@gmail.com");
                            document.getElementById("custom-tooltip").style.display = "inline";
                            setTimeout(function () {
                                document.getElementById("custom-tooltip").style.display = "none";
                            }, 1000);
                        }}> <img src={require("../Assets/copymain2.png")} alt="" style={{"width":"20px"}} /></div>
                         <span id="custom-tooltip">copied!</span>
                    

                     
                
                </div>

            </div>

            <div className='footer comme  '>
                {/* <div className="hr" style={{ "width": "90%" , "marginTop":"3vh"}}></div> */}
                <div className='footer-main'>
                    {/* <div className="footer-title">
                        DevFeed
                    </div> */}

                    <div className='text-md p-2 flex flex-row font-normal sans-serif cursor-pointer'>
     
                        <div className='hover:text-[#FADA5E]' onClick={scrollToAbout} >About |</div> <div className='hover:text-[#FADA5E]'><a href="mailto:devfeed.in@gmail.com">&nbsp; Contact |</a>  </div> <div className='hover:text-[#FADA5E]' onClick={scrollToSubs}>&nbsp; Subscribe</div>
                    </div>
                    <div className="copyright sans-serif pb-2 ">
                        &copy; Copyrights by DevFeed. All rights reserved.
                    </div>
                </div>



            </div>
        </>
    )
}
