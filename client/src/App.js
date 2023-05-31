import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./Components/404";
import SendNewsFeed from "./Components/SendNewsFeed";
import Login from "./Components/Login";

function App() {
   
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      
    }, 2000);
  }
  return (
    !loading && <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/sendNews' element={<SendNewsFeed/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      </div>
  );
}

export default App;
