import React from 'react';
import Hero from '../../components/hero-section/Hero';
import ImproveSkills from '../../components/improve-skills/ImproveSkills';
import Quote from '../../components/quote-section/Quote';
import TopChef from '../../components/top-chefs/TopChef';

import "./Home.css";




function Home() {
  return (
    <div>
     <div className="container main">
       <Hero />
       <ImproveSkills />
       <Quote />
       <TopChef />
     </div>
    </div>
  )
}

export default Home
