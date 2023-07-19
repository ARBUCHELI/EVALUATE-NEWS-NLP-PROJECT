const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.API_KEY;
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mockAPIResponse = require('./mockAPI.js');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static('dist'));
app.use(bodyParser.text());

console.log(__dirname);

app.get('/', function (req, res) {
  res.sendFile(path.resolve('dist/index.html'));
});

app.listen(8081, function () {
    console.log('Evaluate news nlp app listening on port 8081!')
})

app.get('/test', function (req, res) {
  res.send(mockAPIResponse);
});

app.post('/article', async (req, res) => {
  try {
    const response = await axios.post(`${baseURL}?key=${API_KEY}&lang=auto&url=${req.body}`, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });

    const data = response.data;
    res.send(data);
  } catch (error) {
    console.log("error", error);
  }
});
