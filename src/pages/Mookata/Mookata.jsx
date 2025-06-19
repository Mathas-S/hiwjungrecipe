import React from 'react';
import '../Recipepage/RecipePage.css';
import mookataImg from '../../assets/mookata.jpg';

function Mookata() {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Thai BBQ (Moo Kata)</h1>
      <img src={mookataImg} alt="Moo Kata" className="recipe-image" />

      <section className="recipe-section">
        <h2>Description</h2>
        <p>
          Moo Kata combines Korean BBQ and Chinese hot pot. Meats are grilled on a dome while soup simmers around the edge.
        </p>
      </section>

      <section className="recipe-section additional-info">
        <div className="info-box">
          <p><strong>Preparation Time:</strong> 20 minutes</p>
          <p><strong>Cooking Time:</strong> 30-60 minutes</p>
          <p><strong>Servings:</strong> 3-4</p>
          <p><strong>Difficulty Level:</strong> Moderate</p>
          <p><strong>Category/Tags:</strong> BBQ, Thai Street Food, Social Meal</p>
        </div>
      </section>

      <section className="recipe-section">
        <h2>Ingredients</h2>
        <ul>
          <li>Thinly sliced pork, beef, or chicken</li>
          <li>Assorted vegetables</li>
          <li>Glass noodles</li>
          <li>Eggs, tofu, mushrooms</li>
          <li>Savory broth and dipping sauces</li>
        </ul>
      </section>

      <section className="recipe-section">
        <h2>Cooking Instructions</h2>
        <ol>
          <li>Set up a Moo Kata grill with broth around the sides.</li>
          <li>Place meats on the top dome to grill.</li>
          <li>Add vegetables and noodles into the broth to cook.</li>
          <li>Dip cooked food in spicy Thai dipping sauce.</li>
          <li>Enjoy with family and friends!</li>
        </ol>
      </section>
    </div>
  );
}

export default Mookata;
