import React from "react";
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";
import Switcher from "../utils/Switcher.js";

export default function Navbar() {
    return (
        <div className="nav-body dark:bg-[#0D2F3F] dark:text-white">
            <a href="#home">
                <div className="logo invert dark:invert-0">
                    <img
                        src={require("../Assets/devfeed-logo2.png")}
                        alt=""
                        id="nav-logo"
                    />
                </div>
            </a>
            <Switcher />
            <div className="flex">
                <a href="#subscribe-con">
                    <div className="subscribe font-medium dark:bg-[#0D2F3F] dark:text-white">
                        Subscribe
                        {/* <img src={require("../Assets/right.png")} alt=""  /> */}
                    </div>

                </a>
                <Link to="/login">
                    <div className="subscribe font-medium login ">
                        Login
                        {/* <img src={require("../Assets/right.png")} alt=""  /> */}
                    </div>

                </Link>
            </div>

        </div>
    );
}
