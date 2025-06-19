import React, { useEffect, useState } from 'react';
import './RecipePage.css';
import { useParams } from 'react-router-dom';

async function fetchRecipe(recipeId) {
  const response = await fetch(`http://localhost:5000/recipes/${recipeId}`);
  if (!response.ok) throw new Error('Failed to fetch recipe');
  return response.json();
}

function RecipePage() {
  const { recipeId } = useParams();
  console.log('recipeId:', recipeId);
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  if (!recipeId) {
    return <div className="recipe-container">Invalid recipe ID</div>;
  }

  useEffect(() => {
    setLoading(true);
    fetchRecipe(recipeId)
      .then(data => {
        setRecipe(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [recipeId]);

  if (loading) return <div className="recipe-container">Loading...</div>;
  if (error) return <div className="recipe-container">Error: {error}</div>;
  if (!recipe) return null;

  return (
    <div className="recipe-container">
      {/* แสดง title */}
      <h1 className="recipe-title">{recipe.title || recipe.recipeName}</h1>

      <section className="recipe-section">
        <h2>Description</h2>
        <p>{recipe.description}</p>
      </section>

      <section className="recipe-section additional-info">
        <div className="info-box">
          <p><strong>Preparation Time:</strong> {recipe.prepTime}</p>
          <p><strong>Cooking Time:</strong> {recipe.cookTime}</p>
          <p><strong>Servings:</strong> {recipe.servings}</p>
          <p><strong>Difficulty Level:</strong> {recipe.difficulty}</p>
          <p><strong>Category/Tags:</strong> {Array.isArray(recipe.tags) ? recipe.tags.join(', ') : recipe.tags}</p>
        </div>
      </section>

      <section className="recipe-section">
        <h2>Ingredients</h2>
        <ul>
          {Array.isArray(recipe.ingredients) && recipe.ingredients.length > 0 ? (
            recipe.ingredients.map((item, idx) => (
              <li key={item._id || idx}>
                {item.name} {item.amount && `- ${item.amount}`}
              </li>
            ))
          ) : (
            <li>No ingredients listed.</li>
          )}
        </ul>
      </section>

<section className="recipe-section">
  <h2>Cooking Instructions</h2>
  <ol>
    {Array.isArray(recipe.instructions || recipe.steps) && (recipe.instructions || recipe.steps).length > 0 ? (
      (recipe.instructions || recipe.steps).map((step, idx) =>
        typeof step === 'string' ? (
          <li key={idx}>{step}</li>
        ) : (
          <li key={step._id || idx}>
            {step.name || step.instruction || JSON.stringify(step)}
            {step.amount && ` - ${step.amount}`}
          </li>
        )
      )
    ) : (
      <li>No instructions provided.</li>
    )}
  </ol>
</section>
    </div>
  );
}

export default RecipePage;