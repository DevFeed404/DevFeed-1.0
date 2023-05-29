

import './App.css';
import { Helmet } from 'react-helmet';
import Navbar from "../src/Components/Navbar"
import Footer from "../src/Components/Footer"
import "../src/CSS/MediaQuery.css"
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SendNewsFeed from './Components/SendNewsFeed';
import Login from './Components/Login';

function App() {
  return (
   <>
    <BrowserRouter>
          < Navbar/>
          <Routes>
          
            <Route path='/' element={<Home/>}/>
            <Route path='/sendNews' element={<SendNewsFeed/>}/>
            <Route path='/login' element={<Login/>}/>
        
           
          </Routes>
          <Footer/>
        </BrowserRouter></>

  );
}

export default App;
