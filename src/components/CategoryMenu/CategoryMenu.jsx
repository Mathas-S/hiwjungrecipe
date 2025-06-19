import React from 'react';
import './CategoryMenu.css';

import stirIcon from '../../assets/stir.svg';
import friedIcon from '../../assets/fried.svg';
import bakeIcon from '../../assets/bake.svg';
import boilIcon from '../../assets/boil.svg';
import grillIcon from '../../assets/grill.svg';
import otherIcon from '../../assets/other.svg';
import { Link } from 'react-router-dom';

const categories = [
  { name: "Stir Fry", icon: stirIcon, path: "/stirfry" },
  { name: "Fry", icon: friedIcon, path: "/fry" },
  { name: "Bake", icon: bakeIcon, path: "/bake" },
  { name: "Soup", icon: boilIcon, path: "/soup" },
  { name: "Grill", icon: grillIcon, path: "/grill" },
  { name: "Other", icon: otherIcon, path: "/other" },
];
const CategoryMenu = () => {
  return (
    <div className='category-menu' id='category-menu'>
      {categories.map((category, index) => (
        <Link key={index} to={category.path} className="category-item"> 
          <img src={category.icon} alt={category.name} className="category-icon" />
          <span>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default CategoryMenu;
