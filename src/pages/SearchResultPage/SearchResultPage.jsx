import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AllRecipeCard from "../../components/AllRecipeCard/AllRecipeCard";

const SearchResultPage = () => {
  const [recipes, setRecipes] = useState([]);
  const query = new URLSearchParams(useLocation().search).get("q");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://localhost:5000/myRecipes");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const allRecipes = await response.json();

        // Fuzzy match
        const lowerQ = query.toLowerCase();
        const matches = allRecipes.filter((r) => {
          const nameMatch = r.recipeName?.toLowerCase().includes(lowerQ);

          const ingredientMatch = r.ingredients?.some((i) =>
            typeof i === "string"
              ? i.toLowerCase().includes(lowerQ)
              : i.name?.toLowerCase().includes(lowerQ)
          );

          const tagMatch = r.tags?.some(
            (tag) =>
              typeof tag === "string" && tag.toLowerCase().includes(lowerQ)
          );

          return nameMatch || ingredientMatch || tagMatch;
        });

        setRecipes(matches);
      } catch (err) {
        console.error("Error fetching recipes:", err);
      }
    };

    fetchRecipes();
  }, [query]);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Search Result: "{query}"</h2>
      <div className="recipe-list">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <AllRecipeCard key={recipe._id} {...recipe} recipeId={recipe._id} />
          ))
        ) : (
          <p>No Recipe Match</p>
        )}
      </div>
    </div>
  );
};

export default SearchResultPage;
