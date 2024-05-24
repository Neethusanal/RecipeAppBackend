const mongoose = require('mongoose');
const ingredientSchema = new Schema({
    name: { type: String, required: true },
    quantity: { type: String, required: true },
  });
  const IngredientsModel = mongoose.model("Ingredients", ingredientSchema);
  module.exports = IngredientsModel;