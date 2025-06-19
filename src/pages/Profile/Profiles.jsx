import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profiles.css';


const Profile = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [cookingLevel, setCookingLevel] = useState('');
  const [recipeInterest, setRecipeInterest] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    setName(user.name || '');
    setEmail(user.email || '');
    setUserType(user.userType || 'recipeContributer');
    setCookingLevel(user.cookingLevel || 'beginner');
    setRecipeInterest(user.recipeInterest || 'all');
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedData = {
      name,
      email,
      userType,
      cookingLevel,
      recipeInterest,
    };

    try {
      const response = await fetch('http://localhost:5000/Profile/update-pro', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      });

      const result = await response.json();

      if (response.ok) {
        alert('Profile updated successfully!');
        localStorage.setItem('user', JSON.stringify(result));
        navigate('/');
      } else {
        alert('Update failed: ' + result.message);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Something went wrong. Try again.');
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    const currentPassword = document.getElementById('currentpassword').value;

    if (!currentPassword) {
      alert('Please enter your current password');
      return;
    }

    if (!password || password !== confirmPassword) {
      alert('New passwords do not match or are empty');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/Profile/update-password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          currentPassword,
          newPassword: password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Password updated successfully!');
        setPassword('');
        setConfirmPassword('');
        document.getElementById('currentpassword').value = '';
      } else {
        alert('Password update failed: ' + result.message);
      }
    } catch (error) {
      console.error('Error updating password:', error);
      alert('Something went wrong. Try again.');
    }
  };

  return (
    <div className="container" >
      {/* Left Side: Profile Info */}
      <form onSubmit={handleUpdate} style={{ flex: 1 }}>
        <h2>Edit Profile</h2>
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
            disabled
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

        <button type="submit">Update Profile</button>
      </form>

      {/* Right Side: Password Change */}
      <form onSubmit={handleUpdatePassword} >
        <h2>Change Password</h2>
        <div className="input-group">
          <label htmlFor="currentpassword">Current Password</label>
          <input type="password" id="currentpassword" placeholder="Enter your current password" />
        </div>
        <div className="input-group">
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your new password"
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm New Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your new password"
          />
        </div>
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default Profile;
