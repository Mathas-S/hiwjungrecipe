import React from 'react'
import { Link } from 'react-router-dom';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import img1 from '../../assets/fishpork.jpg';
import img2 from '../../assets/friedchiken.jpg';
import img3 from '../../assets/tempura.jpg'


const Fry = () => {
  return (
    <div className="recipe-list-container">
      <h2 className="recipe-list-title">Stir Fry Recipes</h2>
      <div className="recipe-list">
        <Link to="/fishsaucepork">
          <RecipeCard 
            image={img1}
            title="Crispy Fish Sauce Pork Belly"
            description="Crispy and Tasty"
          />
        </Link>
        <Link to="/FriedChicken">
          <RecipeCard 
            image={img2}
            title="Fried Chicken"
            description="Crispy, golden fried chicken with seasoned batter."
          />
        </Link>
        <Link to="/Tempura">
          <RecipeCard 
            image={img3}
            title="Tempura"
            description="Lightly battered and crispy fried shrimp and vegetables."
          />
        </Link>
      </div>
    </div>
  );
};


export default Fry
