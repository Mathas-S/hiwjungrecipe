import React, { useState } from 'react';
import './MyRecipeCard.css';

const MyRecipeCard = ({
  _id,
  recipeName,
  description,
  cookTime,
  prepTime,
  servings,
  difficulty,
  ingredients = [],
  steps = [],
  tags = [],
  onDelete,
  onUpdate
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    recipeName,
    description,
    cookTime,
    prepTime,
    servings,
    difficulty,
    ingredients: ingredients.map(i => ({ ...i })),
    steps: [...steps],
    tags: [...tags],
  });

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleIngredientChange = (idx, field, value) => {
    const newIngredients = editData.ingredients.map((ing, i) =>
      i === idx ? { ...ing, [field]: value } : ing
    );
    setEditData({ ...editData, ingredients: newIngredients });
  };

  const handleStepChange = (idx, value) => {
    const newSteps = editData.steps.map((s, i) => (i === idx ? value : s));
    setEditData({ ...editData, steps: newSteps });
  };

  const handleTagChange = (idx, value) => {
    const newTags = editData.tags.map((t, i) => (i === idx ? value : t));
    setEditData({ ...editData, tags: newTags });
  };

  // เพิ่ม/ลบ ingredients
  const addIngredient = () => {
    setEditData({ ...editData, ingredients: [...editData.ingredients, { name: '', amount: '' }] });
  };
  const removeIngredient = (idx) => {
    const newIngredients = [...editData.ingredients];
    newIngredients.splice(idx, 1);
    setEditData({ ...editData, ingredients: newIngredients });
  };

  // เพิ่ม/ลบ steps
  const addStep = () => {
    setEditData({ ...editData, steps: [...editData.steps, ''] });
  };
  const removeStep = (idx) => {
    const newSteps = [...editData.steps];
    newSteps.splice(idx, 1);
    setEditData({ ...editData, steps: newSteps });
  };

  // เพิ่ม/ลบ tags
  const addTag = () => {
    setEditData({ ...editData, tags: [...editData.tags, ''] });
  };
  const removeTag = (idx) => {
    const newTags = [...editData.tags];
    newTags.splice(idx, 1);
    setEditData({ ...editData, tags: newTags });
  };

  const handleEdit = () => setIsEditing(true);

  const handleCancel = () => {
    setIsEditing(false);
    setEditData({
      recipeName,
      description,
      cookTime,
      prepTime,
      servings,
      difficulty,
      ingredients: ingredients.map(i => ({ ...i })),
      steps: [...steps],
      tags: [...tags],
    });
  };

  const handleSave = async () => {
    try {
      const res = await fetch(`http://localhost:5000/recipe/${_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editData),
      });
      if (res.ok) {
        alert('Recipe updated successfully');
        const updatedRecipe = await res.json();
        setIsEditing(false);
        if (typeof onUpdate === 'function') onUpdate(_id, updatedRecipe.recipe);
      } else {
        alert('Failed to update recipe');
      }
    } catch (err) {
      alert('Error updating recipe: ' + err.message);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this recipe?')) return;
    try {
      const res = await fetch(`http://localhost:5000/recipes/${_id}`, { method: 'DELETE' });
      if (res.ok) {
        if (onDelete) onDelete(_id);
      } else {
        alert('Failed to delete recipe');
      }
    } catch {
      alert('Error deleting recipe');
    }
  };

  return (
    <div className="myrecipe-card">
      <div className="myrecipe-card-content">
        {isEditing ? (
          <>
            <input
              name="recipeName"
              value={editData.recipeName}
              onChange={handleChange}
              placeholder="Recipe Name"
              style={{ marginTop: '10px', width: '100%', height: '40px' }}
            />
            <textarea
              name="description"
              value={editData.description}
              onChange={handleChange}
              placeholder="Description"
              style={{ marginTop: '10px', width: '100%', height: '40px' }}
            />
            <div className="myrecipe-card-details">
              <span>
                Prep Time:{' '}
                <input
                  name="prepTime"
                  type="number"
                  value={editData.prepTime}
                  onChange={handleChange}
                  style={{ width: '60%' }}
                />{' '}
                mins
              </span>
              <span>
                Cook Time:{' '}
                <input
                  name="cookTime"
                  type="number"
                  value={editData.cookTime}
                  onChange={handleChange}
                  style={{ width: '60%' }}
                />{' '}
                mins
              </span>
              <span>
                Servings:{' '}
                <input
                  name="servings"
                  type="number"
                  value={editData.servings}
                  onChange={handleChange}
                  style={{ width: '60%' }}
                />
              </span>
              <span>
                Difficulty:{' '}
                <select
                  name="difficulty"
                  value={editData.difficulty}
                  onChange={handleChange}
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </span>
            </div>
            <div className="myrecipe-section">
              <strong>Ingredients:</strong>
              {editData.ingredients.map((ing, idx) => (
                <div key={ing._id || idx} className="myrecipe-edit-row">
                  <input
                    className="myrecipe-edit-input"
                    value={ing.name}
                    onChange={e => handleIngredientChange(idx, 'name', e.target.value)}
                    placeholder="Name"
                  />
                  <input
                    className="myrecipe-edit-input"
                    value={ing.amount}
                    onChange={e => handleIngredientChange(idx, 'amount', e.target.value)}
                    placeholder="Amount"
                  />
                  <button type="button" className="myrecipe-edit-remove-btn" onClick={() => removeIngredient(idx)}>ลบ</button>
                </div>
              ))}
              <button type="button" className="myrecipe-edit-add-btn" onClick={addIngredient}>+ เพิ่มวัตถุดิบ</button>
            </div>
            <div className="myrecipe-section">
              <strong>Steps:</strong>
              {editData.steps.map((step, idx) => (
                <div key={idx} className="myrecipe-edit-row">
                  <input
                    className="myrecipe-edit-input-step"
                    value={step}
                    onChange={e => handleStepChange(idx, e.target.value)}
                    placeholder={`Step ${idx + 1}`}
                  />
                  <button type="button" className="myrecipe-edit-remove-btn" onClick={() => removeStep(idx)}>ลบ</button>
                </div>
              ))}
              <button type="button" className="myrecipe-edit-add-btn" onClick={addStep}>+ เพิ่มขั้นตอน</button>
            </div>
            <div className="myrecipe-section">
              <strong>Tags:</strong>
              {editData.tags.map((tag, idx) => (
                <div key={idx} className="myrecipe-edit-row">
                  <input
                    className="myrecipe-edit-input-tag"
                    value={tag}
                    onChange={e => handleTagChange(idx, e.target.value)}
                    placeholder={`Tag ${idx + 1}`}
                  />
                  <button type="button" className="myrecipe-edit-remove-btn" onClick={() => removeTag(idx)}>ลบ</button>
                </div>
              ))}
              <button type="button" className="myrecipe-edit-add-btn" onClick={addTag}>+ เพิ่มแท็ก</button>
            </div>
            <div className="myrecipe-card-actions">
              <button className="btn-edit" onClick={handleSave}>Save</button>
              <button className="btn-delete" onClick={handleCancel}>Cancel</button>
            </div>
          </>
        ) : (
          <>
            <h3>{recipeName}</h3>
            <p>{description}</p>
            <div className="myrecipe-card-details">
              <span>Prep Time: {prepTime} mins</span>
              <span>Cook Time: {cookTime} mins</span>
              <span>Servings: {servings}</span>
              <span>Difficulty: {difficulty}</span>
            </div>
            <div className="myrecipe-section">
              <strong>Ingredients:</strong>
              <ul className="myrecipe-list">
                {ingredients.map((ing, idx) => (
                  <li key={ing._id || idx}>
                    {ing.name} - {ing.amount}
                  </li>
                ))}
              </ul>
            </div>
            <div className="myrecipe-section">
              <strong>Steps:</strong>
              <ol className="myrecipe-list-ol">
                {steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
            <div className="myrecipe-section">
              <strong>Tags:</strong>
              <ul className="myrecipe-list">
                {tags.map((tag, idx) => (
                  <li key={idx}>{tag}</li>
                ))}
              </ul>
            </div>
            <div className="myrecipe-card-actions">
              <button className="btn-edit" onClick={handleEdit}>Edit</button>
              <button className="btn-delete" onClick={handleDelete}>Delete</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyRecipeCard;
