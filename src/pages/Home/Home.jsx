import React, { useEffect, useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import CategoryMenu from '../../components/CategoryMenu/CategoryMenu'
import FeatureRecipe from '../../components/FeatureRecipe/FeatureRecipe'
import AllRecipeCard from '../../components/AllRecipeCard/AllRecipeCard'

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://localhost:5000/myRecipes'); // เปลี่ยน endpoint ตาม backend ของคุณ
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      <Header/>
      <CategoryMenu/>
      <div className="recipe-card-list">
        {recipes.map((recipe) => (
          <AllRecipeCard
            key={recipe._id}
            recipeId={recipe._id}
            _id={recipe._id}
            recipeName={recipe.recipeName}
            description={recipe.description}
            prepTime={recipe.prepTime}
            cookTime={recipe.cookTime}
            servings={recipe.servings}
            difficulty={recipe.difficulty}
          />
        ))}
      </div>
      <FeatureRecipe/>
    </div>
  )
}

export default Home
