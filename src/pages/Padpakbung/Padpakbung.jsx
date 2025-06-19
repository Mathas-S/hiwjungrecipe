import React from 'react';
import '../Recipepage/RecipePage.css';
import padPakBungImage from '../../assets/padpakbung.jpg'; 

function PadPakBung() {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Pad Pak Bung Stir-Fry</h1>

      <img
        src={padPakBungImage} 
        alt="Pad Pak Bung Stir-Fry"
        className="recipe-image"
      />

      <section className="recipe-section">
        <h2>Description</h2>
        <p>
          Pad Pak Bung Stir-Fry, also known as stir-fried morning glory, is a simple and delicious Thai dish. This dish is typically cooked with garlic, chili, and a savory sauce, giving it a fragrant and crispy texture. It is a popular vegetarian dish, perfect as a side or main dish when paired with rice.
        </p>
      </section>

      <section className="recipe-section additional-info">
        <div className="info-box">
          <p><strong>Preparation Time:</strong> 5 minutes</p>
          <p><strong>Cooking Time:</strong> 10 minutes</p>
          <p><strong>Servings:</strong> 2 servings</p>
          <p><strong>Difficulty Level:</strong> Easy</p>
          <p><strong>Category/Tags:</strong> Thai Cuisine, Vegetarian, Stir-Fry, Vegetables</p>
        </div>
      </section>

      <section className="recipe-section">
        <h2>Ingredients</h2>
        <ul>
          <li>200g morning glory (water spinach)</li>
          <li>Crushed garlic and chili</li>
          <li>1 tablespoon oyster sauce</li>
          <li>1 tablespoon soy sauce</li>
          <li>A pinch of sugar</li>
          <li>1 tablespoon vegetable oil</li>
        </ul>
      </section>

      <section className="recipe-section">
        <h2>Cooking Instructions</h2>
        <ol>
          <li>Heat oil in a pan, and sauté the garlic and chili until fragrant.</li>
          <li>Add morning glory (water spinach) and stir-fry quickly on high heat.</li>
          <li>Season with oyster sauce, soy sauce, and sugar, and stir until the morning glory is tender but still crispy.</li>
          <li>Adjust seasoning to taste (add more soy sauce or chili as needed).</li>
          <li>Serve hot with steamed rice.</li>
        </ol>
      </section>
    </div>
  );
}

export default PadPakBung;
