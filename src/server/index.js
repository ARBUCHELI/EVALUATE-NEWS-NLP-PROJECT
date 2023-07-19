// Load environment variables from the .env file
const dotenv = require('dotenv');
dotenv.config();

// Get the API key from environment variables
const API_KEY = process.env.API_KEY;

// Set the base URL for the MeaningCloud Sentiment Analysis API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';

// Import required modules
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mockAPIResponse = require('./mockAPI.js');
const axios = require('axios');
const cors = require('cors');

// Create an instance of Express
const app = express();

// Enable CORS and serve static files from the 'dist' directory
app.use(cors());
app.use(express.static('dist'));
app.use(bodyParser.text());

// Log the current working directory
console.log(__dirname);

// Define the route for the homepage
app.get('/', function (req, res) {
  // Send the 'index.html' file located in the 'dist' directory
  res.sendFile(path.resolve('dist/index.html'));
});

// Start the server and listen on port 8081
app.listen(8081, function () {
  console.log('Evaluate news nlp app listening on port 8081!')
});

// Define the route for the test endpoint, which returns a mock API response
app.get('/test', function (req, res) {
  res.send(mockAPIResponse);
});

// Define the route for the '/article' endpoint to handle POST requests
app.post('/article', async (req, res) => {
  try {
    // Make a POST request to the MeaningCloud Sentiment Analysis API with the provided URL
    const response = await axios.post(`${baseURL}?key=${API_KEY}&lang=auto&url=${req.body}`, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });

    // Get the response data from the API and send it back as the response
    const data = response.data;
    res.send(data);
  } catch (error) {
    console.log("error", error);
  }
});

