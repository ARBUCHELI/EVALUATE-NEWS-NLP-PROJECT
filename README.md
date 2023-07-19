# Evaluate News App Project
Udacity Front End Nanodegree program. Project 4


## Project Description
This web app is designed to check the sentiment of user-entered articles using an external MeaningCloud Sentiment Analysis API. The sentiment analysis provides insights of the text.

## Settings
To run this project locally, Node.js, and Express.js, should be installed on the machine. Additionally, ensure that the required packages listed in the "packages.json" file are installed.

Before running the app, create API credentials on MeaningCloud.com.  Then, create a .env file and insert the API key into the ".env" file as follows:

```
API_KEY=**************************
```
(don't use quotes for the API_KEY)

install the dependencies:

```bash
npm install
```
Commands:

The app will be opened in http://localhost:8081/ after running 

```bash
npm run build-prod
npm run start
```

## How to use the App
To utilize the app, simply enter a URL in the input field and click the Submit button. The app will display sentiment analysis results in the box below. If the URL is invalid, the user will receive an error message. The app is fully responsive and adapts to different screen sizes.

## Author
Andres R. Bucheli 

## Credits
The started code for developing this project was provided by Udacity, and Front-End Developer Nanodegree Program.