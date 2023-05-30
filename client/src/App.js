
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./Components/Home";
import SendNewsFeed from "./Components/SendNewsFeed";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      
    }, 2000);
  }


  return (
  <>
    <BrowserRouter>
    
    <Routes>
    
      <Route path='/' element={<Home/>}/>
      <Route path='/sendNews' element={<SendNewsFeed/>}/>
      <Route path='/login' element={<Login/>}/>
  
     
    </Routes>
  
  </BrowserRouter>
  </>
  
  );
}

export default App;
