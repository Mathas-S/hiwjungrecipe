import mongoose from 'mongoose';

// User Schema
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, required: true },
  cookingLevel: { type: String, required: true },
  recipeInterest: { type: String, required: true },
}, { timestamps: true });

// Ingredient sub-schema
const ingredientSchema = mongoose.Schema({
  name: String,
  amount: String,
});

// Recipe Schema
const recipeSchema = mongoose.Schema({
  recipeName: { type: String, required: true },
  description: String,
  prepTime: Number,
  cookTime: Number,
  servings: Number,
  ingredients: [ingredientSchema],
  steps: [String],
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'] },
  tags: [String],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  // link to User
}, { timestamps: true });

// Export models
export const User = mongoose.model('User', userSchema);
export const Recipe = mongoose.model('Recipe', recipeSchema);
