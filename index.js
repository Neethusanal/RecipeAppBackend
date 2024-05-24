const express=require('express')
const router=express.Router()
const mongoose=require('./configuration/Mongodbconnection')
const cors=require('cors')
const app=express()
//const recipeRoutes = require('./Routes/recipeRoute');
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});