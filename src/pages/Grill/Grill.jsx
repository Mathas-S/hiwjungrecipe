import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import img1 from '../../assets/grilledchicken.jpg';
import img2 from '../../assets/grilledshrimp.jpg';
import img3 from '../../assets/grilledvegetables.jpg';


const Grill = () => {
  return (
    <div className="recipe-list-container">
      <h2 className="recipe-list-title">Grilled Recipes</h2>
      <div className="recipe-list">
        <Link to="/GrilledChicken">
          <RecipeCard 
            image={img1}
            title="Grilled Chicken"
            description="Tender and juicy grilled chicken with herbs."
          />
        </Link>
        <Link to="/GrilledShrimp">
          <RecipeCard 
            image={img2}
            title="Grilled Shrimp"
            description="Fresh shrimp grilled with garlic butter."
          />
        </Link>
        <Link to="/GrilledVegetables">
          <RecipeCard 
            image={img3}
            title="Grilled Vegetables"
            description="Smoky vegetables with olive oil and seasoning."
          />
        </Link>
      </div>
    </div>
  );
};

export default Grill;
