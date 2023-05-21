import './App.css';
import { Helmet } from 'react-helmet';
import About from './Components/About';
import Count from './Components/Count';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollToTop';
// import RecentEvents from './Components/Recent_events';
import Subscribe from './Components/Subscribe';
import Testimonials from './Components/Testimonials';
import Images from './Components/Image';
import "../src/CSS/MediaQuery.css"
import { useState } from 'react';

function App() {
  const [language,setLanguage] = useState('english');
  return (
    <div >
     <Helmet>
          <title>DevFeed</title>
        </Helmet>
      <Navbar language={language} updatelang={setLanguage}/>
      <ScrollToTop/>
      <Hero language={language}/>
      <About language={language}/>

      
      {/* <Count/> */}
      <Images/>
      
      <Subscribe language={language}/>
      <Testimonials language={language}/>
      {/* <RecentEvents/> */}
     
      <Footer language={language}/>
    </div>
  );
}

export default App;
