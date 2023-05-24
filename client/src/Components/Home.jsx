import { Helmet } from "react-helmet";
import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import Subscribe from "./Subscribe";
import Testimonials from "./Testimonials";
import Images from "./Image";
import "../CSS/MediaQuery.css";
import Faq from "./Faq";

const Home = () => {
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

export default Home;
