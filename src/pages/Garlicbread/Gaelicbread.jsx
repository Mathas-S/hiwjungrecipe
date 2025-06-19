import React from 'react';
import '../Recipepage/RecipePage.css';
import garlicBreadImage from '../../assets/garlic bread.jpg';

function GarlicBread() {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Garlic Bread</h1>
      <img src={garlicBreadImage} alt="Garlic Bread" className="recipe-image" />

      <section className="recipe-section">
        <h2>Description</h2>
        <p>Classic side dish of crusty bread with garlic butter, toasted to perfection.</p>
      </section>

      <section className="recipe-section additional-info">
        <div className="info-box">
          <p><strong>Preparation Time:</strong> 10 minutes</p>
          <p><strong>Cooking Time:</strong> 10 minutes</p>
          <p><strong>Servings:</strong> 4</p>
          <p><strong>Difficulty:</strong> Easy</p>
          <p><strong>Tags:</strong> Side, Bread, Baked</p>
        </div>
      </section>

      <section className="recipe-section">
        <h2>Ingredients</h2>
        <ul>
          <li>1 baguette</li>
          <li>4 tbsp butter, softened</li>
          <li>2 cloves garlic, minced</li>
          <li>1 tbsp chopped parsley</li>
          <li>Pinch of salt</li>
        </ul>
      </section>

      <section className="recipe-section">
        <h2>Instructions</h2>
        <ol>
          <li>Preheat oven to 375°F (190°C).</li>
          <li>Mix butter, garlic, parsley, and salt.</li>
          <li>Slice baguette and spread garlic butter on each piece.</li>
          <li>Bake 8-10 mins or until golden and crispy.</li>
        </ol>
      </section>
    </div>
  );
}

export default GarlicBread;
