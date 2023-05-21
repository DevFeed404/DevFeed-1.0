import React, { useEffect, useState } from "react";
import "../CSS/Navbar.css";
import Translation from "./Translate/NavbarT.json";

export default function Navbar({language,updatelang}) {
  const [content, setContent] = useState(Translation.english);
  useEffect(() => {
    if (language === "english") {
          setContent(Translation.english);
          localStorage.setItem('lang', 'english');
        } else if (language === "hindi") {
          setContent(Translation.hindi);
          localStorage.setItem('lang', 'hindi');
        }
  }, [language]);
  const setValue = (val) => {
    updatelang(val);
  }
  return (
    <div className="nav-body">
      <a href="#home">
        <div className="logo">
          <img src={require("../Assets/logoimage.png")} alt="" id="nav-logo" />
        </div>
      </a>
      <div className="rightContents">
        <a href="#subscribe-con">
          <div className="subscribe font-medium">
            {content.name}
            {/* <img src={require("../Assets/right.png")} alt=""  /> */}
          </div>
        </a>
        <select
          className="translate-btn"
          value={language}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          <option>english</option>
          <option>hindi</option>
        </select>
      </div>
    </div>
  );
}
