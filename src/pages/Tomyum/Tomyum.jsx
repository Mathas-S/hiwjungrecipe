import React from 'react';
import '../Recipepage/RecipePage.css';
import tomYumImage from '../../assets/tomyum.jpg'; 

function TomYumSoup() {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Tom Yum Soup</h1>

      <img
        src={tomYumImage}
        alt="Tom Yum Soup"
        className="recipe-image"
      />
   
      <section className="recipe-section">
        <h2>Description</h2>
        <p>
          Tom Yum Soup is a famous Thai soup known for its balance of hot, sour, salty, and sweet flavors. Typically made with shrimp, lemongrass, galangal, kaffir lime leaves, and chili, this soup is incredibly aromatic and flavorful. A perfect dish to warm you up!
        </p>
      </section>

      <section className="recipe-section additional-info">
        <div className="info-box">
          <p><strong>Preparation Time:</strong> 15 minutes</p>
          <p><strong>Cooking Time:</strong> 20 minutes</p>
          <p><strong>Servings:</strong> 4 servings</p>
          <p><strong>Difficulty Level:</strong> Medium</p>
          <p><strong>Category/Tags:</strong> Thai Cuisine, Spicy, Soup, Shrimp</p>
        </div>
      </section>

      <section className="recipe-section">
        <h2>Ingredients</h2>
        <ul>
          <li>500g shrimp, peeled and deveined</li>
          <li>4 cups water or chicken broth</li>
          <li>2 stalks lemongrass, cut into pieces</li>
          <li>3 kaffir lime leaves</li>
          <li>3 slices galangal or ginger</li>
          <li>3-4 Thai bird's eye chilies, smashed</li>
          <li>2 tablespoons fish sauce</li>
          <li>1 tablespoon lime juice</li>
          <li>1 teaspoon sugar</li>
          <li>Coriander leaves (for garnish)</li>
        </ul>
      </section>

      <section className="recipe-section">
        <h2>Cooking Instructions</h2>
        <ol>
          <li>Bring the water or chicken broth to a boil in a pot.</li>
          <li>Add the lemongrass, kaffir lime leaves, galangal, and chilies. Let it simmer for 5-7 minutes.</li>
          <li>Add the shrimp and cook until pink and fully cooked.</li>
          <li>Season with fish sauce, lime juice, and sugar. Stir to combine.</li>
          <li>Remove from heat, garnish with coriander leaves, and serve hot!</li>
        </ol>
      </section>
    </div>
  );
}

export default TomYumSoup;
