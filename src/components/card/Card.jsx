import React from 'react';
import "./Card.css";
import img1 from "../../images/chefs/chef1.jpg";
import { Link } from 'react-router-dom';

function Card({recipe}) {
  const summary = recipe.summary ? recipe.summary.replace(/(<([^>]+)>)/gi, "") : "No summary available.";
  return (
    <div className='recipe-card'>
      <img src={recipe.image} alt="" className='card-image'/>
      <div className="recipe-card-info">
        <img src={img1} alt="" className='author-image'/>
        <p className="recipe-title">{recipe.originalName}</p>
        <p className="recipe-desc">
        {summary}
        </p>
        <Link className='view-button'>View Recipe</Link>
      </div>
    </div>
  )
}

export default Card
