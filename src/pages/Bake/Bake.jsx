import React from 'react'
import { Link } from 'react-router-dom';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import img1 from '../../assets/chocolatecake.jpg'; 
import img2 from '../../assets/bakedchicken.jpg'; 
import img3 from '../../assets/garlic bread.jpg'; 
import '../Recipepage/RecipePage.css'; 

function Bake() {
  return (
    <div className="recipe-list-container">
      <h2 className="recipe-list-title">Baked Recipes</h2>
      <div className="recipe-list">
        <Link to="/ChocolateCake">
          <RecipeCard 
            image={img1}
            title="Chocolate Cake"
            description="A rich and decadent chocolate cake that's perfect for dessert."
          />
        </Link>
        <Link to="/BakedChicken">
          <RecipeCard 
            image={img2}
            title="Baked Chicken"
            description="Juicy and flavorful baked chicken with a crispy skin."
          />
        </Link>
        <Link to="/GarlicBread">
          <RecipeCard 
            image={img3}
            title="Garlic Bread"
            description="Crispy and buttery garlic bread, a perfect side dish."
          />
        </Link>
      </div>
    </div>
  );
};
export default Bake
