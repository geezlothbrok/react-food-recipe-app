import React from 'react';
import "./TopChef.css";
import ChefsCard from './ChefsCard';

import { chefsImages } from './ChefsData';

function TopChef() {
  return (
    <div className='section chefs'>
      <h1 className="chefs-title">
        our top chefs
      </h1>
      <div className="top-chef-container">
        {chefsImages.map((chef, index) => {
            return (
                <ChefsCard key={index} chef={chef}/>
            )
        })}
      </div>
    </div>
  )
}

export default TopChef
