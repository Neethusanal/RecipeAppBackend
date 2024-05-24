const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();
// Connection URI
const uri = process.env.mongodbURL

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB cluster
async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
    } catch (err) {
        console.error('Error connecting to MongoDB Atlas', err);
    }
}

connectToMongoDB();