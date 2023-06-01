import React, { useEffect, useState } from "react";
import {ReactComponent as Sun} from "../Assets/sun.svg";
import {ReactComponent as Moon} from "../Assets/moon.svg";
import "../CSS/DarkLightMode.css";

const DarkMode = () => {
    const [theme, setTheme] = useState('light-theme');

    const toggleTheme = (e) => {
        e.target.checked ? setTheme('dark-theme') : setTheme('light-theme')
    }

    useEffect(() => {
      document.body.className = theme;
    }, [theme])
    
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={false}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;

