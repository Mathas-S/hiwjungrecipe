import React from 'react';
import '../Recipepage/RecipePage.css';

function ThaiGreenCurry() {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Thai Green Curry</h1>

      <img
        src="/src/assets/greencurry.jpeg"
        alt="Thai Green Curry"
        className="recipe-image"
      />

      <section className="recipe-section">
        <h2>Description</h2>
        <p>
          Thai Green Curry is a rich, aromatic dish that showcases a beautiful balance of spicy, savory, and slightly sweet flavors. The creamy coconut milk base pairs perfectly with green curry paste, bringing out the best of Thai herbs and spices.
        </p>
      </section>

      <section className="recipe-section additional-info">
        <div className="info-box">
          <p><strong>Preparation Time:</strong> 15 minutes</p>
          <p><strong>Cooking Time:</strong> 25 minutes</p>
          <p><strong>Servings:</strong> 4 servings</p>
          <p><strong>Difficulty Level:</strong> Medium</p>
          <p><strong>Category/Tags:</strong> Thai Cuisine, Curry, Spicy, Coconut Milk</p>
        </div>
      </section>

      <section className="recipe-section">
        <h2>Ingredients</h2>
        <ul>
          <li>500g chicken, sliced</li>
          <li>1 tablespoon green curry paste</li>
          <li>1 can (400ml) coconut milk</li>
          <li>1 tablespoon fish sauce</li>
          <li>1 tablespoon sugar</li>
          <li>1 cup Thai basil leaves</li>
          <li>1 cup bamboo shoots (optional)</li>
          <li>2 kaffir lime leaves (optional)</li>
          <li>1 red bell pepper, sliced</li>
          <li>1 tablespoon vegetable oil</li>
          <li>Fresh cilantro for garnish</li>
        </ul>
      </section>
      
      <section className="recipe-section">
        <h2>Cooking Instructions</h2>
        <ol>
          <li>Heat vegetable oil in a large pan and sauté the green curry paste until fragrant.</li>
          <li>Add chicken slices and stir-fry until partially cooked.</li>
          <li>Pour in coconut milk and bring to a simmer.</li>
          <li>Add fish sauce, sugar, and lime leaves (optional). Stir and cook for 10 minutes.</li>
          <li>Add red bell pepper, bamboo shoots, and Thai basil leaves. Simmer for another 5 minutes.</li>
          <li>Garnish with fresh cilantro before serving. Serve with steamed jasmine rice.</li>
        </ol>
      </section>
    </div>
  );
}

export default ThaiGreenCurry;
