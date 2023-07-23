import React from 'react'
import "../CSS/Navbar.css"

export default function Navbar() {

  function scrollToTop(){
    window.scrollTo({'top': 0, "behavior": "smooth"});
    console.log("Scroll to top");
  }

  function scrollToSubs(){
    var element = document.getElementById("subscribe-con");
    element.scrollIntoView();
  }

  return (
    <div className='nav-body'>
        <div className="logo">
            <img src={require("../Assets/logoimage.png")} alt="" id='nav-logo' onClick={scrollToTop}/>
        </div>
        <div className="subscribe font-medium" onClick={scrollToSubs}>
            Subscribe 
            {/* <img src={require("../Assets/right.png")} alt=""  /> */}
        </div>
    </div>
  )
}
