import React from 'react';
import '../Recipepage/RecipePage.css';
import friedChickenImage from '../../assets/friedchiken.jpg'; 

function FriedChicken() {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Fried Chicken</h1>

      <img
        src={friedChickenImage} 
        alt="Fried Chicken"
        className="recipe-image"
      />

      <section className="recipe-section">
        <h2>Description</h2>
        <p>
          Fried chicken is a beloved dish known for its crispy, golden-brown crust and tender, juicy interior. It's often served with various sides like mashed potatoes, coleslaw, or fries. This classic comfort food is perfect for any occasion.
        </p>
      </section>

      <section className="recipe-section additional-info">
        <div className="info-box">
          <p><strong>Preparation Time:</strong> 15 minutes</p>
          <p><strong>Cooking Time:</strong> 20 minutes</p>
          <p><strong>Servings:</strong> 4 servings</p>
          <p><strong>Difficulty Level:</strong> Medium</p>
          <p><strong>Category/Tags:</strong> Chicken, Fried, Comfort Food</p>
        </div>
      </section>

      <section className="recipe-section">
        <h2>Ingredients</h2>
        <ul>
          <li>4 chicken pieces (drumsticks or thighs)</li>
          <li>1 cup all-purpose flour</li>
          <li>1 teaspoon salt</li>
          <li>1 teaspoon black pepper</li>
          <li>1 teaspoon garlic powder</li>
          <li>1 teaspoon paprika</li>
          <li>1 cup buttermilk</li>
          <li>Oil for frying</li>
        </ul>
      </section>

      <section className="recipe-section">
        <h2>Cooking Instructions</h2>
        <ol>
          <li>In a bowl, mix the flour, salt, pepper, garlic powder, and paprika.</li>
          <li>Dip each chicken piece into the buttermilk, then coat it with the flour mixture.</li>
          <li>Heat oil in a deep fryer or large pot over medium-high heat.</li>
          <li>Fry the chicken pieces for 12-15 minutes, or until golden brown and cooked through.</li>
          <li>Drain the chicken on paper towels to remove excess oil.</li>
          <li>Serve hot with your favorite sides.</li>
        </ol>
      </section>
    </div>
  );
}

export default FriedChicken;
