import React from 'react';
import '../Recipepage/RecipePage.css';
import kaijiaoImg from '../../assets/kaijiao.jpg';

function Kaijiao() {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Thai Omelette (Kai Jiao)</h1>
      <img src={kaijiaoImg} alt="Kai Jiao" className="recipe-image" />

      <section className="recipe-section">
        <h2>Description</h2>
        <p>
          Thai-style omelette that is crispy on the outside and fluffy inside. Often served over rice and accompanied by chili sauce.
        </p>
      </section>

      <section className="recipe-section additional-info">
        <div className="info-box">
          <p><strong>Preparation Time:</strong> 5 minutes</p>
          <p><strong>Cooking Time:</strong> 5 minutes</p>
          <p><strong>Servings:</strong> 1</p>
          <p><strong>Difficulty Level:</strong> Easy</p>
          <p><strong>Category/Tags:</strong> Thai Cuisine, Egg, Quick Meal</p>
        </div>
      </section>

      <section className="recipe-section">
        <h2>Ingredients</h2>
        <ul>
          <li>2 eggs</li>
          <li>1 tsp fish sauce or soy sauce</li>
          <li>Oil for deep frying</li>
          <li>Cooked jasmine rice (for serving)</li>
        </ul>
      </section>

      <section className="recipe-section">
        <h2>Cooking Instructions</h2>
        <ol>
          <li>Beat eggs with fish sauce or soy sauce until frothy.</li>
          <li>Heat oil in a small wok or pan over high heat.</li>
          <li>Pour in the egg mixture and let it puff up and crisp.</li>
          <li>Flip briefly if needed and remove when golden.</li>
          <li>Serve over rice with chili sauce.</li>
        </ol>
      </section>
    </div>
  );
}

export default Kaijiao;
