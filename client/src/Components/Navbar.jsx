import React from "react";
import "../CSS/Navbar.css";
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="nav-body ">
            <a href="#home"> 
            <div className="logo">
                <img
                    src={require("../Assets/logoimage.png")}
                    alt=""
                    id="nav-logo"
                />
            </div>
            </a>
           <div className="flex  text-black p-4">
           <Link to="#subscribe-con">
                <div className=" font-medium subscribe">
                    Subscribe
                    {/* <img src={require("../Assets/right.png")} alt=""  /> */}
                </div>
            </Link>
            <Link to="/login">
                <div className=" subscribe">
                  Login
                    {/* <img src={require("../Assets/right.png")} alt=""  /> */}
                </div>
            </Link>
           </div>
        </div>
    );
}
