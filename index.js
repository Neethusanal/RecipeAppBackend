const express=require('express')
const router=express.Router()
const mongoose=require('./configuration/Mongodbconnection')
const cors=require('cors')
const app=express()
const Routes = require('./Routes/recipeRoutes');
const PORT = process.env.PORT || 3000;
app.use('/', Routes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
