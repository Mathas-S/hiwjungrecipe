import React from 'react';
import '../Recipepage/RecipePage.css';
import grilledVegImage from '../../assets/grilledvegetables.jpg';

const GrilledVegetables = () => (
  <div className="recipe-container">
    <h1 className="recipe-title">Grilled Vegetables</h1>
    <img src={grilledVegImage} alt="Grilled Vegetables" className="recipe-image" />

    <section className="recipe-section">
      <h2>Description</h2>
      <p>
        A colorful medley of vegetables grilled and drizzled with olive oil and balsamic glaze.
      </p>
    </section>

    <section className="recipe-section info-box">
      <p><strong>Preparation Time:</strong> 15 minutes</p>
      <p><strong>Cooking Time:</strong> 10 minutes</p>
      <p><strong>Servings:</strong> 2</p>
      <p><strong>Difficulty:</strong> Easy</p>
    </section>

    <section className="recipe-section">
      <h2>Ingredients</h2>
      <ul>
        <li>1 zucchini</li>
        <li>1 bell pepper</li>
        <li>1 red onion</li>
        <li>2 tbsp olive oil</li>
        <li>Salt and pepper</li>
        <li>Balsamic glaze (optional)</li>
      </ul>
    </section>

    <section className="recipe-section">
      <h2>Instructions</h2>
      <ol>
        <li>Slice vegetables into thick pieces.</li>
        <li>Toss with olive oil, salt, and pepper.</li>
        <li>Grill for 3–5 minutes per side until tender and charred.</li>
        <li>Drizzle with balsamic glaze and serve.</li>
      </ol>
    </section>
  </div>
);

export default GrilledVegetables;
