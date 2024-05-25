const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
// Connection URI
const uri = process.env.mongodbURL

// Create a new MongoClient
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 45000,
    connectTimeoutMS: 30000
  });
  
  mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to DB');
  });
  
  mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error:', err);
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });