import React from 'react';
import '../Recipepage/RecipePage.css';
import grilledChickenImage from '../../assets/grilledchicken.jpg';

const GrilledChicken = () => (
  <div className="recipe-container">
    <h1 className="recipe-title">Grilled Chicken</h1>
    <img src={grilledChickenImage} alt="Grilled Chicken" className="recipe-image" />

    <section className="recipe-section">
      <h2>Description</h2>
      <p>
        Juicy grilled chicken marinated with herbs and spices, perfect for a summer barbecue or
        a healthy lunch.
      </p>
    </section>

    <section className="recipe-section info-box">
      <p><strong>Preparation Time:</strong> 15 minutes</p>
      <p><strong>Cooking Time:</strong> 20 minutes</p>
      <p><strong>Servings:</strong> 2</p>
      <p><strong>Difficulty:</strong> Medium</p>
    </section>

    <section className="recipe-section">
      <h2>Ingredients</h2>
      <ul>
        <li>2 chicken breasts</li>
        <li>2 tbsp olive oil</li>
        <li>1 tsp garlic powder</li>
        <li>1 tsp paprika</li>
        <li>Salt and pepper to taste</li>
      </ul>
    </section>

    <section className="recipe-section">
      <h2>Instructions</h2>
      <ol>
        <li>Marinate chicken with all ingredients for at least 1 hour.</li>
        <li>Preheat grill to medium-high heat.</li>
        <li>Grill chicken for 6–8 minutes per side or until cooked through.</li>
        <li>Let rest for 5 minutes before serving.</li>
      </ol>
    </section>
  </div>
);

export default GrilledChicken;
