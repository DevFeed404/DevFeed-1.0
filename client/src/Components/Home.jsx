
import React from 'react'
import ScrollToTop from './ScrollToTop';
import Subscribe from './Subscribe';
import { Helmet } from "react-helmet";
import Testimonials from './Testimonials';
import Hero from './Hero';
import About from './About';
import Images from "./Image";
const Home = () => {
  return (
    <>
    <Helmet>
        <title>DevFeed</title>
      </Helmet>
     <ScrollToTop/>
      <Hero/>
      <About/>

      
      {/* <Count/> */}
      <Images/>
      
      <Subscribe/>
      <Testimonials/>
      {/* <RecentEvents/> */}
     
    </>
  )
}

export default Home
