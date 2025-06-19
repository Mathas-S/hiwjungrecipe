// routes/userRoutes.js
import express from 'express';
import { User, Recipe } from '../models/Model.js';
import mongoose from 'mongoose';

const router = express.Router();

// POST: Sign up
router.post('/signup', async (req, res) => {
  const { name, email, password, userType, cookingLevel, recipeInterest } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const newUser = new User({ name, email, password, userType, cookingLevel, recipeInterest });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err.message });
  }
});

// POST: Sign in
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({
      message: 'Sign in successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        userType: user.userType,
        cookingLevel: user.cookingLevel,
        recipeInterest: user.recipeInterest,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Error signing in', error: err.message });
  }
});

// PUT: Update user profile (ข้อมูลทั่วไป ไม่รวม password)
router.put('/Profile/update-pro', async (req, res) => {
  const { email, name, userType, cookingLevel, recipeInterest } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.name = name || user.name;
    user.userType = userType || user.userType;
    user.cookingLevel = cookingLevel || user.cookingLevel;
    user.recipeInterest = recipeInterest || user.recipeInterest;

    const updatedUser = await user.save();

    res.status(200).json({
      id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      userType: updatedUser.userType,
      cookingLevel: updatedUser.cookingLevel,
      recipeInterest: updatedUser.recipeInterest,
    });
  } catch (err) {
    res.status(500).json({ message: 'Error updating profile', error: err.message });
  }
});

// PUT: Update password แยก API สำหรับเปลี่ยนรหัสผ่าน
router.put('/Profile/update-password', async (req, res) => {
  const { email, currentPassword, newPassword } = req.body;

  if (!email || !currentPassword || !newPassword) {
    return res.status(400).json({ message: 'Email, current password and new password are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (user.password !== currentPassword) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }

    user.password = newPassword;
    await user.save();

    res.status(200).json({ message: 'Password updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating password', error: err.message });
  }
});

// POST: Add Recipe
router.post('/add-recipe', async (req, res) => {
  const {
    recipeName,
    description,
    prepTime,
    cookTime,
    servings,
    ingredients,
    steps,
    difficulty,
    tags,
    createdBy,
  } = req.body;

  if (!createdBy) {
    return res.status(400).json({ message: 'Missing creator user ID' });
  }

  try {
    const newRecipe = new Recipe({
      recipeName,
      description,
      prepTime,
      cookTime,
      servings,
      ingredients,
      steps,
      difficulty,
      tags: Array.isArray(tags) ? tags : tags.split(',').map(tag => tag.trim()),
      createdBy,
    });

    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (err) {
    res.status(500).json({ message: 'Error saving recipe', error: err.message });
  }
});

// GET: All users (optional)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users', error: err.message });
  }
});

// GET: Recipes created by user
router.get('/myRecipes/:userID', async (req, res) => {
  const { userID } = req.params;

  try {
    const recipes = await Recipe.find({ createdBy: new mongoose.Types.ObjectId(userID) });
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user recipes', error: err.message });
  }
});

// PUT: อัปเดตข้อมูล recipe ตาม id
router.put('/recipe/:id', async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json({ message: 'Recipe updated successfully', recipe: updatedRecipe });
  } catch (err) {
    res.status(500).json({ message: 'Error updating recipe', error: err.message });
  }
});

// DELETE: ลบ recipe ตาม id
router.delete('/recipes/:id', async (req, res) => {
  try {
    const deleted = await Recipe.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json({ message: 'Recipe deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET: All recipes
router.get('/myRecipes', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching recipes', error: err.message });
  }
});

// GET: Recipe by ID
router.get('/recipes/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching recipe', error: err.message });
  }
});


export default router;
