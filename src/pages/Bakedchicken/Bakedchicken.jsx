import React from 'react';
import '../Recipepage/RecipePage.css';
import bakedChickenImage from '../../assets/bakedchicken.jpg';

function BakedChicken() {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Baked Chicken</h1>
      <img src={bakedChickenImage} alt="Baked Chicken" className="recipe-image" />

      <section className="recipe-section">
        <h2>Description</h2>
        <p>Juicy and flavorful chicken baked to perfection with herbs.</p>
      </section>

      <section className="recipe-section additional-info">
        <div className="info-box">
          <p><strong>Preparation Time:</strong> 15 minutes</p>
          <p><strong>Cooking Time:</strong> 45 minutes</p>
          <p><strong>Servings:</strong> 4</p>
          <p><strong>Difficulty:</strong> Easy</p>
          <p><strong>Tags:</strong> Main, Chicken, Oven</p>
        </div>
      </section>

      <section className="recipe-section">
        <h2>Ingredients</h2>
        <ul>
          <li>4 chicken thighs or breasts</li>
          <li>2 tbsp olive oil</li>
          <li>1 tsp garlic powder</li>
          <li>1 tsp paprika</li>
          <li>Salt and pepper to taste</li>
          <li>Fresh rosemary or thyme (optional)</li>
        </ul>
      </section>

      <section className="recipe-section">
        <h2>Instructions</h2>
        <ol>
          <li>Preheat oven to 400°F (200°C).</li>
          <li>Rub chicken with oil and seasoning.</li>
          <li>Place on baking tray and bake 40-45 mins or until golden.</li>
          <li>Rest 5 mins before serving.</li>
        </ol>
      </section>
    </div>
  );
}

export default BakedChicken;
