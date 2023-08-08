import React from "react";
import "../CSS/Navbar.css";
import { Link, useNavigate} from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const handleChange = () => {
        console.log("clicked");
        navigate("/events");
    }
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
            <div className="flex ">
                <button  className = "subscribe" onClick = {handleChange}>
                    Events
                </button>
                <a href="#subscribe-con">
                    <div className="subscribe font-medium ">
                        Subscribe
                        {/* <img src={require("../Assets/right.png")} alt=""  /> */}
                    </div>

                </a>
                <Link to="/login">
                    <div className="subscribe font-medium login ">
                        Login
                        <img src={require("../Assets/right.png")} alt=""  />
                    </div>

                </Link>
            </div>

        </div>
    );
}
