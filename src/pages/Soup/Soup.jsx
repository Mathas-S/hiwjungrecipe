import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import greencurryimg from '../../assets/greencurry.jpeg'
import tomYumImage from '../../assets/tomyum.jpg'; 
import chickenSoupImage from '../../assets/chicken soup.jpg'; 
import '../Recipepage/RecipePage.css'; 

const Soup = () => {
  return (
    <div className="recipe-list-container">
      <h2 className="recipe-list-title">Soup Recipes</h2>
      <div className="recipe-list">
      <Link to="/Greencurry">
        <RecipeCard 
          image={greencurryimg}
          title="Thai Green Curry"
          description="Taste Like Thai"
        />
        </Link>
        <Link to="/TomYum">
          <RecipeCard 
            image={tomYumImage}
            title="Tom Yum"
            description="A hot and sour Thai soup with shrimp and fragrant herbs."
          />
        </Link>
        <Link to="/ChickenSoup">
          <RecipeCard 
            image={chickenSoupImage}
            title="Chicken Soup"
            description="A comforting and nourishing chicken broth with vegetables."
          />
        </Link>
      </div>
    </div>
  );
};

export default Soup;
