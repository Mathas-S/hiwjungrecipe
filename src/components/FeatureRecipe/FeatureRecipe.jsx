import React from 'react';
import './FeatureRecipe.css';
import RecipeCard from "../RecipeCard/RecipeCard";
import { Link } from 'react-router-dom';
import img1 from '../../assets/basilchicken.jpg';
import img2 from '../../assets/greencurry.jpeg';
import img3 from '../../assets/fishpork.jpg';

function FeatureRecipe() {
  return (
    <div className="feature-recipe">
      <h2 className="feature-title">Featured Recipes</h2>
      <div className="recipe-list">
       <Link to="/Basilchicken">
        <RecipeCard 
          image={img1}
          title="Basil Chicken With Fried Egg"
          description="Hits Menu Thai Authentic"
        />
        </Link> 
        <Link to="/Greencurry">
        <RecipeCard 
          image={img2}
          title="Thai Green Curry"
          description="Taste Like Thai"
        />
        </Link>
        <Link to="/fishsaucepork">
        <RecipeCard 
          image={img3}
          title="Crispy Fish Sauce Pork Belly"
          description="Crispy and Tasty"
        />
        </Link>
      </div>
    </div>
  );
}

export default FeatureRecipe;
