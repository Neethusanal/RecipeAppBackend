const mongoose=require('mongoose');

const recipeSchema = new mongoose. Schema({
    title: { type: String, required: true },
    description: { type: String },
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredients' }],
    instructions: { type: String, required: true },
    prepTime: { type: Number }, // in minutes
    cookTime: { type: Number }, // in minutes
    totalTime: { type: Number }, // in minutes
    servings: { type: Number },
    difficultyLevel: { type: String, enum: ['easy', 'medium', 'hard'] },
    category: { type: String },
    cuisine: { type: String },
    imageUrl: { type: String },
    // tags: [String],
    // nutritionalInfo: nutritionalInfoSchema,
    // reviews: [reviewSchema],
    // viewCount: { type: Number, default: 0 },
    // favoriteCount: { type: Number, default: 0 },
  });
  
  const RecipeModel = mongoose.model('Recipe', recipeSchema);
  
  module.exports = RecipeModel;