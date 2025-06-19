import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('recipeContributer'); 
  const [cookingLevel, setCookingLevel] = useState('beginner');
  const [recipeInterest, setRecipeInterest] = useState('all');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Signing up with', name, email, password, userType, cookingLevel, recipeInterest);

    const userData = {
      name,
      email,
      password,
      userType,
      cookingLevel,
      recipeInterest,
    };

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      const result = await response.json();

      if (response.ok) {
        alert('Signup success: ' + result.message);
        navigate('/');
      } else {
        alert('Signup failed: ' + result.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Something went wrong. Try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            placeholder="Enter your full name"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            placeholder="Enter your email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            placeholder="Enter your password"
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input 
            type="password" 
            id="confirmPassword" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
            placeholder="Confirm your password"
          />
        </div>


        <div className="input-group">
          <label htmlFor="userType">User Type</label>
          <select 
            id="userType" 
            value={userType} 
            onChange={(e) => setUserType(e.target.value)} 
            required
          >
            <option value="recipeContributer">Recipe Contributor</option>
            <option value="recipeFinder">Recipe Finder</option>
            <option value="recipeReviewer">Recipe Reviewer</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="cookingLevel">Cooking Level</label>
          <select 
            id="cookingLevel" 
            value={cookingLevel} 
            onChange={(e) => setCookingLevel(e.target.value)} 
            required
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="recipeInterest">Recipe Interest</label>
          <select 
            id="recipeInterest" 
            value={recipeInterest} 
            onChange={(e) => setRecipeInterest(e.target.value)} 
            required
          >
            <option value="all">All</option>
            <option value="mainCourse">Main Course</option>
            <option value="dessert">Dessert</option>
            <option value="snacks">Snacks</option>
            <option value="vegetarian">Vegetarian</option>
          </select>
        </div>

        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/signin">Sign In</a></p>
    </div>
  );
};

export default SignUp;
