import React from 'react';
import '../Recipepage/RecipePage.css';
import khaotomImg from '../../assets/khaotom.jpg';

function Khaotom() {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Thai Rice Soup (Khao Tom)</h1>
      <img src={khaotomImg} alt="Khao Tom" className="recipe-image" />

      <section className="recipe-section">
        <h2>Description</h2>
        <p>
          Thai rice soup typically made with soft-cooked rice and pork or shrimp in a mild broth. A perfect comfort food.
        </p>
      </section>

      <section className="recipe-section additional-info">
        <div className="info-box">
          <p><strong>Preparation Time:</strong> 10 minutes</p>
          <p><strong>Cooking Time:</strong> 20 minutes</p>
          <p><strong>Servings:</strong> 2</p>
          <p><strong>Difficulty Level:</strong> Easy</p>
          <p><strong>Category/Tags:</strong> Soup, Rice, Thai Cuisine</p>
        </div>
      </section>

      <section className="recipe-section">
        <h2>Ingredients</h2>
        <ul>
          <li>1 cup cooked rice</li>
          <li>2 cups chicken or pork broth</li>
          <li>100g minced pork or shrimp</li>
          <li>Chopped garlic and ginger</li>
          <li>Fish sauce, pepper, spring onions</li>
        </ul>
      </section>

      <section className="recipe-section">
        <h2>Cooking Instructions</h2>
        <ol>
          <li>Boil broth and add garlic, ginger.</li>
          <li>Add minced pork or shrimp and cook until done.</li>
          <li>Add cooked rice and simmer until soft.</li>
          <li>Season with fish sauce and pepper.</li>
          <li>Garnish with spring onions and serve.</li>
        </ol>
      </section>
    </div>
  );
}

export default Khaotom;
