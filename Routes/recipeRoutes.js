const express = require('express')
const router = express.Router()
router.get('/getRecipe',recipecontroller.getRecipe)
router.post('/create',recipecontroller.addRecipe)
