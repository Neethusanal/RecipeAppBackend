const express = require('express');
const RecipeModel = require('../Model/RecipieModel');

module.exports.addRecipe= async (req, res, next) => {
    
}
module.exports.getRecipe= async (req, res, next) => {
 console.log("came")
    try {
        
        
        // Query the database with pagination parameters
        const recipes = await RecipeModel.find()
        console.log("in")
       
console.log(recipes)
        // Send the paginated response back to the client
        res.json({ status: "success", result: recipes });
    } catch (error) {
        // Handle errors
        res.status(400).json({ status: "error", message: error.message });
    }
};
    