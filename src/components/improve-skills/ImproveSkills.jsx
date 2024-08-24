import React from 'react';
import "./ImproveSkills.css";
import img10 from "../../images/food-gallery/img10.avif"

function ImproveSkills() {
    const lists = [
        "Learn New Recipe",
        "Experiment With Foods",
        "Write Your Own Recipes",
        "Know Nutrition Facts",
        "Get Cooking Tips",
        "Stay Updated",
    ]
  return (
    <div className='section improve-skills'>

<div className="col image">
    <img src={img10} alt="improve skills" />
</div>

    <div className="col description">
     <h1 className="head">
     improve your culinary skills
     </h1> 
     {lists.map((list, index) => {
        return (
            <div className="list-item" key={index}>{list}</div>
        )
     })}
     <button className='btn btn-signup'>Signup Now </button>
    </div>
    
  </div>
  )
}

export default ImproveSkills
