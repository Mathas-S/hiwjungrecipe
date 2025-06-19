import React from 'react';
import '../Recipepage/RecipePage.css';
import basilChickenImage from '../../assets/basilchicken.jpg'; 

function BasilChicken() {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Basil Chicken Stir-Fry with Fried Egg</h1>
      
      <img
        src={basilChickenImage} 
        alt="Basil Chicken Stir-Fry with Fried Egg"
        className="recipe-image"
      />
      
      <section className="recipe-section">
        <h2>Description</h2>
        <p>
          Basil Chicken Stir-Fry with Fried Egg is a popular Thai dish known for its spicy flavor and the aromatic scent of basil. This dish is typically served with a crispy fried egg on top, which adds richness to the flavors. It’s a beloved comfort food that combines the heat of chili with the freshness of basil.
        </p>
      </section>

      <section className="recipe-section additional-info">
        <div className="info-box">
          <p><strong>Preparation Time:</strong> 10 minutes</p>
          <p><strong>Cooking Time:</strong> 15 minutes</p>
          <p><strong>Servings:</strong> 2 servings</p>
          <p><strong>Difficulty Level:</strong> Easy</p>
          <p><strong>Category/Tags:</strong> Thai Cuisine, Spicy, Chicken, Stir-Fry, Egg</p>
        </div>
      </section>

      <section className="recipe-section">
        <h2>Ingredients</h2>
        <ul>
          <li>200g chicken, chopped</li>
          <li>Crushed garlic and chili</li>
          <li>1 tablespoon oyster sauce</li>
          <li>1 tablespoon seasoning sauce</li>
          <li>A pinch of sugar</li>
          <li>Basil leaves</li>
          <li>1 egg (for frying)</li>
        </ul>
      </section>

      <section className="recipe-section">
        <h2>Cooking Instructions</h2>
        <ol>
          <li>Heat oil in a pan, and sauté the garlic and chili until fragrant.</li>
          <li>Add chicken and stir-fry until it's almost cooked.</li>
          <li>Season with oyster sauce and sugar.</li>
          <li>Stir in the basil leaves and cook quickly, then turn off the heat.</li>
          <li>In a separate pan, fry the egg to your desired level of crispiness.</li>
          <li>Serve the stir-fry with steamed rice and top with the fried egg.</li>
          <li>Adjust the level of spiciness by adding more chili or reducing it to taste.</li>
        </ol>
      </section>
    </div>
  );
}

export default BasilChicken;
