import React from "react";
import "../CSS/Navbar.css";
import DarkLightMode from "./DarkLightMode";

export default function Navbar() {
    return (
        <div className="nav-body">
            <a href="#home">
            <div className="logo">
                <img
                    src={require("../Assets/logoimage.png")}
                    alt=""
                    id="nav-logo"
                />
            </div>
            </a>
            <DarkLightMode />
            <a href="#subscribe-con">
                <div className="subscribe font-medium">
                    Subscribe
                    {/* <img src={require("../Assets/right.png")} alt=""  /> */}
                </div>
            </a>
        </div>
    );
}
