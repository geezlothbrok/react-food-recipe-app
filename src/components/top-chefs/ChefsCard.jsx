import React from 'react';
import "./TopChef.css";

import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

function ChefsCard({chef}) {
  return (
    <div className='chef-card'>
        <img src={chef.img} alt="chef" />
      <div className="chef-card-info">
        <h3 className="chef-card-name">{chef.name}</h3>
        <p className="chef-recipe-count">
            recipes: <b>{chef.recipeCount}</b>
        </p>
        <p className="chef-cusine">
            Cusine: <b>{chef.cusine}</b>
        </p>
        <p className="chef-icons">
        <FaFacebook style={{color: "#4267B2"}}/>
        <FaInstagram style={{color: "#C13584"}}/>
        <FaTwitter style={{color: "#1DA1F2"}} />
        <FaTiktok style={{color: " #FE2C55"}} />
        </p>
      </div>
    </div>
  )
}

export default ChefsCard
