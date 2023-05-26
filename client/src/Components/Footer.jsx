import React from 'react'
import "../CSS/Footer.css"
import { useState } from 'react';
import axios from 'axios';

export default function Footer() {
    const baseurl = "https://dev-feedmain.vercel.app/api";//baseurl for posting
    const [feedback, setfeedback] = useState("");
    const feedbackmain = () => {
        axios.post(baseurl + "/feedback", {

            feedback: feedback

        }).then((Response) => {
            if (Response.status === 200) {

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

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };


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

    

            <div class="pg-footer">
    <footer class="footer">
      <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
      </svg>
      <div class="footer-content">
        <div class="footer-content-column">
          <div class="footer-logo">
            <a class="footer-logo-link" href="#">
              <img src=''></img>
              <h1 className='devfeed-title'>DevFeed</h1>
            </a>
          </div>
          <div class="footer-menu">
            <h2 class="footer-menu-name"> Get Started</h2>
            <ul id="menu-get-started" class="footer-menu-list">
              <li class="menu-item menu-item-type-post_type menu-item-object-product">
                <a href="#">Start</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-product">
                <a onClick={scrollToAbout}>About Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-content-column">
          <div class="footer-menu">
            <h2 class="footer-menu-name" > Company</h2>
            <ul id="menu-company" class="footer-menu-list">
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="mailto:devfeed.in@gmail.com">Contact</a>
              </li>
              <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                <a href="#">News</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div class="footer-menu">
            <h2 class="footer-menu-name"> Legal</h2>
            <ul id="menu-legal" class="footer-menu-list">
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                <a href="#">Privacy Notice</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-content-column">
          <div class="footer-menu">
            <h2 class="footer-menu-name"> Quick Links</h2>
            <ul id="menu-quick-links" class="footer-menu-list">
              <li class="menu-item menu-item-type-custom menu-item-object-custom">
                <a target="_blank" rel="noopener noreferrer" href="#">Support Center</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Blog</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a onClick={scrollToSubs}>Subscribe</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-content-column">
          <div class="footer-call-to-action">
            <h2 class="footer-call-to-action-title"> Let's Chat</h2>
            <p class="footer-call-to-action-description"> Have a support question?</p>
            <a class="footer-call-to-action-button button" href="mailto:devfeed.in@gmail.com" target="_self"> Get in Touch </a>
          </div>
          <div class="footer-call-to-action">
            <h2 class="footer-call-to-action-title"> You Call Us</h2>
            <p class="footer-call-to-action-link-wrapper"> <a class="footer-call-to-action-link" href="tel:0124-64XXXX" target="_self"> 0124-64XXXX </a></p>
          </div>
        </div>
        
      </div>
      <div class="footer-copyright">
        <div class="footer-copyright-wrapper">
          <p class="footer-copyright-text">
            <a class="footer-copyright-link" href="#" target="_self"> © Copyright 2023 by DevFeed. All rights reserved. </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</>
    )
}
