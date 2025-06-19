import React, { useEffect, useState } from 'react';
import './MyRecipe.css';
import MyRecipeCard from '../../components/MyRecipeCard/MyRecipeCard';

const MyRecipe = () => {
  
  const [recipes, setRecipes] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const userID = user.id;

  useEffect(() => {
    const fetchMyRecipes = async () => {
      try {
        const response = await fetch(`http://localhost:5000/myRecipes/${userID}`);
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching user recipes:', error);
      } 
    };

    if (user) {
      fetchMyRecipes();
    } else {
    }
  }, [user, userID]); 

  const handleDeleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe._id !== id));
  };

  return (
    <div className="myrecipe-container">
      <h1 className="myrecipe-title">My Recipe</h1>

      {recipes.length === 0 ? (
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>No Recipe Found</p>
      ) : (
        <div className="recipe-card-list">
          {recipes.map((recipe) => (
            <MyRecipeCard
              key={recipe._id}
              _id={recipe._id}
              recipeName={recipe.recipeName}
              description={recipe.description}
              prepTime={recipe.prepTime}
              cookTime={recipe.cookTime}
              servings={recipe.servings}
              difficulty={recipe.difficulty}
              ingredients={recipe.ingredients}  
              steps={recipe.steps}               
              tags={recipe.tags}                 
              onDelete={handleDeleteRecipe}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRecipe;
