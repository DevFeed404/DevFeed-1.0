
import './App.css';
import { Helmet } from 'react-helmet';
import About from './Components/About';
import Count from './Components/Count';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
// import RecentEvents from './Components/Recent_events';
import Subscribe from './Components/Subscribe';
import Testimonials from './Components/Testimonials';
import Images from './Components/Image';
import "../src/CSS/MediaQuery.css"

function App() {
  return (
    <div >
     <Helmet>
          <title>DevFeed</title>
        </Helmet>
      <Navbar/>
      <Hero/>
      <About/>

      
      {/* <Count/> */}
      <Images/>
      
      <Subscribe/>
      <Testimonials/>
      {/* <RecentEvents/> */}
     
      <Footer/>
    </div>
  );
}

export default App;
