import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ image, title, description }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-card-img" />
      <div className="recipe-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
