import React from "react";
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="nav-body">
            <Link to="/">
            <div className="logo">
                <img
                    src={require("../Assets/logoimage.png")}
                    alt=""
                    id="nav-logo"
                />
            </div>
            </Link>
            <div className="flex ">
            <Link to="/#subscribe-con">
                <div className="subscribe font-medium ">
                    Subscribe
                    {/* <img src={require("../Assets/right.png")} alt=""  /> */}
                </div>
                
            </Link>
            <Link to="/login">
                <div className="subscribe font-medium ">
                    Login
                    {/* <img src={require("../Assets/right.png")} alt=""  /> */}
                </div>
                
            </Link>
            </div>
          
        </div>
    );
}
