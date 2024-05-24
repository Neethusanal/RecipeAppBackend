const mongoose=require('mongoose');
const IngredientsModel = require('./IngredientModel');
const recipeSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    ingredients: [IngredientsModel],
    instructions: { type: String, required: true },
    prepTime: { type: Number }, // in minutes
    cookTime: { type: Number }, // in minutes
    totalTime: { type: Number }, // in minutes
    servings: { type: Number },
    difficultyLevel: { type: String, enum: ['easy', 'medium', 'hard'] },
    category: { type: String },
    cuisine: { type: String },
    // author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    dateCreated: { type: Date, default: Date.now },
    dateModified: { type: Date, default: Date.now },
    imageUrl: { type: String },
    // tags: [String],
    // nutritionalInfo: nutritionalInfoSchema,
    // reviews: [reviewSchema],
    // viewCount: { type: Number, default: 0 },
    // favoriteCount: { type: Number, default: 0 },
  });
  
  const RecipeModel = mongoose.model('Recipe', recipeSchema);
  
  module.exports = RecipeModel;