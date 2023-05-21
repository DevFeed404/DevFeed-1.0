import React from "react";
import { useState, useEffect } from "react";
import "../CSS/Navbar.css";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div className={navbar ? "nav-body--scrolled" : "nav-body"}>
      <a href="#home">
        <div className="logo">
          <img src={require("../Assets/logoimage.png")} alt="" id="nav-logo" />
        </div>
      </a>
      <a href="#subscribe-con">
        <div className={navbar ? "subscribe--scrolled" : "subscribe"}>
          Subscribe
          {/* <img src={require("../Assets/right.png")} alt=""  /> */}
        </div>
      </a>
    </div>
  );
}
