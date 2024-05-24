const express = require('express');
const RecipeModel=require('../Model/RecipieModel')
module.exports.addRecipe= async (req, res, next) => {
    
}
module.exports.getRecipe= async (req, res, next) => {
 console.log("came")
    try {
        const page = req.query.page || 1; // Get the page number from the request query parameters
        const limit = 1; // Number of records per page
        const skip = (page - 1) * limit; // Calculate the number of records to skip
        
        // Query the database with pagination parameters
        const recipes = await RecipeModel.find().skip(skip).limit(limit).maxTimeMS(30000).exec();
        console.log("in")
console.log(recipes)
        // Send the paginated response back to the client
        res.json({ status: "success", result: recipes });
    } catch (error) {
        // Handle errors
        res.status(400).json({ status: "error", message: error.message });
    }
};
    