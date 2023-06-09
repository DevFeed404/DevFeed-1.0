
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SendNewsFeed from "./Components/SendNewsFeed";
import Login from "./Components/Login";

function App() {


  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      
    }, 2000);
  }


  return (
    <Routes>
      <Route path="/" element={<>
        <Home />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /></>}/>
      <Route path='/sendNews' element={<SendNewsFeed/>}/>
      <Route path='/login' element={<Login/>}/>    
    </Routes>
  );
}

export default App;
