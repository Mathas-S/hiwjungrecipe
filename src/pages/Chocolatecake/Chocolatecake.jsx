import React from 'react';
import chocolateCakeImage from '../../assets/chocolatecake.jpg';

function ChocolateCake() {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Chocolate Cake</h1>
      <img src={chocolateCakeImage} alt="Chocolate Cake" className="recipe-image" />

      <section className="recipe-section">
        <h2>Description</h2>
        <p>A rich and decadent chocolate cake perfect for dessert.</p>
      </section>

      <section className="recipe-section additional-info">
        <div className="info-box">
          <p><strong>Preparation Time:</strong> 20 minutes</p>
          <p><strong>Cooking Time:</strong> 30 minutes</p>
          <p><strong>Servings:</strong> 8</p>
          <p><strong>Difficulty:</strong> Medium</p>
          <p><strong>Tags:</strong> Dessert, Cake, Chocolate</p>
        </div>
      </section>

      <section className="recipe-section">
        <h2>Ingredients</h2>
        <ul>
          <li>1 ¾ cups all-purpose flour</li>
          <li>1 ½ tsp baking powder</li>
          <li>1 ½ tsp baking soda</li>
          <li>1 cup cocoa powder</li>
          <li>1 ½ cups sugar</li>
          <li>2 large eggs</li>
          <li>1 cup milk</li>
          <li>½ cup oil</li>
          <li>2 tsp vanilla extract</li>
          <li>1 cup boiling water</li>
        </ul>
      </section>

      <section className="recipe-section">
        <h2>Instructions</h2>
        <ol>
          <li>Preheat oven to 350°F (175°C). Grease cake pans.</li>
          <li>Mix dry ingredients. Add wet ingredients. Stir well.</li>
          <li>Add boiling water gradually. Batter will be thin.</li>
          <li>Pour into pans. Bake 30 mins. Cool before frosting.</li>
        </ol>
      </section>
    </div>
  );
}

export default ChocolateCake;