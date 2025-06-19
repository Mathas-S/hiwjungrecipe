import React from 'react';
import '../Recipepage/RecipePage.css';
import chickenSoupImage from '../../assets/chicken soup.jpg';

function ChickenSoup() {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Chicken Soup</h1>
    
      <img
        src={chickenSoupImage} 
        alt="Chicken Soup"
        className="recipe-image"
      />
      
      <section className="recipe-section">
        <h2>Description</h2>
        <p>
          Chicken Soup is a comforting and nourishing dish, often enjoyed as a remedy for colds or just as a hearty meal. It is made with tender chicken, vegetables, and a flavorful broth, making it the ultimate comfort food.
        </p>
      </section>

      <section className="recipe-section additional-info">
        <div className="info-box">
          <p><strong>Preparation Time:</strong> 10 minutes</p>
          <p><strong>Cooking Time:</strong> 30 minutes</p>
          <p><strong>Servings:</strong> 4 servings</p>
          <p><strong>Difficulty Level:</strong> Easy</p>
          <p><strong>Category/Tags:</strong> Soup, Chicken, Comfort Food</p>
        </div>
      </section>

      <section className="recipe-section">
        <h2>Ingredients</h2>
        <ul>
          <li>1 whole chicken, cut into pieces</li>
          <li>4 cups chicken broth or water</li>
          <li>1 onion, chopped</li>
          <li>2 carrots, sliced</li>
          <li>2 celery stalks, chopped</li>
          <li>2 cloves garlic, minced</li>
          <li>Salt and pepper to taste</li>
          <li>2 tablespoons olive oil</li>
          <li>Fresh parsley for garnish</li>
        </ul>
      </section>
      
      <section className="recipe-section">
        <h2>Cooking Instructions</h2>
        <ol>
          <li>In a large pot, heat olive oil over medium heat and sauté garlic, onion, carrots, and celery until softened.</li>
          <li>Add the chicken pieces and cook until browned on all sides.</li>
          <li>Pour in the chicken broth and bring it to a boil. Reduce heat and simmer for 25-30 minutes, or until the chicken is cooked through.</li>
          <li>Season with salt and pepper to taste.</li>
          <li>Remove the chicken from the pot, shred the meat, and return it to the soup.</li>
          <li>Garnish with fresh parsley and serve hot!</li>
        </ol>
      </section>
    </div>
  );
}

export default ChickenSoup;
