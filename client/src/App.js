import "./App.css";
import { Helmet } from "react-helmet";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import Subscribe from "./Components/Subscribe";
import Testimonials from "./Components/Testimonials";
import Images from "./Components/Image";
import "../src/CSS/MediaQuery.css";
import Faq from "./Components/Faq";

function App() {
  return (
    <div>
      <Helmet>
        <title>DevFeed</title>
      </Helmet>
      <Navbar />
      <ScrollToTop />
      <Hero />
      <About />

      {/* <Count/> */}
      <Images />

      <Subscribe />
      <Testimonials />
      <Faq />
      {/* <RecentEvents/> */}

      <Footer />
    </div>
  );
}

export default App;
