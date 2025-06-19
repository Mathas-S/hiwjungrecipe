import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import img1 from '../../assets/basilchicken.jpg';
import img2 from '../../assets/padpakbung.jpg';
import img3 from '../../assets/padthai.jpg'


const Stirfry = () => {
  return (
    <div className="recipe-list-container">
      <h2 className="recipe-list-title">Stir Fry Recipes</h2>
      <div className="recipe-list">
        <Link to="/Basilchicken">
          <RecipeCard 
            image={img1}
            title="Basil Chicken Stir-Fry with Fried Eg"
            description="A quick stir-fry with chicken and basil."
          />
        </Link>
        <Link to="/Padpakbung">
          <RecipeCard 
            image={img2}
            title="Stir-Fried Morning Glory with Chili and Garlic"
            description="A Thai classic with spicy garlic and crispy water spinach."
          />
        </Link>
        <Link to="/Padthai">
          <RecipeCard 
            image={img3}
            title="Pad Thai"
            description="A classic Thai stir-fried noodle dish with a tangy flavor."
          />
        </Link>
      </div>
    </div>
  );
};

export default Stirfry;
