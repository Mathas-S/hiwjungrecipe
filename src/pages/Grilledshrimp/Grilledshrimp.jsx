import React from 'react';
import '..//Recipepage/RecipePage.css';
import grilledShrimpImage from '../../assets/grilledshrimp.jpg';

const GrilledShrimp = () => (
  <div className="recipe-container">
    <h1 className="recipe-title">Grilled Shrimp</h1>
    <img src={grilledShrimpImage} alt="Grilled Shrimp" className="recipe-image" />

    <section className="recipe-section">
      <h2>Description</h2>
      <p>
        Fresh shrimp marinated in garlic butter and grilled to perfection for a smoky seafood treat.
      </p>
    </section>

    <section className="recipe-section info-box">
      <p><strong>Preparation Time:</strong> 10 minutes</p>
      <p><strong>Cooking Time:</strong> 5 minutes</p>
      <p><strong>Servings:</strong> 2</p>
      <p><strong>Difficulty:</strong> Easy</p>
    </section>

    <section className="recipe-section">
      <h2>Ingredients</h2>
      <ul>
        <li>300g shrimp, peeled and deveined</li>
        <li>2 tbsp melted butter</li>
        <li>2 cloves garlic, minced</li>
        <li>1 tsp lemon juice</li>
        <li>Salt and pepper</li>
      </ul>
    </section>

    <section className="recipe-section">
      <h2>Instructions</h2>
      <ol>
        <li>Mix shrimp with butter, garlic, lemon juice, salt, and pepper.</li>
        <li>Thread onto skewers and grill for 2–3 minutes per side.</li>
        <li>Serve immediately with lemon wedges.</li>
      </ol>
    </section>
  </div>
);

export default GrilledShrimp;
