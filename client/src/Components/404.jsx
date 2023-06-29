import React from "react";
import "../CSS/404.css"
import error404 from "../Assets/error404.png"

const ErrorPage = () => {
    return(
        
        <div className="error">
            <img src={error404}></img>
        </div>
    )
}

export default ErrorPage;
