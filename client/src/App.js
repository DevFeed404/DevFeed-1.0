
import './App.css';
import About from './Components/About';
import Count from './Components/Count';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
// import RecentEvents from './Components/Recent_events';
import Subscribe from './Components/Subscribe';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <div className="App w-screen">
      <Navbar/>
      <Hero/>
      <About/>
      <Count/>
      <Testimonials/>
      {/* <RecentEvents/> */}
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
