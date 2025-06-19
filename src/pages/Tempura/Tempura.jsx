import React from 'react';
import '../Recipepage/RecipePage.css';
import tempuraImage from '../../assets/tempura.jpg'; 

function Tempura() {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Tempura</h1>

      <img
        src={tempuraImage} 
        alt="Tempura"
        className="recipe-image"
      />

      <section className="recipe-section">
        <h2>Description</h2>
        <p>
          Tempura is a popular Japanese dish consisting of battered and deep-fried seafood and vegetables. It's typically served with a dipping sauce and goes well with rice or noodles. Its light and crispy texture makes it a delightful appetizer or main dish.
        </p>
      </section>

      <section className="recipe-section additional-info">
        <div className="info-box">
          <p><strong>Preparation Time:</strong> 20 minutes</p>
          <p><strong>Cooking Time:</strong> 10 minutes</p>
          <p><strong>Servings:</strong> 4 servings</p>
          <p><strong>Difficulty Level:</strong> Medium</p>
          <p><strong>Category/Tags:</strong> Japanese, Fried, Seafood, Vegetables</p>
        </div>
      </section>

      <section className="recipe-section">
        <h2>Ingredients</h2>
        <ul>
          <li>200g shrimp, peeled and deveined</li>
          <li>1 medium zucchini, sliced</li>
          <li>1 sweet potato, sliced</li>
          <li>1 cup tempura flour</li>
          <li>1 egg</li>
          <li>1 cup cold water</li>
          <li>Oil for frying</li>
        </ul>
      </section>

      <section className="recipe-section">
        <h2>Cooking Instructions</h2>
        <ol>
          <li>Prepare the tempura batter by mixing the tempura flour, egg, and cold water in a bowl. Stir lightly to avoid overmixing.</li>
          <li>Heat oil in a deep fryer or large pot to 350°F (175°C).</li>
          <li>Dip the shrimp, zucchini, and sweet potato slices into the batter and fry them in batches for 2-3 minutes, or until golden brown and crispy.</li>
          <li>Remove the tempura from the oil and drain on paper towels to remove excess oil.</li>
          <li>Serve with a dipping sauce (soy sauce with a bit of dashi) and enjoy!</li>
        </ol>
      </section>
    </div>
  );
}

export default Tempura;
