import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import img1 from '../../assets/kaijiao.jpg';
import img2 from '../../assets/khaotom.jpg';
import img3 from '../../assets/mookata.jpg';


const Other = () => {
  return (
    <div className="recipe-list-container">
      <h2 className="recipe-list-title">Other Recipes</h2>
      <div className="recipe-list">
        <Link to="/Kaijiao">
          <RecipeCard 
            image={img1}
            title="Thai Omelette (Kai Jiao)"
            description="Crispy Thai-style omelette served with rice."
          />
        </Link>
        <Link to="/Khaotom">
          <RecipeCard 
            image={img2}
            title="Thai Rice Soup (Khao Tom)"
            description="Comforting rice soup with meat or seafood."
          />
        </Link>
        <Link to="/Mookata">
          <RecipeCard 
            image={img3}
            title="Thai BBQ (Moo Kata)"
            description="Popular Thai-style BBQ hotpot experience."
          />
        </Link>
      </div>
    </div>
  );
};

export default Other;
