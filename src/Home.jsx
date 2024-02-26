import React from 'react'
import Homepage from "../src/pages/HomePage";
import WhoWeAre from "../src/pages/WhoWeAre";
import WhatWeDo from "../src/pages/WhatWeDo";
import WhyChooseUs from "../src/pages/WhyChooseUs";
import ContactPage from "../src/pages/ContactPage";
import HomePage from '../src/pages/HomePage';
const Home = () => {
  return (
    <div>
        <HomePage/>
        <WhoWeAre/>
        <WhatWeDo/>
        <WhyChooseUs/>
        <ContactPage/>
    </div>
  )
}

export default Home