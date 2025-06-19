import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddRecipe.css';

function AddRecipe() {
  const navigate = useNavigate();

  const [recipeName, setRecipeName] = useState('');
  const [description, setDescription] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [servings, setServings] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState([{ name: '', amount: '' }]);
  const [steps, setSteps] = useState(['']);
  const [image, setImage] = useState(null);

  const handleIngredientChange = (index, event) => {
    const values = [...ingredients];
    values[index][event.target.name] = event.target.value;
    setIngredients(values);
  };

  const handleStepChange = (index, event) => {
    const values = [...steps];
    values[index] = event.target.value;
    setSteps(values);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      // ถ้าจะส่งไฟล์จริง ต้องใช้ FormData เพิ่มเติม
    }
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', amount: '' }]);
  };

  const addStep = () => {
    setSteps([...steps, '']);
  };

  const removeIngredient = (index) => {
    const values = [...ingredients];
    values.splice(index, 1);
    setIngredients(values);
  };

  const removeStep = (index) => {
    const values = [...steps];
    values.splice(index, 1);
    setSteps(values);
  };

  
  const handleSubmit = async () => {
    try {
      // ดึง user object ที่เก็บใน localStorage
      const user = JSON.parse(localStorage.getItem('user'));
      console.log(user)
      if (!user || !user.id) {
        alert('Please sign in to add a recipe.');
        return;
      }

      const recipeData = {
        recipeName,
        description,
        prepTime: Number(prepTime),
        cookTime: Number(cookTime),
        servings: Number(servings),
        difficulty,
        tags: category, // backend จะแปลงให้เป็น array
        ingredients,
        steps,
        createdBy: user.id,  // ส่ง userId จาก user object
      };

      const response = await fetch('http://localhost:5000/add-recipe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recipeData),
      });

      if (response.ok) {
        alert('Recipe saved successfully!');
        navigate('/');
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to save recipe, please try again.');
      }
    } catch (error) {
      console.error('Failed to save recipe:', error);
      alert('Failed to save recipe, please try again.');
    }
  };

  return (
    <div className="add-recipe-container">
      <h1>Add New Recipe</h1>

      {/* ฟอร์มเหมือนเดิม... */}

      <div className="form-group">
        <label>Recipe Name</label>
        <input
          type="text"
          placeholder="e.g., Stir-Fried Basil with Fried Egg"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Short Description</label>
        <textarea
          rows="3"
          placeholder="A short description about the recipe..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      {/* <div className="form-group">
        <label>Upload Image</label>
        <div className="file-upload">
          <input type="file" id="file-input" onChange={handleImageChange} />
          <label htmlFor="file-input" className="file-label">Choose File</label>
        </div>
        {image && (
          <div className="image-preview">
            <img src={image} alt="Recipe Preview" />
          </div>
        )}
      </div> */}

      <div className="form-group">
        <label>Preparation Time (minutes)</label>
        <input
          type="number"
          value={prepTime}
          onChange={(e) => setPrepTime(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Cooking Time (minutes)</label>
        <input
          type="number"
          value={cookTime}
          onChange={(e) => setCookTime(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Servings</label>
        <input
          type="number"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Ingredients</label>
        {ingredients.map((ingredient, index) => (
          <div key={index} className="ingredient-row">
            <input
              type="text"
              name="name"
              placeholder="Ingredient Name"
              value={ingredient.name}
              onChange={(event) => handleIngredientChange(index, event)}
            />
            <input
              type="text"
              name="amount"
              placeholder="Amount"
              value={ingredient.amount}
              onChange={(event) => handleIngredientChange(index, event)}
            />
            <button type="button" onClick={() => removeIngredient(index)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={addIngredient}>Add Ingredient</button>
      </div>

      <div className="form-group">
        <label>Cooking Steps</label>
        {steps.map((step, index) => (
          <div key={index} className="step-row">
            <textarea
              rows="2"
              placeholder={`Step ${index + 1}`}
              value={step}
              onChange={(event) => handleStepChange(index, event)}
            ></textarea>
            <button type="button" onClick={() => removeStep(index)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={addStep}>Add Step</button>
      </div>

      <div className="form-group">
        <label>Difficulty Level</label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>

      <div className="form-group">
        <label>Category / Tags</label>
        <input
          type="text"
          placeholder="e.g., Thai Food, Dessert, Vegetarian"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <button className="button-save" type="button" onClick={handleSubmit}>
        Save Recipe
      </button>
    </div>
  );
}

export default AddRecipe;
