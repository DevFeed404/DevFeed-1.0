
import './App.css';
import About from './Components/About';
import Count from './Components/Count';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import RecentEvents from './Components/Recent_events';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Count/>
    </div>
  );
}

export default App;
