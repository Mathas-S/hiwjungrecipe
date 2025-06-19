import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Let's Share Your Cooking Tips!</h2>
        <p>A recipe is not just a set of instructions, but a gift passed down from one cook to another, a way of sharing the love and traditions that make each dish special. When you share a recipe, you’re not just giving a list of ingredients—you’re giving a piece of your heart.</p>
        <Link to="/addrecipe"><button>Add Recipe</button></Link>
      </div>
    </div>
  )
}

export default Header
