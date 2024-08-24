import React, { useEffect, useState } from "react";
import "./Recipes.css";
import { CiSearch } from "react-icons/ci";
import Card from "../../components/card/Card";
import axios from "axios";

function Recipes() {
    const [allRecipes, setAllRecipes] = useState([]);
    // const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

  const searches = [
    "pizza",
    "burger",
    "cookies",
    "juice",
    "salad",
    "ice cream",
    "soup",
    "pudding",
    "ramen",
    "jollof",
    "banana bread",
  ];

  useEffect(() => {
    const fetchRecipes = async () => {
        try {
            const response = await axios.get(
                "https://api.spoonacular.com/recipes/complexSearch?apiKey=4a7baddccfbb4eadbbcbb1e1d6bf4497"
            );
            setAllRecipes(response.data.results);
            console.log(allRecipes);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    fetchRecipes();
}, [allRecipes]);

  return (
    <div className="container">
      <div className="previous-searches section">
        <h2>Previous Searches</h2>
        <div className="previous-searches-container">
          {searches.map((search, index) => (
            <div
              key={index}
              className="search-item"
              style={{ animationDelay: index * 0.1 + "s" }}
            >
              {search}
            </div>
          ))}
        </div>
        <div className="search-box">
          <input type="text" name="" id="" placeholder="search..." />
          <button className="btn">
            <CiSearch />
          </button>
        </div>
      </div>

      <div className="recipes-container">
        {allRecipes.map((recipe, id) => {
            return (
                <Card key={id} recipe={recipe}/>
            )
        })}
      </div>
    </div>
  );
}

export default Recipes;
