import React from 'react';
import '../Recipepage/RecipePage.css';

function Padthai() {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Pad Thai Stir-Fry</h1>

      <img
        src="/src/assets/padthai.jpg"  
        alt="Pad Thai"
        className="recipe-image"
      />

      <section className="recipe-section">
        <h2>Description</h2>
        <p>
          Pad Thai is a famous Thai stir-fried noodle dish, known for its sweet, salty, and savory flavors. It is usually made with stir-fried rice noodles, eggs, tofu or shrimp, bean sprouts, and a flavorful sauce, topped with roasted peanuts and fresh lime.
        </p>
      </section>

      <section className="recipe-section additional-info">
        <div className="info-box">
          <p><strong>Preparation Time:</strong> 15 minutes</p>
          <p><strong>Cooking Time:</strong> 10 minutes</p>
          <p><strong>Servings:</strong> 2 servings</p>
          <p><strong>Difficulty Level:</strong> Medium</p>
          <p><strong>Category/Tags:</strong> Thai Cuisine, Noodles, Stir-Fry</p>
        </div>
      </section>

      <section className="recipe-section">
        <h2>Ingredients</h2>
        <ul>
          <li>200g rice noodles</li>
          <li>100g shrimp or tofu</li>
          <li>2 eggs, lightly beaten</li>
          <li>1/4 cup tamarind paste</li>
          <li>1 tablespoon fish sauce</li>
          <li>1 tablespoon sugar</li>
          <li>1/2 cup bean sprouts</li>
          <li>2 tablespoons roasted peanuts</li>
          <li>Fresh lime wedges</li>
          <li>2-3 spring onions, chopped</li>
        </ul>
      </section>

      <section className="recipe-section">
        <h2>Cooking Instructions</h2>
        <ol>
          <li>Soak the rice noodles in warm water for about 30 minutes until soft.</li>
          <li>In a wok, heat oil over medium heat and scramble the eggs.</li>
          <li>Add the shrimp or tofu and stir-fry until cooked.</li>
          <li>Mix tamarind paste, fish sauce, and sugar in a bowl to make the sauce.</li>
          <li>Add the cooked noodles, sauce, and bean sprouts into the wok and stir-fry for 2-3 minutes.</li>
          <li>Top with roasted peanuts, lime wedges, and spring onions. Serve hot!</li>
        </ol>
      </section>
    </div>
  );
}

export default Padthai;
