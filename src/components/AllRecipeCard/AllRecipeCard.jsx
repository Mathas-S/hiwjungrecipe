import React from 'react';
import './AllRecipeCard.css';
import { Link } from 'react-router-dom';

const RecipeCard = ({
  recipeId, 
  recipeName,
  description,
  cookTime,
  prepTime,
  servings,
  difficulty,
}) => {
  return (
    <Link to={`/recipe/${recipeId}`}>
      <div className="myrecipe-card">
        <div className="myrecipe-card-content">
          <h3>{recipeName}</h3>
          <p>{description}</p>
          <div className="myrecipe-card-details">
            <span>Prep Time: {prepTime} mins</span>
            <span>Cook Time: {cookTime} mins</span>
            <span>Servings: {servings}</span>
            <span>Difficulty: {difficulty}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
