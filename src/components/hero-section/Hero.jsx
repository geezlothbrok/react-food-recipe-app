import React from 'react';
import "./Hero.css";
import { images } from "./HeroData";


function Hero() {

  return (
    <div className='section'>
      <div className="col typography">
       <h1 className="title">
        what are we about
       </h1>

       <p className="info">
       Welcome to <span className='special'>FoodHub </span>, your ultimate cooking companion! 
       We're a team of food enthusiasts dedicated to making cooking easier and more enjoyable for everyone. 
       Our app is designed to inspire home cooks and food lovers alike, 
       with a vast collection of recipes, step-by-step instructions, 
       and mouth-watering images. Our mission is to help you discover new flavors, 
       explore different cuisines, and create unforgettable meals for your loved ones. 
       Whether you're a seasoned chef or a culinary newbie, 
       we're here to support your cooking journey every step of the way.
       </p>
       <button className='btn'>Explore Now </button>
      </div>
      <div className="col hero-image">
       {images.map((image, index) => {
        const {img, alt} = image;
        return (
            <img src={img} alt={alt} key={index}/>
        )
       })}
      </div>
    </div>
  )
}

export default Hero
