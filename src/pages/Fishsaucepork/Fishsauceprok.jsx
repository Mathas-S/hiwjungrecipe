import React from 'react';
import '../Recipepage/RecipePage.css';

function CrispyFishSaucePorkBelly() {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Crispy Fish Sauce Pork Belly</h1>
   
      <img
        src="/src/assets/fishpork.jpg"
        alt="Crispy Fish Sauce Pork Belly"
        className="recipe-image"
      />
 
      <section className="recipe-section">
        <h2>Description</h2>
        <p>
          Crispy Fish Sauce Pork Belly is a savory Thai dish that features crispy pork belly cooked with fish sauce and sugar, resulting in a balance of sweet and salty flavors. The crispy texture of the pork belly combined with the rich umami flavor from the fish sauce creates an irresistible dish.
        </p>
      </section>

      <section className="recipe-section additional-info">
        <div className="info-box">
          <p><strong>Preparation Time:</strong> 10 minutes</p>
          <p><strong>Cooking Time:</strong> 45 minutes</p>
          <p><strong>Servings:</strong> 4 servings</p>
          <p><strong>Difficulty Level:</strong> Medium</p>
          <p><strong>Category/Tags:</strong> Thai Cuisine, Pork, Crispy, Fish Sauce</p>
        </div>
      </section>

      <section className="recipe-section">
        <h2>Ingredients</h2>
        <ul>
          <li>500g pork belly, sliced into 1-inch pieces</li>
          <li>2 tablespoons fish sauce</li>
          <li>1 tablespoon sugar</li>
          <li>1 tablespoon soy sauce</li>
          <li>2 cloves garlic, minced</li>
          <li>1 tablespoon vegetable oil</li>
          <li>Fresh cilantro for garnish</li>
        </ul>
      </section>

      <section className="recipe-section">
        <h2>Cooking Instructions</h2>
        <ol>
          <li>Heat vegetable oil in a pan and sauté the garlic until fragrant.</li>
          <li>Add the sliced pork belly to the pan and cook until golden brown and crispy.</li>
          <li>Add fish sauce, soy sauce, and sugar, stirring until the pork belly is evenly coated.</li>
          <li>Continue cooking for another 10 minutes, allowing the sauce to thicken and caramelize.</li>
          <li>Garnish with fresh cilantro and serve hot with steamed rice.</li>
        </ol>
      </section>
    </div>
  );
}

export default CrispyFishSaucePorkBelly;
