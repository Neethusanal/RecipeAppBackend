const express = require('express')
const router = express.Router()
const recipecontroller=require('../controller/recipecontroller')
router.get('/getRecipe',recipecontroller.getRecipe)
router.post('/create',recipecontroller.addRecipe)
module.exports = router